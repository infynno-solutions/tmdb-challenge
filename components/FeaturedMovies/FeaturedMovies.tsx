import APIManager from "@/manager/APIManager";

const apiManager = new APIManager();

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl">Featured Movies</h1>
        <button className="font-normal text-lg text-[#B91C1C]">
          See more {">"}
        </button>
      </div>
    </section>
  );
}
export default FeaturedMovies;
