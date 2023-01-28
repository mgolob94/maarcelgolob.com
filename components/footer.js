import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <section className="pt-5 pb-5 grey">
        <div className="text-center m-0">
          <a
            href="tel:+38651654876"
            className="d-flex align-items-center justify-content-center"
          >
            <img className="phone" src="/telephone.png" />
            <div className="phoneNumber">+386 51 654 876</div>
          </a>
        </div>
      </section>
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
                  <Link href="/#projects">Projekti</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Kontakt</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="mb-4">SLEDITE MI</h4>
              <div className={styles.social}>
                <Link href="https://www.instagram.com/marcelgolobdev/">
                  <Image
                    src="/insta-g.svg"
                    alt="Izdelava spletnih strani Celje"
                    title="Izdelava spletnih strani Celje"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://www.facebook.com/mg.izdelavaspletnihstrani/">
                  <Image
                    src="/fb-g.svg"
                    alt="Izdelava spletnih strani Celje"
                    title="Izdelava spletnih strani Celje"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/marcel-golob/">
                  <Image
                    src="/ln-g.svg"
                    alt="Izdelava spletnih strani Celje"
                    title="Izdelava spletnih strani Celje"
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
