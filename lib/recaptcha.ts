type RecaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("[inquiry] RECAPTCHA_SECRET_KEY is not configured");
    return false;
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) {
      console.error("[inquiry] reCAPTCHA verify HTTP error:", response.status);
      return false;
    }

    const data = (await response.json()) as RecaptchaVerifyResponse;
    if (!data.success) {
      console.error("[inquiry] reCAPTCHA verification failed:", data["error-codes"]);
    }
    return data.success;
  } catch (error) {
    console.error("[inquiry] reCAPTCHA verify request failed:", error);
    return false;
  }
}
