import Image from "next/image";
import React from "react";
import Facebook from "../../public/images/fa-brands_facebook-square.svg";
import Instagram from "../../public/images/fa-brands_instagram.svg";
import Twitter from "../../public/images/fa-brands_twitter.svg";
import Youtube from "../../public/images/fa-brands_youtube.svg";

const Footer = () => {
  return (
    <div className="container w-[100%] flex flex-col justify-center items-center mt-24">
      <div className="flex justify-between mb-5">
        <Image
          className="cursor-pointer mx-10"
          src={Facebook}
          width={24}
          height={27}
          alt="Facebook"
        />
        <Image
          className="cursor-pointer mx-10"
          src={Instagram}
          width={24}
          height={27}
          alt="Instagram"
        />
        <Image
          className="cursor-pointer mx-10"
          src={Twitter}
          width={24}
          height={27}
          alt="Twitter"
        />
        <Image
          className="cursor-pointer mx-10"
          src={Youtube}
          width={24}
          height={27}
          alt="Youtube"
        />
      </div>
      <div className="mb-5">
        <a href="#" className="text-[#111827] text-base cursor-pointer mx-10">
          Conditions of Use
        </a>
        <a href="#" className="text-[#111827] text-base cursor-pointer mx-10">
          Privacy & Policy
        </a>
        <a href="#" className="text-[#111827] text-base cursor-pointer mx-10">
          Press Room
        </a>
      </div>
      <span className="mb-5">© 2021 MovieBox by Adriana Eka Prayudha </span>
    </div>
  );
};

export default Footer;
