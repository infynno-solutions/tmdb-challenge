"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import RightArrow from "../public/images/Chevron-right.svg";
import MovieCarousel from "@/components/MovieCarousel";
import HeroSlider from "@/components/HeroSlider";
import useFetchData from "@/hooks";
import Loader from "@/components/Loader";

//params datatype
interface ApiParams {
  api_key: string;
  language: string;
  page?: string;
  region?: string;
}

export default function Home() {
  const [hydrationLoad, setHydrationLoad] = useState(true);

  useEffect(() => {
    setHydrationLoad(false);
  }, []);

  //Created a custom hook for fetch API's data
  const movieList = useFetchData("movie/popular", {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    language: "en-US",
    page: "1",
    region: "UAS",
  } as ApiParams);

  const topMovieList = useFetchData("movie/top_rated", {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    language: "en-US",
    page: "1",
  } as ApiParams);

  const castsList = useFetchData("person/popular", {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    language: "en-US",
    page: "1",
  } as ApiParams);

  const genresList = useFetchData("genre/movie/list", {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    language: "en-US",
  } as ApiParams);

  return (
    <>
      {hydrationLoad ? (
        //create custom loader component
        <Loader />
      ) : (
        <main className="Home-wrapper overflow-hidden">
          {/* Create component for Banner section slider */}
          <HeroSlider topmovieList={topMovieList} />
          <div className="featured-movie-wrapper container mt-16">
            <div className="flex justify-between items-center mb-10">
              <p className="text-4xl text-black font-bold">Featured Movie</p>
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-[#BE123C] cursor-pointer px-0.5 text-lg"
                >
                  See more
                </a>
                <Image
                  className=" cursor-pointer"
                  src={RightArrow}
                  width={20}
                  height={20}
                  alt="Right-Arrow"
                />
              </div>
            </div>
            {/* Custom component for Movie carousel */}
            <MovieCarousel
              data={movieList}
              category={"movie"}
              genresList={genresList}
            />
          </div>
          <div className="featured-cast-wrapper container">
            <div className="flex justify-between items-center mb-10">
              <p className="text-4xl text-black font-bold">Featured Casts</p>
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-[#BE123C] cursor-pointer px-0.5 text-lg"
                >
                  See more
                </a>
                <Image
                  className=" cursor-pointer"
                  src={RightArrow}
                  width={20}
                  height={20}
                  alt="Right-Arrow"
                />
              </div>
            </div>
            {/* Custom component for Casts carousel */}
            <MovieCarousel data={castsList} category={"casts"} />
          </div>
        </main>
      )}
    </>
  );
}
