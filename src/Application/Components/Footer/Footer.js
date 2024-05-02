"use client";

import { FacebookIcon } from "@/Application/Molecules/Icons/FacebookIcon";
import { InstagramIcon } from "@/Application/Molecules/Icons/InstagramIcon";
import { TwitterIcon } from "@/Application/Molecules/Icons/TwitterIcon";
import { YouTubeIcon } from "@/Application/Molecules/Icons/YouTubeIcon";
import Link from "next/link";

const socialMediaIcons = [
  {
    id: 1,
    component: <FacebookIcon />,
  },
  {
    id: 2,
    component: <InstagramIcon />,
  },
  {
    id: 3,
    component: <TwitterIcon />,
  },
  {
    id: 4,
    component: <YouTubeIcon />,
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Conditions of Use",
  },
  {
    id: 2,
    title: "Privacy & Policy",
  },
  {
    id: 3,
    title: "Press Room",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-20 pb-10">
        <div className="container text-center">
          <ul className="mb-4">
            {socialMediaIcons.map((icons) => (
              <li className="inline-block mx-6 max-sm:mx-3" key={icons.id}>
                <Link href="/">{icons.component}</Link>
              </li>
            ))}
          </ul>

          <ul className="mb-4">
            {footerLinks.map((link) => (
              <li className="inline-block mx-4" key={link.id}>
                <Link
                  href="/"
                  className="text-lg text-gray-900 font-bold hover:text-rose-500 transition-all"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-lg text-gray-500 font-bold">
            © 2021 MovieBox by Adriana Eka Prayudha
          </p>
        </div>
      </div>
    </footer>
  );
};
