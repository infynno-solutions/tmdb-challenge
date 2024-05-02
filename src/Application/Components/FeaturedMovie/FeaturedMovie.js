"use client";

import { RightArrowIcon } from "@/Application/Molecules/Icons/RightArrowIcon";
import Link from "next/link";
import { FeaturedMovieSlider } from "./FeaturedMovieSlider/FeaturedMovieSlider";

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

export const FeaturedMovie = () => {
  return (
    <div className="featuredMovie container py-20 max-sm:py-10">
      <div className="flex justify-between items-center mb-16 max-sm:mb-10 max-sm:block">
        <h3 className="text-4xl font-bold max-sm:mb-4">Featured Movie</h3>
        <Link
          href="/"
          className="flex gap-3 items-center text-lg text-rose-700"
        >
          Show More <RightArrowIcon />
        </Link>
      </div>
      <div>
        <FeaturedMovieSlider settings={settings} />
      </div>
    </div>
  );
};
