import type { GuideArticleImages } from "@/lib/guide/types";

export const guidePhotos = {
  mixingConsole: {
    src: "/event-audio-mixing-console.jpg",
    alt: "活動音響現場混音控台與音響設備",
    caption: "活動音響現場的混音與控制設備",
    objectPosition: "58% 55%",
  },
  lightingSoundEquipment: {
    src: "/event-lighting-sound-equipment.jpg",
    alt: "戶外活動舞台燈光、音響喇叭與現場音控作業區",
    caption: "活動燈光與音響設備配置",
    objectPosition: "50% 50%",
  },
  outdoorLightingSound: {
    src: "/images/services/outdoor-event-lighting-sound.jpg",
    alt: "戶外活動帳篷舞台的專業音響與舞台燈光架設",
    caption: "戶外活動舞台與燈光音響配置",
    objectPosition: "50% 42%",
  },
  outdoorStageLighting: {
    src: "/images/services/outdoor-event-stage-lighting.jpg",
    alt: "戶外活動帳篷下的舞台燈光與音響設備",
    caption: "戶外活動舞台與燈光音響配置",
    objectPosition: "50% 45%",
  },
} as const;

/** 各指南文章圖片（不修改正文，僅配置圖片） */
export const guideArticleImages: Record<string, GuideArticleImages> = {
  "event-audio-rental": {
    hero: guidePhotos.mixingConsole,
    inline: [{ afterSectionIndex: 1, image: guidePhotos.lightingSoundEquipment }],
  },
  "event-audio-price": {
    hero: guidePhotos.lightingSoundEquipment,
    inline: [{ afterSectionIndex: 2, image: guidePhotos.mixingConsole }],
  },
  "outdoor-event-audio": {
    hero: guidePhotos.outdoorLightingSound,
    inline: [{ afterSectionIndex: 1, image: guidePhotos.outdoorStageLighting }],
  },
  "event-lighting": {
    hero: guidePhotos.outdoorStageLighting,
    inline: [{ afterSectionIndex: 2, image: guidePhotos.lightingSoundEquipment }],
  },
  "audio-rental-vs-audio-control": {
    hero: guidePhotos.mixingConsole,
    inline: [{ afterSectionIndex: 2, image: guidePhotos.lightingSoundEquipment }],
  },
  "election-campaign-audio": {
    hero: guidePhotos.outdoorStageLighting,
    inline: [{ afterSectionIndex: 2, image: guidePhotos.outdoorLightingSound }],
  },
};

export function getGuideArticleImages(slug: string): GuideArticleImages | undefined {
  return guideArticleImages[slug];
}

export function absoluteGuideImageUrl(relativeSrc: string, siteUrl: string): string {
  const base = siteUrl.replace(/\/$/, "");
  return `${base}${relativeSrc.startsWith("/") ? relativeSrc : `/${relativeSrc}`}`;
}
