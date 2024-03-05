import Banner from "@/components/Banner/Banner";
import FeaturedCast from "@/components/FeaturedCast/FeaturedCast";
import FeaturedMovies from "@/components/FeaturedMovies/FeaturedMovies";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <FeaturedMovies />
        <FeaturedCast />
      </main>
      <Footer />
    </>
  );
}
