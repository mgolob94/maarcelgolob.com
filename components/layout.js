import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Marcel Golob | Full-Stack Engineer </title>
        <meta
          property="og:title"
          content="Marcel Golob | Full-Stack Engineer"
        />
        <meta
          name="description"
          content="Pomagam zagonskim podjetjem ter malim in srednje velikim podjetjem pri lansiranju in rasti njihovih izdelkov."
          key="desc"
        />
        <meta
          property="og:description"
          content="Pomagam zagonskim podjetjem ter malim in srednje velikim podjetjem pri lansiranju in rasti njihovih izdelkov."
        />
        <meta
          property="og:image"
          content="https://marcelgolob.com/fb_izdelava_spletnih_strani.jpg"
        />
        <meta
          name="keywords"
          content="izdelava spletne strani, izdelava spletnih strani, izdelava spletnih trgovin, izdelava spletne trgovine, razvoj spletnih aplikacij"
        />
        <meta name="author" content="Marcel Golob" />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />

      </Head>
      <Header />
      <main className={`${styles.main}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
