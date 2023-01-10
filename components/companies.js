import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Companies.module.css";

export default function Companies() {
  return (
    <>
      <section className={styles.companies}>
        <div className="container">
          <h2 className="secondaryTitle">Podjetja, s katerimi sodelujem</h2>
          <div className="d-flex align-items-center justify-content-between bg-white p-3">
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
                href="https://pingoshop.si"
                target="__blank"
              >
                <Image src="/pingo.png" alt="" height={72} width={159} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
