import Link from "next/link";
import { APP_STORE_URL } from "./AppStoreButton";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">BOW DIARY</Link>
        <nav className={styles.links} aria-label="フッターナビゲーション">
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer">App Store</a>
        </nav>
        <p className={styles.copy}>© 2026 okowaotowa</p>
      </div>
    </footer>
  );
}
