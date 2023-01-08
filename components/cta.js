import Link from "next/link";
import styles from "../styles/Cta.module.css";
import Image from "next/image";

export default function Cta() {
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className={`text-center ${styles.ctaWrapper}`}>
            <h2 className="text-center mb-5">Enhance your business with me</h2>
            <p className="mb-4">
              Duis lorem et tellus enim nullam nibh est turpis integer.
              <br /> Tempus orci elementum lacus, integer urna mattis tellus
              aliquet. Sagittis sollicitudin massa.
            </p>
            <Link href="" className={`mt-4 ${styles.actionBtn}`}>
              BOOK A FREE CONSULTATION{" "}
              <Image src="/arrow-green.svg" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
