import React from "react";
import Image from "next/image";

const PersonCard = ({ imageUrl, name }: IPersonCard) => {
  return (
    <div className="relative w-[250px] mt-10 mx-auto">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            imageUrl ? imageUrl : "/bykmxJHLfbFM3NT05RZXhx8YTzF.jpg"
          }`}
          alt={name}
          width={250}
          height={370}
        />
      </div>
      <h2 className="my-1 mb-2 text-[18px] font-bold">{name}</h2>
    </div>
  );
};

export default PersonCard;
