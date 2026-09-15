/**
 * 圖片資源集中管理。
 * Hero 以外區塊仍使用暫用示意圖，待替換為匠點娛樂實際照片。
 */
export const heroImage = {
  src: "/event-audio-mixing-console.jpg",
  alt: "匠點娛樂現場音控作業，混音器、音響設備與戶外活動舞台環境",
  /** 優先保留混音器與音控操作區域 */
  objectPosition: "58% 55%",
} as const;

/** About — 戶外活動音響、燈光與帳篷架設現場 */
export const aboutImage = {
  src: "/images/services/outdoor-event-lighting-sound.jpg",
  alt: "匠點娛樂戶外活動現場，專業音響、舞台燈光與帳篷架設",
  objectPosition: "50% 42%",
} as const;

export const images = {
  hero: heroImage.src,
  about: aboutImage,
  services: [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231feea?w=1400&q=90",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1400&q=90",
    "https://images.unsplash.com/photo-1459749411176-04019bb87423?w=1400&q=90",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1400&q=90",
    "https://images.unsplash.com/photo-1505373877841-8d25f39d4662?w=1400&q=90",
    "https://images.unsplash.com/photo-1429962714451-bb5a0a524890?w=1400&q=90",
  ],
  /** 精選案例 — event-lighting-sound-equipment.jpg */
  featuredProject: {
    src: "/event-lighting-sound-equipment.jpg",
    alt: "匠點娛樂戶外活動現場，舞台燈光、音響設備與現場音控",
    objectPosition: "50% 50%",
  },
  /** 服務子頁用圖（首頁不顯示） */
  serviceSubpages: {
    outdoorLightingSound: {
      src: "/images/services/outdoor-event-lighting-sound.jpg",
      alt: "匠點娛樂戶外活動音響與舞台燈光設備架設",
    },
    outdoorStageLighting: {
      src: "/images/services/outdoor-event-stage-lighting.jpg",
      alt: "匠點娛樂戶外活動舞台、帳篷與燈光音響配置",
    },
  },
} as const;
