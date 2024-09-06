"use client";
import React, { useEffect, useState } from "react";
import { customAxiosGET } from "../../../../Apis/ApiMethods/methods";
import { userUrlAPi } from "../../../../Apis/ApiMethods/list";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import MainLogo from "./Elements/MainLogo";
import { Bebas_Neue } from "next/font/google";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";

// Load Bebas Neue font
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Trigger sticky header after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch user data from API and store in localStorage
  const getUserAPi = async () => {
    const response = await customAxiosGET(userUrlAPi);
    try {
      if (response.status) {
        localStorage.setItem("userData", JSON.stringify(response.data));
      }
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    getUserAPi();
  }, []);

  // Handle opening and closing of mobile drawer
  const handleDrawer = () => setOpenDrawer(!openDrawer);

  // Toggle Popover for Profile icon
  const togglePopover = () => setOpenPopover(!openPopover);

  return (
    <div
      className={`border-b px-10 ${bebasNeue.className} pb-2 pt-4 shadow-md top-0 left-0 w-full transition-all duration-300 z-50 ${
        isSticky ? "sticky  !text-white" : "bg-white text-black"
      } flex justify-between bg-white items-center`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <MainLogo className="text-2xl text-black dark:text-white" />
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden lg:flex items-center gap-6">
        <Button variant="text" className="uppercase text-sm font-bold">
          <FaFacebookF className="text-lg" />
        </Button>
        <Button variant="text" className="uppercase text-sm font-bold">
          <FaTwitter className="text-lg" />
        </Button>
        <Button variant="text" className="uppercase text-sm font-bold">
          <FaInstagram className="text-lg" />
        </Button>
        <Button variant="text" className="uppercase text-sm font-bold">
          Blogloving
        </Button>
           {/* Profile Icon with Click Dropdown */}
      <div className="relative">
        <IconButton
          className="text-black bg-white dark:text-white"
          onClick={togglePopover}
        >
          <FaUserCircle size={28} />
        </IconButton>

        {/* Dropdown Modal for Profile Actions */}
        {openPopover && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50"
            onMouseLeave={() => setOpenPopover(false)} // Closes on mouse out
          >
            <Button
              variant="text"
              className="text-sm font-bold text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
            >
              Profile
            </Button>
            <Button
              variant="text"
              className="text-sm font-bold text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
            >
              Settings
            </Button>
            <Button
              variant="text"
              className="text-sm font-bold text-red-600 hover:bg-red-100 dark:hover:bg-red-700 w-full text-left"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
      </div>

   

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <IconButton
          className="text-black bg-white dark:text-white"
          onClick={handleDrawer}
        >
          <FaBars size={24} />
        </IconButton>
      </div>

      {/* Mobile Drawer for Navigation */}
      <Drawer open={openDrawer} onClose={handleDrawer} placement="right">
        <div className="p-4 w-64">
          <MainLogo className="text-2xl mb-6" />
          <List>
            <ListItem className="text-lg font-bold">
              <FaFacebookF className="mr-3" /> Facebook
            </ListItem>
            <ListItem className="text-lg font-bold">
              <FaTwitter className="mr-3" /> Twitter
            </ListItem>
            <ListItem className="text-lg font-bold">
              <FaInstagram className="mr-3" /> Instagram
            </ListItem>
            <ListItem className="text-lg font-bold">Blogloving</ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
