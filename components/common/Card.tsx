"use client";
import React from "react";

interface CardProps {
  src: string;
  releaseDate?: number;
  title: string;
  rating?: number;
  genre?: string;
  showHeart?: boolean;
}

export default function ({
  src,
  releaseDate,
  title,
  rating,
  genre,
  showHeart = true,
}: CardProps) {
  return (
    <div className="select-none relative">
      <img
        src={src}
        draggable={false}
        className="w-full h-[390px] object-cover"
        alt="image"
      />

      {showHeart && (
        <div className="absolute top-[4%] right-[6%]">
          <img
            src={"/heart.svg"}
            alt="heart"
            className="h-[25px] aspect-square"
          />
        </div>
      )}
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
      {genre && (
        <div className="pb-2 mt-3 text-xs font-semibold text-[#9CA3AF] overflow-hidden text-ellipsis whitespace-nowrap">
          {genre}
        </div>
      )}
    </div>
  );
}
