"use client";
import React from "react";
import { Genres } from "@/src/utils";
import Swiper from "./Swiper";
import { SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { useFetch } from "../hooks/useFetch";
import { FEATURED_MOVIE } from "../api";
import Image from "next/image";
import RightArrow from "@/public/rightArrow.svg";

const FeaturedMovies = () => {
  const {
    data: { results },
  } = useFetch(FEATURED_MOVIE);

  const movies: IMovieCard[] = results?.map(
    (result: {
      genre_ids: number[];
      id: number;
      original_language: string;
      poster_path: string;
      release_date: string;
      title: string;
      vote_average: number;
    }) => {
      const {
        genre_ids,
        id,
        original_language,
        poster_path,
        release_date,
        title,
        vote_average,
      } = result;
      const genres = genre_ids.map((g) => Genres[g]);
      return {
        genres,
        id,
        language: original_language,
        imageUrl: poster_path,
        releaseYear: new Date(release_date).getFullYear().toString(),
        title,
        votePercent: (vote_average * 10).toFixed(2),
      };
    }
  );

  return (
    <div className="my-8 mt-20">
      <div className="flex justify-between items-center mx-20">
        <h3 className="text-[36px] font-bold">Featured Movie</h3>
        <button className="flex text-[18px] text-[#BE123C]">
          See more
          <Image
            className="mt-0.5 ml-2"
            src={RightArrow}
            alt="Right Arrow"
            width={20}
            height={20}
          ></Image>
        </button>
      </div>
      <Swiper>
        {movies?.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <MovieCard key={movie.id} {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedMovies;
