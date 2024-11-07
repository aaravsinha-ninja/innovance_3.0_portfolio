import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

export const LatestProjects = () => {
  return (
    <>
      <h2 className="text-3xl mt-8 font-thin font-imfell mb-12 text-center">
        My Latest Projects
      </h2>
      <Swiper
        slidesPerView={1} // Default to 1 slide per view for mobile devices
        spaceBetween={10} // Default space between slides for mobile devices
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="slide-container">
            <img src="assests/natgeo_4.KOWE7s8I.jpg" alt="Image1" />
            <div className="overlay">Nat Geo</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="assests/miniature-cesarsociety.CPI5Bb3C.jpg"
              alt="Image2"
            />
            <div className="overlay">Cesar Society</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img
              src="assests/miniature-themandalorian.CUcv5SmN.jpg"
              alt="Image3"
            />
            <div className="overlay">The Mandalorian</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="assests/miniature-fitly.1XfRDU5K.jpg" alt="Image4" />
            <div className="overlay">Fitly</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="assests/miniature-adidas.BAdzdOaA.jpg" alt="Image5" />
            <div className="overlay">Adidas</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="assests/miniature-cesar.DznDD4Xt.jpg" alt="Image5" />
            <div className="overlay">Cesar</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
