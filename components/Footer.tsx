import React from "react";

function Footer() {
  return (
    <footer className="vertical-spacing !pt-0 flex flex-col gap-7">
      <div className="flex gap-12 justify-center">
        <img src={"/facebook.svg"} className={`h-6 aspect-square cursor-pointer`} alt="facebook-icon" />
        <img src={"/instagram.svg"} className={`h-6 aspect-square cursor-pointer`} alt="instagram-icon" />
        <img src={"/twitter.svg"} className={`h-6 aspect-square cursor-pointer`} alt="twiter-icon" />
        <img src={"/youtube.svg"} className={`h-6 aspect-square cursor-pointer`} alt="youtube-icon" />
      </div>
      <div className="flex 
      flex-wrap items-center gap-4 sm:gap-16 justify-center">
        <div className="text-xs sm:text-lg font-bold">Conditions of Use</div>
        <div className="text-xs sm:text-lg font-bold">Privacy & Policy</div>
        <div className="text-xs sm:text-lg font-bold">Press Room</div>
      </div>
      <div className="text-center">
        <p className="text-xs sm:text-lg font-bold text-[#6B7280]">
          &#169; 2021 MovieBox by Adriana Eka Prayudha
        </p>
      </div>
    </footer>
  );
}

export default Footer;
