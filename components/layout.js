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
        <title>Izdelava spletnih strani in aplikacij </title>
        <meta
          name="description"
          content="Izdelava spletnih strani, izdelava spletnih trgovin, razvoj mobilnih aplikacij, rešitve po meri. Dovolite mi, da vaše želje pretvorim v digitalno realnost."
        />
        <meta name="keywords" content="Izdelava spletnih strani, izdelava spletnih trgovin, razvoj mobilnih aplikacij, rešitve po meri" />
        <meta name="author" content="Marcel Golob" />
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
