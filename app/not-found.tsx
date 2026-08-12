import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import styles from "./legal.module.css";

export default function NotFound() { return <><Header /><main className={styles.main}><p className={styles.eyebrow}>404 — NOT FOUND</p><h1 className={styles.title}>道を少し、<br />外れたようです。</h1><p className={styles.intro}><Link href="/" style={{ textDecoration: "underline", textUnderlineOffset: 6 }}>BOW DIARYのホームへ戻る</Link></p></main><Footer /></>; }
