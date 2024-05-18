"use client";
import SearchIcon from "@/public/assets/Icons";
import React from "react";
import Navbutton from "../components/Navbutton";
import Notifications from "../components/Notifications";
import { HamIcon, HammIcon } from "../../public/assets/Icons";

export default function Navbar({ hideSideBar, setHideSideBar }) {
  return (
    <nav
      className="w-full bg-backgroundcol sticky top-0 z-40 flex flex-wrap items-center justify-between  py-8 px-6 transition-all ease-in shadow-none duration-250  lg:flex-nowrap lg:justify-start"
      navbar-scroll="false"
    >
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col items-start justify-between w-full pe-2 py-1 mx-auto flex-wrap-inherit">
        <div>
          <h6 className="mb-0 font-bold xl:text-3xl lg:text-2xl md:text-xl max-sm:text-base  text-black capitalize">
            Dahboard
          </h6>
        </div>

        <div className="flex items-center mt-2 sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <div className="flex items-center md:ml-auto md:pr-4"></div>
          <ul className="flex flex-row justify-end items-center gap-2 pl-0 mb-0 list-none md-max:w-full">
            <li className="flex justify-center items-center bg-[#F9FAFB] px-5 rounded-lg h-[48px]">
              <input
                type="search"
                placeholder="Search here..."
                className="h-[48px] bg-[#F9FAFB] placeholder:text-mygray outline-none"
              />
              <span>
                <SearchIcon />
              </span>
            </li>
            <li>
              <Navbutton />
            </li>
            <li>
              <button
                className="flex items-center pl-4 xl:hidden"
                onClick={() => {
                  setHideSideBar(!hideSideBar);
                }}
              >
                <div className="h-5 w-5 overflow-hidden">
                  {hideSideBar ? (
                   <HamIcon/>
                  ) : (
                    <HammIcon/>
                  )}
                </div>
              </button>
            </li>
            <li className="relative flex items-center pr-2">
              <Notifications />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
