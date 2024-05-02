"use client";
import React from "react";
import Swiper from "./Swiper";
import { SwiperSlide } from "swiper/react";
import PersonCard from "./PersonCard";
import { useFetch } from "../hooks/useFetch";
import { POPULAR_PERSON } from "../api";
import RightArrow from "@/public/rightArrow.svg";
import Image from "next/image";

const FeaturedCast = () => {
  const {
    data: { results },
  } = useFetch(POPULAR_PERSON);

  const persons: IPersonCard[] = results?.map(
    (result: { id: number; name: string; profile_path: string }) => {
      const { id, name, profile_path } = result;
      return {
        id,
        name,
        imageUrl: profile_path,
      };
    }
  );

  return (
    <div className="my-8 mt-14">
      <div className="flex justify-between items-center mx-14">
        <h3 className="text-[36px] font-bold">Featured Casts</h3>
        <button className="flex text-[18px] text-[#BE123C]">
          See more
          <Image
            className="mt-0.5 ml-2"
            src={RightArrow}
            alt="Right Arrow"
            width={20}
            height={20}
          ></Image>{" "}
        </button>
      </div>
      <Swiper>
        {persons?.map((person: any) => (
          <SwiperSlide key={person.id}>
            <PersonCard key={person.id} {...person} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCast;
