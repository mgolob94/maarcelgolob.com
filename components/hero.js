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
                <div className="typing">
                  {" "}
                  <h1 className="mainTitle text-center">
                    Razvoj inovativnih <br></br> digitalnih rešitev
                    {/* <Typewriter
                      options={{
                        strings: [
                          "Razvoj spletnih aplikacij",
                          "SEO optimizacija",
                          "Mobilne aplikacije",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 120,
                      }}
                    /> */}
                  </h1>
                </div>
              </div>

              <h2 className="text-center">
                Spletne aplikacije | Mobilne aplikacije | SEO optimizacija | MVP razvoj
              </h2>
              <div className="text-center">
                <Link href="mailto:info@marcelgolob.com" className={`mt-5 ${styles.actionBtn}`}>
                  ZAČNIMO PROJEKT{" "}
                  <Image
                    src="/arrow.svg"
                    alt="Razvoj mobilnih aplikacij"
                    title="Razvoj mobilnih aplikacij"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
