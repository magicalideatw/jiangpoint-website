import {
  inquiryEventTypes,
  inquiryServiceOptions,
  isValidEmail,
  type InquiryFormValues,
  type InquiryServiceOption,
} from "@/lib/inquiry-form";

export const INQUIRY_LIMITS = {
  nameMax: 100,
  phoneMin: 7,
  phoneMax: 30,
  locationMax: 200,
  attendeesMax: 50,
  notesMax: 3000,
} as const;

export type InquiryPayload = InquiryFormValues & {
  recaptchaToken: string;
};

export type InquiryValidationError = {
  field?: keyof InquiryFormValues | "recaptchaToken" | "services";
  message: string;
};

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < INQUIRY_LIMITS.phoneMin || trimmed.length > INQUIRY_LIMITS.phoneMax) {
    return false;
  }
  return /\d/.test(trimmed);
}

export function isValidEventDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  const [y, m, d] = value.split("-").map(Number);
  return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;
}

function isAllowedService(value: string): value is InquiryServiceOption {
  return (inquiryServiceOptions as readonly string[]).includes(value);
}

function isAllowedEventType(value: string): boolean {
  return (inquiryEventTypes as readonly string[]).includes(value);
}

export function validateInquiryPayload(body: unknown): {
  ok: true;
  data: InquiryPayload;
} | {
  ok: false;
  errors: InquiryValidationError[];
} {
  if (!body || typeof body !== "object") {
    return { ok: false, errors: [{ message: "無效的請求內容" }] };
  }

  const raw = body as Record<string, unknown>;
  const errors: InquiryValidationError[] = [];

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const eventDate = typeof raw.eventDate === "string" ? raw.eventDate.trim() : "";
  const location = typeof raw.location === "string" ? raw.location.trim() : "";
  const eventType = typeof raw.eventType === "string" ? raw.eventType.trim() : "";
  const attendees =
    typeof raw.attendees === "string" ? raw.attendees.trim() : "";
  const notes = typeof raw.notes === "string" ? raw.notes.trim() : "";
  const recaptchaToken =
    typeof raw.recaptchaToken === "string" ? raw.recaptchaToken.trim() : "";

  if (!name) errors.push({ field: "name", message: "請填寫聯絡人姓名" });
  else if (name.length > INQUIRY_LIMITS.nameMax) {
    errors.push({ field: "name", message: "姓名過長" });
  }

  if (!phone) errors.push({ field: "phone", message: "請填寫聯絡電話" });
  else if (!isValidPhone(phone)) {
    errors.push({ field: "phone", message: "電話格式不正確" });
  }

  if (!email) errors.push({ field: "email", message: "請填寫 Email" });
  else if (!isValidEmail(email)) {
    errors.push({ field: "email", message: "Email 格式不正確" });
  }

  if (!eventDate) errors.push({ field: "eventDate", message: "請選擇活動日期" });
  else if (!isValidEventDate(eventDate)) {
    errors.push({ field: "eventDate", message: "活動日期格式不正確" });
  }

  if (!location) errors.push({ field: "location", message: "請填寫活動地點" });
  else if (location.length > INQUIRY_LIMITS.locationMax) {
    errors.push({ field: "location", message: "活動地點過長" });
  }

  if (!eventType) errors.push({ field: "eventType", message: "請選擇活動類型" });
  else if (!isAllowedEventType(eventType)) {
    errors.push({ field: "eventType", message: "活動類型無效" });
  }

  if (attendees.length > INQUIRY_LIMITS.attendeesMax) {
    errors.push({ field: "attendees", message: "預計人數內容過長" });
  }

  let services: InquiryServiceOption[] = [];
  if (!Array.isArray(raw.services)) {
    errors.push({ field: "services", message: "請至少選擇一項服務" });
  } else {
    const unique = new Set<string>();
    for (const item of raw.services) {
      if (typeof item !== "string" || !isAllowedService(item)) {
        errors.push({ field: "services", message: "服務選項無效" });
        unique.clear();
        break;
      }
      unique.add(item);
    }
    services = [...unique] as InquiryServiceOption[];
    if (unique.size === 0 && !errors.some((e) => e.field === "services")) {
      errors.push({ field: "services", message: "請至少選擇一項服務" });
    }
  }

  if (!notes) errors.push({ field: "notes", message: "請描述活動需求" });
  else if (notes.length > INQUIRY_LIMITS.notesMax) {
    errors.push({ field: "notes", message: "備註內容過長" });
  }

  if (!recaptchaToken) {
    errors.push({ field: "recaptchaToken", message: "請完成「我不是機器人」驗證" });
  }

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      phone,
      email,
      eventDate,
      location,
      eventType,
      attendees,
      services,
      notes,
      recaptchaToken,
    },
  };
}

export function buildInquiryEmailContent(data: Omit<InquiryPayload, "recaptchaToken">) {
  const attendeesDisplay = data.attendees || "（未填寫）";
  const servicesDisplay = data.services.join("、");

  const subject = `【匠點娛樂】新詢價需求｜${data.eventDate}｜${data.eventType}`;

  const text = `匠點娛樂｜JIANG POINT
收到新的活動詢價需求

━━━━━━━━━━━━━━

聯絡人：
${data.name}

電話：
${data.phone}

Email：
${data.email}

活動日期：
${data.eventDate}

活動地點：
${data.location}

活動類型：
${data.eventType}

預計人數：
${attendeesDisplay}

需要的服務：
${servicesDisplay}

活動需求／備註：
${data.notes}

━━━━━━━━━━━━━━`;

  return { subject, text };
}
