import APIManager from "@/manager/APIManager";
import CustomSwiper from "../common/Swiper";
import Card from "../common/Card";

const apiManager = new APIManager();

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
};

interface FeaturedMoviesData {
  data: {
    results: Movie[];
  };
}

async function getData() {
  const data = await apiManager.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );
  return data as FeaturedMoviesData;
}
async function FeaturedMovies() {
  const data = await getData();
  console.log(data);
  return (
    <section className="galaxy-container vertical-spacing">
      <div className="flex justify-between mb-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Featured Movies
        </h1>
        <button className="font-normal text-sm lg:text-lg text-[#B91C1C]">
          See more {">"}
        </button>
      </div>
      <CustomSwiper>
        {data?.data?.results?.map((result) => (
          <Card
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            rating={result.vote_average}
            releaseDate={new Date(result.release_date).getFullYear()}
            title={result.original_title}
          />
        ))}
      </CustomSwiper>
    </section>
  );
}
export default FeaturedMovies;