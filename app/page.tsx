import FeaturedCast from "@/components/FeaturedCast/FeaturedCast";
import FeaturedMovies from "@/components/FeaturedMovies/FeaturedMovies";
import Footer from "@/components/Footer";
import MovieSlider from "@/components/MovieSlider/MovieSlider";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <MovieSlider />
      <FeaturedMovies />
      <FeaturedCast />
      <Footer />
    </>
  );
}
