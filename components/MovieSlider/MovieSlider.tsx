import APIManager from "@/manager/APIManager";
import { useEffect, useState } from "react";
import Slider from "./Slider";

export type SliderResult = {
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  vote_average: number;
  overview: string;
};

interface MovieSliderData {
  data: {
    results: SliderResult[];
  };
}

const apiManager = new APIManager();
async function getData() {
  const data = await apiManager.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );
  return data as MovieSliderData;
}

async function MovieSlider() {
  const data = await getData();
  const results = data?.data?.results || [];
  return (
    // <div className="lg:h-[75vh] relative max-lg:h-[430px] max-md:h-[350px] max-sm:h-[290px] lg:min-h-[350px] overflow-hidden">
    <div className="h-[50vh] md:h-[70vh] relative lg:h-[80vh] xl:h-screen min-h-[500px] overflow-hidden">
      <Slider results={results.length > 5 ? results.slice(0, 5) : results} />
      {/* <Slider results={[results[0]]} /> */}
    </div>
  );
}
export default MovieSlider;
