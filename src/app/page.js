import { HeroBanner } from "@/Application/Components/HeroBanner/HeroBanner";
import { FeaturedMovie } from "@/Application/Components/FeaturedMovie/FeaturedMovie";
import { FeaturedCasts } from "@/Application/Components/FeaturedCasts/FeaturedCasts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <FeaturedMovie />
      <FeaturedCasts />
    </main>
  );
}
