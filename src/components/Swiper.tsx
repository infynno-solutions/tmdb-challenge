"use client";
import React from "react";
import { Swiper as Carousel, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

type ISwiperProps = {
  children: React.ReactNode;
};

const Swiper = ({ children }: ISwiperProps) => {
  return (
    <Carousel
      className="swiper"
      navigation={true}
      modules={[Navigation]}
      slidesPerView={4}
    >
      {children}
    </Carousel>
  );
};

export default Swiper;
