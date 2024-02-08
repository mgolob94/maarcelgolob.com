import { Montserrat } from "@next/font/google";
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Razvoj inovativnih digitalni rešitev | spletne in mobilne aplikacije, SEO optimizacija, napredni sistemi, MVP razvoj </title>
        <meta
          property="og:title"
          content="Razvoj inovativnih digitalni rešitev | spletne in mobilne aplikacije, SEO optimizacija, napredni sistemi, MVP razvoj"
        />
        <meta
          name="description"
          content="Preoblikujemo digitalni svet s kreativnim razvojem spletnih in mobilnih aplikacij, učinkovito SEO optimizacijo in inovativnimi tehnološkimi rešitvami. Pospešite rast vašega podjetja."
          key="desc"
        />
        <meta
          property="og:description"
          content="Preoblikujemo digitalni svet s kreativnim razvojem spletnih in mobilnih aplikacij, učinkovito SEO optimizacijo in inovativnimi tehnološkimi rešitvami. Pospešite rast vašega podjetja."
        />
        <meta
          property="og:image"
          content="https://marcelgolob.com/fb_izdelava_spletnih_strani.jpg"
        />
        <meta
          name="keywords"
          content="Spletne aplikacije, mobilne aplikacije, SEO optimizacija, MVP razvoj"
        />
        <meta name="author" content="Marcel Golob" />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${montserrat.className} ${styles.main}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
