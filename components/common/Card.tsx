"use client";
import React from "react";

export default function ({ src, releaseDate, title, rating }: any) {
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
        className="w-full select-none h-[370px] object-cover"
        draggable={false}
        alt="movie image"
      />

      <div className="flex select-none items-center justify-between absolute top-[7%] w-full px-4">
        <img src={"images/Favorite.svg"} alt="heart" width={20} height={20} />
      </div>
      <p className="select-none md:text-sm text-xs font-semibold text-[#9CA3AF]">
        USA, {releaseDate}
      </p>
      <p className="select-none lg:text-lg text-base font-bold">{title}</p>

      <div className="select-none">
        <img src="/imdb.png" className="h-[25px]" />
        <p className="text-xs md:text-sm">{rating * 10} / 100</p>
      </div>
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
