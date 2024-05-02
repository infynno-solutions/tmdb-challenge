"use client";

import { RightArrowIcon } from "@/Application/Molecules/Icons/RightArrowIcon";
import Link from "next/link";
import React from "react";
import { FeaturedCastsSlider } from "./FeaturedCastsSlider/FeaturedCastsSlider";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const FeaturedCasts = () => {
  return (
    <div className="featuredCast container">
      <div className="flex justify-between items-center mb-16 max-sm:mb-10 max-sm:block">
        <h3 className="text-4xl font-bold max-sm:mb-4">Featured Cast</h3>
        <Link
          href="/"
          className="flex gap-3 items-center text-lg text-rose-700"
        >
          Show More <RightArrowIcon />
        </Link>
      </div>
      <FeaturedCastsSlider settings={settings} />
    </div>
  );
};
