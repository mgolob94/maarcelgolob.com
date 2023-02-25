import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <h2 className="secondaryTitle">Reference</h2>
          <div className="row">
            <div className="col-md-4">
              <Link
                href="https://www.sanjskiatelje.si/"
                className={`card ${styles.card}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="projectName m-0">SANJSKI ATELJE</h3>
                  <Image
                    src="/arrow-right.svg"
                    width={30}
                    height={18}
                    alt="Izdelava spletnih strani"
                    title="Izdelava spletnih strani"
                  />
                </div>
                <Image
                  src="/spletna_stran_sanjskiatelje.jpeg"
                  alt="Izdelava spletne strani Sanjski atelje"
                  title="Izdelava spletne strani Sanjski atelje"
                  tooltip="Izdelava spletne strani Sanjski atelje"
                  width={419}
                  height={419}
                  className="img-fluid w-100"
                />
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                href="https://www.web-center.si/"
                className={`card ${styles.card}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="projectName m-0">WEB CENTER</h3>
                  <Image
                    src="/arrow-right.svg"
                    width={30}
                    height={18}
                    alt="Izdelava spletnih strani"
                    title="Izdelava spletnih strani"
                  />
                </div>
                <Image
                  src="/spletna_stran_webcenter.jpeg"
                  alt="Izdelava spletne strani Web Center"
                  title="Izdelava spletne strani Web Center"
                  tooltip="Izdelava spletne strani Web Center"
                  width={419}
                  height={419}
                  className="img-fluid w-100"
                />
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                href="https://izifroc.com/"
                className={`card ${styles.card}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="projectName m-0">IZIFROC</h3>
                  <Image
                    src="/arrow-right.svg"
                    width={30}
                    height={18}
                    alt="Izdelava spletnih strani"
                    title="Izdelava spletnih strani"
                  />
                </div>
                <Image
                  src="/izdelava_spletne_trgovine_izifroc.jpeg"
                  alt="Izdelava spletne trgovine Izi Froc"
                  title="Izdelava spletne trgovine Izi Froc"
                  tooltip="Izdelava spletne trgovine Izi Froc"
                  width={419}
                  height={419}
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
