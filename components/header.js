import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <header className={styles.siteHeader}>
        <div
          className={`container d-flex justify-content-between align-items-center ${styles.header}`}
        >
          <img className={styles.logo} src="/logo.svg" alt="" />
          <nav id={styles.siteNavigation} className={styles.nav}>
            <ul id={styles.primaryMenu}>
              <li className="current-menu-item">
                <Link href="#">Domov</Link>
              </li>
              <li>
                <Link href="#projects">Projekti</Link>
              </li>
            </ul>
          </nav>
          <div className="d-flex">
            <div className={`d-none d-md-flex ${styles.social}`}>
              <Link href="https://www.instagram.com/marcelgolob/">
                <Image
                  src="/insta-g.svg"
                  alt="Instagram logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.facebook.com/marcelgolob/">
                <Image
                  src="/fb-g.svg"
                  alt="Facebook logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/marcel-golob/">
                <Image
                  src="/ln-g.svg"
                  alt="Linkedin logo"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className={`d-none d-md-block ${styles.contact}`}>
              <Link href="mailto:info@marcelgolob.com">Kontakt</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
