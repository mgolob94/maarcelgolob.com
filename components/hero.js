import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <h1 className="mainTitle">Izdelava naprednih spletnih</h1>
                <div className="typing">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["strani", "trgovin", "aplikacij"],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </div>
              </div>

              <h2>
                Dovolite mi, da vaše želje pretvorim v digitalno realnost.
              </h2>
              <Link href="/contact" className={`mt-5 ${styles.actionBtn}`}>
                ŽELIM BREZPLAČNO PONUDBO{" "}
                <Image
                  src="/arrow.svg"
                  alt="Izdelava spletnih strani Ljubljana"
                  title="Izdelava spletnih strani Ljubljana"
                  width={20}
                  height={20}
                />
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
