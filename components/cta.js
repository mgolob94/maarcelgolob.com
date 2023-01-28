import Link from "next/link";
import styles from "../styles/Cta.module.css";
import Image from "next/image";

export default function Cta() {
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className={`text-center ${styles.ctaWrapper}`}>
            <h2 className="text-center mb-5">
              Ste pripravljeni dvigniti vašo spletno podobo na višji nivo?
            </h2>
            <p className="mb-4">
              Izdelava spletne strani je ključnega pomena za uspeh vašega
              podjetja v današnjem digitalnem svetu. Dovolite nam, da za vas
              izdelamo unikatno spletno stran, ki bo navdušila.
            </p>
            <Link href="/contact" className={`mt-4 ${styles.actionBtn}`}>
              ŽELIM BREZPLAČNO PONUDBO{" "}
              <Image
                src="/arrow-green.svg"
                width={20}
                height={20}
                alt="Izdelava spletnih strani Ljubljana"
                titlle="Izdelava spletnih strani Ljubljana"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
