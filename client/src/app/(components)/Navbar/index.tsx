"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSideBarCollapsed } from "@/state";
import {
  Bell as BellIcon,
  Menu as MenuIcon,
  Moon as MoonIcon,
  Settings as SettingsIcon,
  Sun as SunIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSideBar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className={"flex bg-red-200 justify-between items-center w-full mb-7"}>
      {/* LEFT SIDE */}
      <div className={"flex justify-between items-center gap-5"}>
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSideBar}
        >
          <MenuIcon className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search groups & products"
            className="pl:10 pr-4 py-2 w-60 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 pt-2 flext items-center pointer-events-none">
            <BellIcon className="text-gray-500" />
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <SunIcon className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <MoonIcon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
          <div className="relative">
            <BellIcon className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">image</div>
            <span className="font-semibold">allanheil</span>
          </div>
        </div>
        <Link href="/settings">
          <SettingsIcon className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
