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

type Genre = {
  id: number;
  name: string;
};

interface FeaturedMoviesData {
  data: {
    results: Movie[];
  };
}
interface GenreData {
  data: {
    genres: Genre[];
  };
}

async function getData() {
  const data = await apiManager.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );
  return data as FeaturedMoviesData;
}
async function getGenre() {
  const data = await apiManager.get(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  );
  return data as GenreData;
}
async function FeaturedMovies() {
  const data = await getData();
  const genres = await getGenre();
  return (
    <section className="galaxy-container vertical-spacing">
      <div className="flex justify-between mb-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Featured Movie
        </h1>
        <button className="font-normal whitespace-nowrap text-sm lg:text-lg text-[#BE123C]">
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
            genre={result.genre_ids
              .map((id: number) =>
                genres?.data?.genres?.find((obj) => obj.id === id)?.name
              )
              .join(", ")}
          />
        ))}
      </CustomSwiper>
    </section>
  );
}
export default FeaturedMovies;
