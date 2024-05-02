import React from "react";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import twitter from "@/public/twitter.svg";
import youtube from "@/public/youtube.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-24 mb-10">
      <div className="flex justify-center gap-12">
        <Image src={facebook} alt="facebookImg" height={25} width={25} />
        <Image src={instagram} alt="instagramImg" height={25} width={25} />
        <Image src={twitter} alt="twitterImg" height={25} width={25} />
        <Image src={youtube} alt="youtubeImg" height={25} width={25} />
      </div>
      <div className="flex justify-center text-[18px] font-bold gap-12 my-9">
        <Link href={"/"}> Conditions of Use </Link>
        <Link href={"/"}> Privacy & Policy </Link>
        <Link href={"/"}> Press Room </Link>
      </div>
      <div className="flex justify-center text-[18px] text-[#6B7280] font-bold">
        © 2021 MovieBox by Adriana Eka Prayudha
      </div>
    </div>
  );
};

export default Footer;
