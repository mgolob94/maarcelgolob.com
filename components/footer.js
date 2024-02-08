import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright text-center mt-3">
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
              {/* <p>
                Copyright © Računalniško programiranje, Marcel Golob, s.p.
              </p> */}
            </div>
            {/* <div className="col-md-4 footerLinks">
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
            </div> */}
            {/* <div className="col-md-4 text-center">
              <h4 className="mb-4">KONTAKTIRAJ ME</h4>
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

            </div> */}

            <div className="col-md-4 text-center">
                <div className="text-center m-0 d-flex align-items-center justify-content-center h-100 mb-5 md:mb-0">
                  <a
                    href="mailto:info@marcelgolob.com"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Image
                      className="phone"
                      src="/envelope-solid.svg"
                      width={30}
                      height={30}
                      alt="Izdelava spletnih strani Celje"
                      title="Izdelava spletnih strani Celje"
                    />
                    <div className="phoneNumber">
                        info@marcelgolob.com
                    </div>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
}
