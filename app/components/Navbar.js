"use client";
import SearchIcon from "@/public/assets/Icons";
import React from "react";
import Navbutton from "../components/Navbutton";
import Notifications from "../components/Notifications";
import { HamIcon, HammIcon } from "../../public/assets/Icons";

export default function Navbar({ hideSideBar, setHideSideBar }) {
  return (
    <nav
      className="w-full bg-backgroundcol sticky top-0 z-40 flex flex-wrap items-center justify-between py-4 px-4 transition-all ease-in shadow-none duration-250 lg:flex-nowrap lg:justify-start"
      navbar-scroll="false"
    >
      <div className="flex flex-wrap items-center justify-between w-full py-1 mx-auto lg:flex-nowrap">
        <div>
          <h6 className="mb-0 font-bold text-2xl text-black capitalize sm:text-xl">
            Dashboard
          </h6>
        </div>

        <div className="flex items-center w-full mt-2 lg:mt-0 lg:w-auto">
          <ul className="flex flex-col items-start justify-end w-full gap-2 pl-0 mb-0 list-none lg:flex-row lg:w-auto lg:gap-4">
            <li className="flex items-center w-full bg-[#F9FAFB] px-4 py-2 rounded-lg lg:w-auto lg:px-5">
              <input
                type="search"
                placeholder="Search here..."
                className="w-full bg-[#F9FAFB] placeholder:text-mygray outline-none"
              />
              <span className="ml-2">
                <SearchIcon />
              </span>
            </li>
            <div className="flex  justify-between w-full">
            <li>
              <Navbutton />
            </li>
            <div className="flex justify-center gap-3">
            <li className="flex items-center pl-4 lg:hidden">
              <button
                onClick={() => setHideSideBar(!hideSideBar)}
                className="flex items-center"
              >
                <div className="h-5 w-5 overflow-hidden">
                  {hideSideBar ? <HamIcon /> : <HammIcon />}
                </div>
              </button>
            </li>
            <li className="relative flex items-center pr-2">
              <Notifications />
            </li>
            </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
