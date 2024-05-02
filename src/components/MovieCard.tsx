import React from "react";
import ImdbTag from "@/public/ImdbTag.svg";
import ImgTomato from "@/public/Tomato.svg";
import ImgCatTag from "@/public/CatTag.svg";
import ImgFavorite from "@/public/Favorite.svg";
import Image from "next/image";

const MovieCard = ({
  genres,
  imageUrl,
  language,
  releaseYear,
  title,
  votePercent,
}: IMovieCard) => {
  return (
    <div className="relative w-[250px] mt-10 mx-auto">
      <Image
        className="absolute top-4 left-4"
        src={ImgCatTag}
        alt="ImgPoster"
      />
      <Image
        className="absolute top-3 right-4"
        src={ImgFavorite}
        alt="ImgPoster"
      />
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          alt={title}
          width={250}
          height={370}
        />
      </div>
      <div className="mt-1">
        <span className="text-[#9CA3AF] text-[12px] font-semibold">
          {`${language}, ${releaseYear}`}
        </span>
        <h2 className="my-1 mb-2 text-[18px] font-bold">{title}</h2>
        <div className="flex justify-between mb-2">
          <div className="flex gap-2">
            <Image src={ImdbTag} alt="ImdbTag" width={35} />
            <span className="text-sm">{votePercent} / 100</span>
          </div>
          <div className="flex gap-2">
            <Image src={ImgTomato} alt="TomatoImg" width={16} />
            <span className="text-sm">86%</span>
          </div>
        </div>
        <span className="text-[#9CA3AF] text-[12px] font-semibold">
          {genres.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
