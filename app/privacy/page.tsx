import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "../legal.module.css";

export const metadata: Metadata = { title: "Privacy Policy", description: "BOW DIARYのプライバシーポリシーです。", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <><Header /><main className={styles.main}>
    <p className={styles.eyebrow}>YOUR DATA, YOUR DIARY.</p>
    <h1 className={styles.title}>Privacy<br />Policy</h1>
    <p className={styles.intro}>BOW DIARY（以下「本アプリ」）は、愛犬との散歩記録を安心して残していただけるよう、利用する情報とその目的を明確にします。</p>
    <p className={styles.date}>制定日：2026年8月12日</p>
    <div className={styles.content}>
      <Policy title="1. 取得・利用する情報"><p>本アプリは、機能を提供するために次の情報を利用します。</p><ul><li>位置情報：散歩中のルート、距離、時間を記録するため</li><li>カメラ：散歩中の写真・動画を撮影するため</li><li>写真・動画：撮影した記録の保存と、月間ダイジェストの作成・保存のため</li><li>端末内の散歩記録：過去の散歩をカレンダーなどで表示するため</li></ul><p>各情報は、利用者が端末上で許可した場合にのみ利用します。</p></Policy>
      <Policy title="2. データの保存"><p>散歩ルート、距離、時間、写真・動画など、本アプリで作成した記録は端末内で管理されます。本アプリの運営者がこれらの記録を独自のサーバーへ収集・保存することはありません。</p><p>アプリを削除した場合、端末内に保存された記録が削除されることがあります。必要な動画は、事前に写真ライブラリへ保存してください。</p></Policy>
      <Policy title="3. 広告配信"><p>本アプリは、広告配信のためGoogle AdMobを使用します。AdMobは、広告の配信、効果測定、不正防止などのため、端末情報、広告識別子、利用状況等を取得する場合があります。取り扱いの詳細は、Googleのプライバシーポリシーをご確認ください。</p><p><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google プライバシーポリシー ↗</a></p></Policy>
      <Policy title="4. 第三者への提供"><p>本アプリの運営者は、法令に基づく場合を除き、利用者の情報を第三者へ販売または提供しません。広告配信に伴う情報の取り扱いについては、前項のサービス提供者のポリシーが適用されます。</p></Policy>
      <Policy title="5. 権限の管理"><p>位置情報、カメラ、写真へのアクセス許可は、iOSの「設定」からいつでも変更できます。権限を無効にすると、対応する記録・撮影・保存機能を利用できない場合があります。</p></Policy>
      <Policy title="6. お問い合わせ"><p>本ポリシーおよびデータの取り扱いに関するお問い合わせは、以下までご連絡ください。</p><p><a href="mailto:okowaotowa@gmail.com">okowaotowa@gmail.com</a></p></Policy>
      <Policy title="7. ポリシーの変更"><p>法令や本アプリの提供内容の変更に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、本ページ等でお知らせします。</p></Policy>
    </div>
  </main><Footer /></>;
}

function Policy({ title, children }: { title: string; children: React.ReactNode }) { return <section className={styles.section}><h2>{title}</h2><div className={styles.sectionBody}>{children}</div></section>; }
