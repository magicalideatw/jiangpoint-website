import { Resend } from "resend";
import { buildInquiryEmailContent } from "@/lib/inquiry-server";
import type { InquiryFormValues } from "@/lib/inquiry-form";

export async function sendInquiryEmail(data: InquiryFormValues): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_EMAIL_FROM;
  const to = process.env.INQUIRY_EMAIL_TO ?? "magicalideatw@gmail.com";

  if (!apiKey || !from) {
    console.error("[inquiry] Missing RESEND_API_KEY or INQUIRY_EMAIL_FROM");
    throw new Error("email_not_configured");
  }

  const { subject, text } = buildInquiryEmailContent(data);
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    text,
  });

  if (error) {
    console.error("[inquiry] Resend send failed:", error);
    throw new Error("email_send_failed");
  }
}
