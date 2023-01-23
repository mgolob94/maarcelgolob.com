import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 copyright">
              <Link href="/">
                <Image
                  className={styles.logoFooter}
                  src="/logo.svg"
                  alt="Izdelava spletnih strani Celje"
                  title="Izdelava spletnih strani Celje"
                  width={93}
                  height={50}
                />
              </Link>
              <p>
                Copyright © Računalniško programiranje,
                <br /> Marcel Golob, s.p.
              </p>
            </div>
            <div className="col-md-4 footerLinks">
              <h4 className="mb-4">HITRE POVEZAVE</h4>
              <ul>
                <li>
                  <Link href="#">Domov</Link>
                </li>
                <li>
                  <Link href="#projects">Projekti</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="mb-4">SLEDITE MI</h4>
              <div className={styles.social}>
                <Link href="https://www.instagram.com/marcelgolob/">
                  <Image
                    src="/insta-g.svg"
                    alt="Izdelava spletnih trgovin Celje"
                    title="Izdelava spletnih trgovin Celje"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://www.facebook.com/marcelgolob/">
                  <Image
                    src="/fb-g.svg"
                    alt="Izdelava spletnih trgovin Celje"
                    title="Izdelava spletnih trgovin Celje"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/marcel-golob/">
                  <Image
                    src="/ln-g.svg"
                    alt="Izdelava spletnih trgovin Celje"
                    title="Izdelava spletnih trgovin Celje"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
