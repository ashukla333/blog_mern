"use client";
import React from "react";
import MainLogo from "./Elements/MainLogo";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router=useRouter()
  return (
    <footer className="bg-white text-primary-black-color drop-shadow-2xl shadow-2xl  dark:text-gray-300 py-6 px-10 flex justify-between md:flex-row text-center flex-col items-center">
      {/* Theme Toggle */}
      <div className="flex items-center cursor-pointer  "  onClick={()=>{router.push("/")}}>
      <MainLogo className="text-2xl text-black dark:text-white" />
      </div>

      {/* Copyright */}
      <div className="text-sm font-serif">
        &copy; {new Date().getFullYear()} Dream& Discover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
