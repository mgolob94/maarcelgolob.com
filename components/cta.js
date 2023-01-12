import Link from "next/link";
import styles from "../styles/Cta.module.css";
import Image from "next/image";

export default function Cta() {
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className={`text-center ${styles.ctaWrapper}`}>
            <h2 className="text-center mb-5">Izboljšajte svoje poslovanje</h2>
            <p className="mb-4">
              Dobra spletna stran je ključnega pomena za uspeh vašega podjetja v
              današnjem digitalnem svetu. Spletna prisotnost je neizogibna za
              vsako podjetje, ki želi doseči široko publiko in povečati svojo
              prepoznavnost na trgu.
            </p>
            <Link
              href="mailto:info@marcelgolob.com"
              className={`mt-4 ${styles.actionBtn}`}
            >
              ŽELIM BREZPLAČNO PONUDBO{" "}
              <Image src="/arrow-green.svg" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
