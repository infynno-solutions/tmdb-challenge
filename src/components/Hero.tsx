import React from "react";
import Navbar from "./Navbar";

import TopRatedMovies from "./TopRatedMovies";

const Hero = () => {
  return (
    <div className="relative">
      <div className="navbar">
        <Navbar />
      </div>
      <TopRatedMovies />
    </div>
  );
};

export default Hero;
