import Image from "next/image";
import React from "react";

const CastsCard = ({ key, item }: any) => {
  return (
    <div key={key} className="flex flex-col items-center h-[500] w-[250px]">
      <Image
        src={`https://image.tmdb.org/t/p/original${item?.profile_path}`}
        width={100}
        height={600}
        alt={"title"}
        unoptimized
        priority
        className="w-full h-[350px] object-cover mb-3"
      />
      <div className="flex justify-start w-[250px]">
        <p className="text-[#111827] text-lg font-bold">{item?.name}</p>
      </div>
    </div>
  );
};

export default CastsCard;
