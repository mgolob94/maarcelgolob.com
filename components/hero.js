import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mainTitle mb-4">
                Izdelujem napredna spletna mesta in aplikacije
              </h1>
              <h2>
                Dovolite mi, da vaše želje pretvorim v digitalno realnost.
              </h2>
              <Link
                href="mailto:info@marcelgolob.com"
                className={`mt-5 ${styles.actionBtn}`}
              >
                ŽELIM BREZPLAČNO PONUDBO{" "}
                <Image src="/arrow.svg" alt="" width={20} height={20} />
              </Link>
            </div>
            {/* <div className="col-md-6">
              <img
                src="/web-design-internet-website-responsive-software-concept.jpg"
                alt="Marcel Golob"
                className="w-100"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
