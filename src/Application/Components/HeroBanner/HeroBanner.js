"use client";

import { HeroBannerSlider } from "./HeroBannerSlider/HeroBannerSlider";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const HeroBanner = () => {
  return (
    <div className="heroBanner w-full overflow-hidden">
      <div className="grid grid-cols-1">
        <div className="h-[700px]">
          <HeroBannerSlider settings={settings} />
        </div>
      </div>
    </div>
  );
};
