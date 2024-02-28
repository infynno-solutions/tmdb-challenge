"use client";

import { useEffect, useRef, useState } from "react";
import { SliderResult } from "./MovieSlider";
import InfoSection from "../common/InfoSection";
const baseImageUrl = "https://image.tmdb.org/t/p/original";

interface SliderProps {
  results: SliderResult[];
}

function Slider({ results }: SliderProps) {
  console.log({ results });
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const intervalRef: any = useRef(null);

  const changeSlide = (index: number) => {
    setActiveImageIndex(index);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % results.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const handleNavigationClick = (index: number) => {
    stopAutoSlide();
    changeSlide(index);
    startAutoSlide();
  };

  return (
    <div className="h-full">
      <div className="absolute flex items-end flex-col right-6 top-1/2 z-10 -translate-y-1/2">
        {results.map((result, index) => (
          <div className={`flex items-center gap-4 font-bold`}>
            {activeImageIndex === index ? (
              <hr className="h-1 w-8 rounded-md bg-white" />
            ) : (
              ""
            )}
            <div
              onClick={() => handleNavigationClick(index)}
              className={`cursor-pointer transition-transform duration-300 ${
                index === activeImageIndex
                  ? "text-white scale-125"
                  : "text-[#9CA3AF]"
              }`}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>
      {results.map((result) => (
        <div
          key={result.poster_path}
          className="transition-transform duration-300 w-full h-full object-cover"
          style={{
            transform: `translateY(${-activeImageIndex * 100}%)`,
          }}
        >
          <div className="absolute z-10 max-w-[500px] left-[10%] top-1/2 -translate-y-1/2">
            <InfoSection
              details={result.overview}
              imdbRating={result.vote_average}
              title={result.original_title}
            />
          </div>
          <img
            key={result.poster_path}
            className="brightness-75 transition-transform duration-300 w-full h-full object-cover"
            // style={{
            //   transform: `translateY(${-activeImageIndex * 100}%)`,
            // }}
            src={baseImageUrl + result.backdrop_path}
          />
        </div>
      ))}
    </div>
  );
}
export default Slider;
