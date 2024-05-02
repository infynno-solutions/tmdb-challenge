"use client";

import { FavouriteIcon } from "@/Application/Molecules/Icons/FavouriteIcon";
import { SliderNextIcon } from "@/Application/Molecules/Icons/SliderNextIcon";
import { SliderPrevIcon } from "@/Application/Molecules/Icons/SliderPrevIcon";
import { GetFeaturedMovie } from "@/Infrastructure/Requests/GetFeaturedMovie";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export const FeaturedMovieSlider = ({ settings }) => {
  const [loading, setLoading] = useState(true);
  const [featuredMovies, setFeaturedMovies] = useState([]);

  const sliderRef = useRef(null);

  useEffect(() => {
    GetFeaturedMovie(setFeaturedMovies, setLoading);
  }, []);

  return (
    <Fragment>
      {featuredMovies.length > 0 ? (
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {featuredMovies.map((movie) => (
              <div key={movie?.id}>
                <div className="mx-3 relative">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    className="w-full"
                    width={250}
                    height={370}
                    alt={movie?.poster_path}
                    priority={true}
                  />
                  <FavouriteIcon className="absolute top-4 right-4 cursor-pointer" />
                  <span className="text-xs uppercase absolute top-4 font-bold left-4 bg-gray-100 rounded-xl px-2 py-1">
                    TV SERIES
                  </span>
                  <h6 className="text-gray-400 font-bold my-4 text-xs">
                    USA, 2016 - Current
                  </h6>
                  <h4 className="text-gray-900 font-bold capitalize mb-4 text-lg">
                    {/* Stranger Things */}
                    {movie?.title}
                  </h4>
                  <div className="flex justify-between mb-4 font-medium">
                    <div className="flex">
                      <Image
                        src="/images/IMDB.svg"
                        width={35}
                        height={17}
                        alt=""
                      />
                      <span className="text-xs text-gray-900 ml-4">
                        {(movie?.vote_average * 10).toFixed(1)} / 100
                        {/* 86.0 / 100 */}
                      </span>
                    </div>
                    <div className="flex">
                      <Image
                        src="/images/Tomato.svg"
                        width={16}
                        height={17}
                        alt=""
                      />
                      <span className="text-xs text-gray-900 ml-4">97%</span>
                    </div>
                  </div>
                  <h6 className="text-gray-400 font-bold my-4 text-xs">
                    Action, Adventure, Horror
                  </h6>
                </div>
              </div>
            ))}
          </Slider>
          <button
            onClick={() => sliderRef?.current?.slickPrev()}
            className="absolute left-[-35px] top-64 max-xl:hidden max-sm:left-[-15px]"
          >
            <SliderPrevIcon />
          </button>
          <button
            onClick={() => sliderRef?.current?.slickNext()}
            className="absolute right-[-35px] top-64 max-xl:hidden max-sm:right-[-15px]"
          >
            <SliderNextIcon />
          </button>
        </div>
      ) : loading ? (
        <h1 className="text-gray-900 text-center uppercase text-6xl">
          Loading...
        </h1>
      ) : (
        <h1 className="text-gray-900 text-center uppercase text-6xl">
          No data found
        </h1>
      )}
    </Fragment>
  );
};
