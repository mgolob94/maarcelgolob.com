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
                Wellcome to my Portfolio Website
              </h1>
              <h2>
                I’m Marcel, a freelancer from the Slovenia. I’m working with
                brands to create
                <br /> the projects that leave a lasting impression.
              </h2>
              <Link href="" className={`mt-4 ${styles.actionBtn}`}>
                BOOK A FREE CONSULTATION{" "}
                <Image src="/arrow.svg" alt="" width={20} height={20} />
              </Link>
            </div>
            {/* <div className="col-md-6">
              <Image
                src="/homepage_first.png"
                alt="Marcel Golob"
                width={500}
                height={500}
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
