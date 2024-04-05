import Image from "next/image";

export default function Expertise() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h2 className="mainTitle">Let's work together</h2>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="box-grey">
              <div className="d-flex align-items-center mb-4">
                <div className="expertise-icon">
                  <Image
                    src="/lunch-app.png"
                    width={40}
                    height={40}
                    alt="MVP development"
                  />
                </div>
                <div className="expertise-title">
                  <h3>
                    MVP Development
                    <br /> for Startups
                  </h3>
                </div>
              </div>
              <p>
                Specialized in MVP (Minimum Viable Product) development for
                startups, focusing on rapid, lean methodologies to bring
                innovative ideas to market swiftly.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="box-grey">
              <div className="d-flex align-items-center mb-4">
                <div className="expertise-icon">
                  <Image
                    src="/coding-app.png"
                    width={40}
                    height={40}
                    alt="Webh development"
                  />
                </div>
                <div className="expertise-title">
                  <h3>
                    Web <br />
                    Solutions
                  </h3>
                </div>
              </div>
              <p>
                With a deep understanding of modern web technologies and best
                practices, I design and develop websites and web applications
                that are robust, scalable, and user-friendly.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="box-grey">
              <div className="d-flex align-items-center mb-4">
                <div className="expertise-icon">
                  <Image
                    src="/mobile-app.png"
                    width={40}
                    height={40}
                    alt="Mobile development"
                  />
                </div>
                <div className="expertise-title">
                  <h3>
                    Mobile
                    <br /> Applications
                  </h3>
                </div>
              </div>
              <p>
                My proficiency with Flutter allows for the development of
                visually striking and smooth-running apps, ensuring consistent
                user experiences across Android and iOS platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
