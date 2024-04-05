import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { Source_Sans_Pro, Oswald } from '@next/font/google';

export default function Hero() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="mb-4">


                <div className="typing">
                  {" "}
                  <h2 className={`mb-3`}>
                    Hi, I'm Marcel!
                    {/* <Typewriter
                      options={{
                        strings: [
                          "Marcel Golob",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 120,
                      }}
                    /> */}
                  </h2>
                  <h1 className={`mb-3`}>A Full-Stack Engineer.
                  Turning ideas into real life products is my calling</h1>

                  <h3>
                  I help Startups, Small and Medium-sized Bussiness launch and grow their digital products.</h3>
                </div>
              </div>
              <div className="">
                <Link href="/contact" className={`mt-5 ${styles.actionBtn}`}>
                  LET'S TALK{" "}
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
