import Image from "next/image";
import styles from "../styles/Services.module.css";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className={`section ${styles.services}`}>
        <div className="container">
          <h2 className="secondaryTitle">Katere storitve nudim</h2>
          <div className="row">
            <div className="col-md-4 text-center store">
              <Image
                src="/web.svg"
                alt="spletne-strani"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Spletne strani</h3>
            </div>
            <div className="col-md-4 text-center web">
              <Image
                src="/stores.svg"
                alt="spletne-trgovine"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Spletne trgovine</h3>
            </div>
            <div className="col-md-4 text-center mobile">
              <Image
                src="/mobile.svg"
                alt="mobilne-aplikacije"
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
