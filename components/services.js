import Image from "next/image";
import styles from "../styles/Services.module.css";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className={`section ${styles.services}`}>
        <div className="container">
          <h2 className="secondaryTitle">Digitalne rešitve</h2>
          <p></p>
          <div className="row">
            <div className="col-md-4 text-center store">
              <Image
                src="/izdelava_spletnih_strani.svg"
                alt="Izdelava spletnih strani"
                title="Izdelava spletnih strani"
                tooltip="Izdelava spletnih strani"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Izdelava spletnih aplikacij</h3>
            </div>
            <div className="col-md-4 text-center web">
              <Image
                src="/izdelava_spletnihh_trgovin.svg"
                alt="Izdelava spletnih trgovin"
                title="Izdelava spletnih trgovin"
                tooltip="Izdelava spletnih trgovin"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Izdelava spletnih trgovin</h3>
            </div>
            <div className="col-md-4 text-center mobile">
              <Image
                src="/razvoj_mobilnih_aplikacij.svg"
                alt="Izdelava mobilnih aplikacij"
                title="Razvoj mobilnih aplikacij"
                tooltip="Razvoj mobilnih aplikacij"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Razvoj mobilnih aplikacij</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
