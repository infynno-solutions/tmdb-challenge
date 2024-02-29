"use client";
import { Children, ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface CustomSwiperProps {
  children: ReactNode[];
}

function CustomSwiper({ children }: CustomSwiperProps) {
  const arrayChildren = Children.toArray(children);
  const swiperRef = useRef<any>(null);
  return (
    <div className="flex w-full">
      <button
        className="shrink-0"
        onClick={() => {
          swiperRef?.current?.swiper?.slidePrev();
        }}
      >
        <img src="/right.svg" alt="right" />
      </button>
      <Swiper
        ref={swiperRef}
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper grow [&_.swiper-button-next]:text-black [&_.swiper-button-prev]:text-black"
      >
        {Children.map(arrayChildren, (item) => (
          <SwiperSlide key={item?.toString()}>{item}</SwiperSlide>
        ))}
        {/* {list?.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <FeaturedCard item={item} index={index} />
              </SwiperSlide>
            );
          })} */}
      </Swiper>
      <button
        className="shrink-0"
        onClick={() => {
          swiperRef?.current?.swiper?.slideNext();
        }}
      >
        <img src="/left.svg" alt="left" />
      </button>
    </div>
  );
}
export default CustomSwiper;
