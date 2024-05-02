"use client";

import { HamBurgerIcon } from "@/Application/Molecules/Icons/HamBurgerIcon";
import { SearchIcon } from "@/Application/Molecules/Icons/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { subMenuLinks } from "../Constants/HeaderConstants";
import { HamBurgerCloseIcon } from "@/Application/Molecules/Icons/HamBurgerCloseIcon";

const toggleMenu = (setShowMenu) => () => {
  setShowMenu((prev) => !prev);
};

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all ${
        scroll ? "bg-gray-900" : ""
      }`}
    >
      <div className="container bg-transparent">
        <div className="flex justify-between py-3 items-center">
          <div className="flex gap-5 items-center max-sm:gap-2">
            <Image src="./images/Logo.svg" width={50} height={50} alt="Logo" />
            <span className="text-2xl text-white font-bold leading-2xl max-sm:text-lg">
              MovieBox
            </span>
          </div>
          <div className="relative w-[525px] lg:block max-lg:hidden">
            <input
              type="text"
              placeholder="What do you want to watch?"
              className="bg-transparent placeholder:text-white w-full rounded outline-none border-2 px-2 text-white h-[36px] border-white"
            />
            <div className="absolute right-[10px] top-[10px] cursor-pointer">
              <SearchIcon stroke="white" />
            </div>
          </div>
          <div className="flex items-center gap-5 max-sm:gap-2">
            <Link className="text-white text-base font-bold" href="/">
              Sign In
            </Link>
            {showMenu ? (
              <HamBurgerCloseIcon
                onClick={toggleMenu(setShowMenu)}
                className="cursor-pointer z-10"
              />
            ) : (
              <HamBurgerIcon
                className="cursor-pointer z-10"
                onClick={toggleMenu(setShowMenu)}
              />
            )}
            {showMenu && (
              <div className="h-screen text-white text-center absolute left-0 top-0 py-36 w-screen bg-gray-900">
                <div className="container">
                  <ul>
                    {subMenuLinks.map((link) => (
                      <li
                        className="text-6xl font-bold mb-5 max-sm:text-2xl hover:text-rose-500 transition-all"
                        key={link.id}
                      >
                        <Link href="/">{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
