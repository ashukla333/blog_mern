"use client";

import HeroSection from "@/app/components/constants/Elements/HeroSection";
import { TextContent } from "@/app/components/constants/Elements/Text";
import LatestPost from "@/app/components/constants/LatestPost";
import LatestPostDown from "@/app/components/constants/LatestPostBottom";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import React from "react";
export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const page = () => {
  const slides = [
    {
      image: `${process.env.BASE_URL}/images/hero1.jpg`,
      title: "TRUST THE BRITS",
      button: "SEE THE REST",
    },
    {
      image: `${process.env.BASE_URL}/images/hero2.jpg`,
      title: "WEDNESDAY AF | ANKARI FLORUSS",
      button: "SEE MORE",
    },
  ];
  return (
    <div className="md:p-10 p-5">
      <center
        className={`flex justify-center ${bebasNeue.className} items-center p-7`}
      >
        <TextContent
          text={"One"}
          className={"uppercase font-semibold sm:text-5xl text-2xl"}
        />
        <TextContent
          text={"Dapper Street"}
          className={"uppercase font-bold sm:text-8xl text-3xl"}
        />
      </center>
      <div className="my-5">
        <div className="border-t-[1.2px] border-b-[3px] border-black w-full bg-white">
          <nav className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 py-4">
            <Link
              href="/"
              className="text-black hover:text-gray-600 relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </Link>
            <span className="hidden md:inline-block text-gray-300">/</span>
            <Link
              href="/style-archive"
              className="text-black hover:text-gray-600 relative group"
            >
              STYLE ARCHIVE
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </Link>
            <span className="hidden md:inline-block text-gray-300">/</span>
            <Link
              href="/lifestyle"
              className="text-black hover:text-gray-600 relative group"
            >
              LIFESTYLE
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </Link>
            <span className="hidden md:inline-block text-gray-300">/</span>
            <Link
              href="/about"
              className="text-black hover:text-gray-600 relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </div>

      <div>
        <HeroSection slides={slides} />
      </div>

      <div>
        <LatestPost />
      </div>
      <div>
        <LatestPostDown />
      </div>
    </div>
  );
};

export default page;
