import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Expertise() {
  const t = useTranslations();

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h2 className="mainTitle text-left mb-4">{t("together")}</h2>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="box-grey text-left">
              <div className="d-flex align-items-start mb-2 flex-column">
                <div className="expertise-icon mb-3">
                  <Image
                    src="/lunch-app.png"
                    width={40}
                    height={40}
                    alt="Izdelava spletnih strani Ljubljana"
                  />
                </div>
                <div className="expertise-title">
                  <h3>{t("mvp")}</h3>
                  <p>Sodobne, uporabniško dovršene spletne rešitve, ki izboljšujejo vašo spletno prisotnost in povečujejo prodajo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="box-grey text-left">
              <div className="d-flex align-items-start mb-2 flex-column">
                <div className="expertise-icon mb-3">
                  <Image
                    src="/coding-app.png"
                    width={40}
                    height={40}
                    alt="Izdelava spletnih strani Ljubljana"
                  />
                </div>
                <div className="expertise-title">
                  <h3>{t("web")}</h3>
                  <p>Povezujemo funkcionalnost z vrhunsko uporabniško izkušnjo za optimalno delovanje na vseh napravah.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="box-grey text-left">
              <div className="d-flex align-items-start mb-2 flex-column">
                <div className="expertise-icon mb-3">
                  <Image
                    src="/mobile-app.png"
                    width={40}
                    height={40}
                    alt="Izdelava spletnih strani Ljubljana"
                  />
                </div>
                <div className="expertise-title">
                  <h3>{t("mobile")}</h3>
                  <p>Razvoj hibridnih mobilnih aplikacij, ki prinašajo visoko zmogljivost in enotno uporabniško izkušnjo na vseh napravah. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
