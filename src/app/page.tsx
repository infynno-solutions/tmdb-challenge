import FeaturedCast from "../components/FeaturedCast";
import FeaturedMovies from "../components/FeaturedMovies";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Hero />
        <FeaturedMovies />
        <FeaturedCast />
        <Footer />
      </div>
    </>
  );
}
