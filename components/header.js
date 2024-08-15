import Image from "next/image";
import { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import Hamburger from "hamburger-react";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className={styles.siteHeader}>
        <div
          className={`container d-flex justify-content-between align-items-center py-3 ${styles.header}`}
        >
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="Izdelava spletne trgovine"
              title="Izdelava spletne trgovine"
              width={93}
              height={50}
            />
          </Link>
          <div className="mobileBtn d-lg-none">
            <Hamburger
              rounded
              size={25}
              toggled={isOpen}
              toggle={setOpen}
              easing="ease-in"
            />
          </div>
          {/* <nav
            id={styles.siteNavigation}
            className={`d-none d-lg-block ${styles.nav}`}
          >
            <ul id={styles.primaryMenu}>
              <li className="current-menu-item">
                <Link href="/">Domov</Link>
              </li>
              <li>
                <Link href="/#projects">Projekti</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav> */}
          <div className="d-none d-lg-flex">
            <div className={`d-none d-lg-flex ${styles.social}`}>
              <Link href="https://www.instagram.com/madegreat.dev" target="_blank">
                <Image
                  src="/insta-g.svg"
                  alt="MVP"
                  title="MVP"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/marcel-golob/" target="_blank">
                <Image
                  src="/ln-g.svg"
                  alt="Izdelava spletnih strani Ljubljana"
                  title="Izdelava spletnih strani Ljubljana"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className={`d-none d-lg-block ${styles.contact}`}>
              <Link href="/contact">Contact</Link>
            </div>

          </div>
        </div>
        {isOpen && (
          <div className={`d-lg-none ${styles.mobileNavigationWrapper}`}>
                        {/* <div className="d-flex">
              <Link href="https://www.instagram.com/marcelgolobdev/">
                <Image
                  src="/insta-g.svg"
                  alt="Razvoj mobilnih aplikacij"
                  title="Razvoj mobilnih aplikacij"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/marcel-golob/">
                <Image
                  src="/ln-g.svg"
                  alt="Razvoj mobilnih aplikacij"
                  title="Razvoj mobilnih aplikacij"
                  width={20}
                  height={20}
                />
              </Link>
            </div> */}
            <div className={`${styles.contact}`}>
              <Link href="/contact">Contact</Link>
            </div>

            
            {/* <nav id={styles.siteNavigation} className={` ${styles.nav}`}>
              <ul id={styles.primaryMenu}>
                <li className="current-menu-item">
                  <Link href="/">Domov</Link>
                </li>
                <li>
                  <Link href="/#projects">Projekti</Link>
                </li>
                <li>
                  <Link href="/contact">Kontakt</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </nav> */}
          </div>
        )}
      </header>
    </>
  );
}
