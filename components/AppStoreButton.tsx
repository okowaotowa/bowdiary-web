import styles from "./AppStoreButton.module.css";

export const APP_STORE_URL = "https://apps.apple.com/app/id6789443469";

export function AppStoreButton({ light = false }: { light?: boolean }) {
  return (
    <a className={`${styles.button} ${light ? styles.light : ""}`} href={APP_STORE_URL} target="_blank" rel="noreferrer" aria-label="App StoreでBOW DIARYをダウンロード（新しいタブで開きます）">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.05 12.54c-.03-3 2.45-4.46 2.56-4.53a5.5 5.5 0 0 0-4.33-2.34c-1.82-.2-3.59 1.09-4.52 1.09-.95 0-2.39-1.07-3.94-1.03a5.77 5.77 0 0 0-4.85 2.96c-2.1 3.64-.53 9 1.48 11.94 1 1.44 2.17 3.05 3.72 3 1.52-.06 2.09-.96 3.93-.96 1.82 0 2.36.96 3.95.92 1.63-.03 2.66-1.45 3.62-2.9a11.9 11.9 0 0 0 1.65-3.36 5.2 5.2 0 0 1-3.27-4.79ZM14.09 3.74A5.3 5.3 0 0 0 15.3 0a5.4 5.4 0 0 0-3.5 1.78 5.03 5.03 0 0 0-1.24 3.6 4.46 4.46 0 0 0 3.53-1.64Z" /></svg>
      <span><small>Download on the</small>App Store</span>
    </a>
  );
}
