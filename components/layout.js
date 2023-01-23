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
        <title>Izdelava naprednih spletnih mest in aplikacij</title>
        <meta
          name="description"
          content="Izdelujem spletne strani, spletne trgovine in mobilne aplikacij. Dovolite mi, da vaše želje pretvorim v digitalno realnost."
        />
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
