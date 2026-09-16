# 匠點娛樂 JIANG POINT

活動燈光音響・設備出租・現場技術服務・演出整合 — 官方品牌網站前端專案。

## 技術棧

- **Next.js 16**（App Router）
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## 本機開發

```bash
npm install
cp .env.example .env.local   # 選用：設定 NEXT_PUBLIC_SITE_URL
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 專案結構

```
app/                  # 路由與頁面
components/
  home/               # 首頁區塊
  layout/             # Header、Footer
  ui/                 # 共用 UI 元件
lib/
  site-config.ts      # 品牌與網站設定
  metadata.ts         # SEO metadata 工具
```

## 建置

```bash
npm run build
npm start
```

## 備註

- 服務獨立頁與更多案例可於後續階段擴充。
