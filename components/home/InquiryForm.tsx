"use client";

import { useRef, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/Button";
import { RecaptchaWidget } from "@/components/home/RecaptchaWidget";
import { cn } from "@/lib/utils";
import {
  initialInquiryFormValues,
  inquiryEventTypes,
  inquiryServiceOptions,
  recaptchaSiteKey,
  isValidEmail,
  type InquiryFormValues,
  type InquiryServiceOption,
} from "@/lib/inquiry-form";

type FieldErrors = Partial<
  Record<keyof InquiryFormValues | "services" | "recaptchaToken", string>
>;

type SubmitState = { kind: "idle" } | { kind: "submitting" } | { kind: "received" };

const SUBMIT_FAILURE_MESSAGE =
  "目前無法送出詢價資料，請稍後再試或直接與我們聯繫。";

const fieldClass =
  "w-full min-w-0 border border-border bg-surface-primary px-0 py-3 text-[15px] text-foreground placeholder:text-muted-light focus:border-foreground focus:outline-none";

const selectClass = cn(fieldClass, "cursor-pointer appearance-none bg-surface-primary");

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[13px] tracking-[0.02em] text-foreground">
      {children}
      {required && (
        <span className="ml-0.5 text-muted-light" aria-hidden="true">
          ＊
        </span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-[13px] text-foreground/80" role="alert">
      {message}
    </p>
  );
}

function validate(values: InquiryFormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = "請填寫聯絡人姓名";
  if (!values.phone.trim()) errors.phone = "請填寫聯絡電話";
  if (!values.email.trim()) {
    errors.email = "請填寫 Email";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Email 格式不正確";
  }
  if (!values.eventDate) errors.eventDate = "請選擇活動日期";
  if (!values.location.trim()) errors.location = "請填寫活動地點";
  if (!values.eventType) errors.eventType = "請選擇活動類型";
  if (values.services.length === 0) errors.services = "請至少選擇一項服務";
  if (!values.notes.trim()) errors.notes = "請描述活動需求";

  return errors;
}

export function InquiryForm() {
  const [values, setValues] = useState<InquiryFormValues>(initialInquiryFormValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });
  const [formError, setFormError] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const setField = <K extends keyof InquiryFormValues>(key: K, value: InquiryFormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const toggleService = (option: InquiryServiceOption) => {
    setValues((prev) => {
      const has = prev.services.includes(option);
      const services = has
        ? prev.services.filter((s) => s !== option)
        : [...prev.services, option];
      return { ...prev, services };
    });
    setErrors((prev) => {
      if (!prev.services) return prev;
      const next = { ...prev };
      delete next.services;
      return next;
    });
  };

  const resetRecaptcha = () => {
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const nextErrors = validate(values);
    if (!recaptchaSiteKey) {
      setFormError(SUBMIT_FAILURE_MESSAGE);
      return;
    }
    if (!recaptchaToken) {
      nextErrors.recaptchaToken = "請完成「我不是機器人」驗證";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState({ kind: "idle" });
      return;
    }

    setErrors({});
    setSubmitState({ kind: "submitting" });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          recaptchaToken,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        message?: string;
        errors?: Array<{ field?: string; message: string }>;
      } | null;

      if (!response.ok) {
        if (payload?.errors?.length) {
          const mapped: FieldErrors = {};
          for (const item of payload.errors) {
            if (item.field && item.field in initialInquiryFormValues) {
              mapped[item.field as keyof InquiryFormValues] = item.message;
            } else if (item.field === "services") {
              mapped.services = item.message;
            } else if (item.field === "recaptchaToken") {
              mapped.recaptchaToken = item.message;
            }
          }
          if (Object.keys(mapped).length > 0) setErrors(mapped);
        }

        setFormError(payload?.message ?? SUBMIT_FAILURE_MESSAGE);
        resetRecaptcha();
        setSubmitState({ kind: "idle" });
        return;
      }

      setSubmitState({ kind: "received" });
      setValues(initialInquiryFormValues);
      resetRecaptcha();
    } catch (error) {
      console.error("[inquiry] Client submit failed:", error);
      setFormError(SUBMIT_FAILURE_MESSAGE);
      resetRecaptcha();
      setSubmitState({ kind: "idle" });
    }
  }

  if (submitState.kind === "received") {
    return (
      <div className="border-t border-border-subtle pt-10 lg:border-t-0 lg:pt-0">
        <p className="text-xl font-semibold tracking-[-0.01em] text-foreground">
          已收到您的詢價需求
        </p>
        <p className="mt-4 text-[15px] leading-[1.85] text-muted">
          感謝您提供活動資訊，
          <br className="sm:hidden" />
          我們會確認需求後與您聯繫。
        </p>
      </div>
    );
  }

  const isSubmitting = submitState.kind === "submitting";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="min-w-0 border-t border-border-subtle pt-10 lg:border-t-0 lg:pt-0"
    >
      <div className="space-y-8">
        <div>
          <FieldLabel htmlFor="inquiry-name" required>
            聯絡人姓名
          </FieldLabel>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="請輸入姓名"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
            className={fieldClass}
          />
          <FieldError id="inquiry-name-error" message={errors.name} />
        </div>

        <div>
          <FieldLabel htmlFor="inquiry-phone" required>
            聯絡電話
          </FieldLabel>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="請輸入手機或電話"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "inquiry-phone-error" : undefined}
            className={fieldClass}
          />
          <FieldError id="inquiry-phone-error" message={errors.phone} />
        </div>

        <div>
          <FieldLabel htmlFor="inquiry-email" required>
            Email
          </FieldLabel>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="請輸入 Email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "inquiry-email-error" : undefined}
            className={fieldClass}
          />
          <FieldError id="inquiry-email-error" message={errors.email} />
        </div>

        <div>
          <FieldLabel htmlFor="inquiry-date" required>
            活動日期
          </FieldLabel>
          <input
            id="inquiry-date"
            name="eventDate"
            type="date"
            value={values.eventDate}
            onChange={(e) => setField("eventDate", e.target.value)}
            aria-invalid={Boolean(errors.eventDate)}
            aria-describedby={errors.eventDate ? "inquiry-date-error" : undefined}
            className={cn(fieldClass, "[color-scheme:light]")}
          />
          <FieldError id="inquiry-date-error" message={errors.eventDate} />
        </div>

        <div>
          <FieldLabel htmlFor="inquiry-location" required>
            活動地點
          </FieldLabel>
          <input
            id="inquiry-location"
            name="location"
            type="text"
            placeholder="例如：桃園市中壢區○○會場"
            value={values.location}
            onChange={(e) => setField("location", e.target.value)}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "inquiry-location-error" : undefined}
            className={fieldClass}
          />
          <FieldError id="inquiry-location-error" message={errors.location} />
        </div>

        <div>
          <FieldLabel htmlFor="inquiry-event-type" required>
            活動類型
          </FieldLabel>
          <select
            id="inquiry-event-type"
            name="eventType"
            value={values.eventType}
            onChange={(e) => setField("eventType", e.target.value)}
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={errors.eventType ? "inquiry-event-type-error" : undefined}
            className={selectClass}
          >
            <option value="">請選擇</option>
            {inquiryEventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <FieldError id="inquiry-event-type-error" message={errors.eventType} />
        </div>

        <div>
          <FieldLabel htmlFor="inquiry-attendees">預計人數</FieldLabel>
          <input
            id="inquiry-attendees"
            name="attendees"
            type="text"
            inputMode="numeric"
            placeholder="例如：100 人"
            value={values.attendees}
            onChange={(e) => setField("attendees", e.target.value)}
            className={fieldClass}
          />
        </div>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-3 text-[13px] tracking-[0.02em] text-foreground">
            需要的服務
            <span className="ml-0.5 text-muted-light" aria-hidden="true">
              ＊
            </span>
          </legend>
          <div className="space-y-3">
            {inquiryServiceOptions.map((option) => {
              const checked = values.services.includes(option);
              const id = `inquiry-service-${option}`;
              return (
                <label
                  key={option}
                  htmlFor={id}
                  className="flex cursor-pointer items-start gap-3 text-[15px] text-foreground"
                >
                  <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(option)}
                    className="mt-1 size-3.5 shrink-0 rounded-none border border-foreground accent-foreground"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
          <FieldError id="inquiry-services-error" message={errors.services} />
        </fieldset>

        <div>
          <FieldLabel htmlFor="inquiry-notes" required>
            活動需求／備註
          </FieldLabel>
          <textarea
            id="inquiry-notes"
            name="notes"
            rows={5}
            placeholder={
              "請簡單描述活動需求，例如活動時間、場地、\n設備需求或其他希望我們協助的事項。"
            }
            value={values.notes}
            onChange={(e) => setField("notes", e.target.value)}
            aria-invalid={Boolean(errors.notes)}
            aria-describedby={errors.notes ? "inquiry-notes-error" : undefined}
            className={cn(fieldClass, "resize-y min-h-[140px] leading-[1.75]")}
          />
          <FieldError id="inquiry-notes-error" message={errors.notes} />
        </div>
      </div>

      <div className="mt-10 min-w-0 overflow-hidden">
        <RecaptchaWidget
          recaptchaRef={recaptchaRef}
          onChange={(token) => {
            setRecaptchaToken(token);
            if (token) {
              setErrors((prev) => {
                if (!prev.recaptchaToken) return prev;
                const next = { ...prev };
                delete next.recaptchaToken;
                return next;
              });
            }
          }}
        />
        <FieldError id="inquiry-recaptcha-error" message={errors.recaptchaToken} />
      </div>

      {formError && (
        <p className="mt-6 text-[13px] text-foreground/80" role="alert">
          {formError}
        </p>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting || !recaptchaSiteKey}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "送出中…" : "送出詢價需求 →"}
        </Button>
      </div>
    </form>
  );
}
