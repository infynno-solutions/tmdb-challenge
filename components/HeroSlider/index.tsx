import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Imdb from "../../public/images/IMBD.svg";
import Like from "../../public/images/Like.svg";
import Play from "../../public/images/Play.svg";
const HeroSlider = ({ topmovieList }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {topmovieList?.map((item: any, ind: number) => {
        return (
          <div key={ind}>
            <div
              className="relative container bg-cover bg-center h-[600px]"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`,
              }}
            ></div>
            <div className="absolute container top-1/4  transform   text-white">
              <div className="flex w-4/12 flex-col">
                <h1 className="text-5xl font-bold break-normal my-3">
                  {item?.title}
                </h1>
                <div className="flex my-3">
                  <div className="flex">
                    <Image src={Imdb} width={35} height={17} alt="imdb" />
                    <span className="px-2">
                      {item?.vote_average.toFixed() * 10}/100
                    </span>
                  </div>
                  <div className="flex px-4">
                    <Image src={Like} width={16} height={17} alt="Like" />
                    <span className="px-2">{item?.popularity.toFixed()}%</span>
                  </div>
                </div>
                <p className="text-sm my-3 font-medium">{item?.overview}</p>
                <button className="bg-[#BE123C] w-[170px] text-sm text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                  <Image
                    src={Play}
                    width={20}
                    height={20}
                    alt="play"
                    className="mx-2"
                  />
                  Watch trailer
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HeroSlider;
