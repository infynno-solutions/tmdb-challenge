import React from "react";
import LogoMB from "@/public/LogoMB.svg";
import Menu from "@/public/Menu.svg";
import Search from "@/public/Search.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl mx-auto flex justify-between mt-7">
        <div>
          <Image src={LogoMB} alt="LogoImg" />
        </div>
        <div className="relative w-[525px]">
          <div className="absolute inset-y-0 bottom-3 end-4 flex items-center pointer-events-none">
            <Image src={Search} alt="SearchIcon" />
          </div>
          <input
            className="block w-full p-4 py-2 ps-3 text-white border-2 border-[#D1D5DB] rounded-lg bg-transparent"
            type="search"
            placeholder="What do you want to watch ?"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[17px] font-semibold">Sign in</button>
          <Image src={Menu} alt="MenuImg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
