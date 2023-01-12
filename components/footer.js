import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
