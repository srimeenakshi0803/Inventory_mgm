"use client";

import { useAppDispatch, useAppSelector } from "../../redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "../../state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.IsSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.IsDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSideBarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
          title="menu"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Type to search groups & products"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className=" text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode} title="theme">
              {isDarkMode ? (
                <Sun
                  className="cursor-pointer text-gray-500 transition-all duration-500"
                  size={24}
                />
              ) : (
                <Moon
                  className="cursor-pointer text-gray-500 transition-all duration-500"
                  size={24}
                />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span
              className={`absolute -top-2 right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full`}
            >
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="https://s3-inventory-management-navi.s3.us-east-1.amazonaws.com/assets/profile.jpg"
              width={50}
              height={50}
              alt="profile image"
              className="rounded-full h-full object-cover"
            />

            <div className="font-semibold">Naveen</div>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
