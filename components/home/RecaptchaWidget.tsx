"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { recaptchaSiteKey } from "@/lib/inquiry-form";

type RecaptchaWidgetProps = {
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  onChange: (token: string | null) => void;
};

export function RecaptchaWidget({ recaptchaRef, onChange }: RecaptchaWidgetProps) {
  if (!recaptchaSiteKey) {
    return (
      <p className="text-[13px] leading-relaxed text-muted">
        reCAPTCHA 尚未設定，請在環境變數加入 NEXT_PUBLIC_RECAPTCHA_SITE_KEY 與
        RECAPTCHA_SECRET_KEY 後重新啟動開發伺服器。
      </p>
    );
  }

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={recaptchaSiteKey}
      onChange={onChange}
      hl="zh-TW"
    />
  );
}
