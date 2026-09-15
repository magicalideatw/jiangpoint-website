import type { GuideCategory } from "@/lib/guide/types";

export const guideCategories: GuideCategory[] = [
  { id: "sound", number: "01", label: "音響指南" },
  { id: "lighting", number: "02", label: "燈光指南" },
  { id: "planning", number: "03", label: "活動規劃" },
  { id: "election", number: "04", label: "選舉活動指南" },
];

export function getGuideCategoryLabel(id: GuideCategory["id"]): string {
  return guideCategories.find((c) => c.id === id)?.label ?? "";
}
