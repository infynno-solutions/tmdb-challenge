import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30"
      style={{ backgroundImage: `url('https://source.unsplash.com/random/')` }}
    >
      <Navbar />

      {/* <!-- Hero Section Content --> */}
      <div className="flex-1 flex items-center">
        <div className="text-center mx-auto">
          <h1 className="text-6xl font-semibold">Welcome to my site!</h1>
          <p className="font-light text-3xl mt-5">The land of opportunity.</p>
          <a
            className="px-5 py-2 inline-block bg-cyan-500 text-white hover:bg-cyan-400 transition-colors mt-10"
            href=""
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
