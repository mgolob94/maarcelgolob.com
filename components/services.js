import Image from "next/image";
import styles from "../styles/Services.module.css";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className={`section ${styles.services}`}>
        <div className="container">
          <h2 className="secondaryTitle">What services I provide</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <Image
                src="/web.svg"
                alt="spletne-strani"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Web sites</h3>
            </div>
            <div className="col-md-4 text-center">
              <Image
                src="/stores.svg"
                alt="spletne-trgovine"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Online stores</h3>
            </div>
            <div className="col-md-4 text-center">
              <Image
                src="/mobile.svg"
                alt="mobilne-aplikacije"
                width={290}
                height={250}
              />
              <h3 className="text-center mt-3">Mobile apps</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
