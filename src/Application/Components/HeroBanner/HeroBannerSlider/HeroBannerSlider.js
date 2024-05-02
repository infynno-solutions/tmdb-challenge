import { PlayIcon } from "@/Application/Molecules/Icons/PlayIcon";
import { GetBannerSlider } from "@/Infrastructure/Requests/GetBannerSlider";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";

export const HeroBannerSlider = ({ settings }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetBannerSlider(setTopRatedMovies, setLoading);
  }, []);

  return (
    <Fragment>
      {topRatedMovies.length > 0 ? (
        <Slider {...settings}>
          {topRatedMovies.map((movie) => (
            <div className="relative" key={movie?.id}>
              <div className="container">
                <div className="flex items-start h-[700px] max-w-[404px] flex-col justify-center">
                  <h1 className="text-5xl text-white leading-6xl font-bold font-sans mb-4 max-sm:text-4xl max-sm:leading-4xl">
                    {movie?.original_title}
                  </h1>
                  <div className="flex gap-10 mb-4 font-medium">
                    <div className="flex">
                      <Image
                        src="/images/IMDB.svg"
                        width={35}
                        height={17}
                        alt=""
                      />
                      <span className="text-xs text-white ml-4">
                        {(movie.vote_average * 10).toFixed(1)} / 100
                      </span>
                    </div>
                    <div className="flex">
                      <Image
                        src="/images/Tomato.svg"
                        width={16}
                        height={17}
                        alt=""
                      />
                      <span className="text-xs text-white ml-4">97%</span>
                    </div>
                  </div>
                  <p className="text-sm text-white mb-4">{movie?.overview}</p>
                  <button className="text-sm text-white uppercase hover:bg-gray-900 transition-all font-bold bg-rose-700 rounded py-3 pl-6 pr-5 max-sm:py-2 flex gap-3 items-center">
                    <PlayIcon /> Watch trailer
                  </button>
                </div>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                  className="w-full h-full absolute top-0 -z-10 left-0 object-fill object-top"
                  alt=""
                  layout="fill"
                  priority={true}
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex items-center justify-center relative h-[700px]">
          <h1 className="text-white uppercase font-bold text-6xl">
            {loading ? "Loading..." : "No data found"}
          </h1>
          <Image
            src="/images/Poster.png"
            className="absolute h-full w-full left-0 top-0 -z-10 object-fill object-top"
            layout="fill"
            alt=""
            priority={true}
          />
        </div>
      )}
    </Fragment>
  );
};
