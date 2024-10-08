import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Companies.module.css";
import { useTranslations } from "next-intl";

export default function Companies() {
  const t = useTranslations();

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="mainTitle mb-4">{t("trusted")}</h2>

          <div className="d-flex align-items-center justify-content-between bg-white p-3 companies">
            <div>
              <Link
                className="cardItem"
                href="https://etnobotanika.eu"
                target="__blank"
              >
                <Image
                  src="/etnobotanika-logotip.webp"
                  alt=""
                  height={72}
                  width={72}
                />
              </Link>
            </div>
            <div>
              <Link
                className="cardItem"
                href="https://www.web-center.si/"
                target="__blank"
              >
                <Image src="/logo-wc.png" alt="" width={246} height={54} />
              </Link>
            </div>
            <div>
              <Link
                className="cardItem"
                href="https://www.sanjskiatelje.si/"
                target="__blank"
              >
                <Image
                  src="/SanjskiAtelje_Logo.png"
                  alt=""
                  width={72}
                  height={72}
                />
              </Link>
            </div>
            <div>
              <Link
                className="cardItem"
                href="https://izifroc.com/"
                target="__blank"
              >
                <Image
                  src="/logotip_izifroc.png"
                  alt=""
                  width={159}
                  height={72}
                />
              </Link>
            </div>
            <div>
            <Link
                className="cardItem"
                href="https://izifroc.com/"
                target="__blank"
              >
                <Image
                  src="/MiaCo-logo.webp"
                  alt=""
                  width={169}
                  height={72}
                />
              </Link>
           
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
