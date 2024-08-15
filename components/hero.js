"use client";

import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { Source_Sans_Pro, Oswald } from "@next/font/google";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const Hero = React.memo(function Hero() {
  const t = useTranslations();

  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4">
                <div className="typing">
                  <h2 className={`mb-3`}>{t("wellcome")}</h2>
                  <h1 className={`mb-3`}>{t("title")}</h1>
                  {/* <h3>{t("description")}</h3> */}
                </div>
              </div>
              <div className="">
                <Link href="/contact" className={`mt-5 ${styles.actionBtn}`}>
                {t("letstalk")}
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
            <div className="col-lg-6 d-none d-lg-block">
              <div className="d-flex justify-content-end">
                <Image
                  src="/pwa.svg"
                  priority
                  width={500}
                  height={400}
                  alt="Web development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
export default Hero;
