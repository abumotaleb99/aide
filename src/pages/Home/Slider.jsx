import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bannerImage from "../../assets/banner/banner.png";

const Slider = () => {
  return (
    <div className="w-full md:max-w-[1440px] mx-auto px-4 mt-6 md:px-0 lg:mt-8">
      <Swiper className="mySwiper max-h-[450px]">
        <SwiperSlide>
          <img
            src={bannerImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
