"use client";
import React from "react";

interface CardProps {
  src: string;
  releaseDate?: number;
  title: string;
  rating?: number;
}

export default function ({ src, releaseDate, title, rating }: CardProps) {
  const genreMap = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  return (
    <div className="select-none relative">
      <img
        src={src}
        draggable={false}
        className="w-full  h-[390px] object-cover"
        alt="movie image"
      />

      <div className="absolute top-[4%] right-[6%]">
        <img
          src={"/heart.svg"}
          alt="heart"
          className="h-[25px] aspect-square"
        />
      </div>
      {releaseDate && (
        <p className=" md:text-sm text-xs font-semibold mt-2 text-[#9CA3AF]">
          USA, {releaseDate}
        </p>
      )}
      <p className=" lg:text-lg text-base font-bold mt-1">{title}</p>

      {rating && (
        <div className="flex gap-3 mt-2 items-center">
          <img src="/imdb.png" className="h-[20px]" />
          <p className="text-xs md:text-sm">{(rating * 10).toFixed(2)} / 100</p>
        </div>
      )}
      {/* <span className="pb-2 text-xs font-semibold text-[#9CA3AF] line-clamp-1">
        {item.genre_ids
          .map(
            (id: number) =>
              `${genreMap.find((item) => item.id === id)?.name || ""}`
          )
          .join(", ")}
      </span> */}
    </div>
  );
}
