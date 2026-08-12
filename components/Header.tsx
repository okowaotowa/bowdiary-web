import Link from "next/link";
import styles from "./Header.module.css";

const APP_STORE_URL = "https://apps.apple.com/app/id6789443469";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="BOW DIARY ホーム">BOW DIARY</Link>
        <nav className={styles.nav} aria-label="メインナビゲーション">
          <Link href="/#features">Features</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
          <a className={styles.store} href={APP_STORE_URL} target="_blank" rel="noreferrer">App Store<span className={styles.arrow} aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
