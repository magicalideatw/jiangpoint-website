export const siteConfig = {
  brand: {
    nameZh: "匠點娛樂",
    nameEn: "JIANG POINT",
    headline: "活動燈光音響",
    tagline: "設備出租・現場技術服務・活動整合",
    description:
      "匠點娛樂提供活動燈光音響、設備租賃、現場技術服務與活動整合，全台接案。主要服務台北、新北、桃園、新竹等地區。",
    about: [
      "專注於活動燈光音響、設備租賃與現場技術服務，從小型聚會、企業活動、校園演出，到戶外活動與舞台演出，依照不同活動需求提供合適的設備與現場支援。",
      "我們重視的不只是設備本身，更重視現場聲音、燈光與活動流程之間的整合。從前期需求確認、設備配置，到現場架設、音控與燈光執行，協助客戶把活動所需要的技術細節處理好。",
      "依照活動規模、場地條件、參與人數與預算，提供彈性的設備配置與服務方式，讓每一場活動都能在適合的規模下，兼顧效果與成本。",
      "主要服務台北、新北、桃園、新竹地區，並可依活動需求承接其他地區案件。",
    ],
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "zh-TW",
  contact: {
    email: "[待提供聯絡信箱]",
    phone: "[待提供聯絡電話]",
    line: "[待提供 LINE 連結]",
    address: "[待提供公司地址]",
    hours: "[待提供服務時間]",
  },
} as const;

export const aboutServiceHighlights = [
  "活動音響",
  "活動燈光",
  "現場音控",
  "設備租賃",
  "燈光音響整合",
] as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "精選案例", href: "/#projects" },
  { label: "服務項目", href: "/#services" },
  { label: "活動指南", href: "/guide" },
  { label: "關於匠點", href: "/#about" },
  { label: "常見問題", href: "/#faq" },
];

export const services = [
  {
    id: "sound",
    number: "01",
    title: "活動音響",
    summary: "音響設備出租・現場音控・系統配置",
  },
  {
    id: "lighting",
    number: "02",
    title: "活動燈光",
    summary: "舞台燈光・燈具出租・現場技術服務",
  },
  {
    id: "live-sound",
    number: "03",
    title: "現場音控",
    summary: "現場音控・活動執行・技術支援",
  },
  {
    id: "rally",
    number: "04",
    title: "選舉／造勢活動",
    summary: "造勢活動・政見發表・競選活動音響",
  },
  {
    id: "corporate",
    number: "05",
    title: "企業／校園活動",
    summary: "尾牙・春酒・校園活動・講座",
  },
  {
    id: "integration",
    number: "06",
    title: "活動整合",
    summary: "燈光・音響・設備與現場技術服務",
  },
] as const;

export const eventTypes = [
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
] as const;

export const whyChooseItems = [
  { id: "planning", title: "依人數與場地配置" },
  { id: "setup", title: "設備架設" },
  { id: "control", title: "現場音控" },
  { id: "teardown", title: "撤場服務" },
  { id: "flexible", title: "彈性方案" },
] as const;

export const serviceAreas = ["台北", "新北", "桃園", "新竹"] as const;

export const serviceCoverage = {
  scope: "全台接案",
  contactHeading: "服務地區｜全台接案",
  contactNote:
    "主要服務台北、新北、桃園、新竹，其他地區也可依活動需求洽詢。",
} as const;

