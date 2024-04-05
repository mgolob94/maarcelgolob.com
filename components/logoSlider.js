import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


// Enable Navigation and Autoplay modules
SwiperCore.use([Navigation, Autoplay]);

const LogoSlider = () => {
  const logos = [
    "/MiaCo-logo.png",
    "/SanjskiAtelje_Logo.png",
    "/etnobotanika-logotip.png",
    "/logo-wc.png",
    "/logotip_izifroc.png",
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="mainTitle mb-5">Trusted by</h2>
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
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{ width: "100%", objectFit: "contain", height: "80px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
