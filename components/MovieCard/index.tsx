"use client";
import Image from "next/image";
import React from "react";
import Imdb from "../../public/images/IMBD.svg";
import Like from "../../public/images/Like.svg";
import Heart from "../../public/images/Heart.svg";
const MovieCard = ({ key, item, genresList }: any) => {
  const getGenreById = (id: number) => {
    const data = genresList.find((genre: any) => genre.id === id);
    return data?.name;
  };
  return (
    <div key={key} className="flex flex-col items-center h-[550px] w-[250px]">
      <Image
        src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
        width={100}
        height={600}
        alt={"bg-image"}
        unoptimized
        priority
        className="w-full h-[350px] object-cover mb-2"
      />
      <div className="absolute w-[220px] flex justify-end items-center my-2">
        <div className="flex justify-center items-center w-[30px] h-[30px] bg-gray-400/60 rounded-full">
          <Image src={Heart} width={20} height={20} alt="Heart" />
        </div>
      </div>
      <div className="flex flex-col justify-start w-[100%] gap-2">
        <span className="text-[#9CA3AF] text-xs">
          USA, {item?.release_date?.split("-")[0]}
        </span>
        <p className="text-[#111827] text-lg font-bold">{item?.title}</p>
        <div className="flex justify-between">
          <div className="flex">
            <Image src={Imdb} width={35} height={17} alt="imdb" />
            <span className="text-[#111827] font-normal text-xs px-1">
              {item?.vote_average.toFixed() * 10}/100
            </span>
          </div>
          <div className="flex px-4">
            <Image src={Like} width={16} height={17} alt="Like" />
            <span className="text-[#111827] font-normal text-xs px-1">
              {item?.popularity.toFixed() / 10}%
            </span>
          </div>
        </div>
        <div className="flex">
          {item?.genre_ids?.map((item: any) => (
            <span className="text-[#9CA3AF] text-xs px-1">
              {getGenreById(item)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
