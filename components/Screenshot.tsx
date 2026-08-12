"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Screenshot.module.css";

export function Screenshot({ number, label, priority = false }: { number: number; label: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const id = String(number).padStart(2, "0");
  return (
    <div className={styles.frame}>
      {!failed && <Image src={`/screenshots/screenshot-${id}.png`} alt={`${label}のアプリ画面`} onError={() => setFailed(true)} priority={priority} fill sizes="(max-width: 900px) 86vw, 430px" />}
      {failed && <div className={styles.placeholder} role="img" aria-label={`${label}のスクリーンショット準備中`}><span>BOW DIARY</span><strong>{id}</strong><small>SCREEN PREVIEW</small></div>}
    </div>
  );
}
