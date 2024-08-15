import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Expertise() {
  const t = useTranslations();

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h2 className="mainTitle">{t("together")}</h2>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="box-grey">
              <div className="d-flex align-items-center mb-4">
                <div className="expertise-icon">
                  <Image
                    src="/lunch-app.png"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                  />
                </div>
                <div className="expertise-title">
                  <h3>
                  {t("mvp")}
                  </h3>
                </div>
              </div>
              <p>
                {t("mvp_desc")}
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
                    alt="Picture of the author"
                  />
                </div>
                <div className="expertise-title">
                  <h3>
                  {t("web")}
                  </h3>
                </div>
              </div>
              <p>
              {t("web_desc")}
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
                    alt="Picture of the author"
                  />
                </div>
                <div className="expertise-title">
                  <h3>
                  {t("mobile")}
                  </h3>
                </div>
              </div>
              <p>
              {t("mobile_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
