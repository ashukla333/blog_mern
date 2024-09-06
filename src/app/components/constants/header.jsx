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
} from "@material-tailwind/react";
import MainLogo from "./Elements/MainLogo";
import { Bebas_Neue } from "next/font/google";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaUserCircle, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Load Bebas Neue font
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  const router=useRouter()
  const [isSticky, setIsSticky] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        setIsLoggedIn(true); // Assuming the user is logged in if the API response is successful
      }
    } catch (error) {
      console.error({ error });
      setIsLoggedIn(false); // If there's an error, assume the user is logged out
    }
  };

  useEffect(() => {
    getUserAPi();
  }, []);

  // Handle opening and closing of mobile drawer
  const handleDrawer = () => setOpenDrawer(!openDrawer);

  // Toggle Popover for Profile icon
  const togglePopover = () => setOpenPopover(!openPopover);

  // Handle login and logout logic (this is just a placeholder for now)
  const handleLogin = () => {
    setIsLoggedIn(true);
    router.push('/auth')
  };

  const handleSignUp = () => {
    router.push('/signup')
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear()
  };

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
          <FaFacebookF className="text-xl" />
        </Button>
        <Button variant="text" className="uppercase text-sm font-bold">
          <FaTwitter className="text-xl" />
        </Button>
        <Button variant="text" className="uppercase text-sm font-bold">
          <FaInstagram className="text-xl" />
        </Button>

        {/* Profile Icon with Click Dropdown */}
        <div className="relative">
          <IconButton
            className="text-black bg-white dark:text-white"
            onClick={togglePopover}
          >
            <FaUserCircle size={28} />
          </IconButton>

          {/* Dropdown Modal for Login/Logout and Sign Up */}
          {openPopover && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50"
              onMouseLeave={() => setOpenPopover(false)} // Closes on mouse out
            >
              {!isLoggedIn ? (
                <>
                  <Button
                    variant="text"
                    className="text-sm font-bold text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <Button
                    variant="text"
                    onClick={handleSignUp}
                    className="text-sm font-bold text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left"
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="text"
                    className="text-sm font-bold text-red-600 hover:bg-red-100 dark:hover:bg-red-700 w-full text-left"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              )}
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
          {/* Close button for mobile drawer */}
          <div className="flex justify-between items-center mb-6">
            <MainLogo className="text-2xl" />
            <IconButton onClick={handleDrawer} className="text-black bg-white dark:text-white">
              <FaTimes size={24} />
            </IconButton>
          </div>
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
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
