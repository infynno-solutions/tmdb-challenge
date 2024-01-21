import Image from "next/image";
import React from "react";
import Logo from "../../public/images/Logo.png";
import hamburger from "../../public/images/Menu.svg";
import Search from "../../public/images/Search.svg";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full text-white py-4 ">
      <div className="container flex  justify-between items-center">
        <Image src={Logo} width={186} height={50} alt="Picture of the author" />
        <div className="flex items-center border-white border-2 rounded-md justify-between px-3">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="bg-transparent border-white text-white p-2 focus:outline-none w-[525px] h-10"
          />
          <Image
            className=" cursor-pointer"
            src={Search}
            width={16}
            height={16}
            alt="Search"
          />
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white text-base cursor-pointer px-5">
            Sign In
          </a>
          <Image
            className=" cursor-pointer"
            src={hamburger}
            width={36}
            height={36}
            alt="hamburger"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
