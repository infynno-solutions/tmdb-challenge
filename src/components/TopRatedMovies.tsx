"use client";
import React from "react";
import { useFetch } from "../hooks/useFetch";
import { TOP_RATED_MOVIE } from "../api";
import ImdbTag from "@/public/ImdbTag.svg";
import ImgTomato from "@/public/Tomato.svg";
import Play from "@/public/Play.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TopRatedMovies = () => {
  const {
    data: { results },
  } = useFetch(TOP_RATED_MOVIE);

  const movies: ITopRatedMovie[] = results?.map(
    (result: {
      id: number;
      title: string;
      overview: string;
      poster_path: string;
      vote_average: number;
    }) => {
      const { id, title, overview, poster_path, vote_average } = result;
      return {
        id,
        title,
        overview,
        imageUrl: poster_path,
        votePercent: (vote_average * 10).toFixed(2),
      };
    }
  );

  return (
    <>
      <div>
        <Swiper
          className="swp"
          direction={"vertical"}
          pagination={{
            // dynamicBullets: true,
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"> ${index + 1} </span>`;
            },
          }}
          modules={[Pagination]}
        >
          {movies
            ?.slice(14)
            ?.map(({ id, imageUrl, overview, title, votePercent }) => (
              <SwiperSlide>
                <section
                  className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30"
                  style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/w500/${imageUrl}')`,
                  }}
                >
                  <div className="flex-1 flex items-center">
                    <div className="max-w-[410px] ml-24">
                      <h1 className="text-5xl font-bold leading-[56px]">
                        {title}
                      </h1>
                      <div className="flex gap-10 my-5">
                        <div className="flex gap-2">
                          <Image src={ImdbTag} alt="ImdbTag" width={35} />
                          <span className="text-sm">{votePercent} / 100</span>
                        </div>
                        <div className="flex gap-2">
                          <Image src={ImgTomato} alt="TomatoImg" width={16} />
                          <span className="text-sm">86%</span>
                        </div>
                      </div>
                      <p className="font-medium text-sm my-5">{overview}</p>
                      <button className="flex gap-2 items-center px-4 py-2 rounded-md bg-[#BE123C] text-sm font-bold text-white">
                        <Image src={Play} alt="TomatoImg" />
                        WATCH TRAILER
                      </button>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopRatedMovies;
