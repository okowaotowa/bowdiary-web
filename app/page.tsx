import { AppStoreButton } from "@/components/AppStoreButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Screenshot } from "@/components/Screenshot";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>愛犬とのお散歩記録アプリ</p>
            <h1>BOW DIARY</h1>
            <p className={styles.lead}>愛犬との「いつもの散歩」を、<br className={styles.mobileBreak} />小さな物語に。</p>
            <p className={styles.description}>愛犬との散歩を、歩いたルートや距離、時間、10秒動画で記録。撮影した動画から、月ごとに愛犬とのVlogを自動で作れます。</p>
            <AppStoreButton />
          </div>
          <div className={styles.heroVisual}>
            <Screenshot number={1} label="BOW DIARY ホーム" priority />
          </div>
        </section>

        <section id="features" className={styles.overview} aria-labelledby="overview-title">
          <Reveal className={styles.overviewIntro}>
            <p className={styles.overviewEyebrow}>APP OVERVIEW</p>
            <h2 id="overview-title">散歩を記録して、<br className={styles.mobileBreak} />毎月の思い出に。</h2>
            <p>ルート・距離・時間を記録しながら、散歩中に10秒動画を撮影。記録はカレンダーに並び、撮影した動画から月ごとのVlogも作れます。START画面は愛犬の写真やカラーにカスタマイズできます。</p>
          </Reveal>
          <Reveal className={styles.gallery}>
            {[2, 3, 4, 5, 6].map((number) => (
              <div className={styles.galleryItem} key={number}>
                <Screenshot number={number} label={`BOW DIARY アプリ画面 ${number}`} />
              </div>
            ))}
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
