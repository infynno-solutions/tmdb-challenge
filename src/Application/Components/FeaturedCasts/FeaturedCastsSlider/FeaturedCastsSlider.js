import { SliderNextIcon } from "@/Application/Molecules/Icons/SliderNextIcon";
import { SliderPrevIcon } from "@/Application/Molecules/Icons/SliderPrevIcon";
import { GetMovieCastRequest } from "@/Infrastructure/Requests/GetMovieCastRequest";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export const FeaturedCastsSlider = ({ settings }) => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    GetMovieCastRequest(setMovieCast, setLoading);
  }, []);

  return (
    <Fragment>
      {movieCast.length > 0 ? (
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {movieCast.map(
              (cast) =>
                cast?.profile_path && (
                  <div key={cast.id}>
                    <div className="mx-3 relative">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${cast?.profile_path}`}
                        className="w-full"
                        width={250}
                        height={370}
                        priority={true}
                        alt={cast?.profile_path}
                      />
                      <h4 className="text-gray-900 font-bold capitalize mt-2 text-lg">
                        {cast.name}
                      </h4>
                    </div>
                  </div>
                )
            )}
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
