import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="logo">
            M<span>G</span>
          </h1>
          <nav id={styles.siteNavigation}>
            <ul id={styles.primaryMenu}>
              <li className="current-menu-item">
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
            </ul>
          </nav>
          <div className="d-flex">
            <div className={`${styles.social}`}>
              <Link href="#">
                <Image
                  src="/insta-g.svg"
                  alt="Instagram logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/fb-g.svg"
                  alt="Facebook logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/ln-g.svg"
                  alt="Linkedin logo"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className={styles.contact}>
              <Link href="mailto:info@marcelgolob.com">Contact</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
