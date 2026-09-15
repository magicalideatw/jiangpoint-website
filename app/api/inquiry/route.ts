import { NextResponse } from "next/server";
import { validateInquiryPayload } from "@/lib/inquiry-server";
import { verifyRecaptchaToken } from "@/lib/recaptcha";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { sendInquiryEmail } from "@/lib/send-inquiry-email";

export const runtime = "nodejs";

const SUBMIT_FAILURE_MESSAGE =
  "目前無法送出詢價資料，請稍後再試或直接與我們聯繫。";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rate = checkRateLimit(`inquiry:${ip}`);

  if (!rate.allowed) {
    console.warn("[inquiry] Rate limit exceeded for IP:", ip);
    return NextResponse.json(
      { error: "rate_limit", message: SUBMIT_FAILURE_MESSAGE },
      { status: 429, headers: { "Retry-After": String(rate.retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json", message: SUBMIT_FAILURE_MESSAGE },
      { status: 400 },
    );
  }

  const validated = validateInquiryPayload(body);
  if (!validated.ok) {
    const first = validated.errors[0];
    return NextResponse.json(
      {
        error: "validation",
        message: first?.message ?? SUBMIT_FAILURE_MESSAGE,
        errors: validated.errors,
      },
      { status: 400 },
    );
  }

  const { recaptchaToken, ...inquiry } = validated.data;

  const captchaOk = await verifyRecaptchaToken(recaptchaToken);
  if (!captchaOk) {
    return NextResponse.json(
      { error: "recaptcha", message: "請完成「我不是機器人」驗證" },
      { status: 403 },
    );
  }

  try {
    await sendInquiryEmail(inquiry);
  } catch (error) {
    console.error("[inquiry] Email delivery failed:", error);
    return NextResponse.json(
      { error: "email", message: SUBMIT_FAILURE_MESSAGE },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
