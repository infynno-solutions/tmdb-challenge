"use client";
import Slider from "react-slick";
import MovieCard from "../MovieCard";
import CastsCard from "../CastsCard";

const MovieCarousel = ({ data, category, genresList }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {category === "movie" &&
        data?.map((item: any, ind: any) => {
          return (
            <MovieCard
              key={item?.id + ind}
              {...item}
              item={item}
              genresList={genresList}
            />
          );
        })}
      {category === "casts" &&
        data?.map((item: any) => {
          return <CastsCard key={item?.id} item={item} />;
        })}
    </Slider>
  );
};

export default MovieCarousel;
