import APIManager from "@/manager/APIManager";
import CustomSwiper from "../common/Swiper";
import Card from "../common/Card";

const apiManager = new APIManager();

type Cast = {
  profile_path: string;
  original_name: string;
};

interface FeaturedCastData {
  data: {
    results: Cast[];
  };
}

async function getData() {
  const data = await apiManager.get(
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1"
  );
  return data as FeaturedCastData;
}
async function FeaturedCast() {
  const data = await getData();
  return (
    <section className="galaxy-container !pt-0 vertical-spacing">
      <div className="flex justify-between mb-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Featured Casts
        </h1>
        <button className="font-normal whitespace-nowrap text-sm lg:text-lg text-[#BE123C]">
          See more {">"}
        </button>
      </div>
      <CustomSwiper>
        {data?.data?.results?.map((result) => (
          <Card
            showHeart={false}
            src={`https://image.tmdb.org/t/p/w500${result.profile_path}`}
            title={result.original_name}
          />
        ))}
      </CustomSwiper>
    </section>
  );
}
export default FeaturedCast;
