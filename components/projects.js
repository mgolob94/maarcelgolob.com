import Link from "next/link";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <>
      <section id="projects" className="section">
        <div class="container">
          <h2 class="secondaryTitle">Reference</h2>
          <div class="row">
            <div class="col-md-4">
              <Link
                href="https://www.sanjskiatelje.si/"
                className={`card ${styles.card}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 class="projectName m-0">SANJSKI ATELJE</h3>
                  <img src="/arrow-right.svg" />
                </div>
                <img src="/sanjskiatelje.jpeg" alt="" />
              </Link>
            </div>
            <div class="col-md-4">
              <Link
                href="https://www.web-center.si/"
                className={`card ${styles.card}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 class="projectName m-0">WEB CENTER</h3>
                  <img src="/arrow-right.svg" />
                </div>
                <img src="/webcenter.jpeg" alt="" />
              </Link>
            </div>
            <div class="col-md-4">
              <Link
                href="https://izifroc.com/"
                className={`card ${styles.card}`}
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 class="projectName m-0">IZIFROC</h3>
                  <img src="/arrow-right.svg" />
                </div>
                <img src="/izifroc.jpeg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
