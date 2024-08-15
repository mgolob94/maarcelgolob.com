import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useTranslations } from "next-intl";

// Enable Navigation and Autoplay modules
SwiperCore.use([Navigation, Autoplay]);

const LogoSlider = () => {
  const t = useTranslations();

  const logos = [
    { src: "/MiaCo-logo.png", url: "https://mia-co.si" },
    { src: "/SanjskiAtelje_Logo.png", url: "https://sanjskiatelje.si" },
    { src: "/etnobotanika-logotip.png", url: "https://etnobotanika.eu" },
    { src: "/logo-wc.png", url: "https://web-center.si" },
    { src: "/logotip_izifroc.png", url: "https://izifroc.com" },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="mainTitle mb-5">{t("trusted")}</h2>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
      spaceBetween={50}
          slidesPerView={4} // Adjust based on your requirement
          autoplay={{
            delay: 3000,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          speed={600}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <a href={logo.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  style={{ width: "100%", objectFit: "contain", height: "80px" }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
