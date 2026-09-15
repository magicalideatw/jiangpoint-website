export const inquiryEventTypes = [
  "公司活動",
  "尾牙／春酒",
  "校園活動",
  "戶外活動",
  "選舉造勢",
  "政見發表",
  "社區活動",
  "婚禮／派對",
  "表演活動",
  "展覽／品牌活動",
  "其他",
] as const;

export const inquiryServiceOptions = [
  "活動音響",
  "活動燈光",
  "現場技術服務",
  "燈光音響整合",
  "其他",
] as const;

export type InquiryEventType = (typeof inquiryEventTypes)[number];
export type InquiryServiceOption = (typeof inquiryServiceOptions)[number];

export type InquiryFormValues = {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  location: string;
  eventType: string;
  attendees: string;
  services: InquiryServiceOption[];
  notes: string;
};

export const initialInquiryFormValues: InquiryFormValues = {
  name: "",
  phone: "",
  email: "",
  eventDate: "",
  location: "",
  eventType: "",
  attendees: "",
  services: [],
  notes: "",
};

export const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
