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
              <h4 className="mb-4">QUICK LINKS</h4>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="mb-4">FOLLOW US</h4>
              <div className={styles.social}>
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
