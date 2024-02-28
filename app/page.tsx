import FeaturedMovies from "@/components/FeaturedMovies/FeaturedMovies";
import MovieSlider from "@/components/MovieSlider/MovieSlider";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <MovieSlider />
      <FeaturedMovies />
    </>
  );
}
