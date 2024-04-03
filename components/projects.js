import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <div class="row">
            <div className="col-md-12">
              <h2 className="mainTitle mb-3">Recent work.</h2>
            </div>
            <div className="col-md-6 h-full">
              <Link
                href="https://www.etnobotanika.eu/"
                className={`card ${styles.card} ${styles.cardgreen} p-relative`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className={`position-absolute ${styles.cardContent}`}>
                    <h2 className="projectName m-0 mb-4">Etnobotanika</h2>
                    <h3>Izvajalec: Marcel Golob s.p.</h3>
                    <h3>Tehnologije: PHP, WordPress/WooCommerce</h3>
                  </div>
                </div>
                <Image
                  src="/etnobotanika.png"
                  alt="Razvoj spletnih aplikacij"
                  title="Razvoj spletnih aplikacij"
                  tooltip="Razvoj spletnih aplikacij"
                  width={1000}
                  height={1000}
                  className="img-fluid w-100"
                />
              </Link>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 p-2 h-full">
                  <Link
                    href="https://www.sanjskiatelje.si/"
                    className={`card ${styles.card} ${styles.cardgreen}`}
                    target="__blank"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div
                        className={`position-absolute ${styles.cardContent}`}
                      >
                        <h2 className="projectName mb-4">Sanjski atelje</h2>
                        <h3>Izvajalec: Marcel Golob s.p.</h3>
                        <h3>Tehnologije: PHP, WordPress</h3>
                      </div>
                    </div>
                    <Image
                      src="/sanjski-atelje.png"
                      alt="Razvoj spletnih aplikacij"
                      title="Razvoj spletnih aplikacij"
                      tooltip="Razvoj spletnih aplikacij"
                      width={1000}
                      height={1000}
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
                <div className="col-md-6 p-2 h-full">
                  <Link
                    href="https://bloq.it"
                    className={`card ${styles.card} ${styles.cardgreen}`}
                    target="__blank"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div
                        className={`position-absolute ${styles.cardContent}`}
                      >
                        <h2 className="projectName m-0 mb-4">Bloq.it</h2>
                        <h3>Izvajalec: Tovarna idej d.o.o.</h3>
                        <h3>sodeloval kot Flutter developer</h3>
                        <h3>Tehnologije: Flutter</h3>
                      </div>
                    </div>
                    <Image
                      src="/bloqit.png"
                      alt="Mobilne aplikacije"
                      title="Mobilne aplikacije"
                      tooltip="Mobilne aplikacije"
                      width={1000}
                      height={1000}
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>

                <div className="col-md-6 p-2 h-full">
                  <Link
                    href="https://www.web-center.si"
                    className={`card ${styles.card} ${styles.cardgreen}`}
                    target="__blank"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div
                        className={`position-absolute ${styles.cardContent}`}
                      >
                        <h2 className="projectName m-0 mb-4">Web Center</h2>
                        <h3>Izvajalec: Marcel Golob s.p.</h3>
                        <h3>Tehnologije: WordPress</h3>
                      </div>
                    </div>
                    <Image
                      src="/webcenter.png"
                      alt="Razvoj mobilnih aplikacij"
                      title="Razvoj mobilnih aplikacij"
                      tooltip="Razvoj mobilnih aplikacij"
                      width={1000}
                      height={1000}
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>

                <div className="col-md-6 p-2 h-full flex justify-items-center align-center">
                <Link
                    href="https://www.web-center.si"
                    className={`card ${styles.card} ${styles.cardgreen}`}
                    target="__blank"
                  >
                    <div className="h-full d-flex justify-content-center align-items-center mb-3">
                      <h2>. . .</h2>
                      </div>
                      </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
