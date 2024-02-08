import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <section id="projects" className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 p-2 h-full">
              <Link
                href="https://www.etnobotanika.eu/"
                className={`card ${styles.card} ${styles.cardgreen} p-relative`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className={`position-absolute ${styles.cardContent}`}>
                    <h2 className="projectName m-0 mb-4">Etnobotanika</h2>
                    <h3>Izvajalec: Marcel Golob s.p.</h3>
                    <h3>Tehnologije: WordPress/WooCommerce</h3>
                  </div>
                </div>
                <Image
                  src="/etnobotanika.png"
                  alt="Izdelava spletne strani Sanjski atelje"
                  title="Izdelava spletne strani Sanjski atelje"
                  tooltip="Izdelava spletne strani Sanjski atelje"
                  width={1000}
                  height={1000}
                  className="img-fluid w-100"
                />
              </Link>
            </div>
            <div className="col-md-6 p-2 h-full">
              <Link
                href="https://www.sanjskiatelje.si/"
                className={`card ${styles.card} ${styles.cardred}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className={`position-absolute ${styles.cardContent}`}>
                    <h2 className="projectName mb-4">Sanjski atelje</h2>
                    <h3>Izvajalec: Marcel Golob s.p.</h3>
                    <h3>Tehnologije: WordPress</h3>
                  </div>
                </div>
                <Image
                  src="/sanjski-atelje.png"
                  alt="Izdelava spletne strani Web Center"
                  title="Izdelava spletne strani Web Center"
                  tooltip="Izdelava spletne strani Web Center"
                  width={1000}
                  height={1000}
                  className="img-fluid w-100"
                />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-2 h-full">
              <Link
                href="https://bloq.it"
                className={`card ${styles.card} ${styles.cardred}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className={`position-absolute ${styles.cardContent}`}>
                    <h2 className="projectName m-0 mb-4">Bloq.it</h2>
                    <h3>Izvajalec: Tovarna idej d.o.o.</h3>
                    <h3>sodeloval kot Flutter developer</h3>
                    <h3>Tehnologije: Flutter</h3>
                  </div>
                </div>
                <Image
                  src="/bloqit.png"
                  alt="Izdelava spletne trgovine Izi Froc"
                  title="Izdelava spletne trgovine Izi Froc"
                  tooltip="Izdelava spletne trgovine Izi Froc"
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
                  <div className={`position-absolute ${styles.cardContent}`}>
                    <h2 className="projectName m-0 mb-4">Web Center</h2>
                    <h3>Izvajalec: Marcel Golob s.p.</h3>
                    <h3>Tehnologije: WordPress</h3>
                  </div>
                </div>
                <Image
                  src="/webcenter.png"
                  alt="Izdelava spletne trgovine Izi Froc"
                  title="Izdelava spletne trgovine Izi Froc"
                  tooltip="Izdelava spletne trgovine Izi Froc"
                  width={1000}
                  height={1000}
                  className="img-fluid w-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
