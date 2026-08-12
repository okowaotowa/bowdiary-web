import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: "./fonts/Rubik-wght.ttf",
  variable: "--font-rubik",
  weight: "300 900",
  style: "normal",
  display: "swap",
});

const zenKaku = localFont({
  src: [
    { path: "./fonts/ZenKakuGothicNew-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/ZenKakuGothicNew-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-zen-kaku",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bowdiary.okwotw.com"),
  title: { default: "BOW DIARY — 愛犬とのお散歩記録アプリ", template: "%s | BOW DIARY" },
  description: "愛犬との散歩を、歩いたルートや距離、時間、10秒動画で記録。毎日の散歩を、小さな物語に。",
  applicationName: "BOW DIARY",
  keywords: ["BOW DIARY", "犬", "散歩", "記録", "日記", "Vlog", "iOSアプリ"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "BOW DIARY",
    title: "BOW DIARY — 愛犬とのお散歩記録アプリ",
    description: "愛犬との「いつもの散歩」を、小さな物語に。",
  },
  twitter: { card: "summary_large_image", title: "BOW DIARY", description: "愛犬との「いつもの散歩」を、小さな物語に。" },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "1024x1024" }],
    shortcut: "/icon.png",
    apple: [{ url: "/icon.png", type: "image/png", sizes: "1024x1024" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FBFAF7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${rubik.variable} ${zenKaku.variable}`}>
      <body>{children}</body>
    </html>
  );
}
