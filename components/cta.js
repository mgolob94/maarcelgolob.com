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
              Get Ready to Grow Your Business
            </h2>
            <Link href="/contact" className={`mt-4 ${styles.actionBtn}`}>
              LET'S CONNECT{" "}
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