/** 首頁 SEO 服務內容（FAQ 與 Contact 之間） */
export const seoContentArticles = [
  {
    id: "taipei",
    title: "台北活動音響",
    subtitle: "台北活動音響服務",
    paragraphs: [
      "匠點娛樂提供台北地區活動音響、音響設備出租與現場技術服務，依活動規模、場地大小、參與人數及實際需求，規劃適合的音響系統。",
      "無論是企業活動、尾牙春酒、校園活動、表演活動、品牌活動或戶外活動，都可以依現場條件安排喇叭、麥克風、混音及相關設備。",
      "如有現場音控、設備架設與活動執行需求，也可搭配完整的技術服務。",
    ],
  },
  {
    id: "new-taipei",
    title: "新北活動音響",
    subtitle: "新北活動音響與音響出租",
    paragraphs: [
      "提供新北地區活動音響與設備出租服務，從小型活動、校園演出到大型活動，皆可依場地與活動需求進行規劃。",
      "除了單純設備出租，也可提供現場音控、設備架設及活動技術支援，讓活動現場的聲音表現與執行流程更加穩定。",
    ],
  },
  {
    id: "taoyuan",
    title: "桃園活動音響",
    subtitle: "桃園活動音響・燈光音響整合",
    paragraphs: [
      "匠點娛樂提供桃園地區活動音響、舞台燈光及現場技術服務，適用於企業活動、尾牙春酒、校園活動、社區活動、表演及各類活動場合。",
      "如果活動同時需要音響與燈光，可依舞台大小、場地條件及活動流程進行整合規劃，提供設備出租與現場技術服務。",
    ],
  },
  {
    id: "stage-lighting",
    title: "舞台燈光",
    subtitle: "舞台燈光與活動燈光服務",
    paragraphs: [
      "除了活動音響之外，匠點娛樂也提供舞台燈光與活動燈光服務，依舞台尺寸、演出形式及現場環境配置適合的燈光設備。",
      "從企業活動、校園表演、舞台演出到戶外活動，可依實際需求規劃燈光效果，讓舞台畫面與現場活動更完整。",
    ],
  },
  {
    id: "av-integration",
    title: "活動燈光音響",
    subtitle: "活動燈光音響整合",
    paragraphs: [
      "活動如果同時需要音響、燈光與現場技術人員，可以由匠點娛樂依照活動流程與場地條件進行整體規劃。",
      "從前期設備配置、現場架設與測試，到活動當天的音控及技術支援，協助處理活動所需的燈光音響設備，讓主辦單位可以更專注於活動本身。",
    ],
  },
  {
    id: "nationwide",
    title: "全台接案",
    subtitle: "全台活動燈光音響接案",
    paragraphs: [
      "匠點娛樂以台北、新北、桃園、新竹為主要服務地區，並依活動需求承接全台案件。",
      "不論是企業活動、校園活動、表演活動、展覽品牌活動、戶外活動，或選舉造勢、政見發表等活動，都可以提供活動音響、舞台燈光、設備出租與現場技術服務。",
      "實際服務內容將依活動日期、地點、規模及設備需求進行評估。",
    ],
  },
] as const;

/** 精選案例 — 單一展示，待替換為更多實際案例 */
export const featuredProject = {
  number: "01",
  category: "活動燈光音響",
  title: "現場技術服務",
  services: "活動音響・現場音控・舞台燈光",
} as const;

export const faqItems = [
  {
    id: "faq-1",
    number: "01",
    question: "活動音響、燈光的費用怎麼計算？",
    answer:
      "活動費用會依活動日期、地點、活動規模、參與人數、設備需求及服務時間評估，提供適合的設備與服務方案。",
  },
  {
    id: "faq-2",
    number: "02",
    question: "只有租設備，可以自己操作嗎？",
    answer:
      "可以依需求提供設備出租；如果需要現場架設、測試或操作，也可以搭配現場技術服務。",
  },
  {
    id: "faq-3",
    number: "03",
    question: "可以只租音響，不需要燈光嗎？",
    answer:
      "可以。可依活動需求提供單獨的音響、燈光或其他設備，也可以規劃完整的燈光音響整合方案。",
  },
  {
    id: "faq-4",
    number: "04",
    question: "你們有提供現場音控嗎？",
    answer:
      "有。除了設備出租，也提供現場音控、設備架設、測試及活動執行等技術服務。",
  },
  {
    id: "faq-5",
    number: "05",
    question: "哪些活動可以提供服務？",
    answer:
      "可依活動需求提供公司活動、尾牙／春酒、校園活動、表演活動、婚禮／派對、社區活動、展覽／品牌活動、選舉造勢及政見發表等活動的燈光音響服務。",
  },
  {
    id: "faq-6",
    number: "06",
    question: "選舉造勢、政見發表會可以承接嗎？",
    answer:
      "可以。可依活動場地、參與人數及舞台規模規劃音響、麥克風、燈光及現場技術服務。",
  },
  {
    id: "faq-7",
    number: "07",
    question: "服務地區有哪些？",
    answer:
      "主要服務台北、新北、桃園、新竹等地區，全台皆可依活動需求承接。大型活動、選舉造勢、政見發表及活動整合案件，歡迎提供活動資訊洽詢。",
  },
  {
    id: "faq-8",
    number: "08",
    question: "需要提前多久預約？",
    answer:
      "建議確認活動日期後儘早詢問，尤其是大型活動、選舉造勢及熱門日期，設備與技術人員需要提前安排。",
  },
] as const;
