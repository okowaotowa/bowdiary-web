import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "../legal.module.css";

export const metadata: Metadata = { title: "Support", description: "BOW DIARYのサポート・よくある質問。", alternates: { canonical: "/support" } };

const faqs = [
  ["散歩ルートが記録されない", "iOSの「設定」からBOW DIARYの位置情報へのアクセスを確認してください。正確なルート記録には位置情報の許可が必要です。また、散歩開始後はSTART画面で記録中になっていることをご確認ください。"],
  ["カメラ撮影できない", "iOSの「設定」からBOW DIARYのカメラへのアクセスを許可してください。カメラがほかのアプリで使用中の場合は、そのアプリを閉じてからもう一度お試しください。"],
  ["動画保存できない", "iOSの「設定」からBOW DIARYの写真へのアクセスを確認し、端末の空き容量が十分にあるかご確認ください。"],
  ["月間ダイジェストを作れない", "対象の月に撮影した散歩動画があるかご確認ください。動画が少ない場合や、端末の空き容量が不足している場合は作成できないことがあります。"],
  ["記録を削除したい", "削除したい散歩記録をアプリ内で開き、削除操作を行ってください。削除した記録は元に戻せないため、必要な動画は事前に写真ライブラリへ保存してください。"],
];

export default function SupportPage() {
  return <><Header /><main className={styles.main}>
    <p className={styles.eyebrow}>WE’RE HERE TO HELP.</p>
    <h1 className={styles.title}>Support</h1>
    <p className={styles.intro}>BOW DIARYをご利用いただき、ありがとうございます。お困りのときは、まず以下の項目をご確認ください。</p>
    <div className={styles.content}>
      <section className={styles.section}><h2>よくある質問</h2><div className={styles.sectionBody}><ol className={styles.faq}>{faqs.map(([question, answer]) => <li key={question}><h3>{question}</h3><p>{answer}</p></li>)}</ol></div></section>
      <section className={styles.section}><h2>お問い合わせ</h2><div className={styles.sectionBody}><p>解決しない場合は、利用端末とiOSのバージョン、問題が起きた状況を添えてメールでご連絡ください。</p><a className={styles.mail} href="mailto:okowaotowa@gmail.com">okowaotowa@gmail.com</a></div></section>
    </div>
  </main><Footer /></>;
}
