'use client'
import React, { useState } from "react";
import { Notification } from "@/public/assets/Icons";
export default function Notifications() {
  const [notification, setNotification] = useState(false);
  return (
    <div>
      <div>
        <p className="hidden transform-dropdown-show"></p>

        <i
          className="fa-solid fa-gears"
          onClick={() => setNotification(!notification)}
        >
          <Notification />
        </i>
      </div>
      <ul
        className={`lg:absolute lg:right-0 rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all lg:shadow-3xl duration-250 min-w-54 absolute right-0 top-0 z-50 origin-top list-none ${
          notification
            ? "transform-dropdown-show mt-10"
            : "opacity-0 pointer-events-none transform-dropdown"
        }`}
      >
        {/* <!-- add show class on dropdown open js --> */}
        <li className="relative mb-2">
          <div className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors">
            <div className="flex py-1">
              <div className="my-auto">
                <img
                  src={"/assets/img/small-logos/logo-spotify.svg"}
                  alt="err"
                  height={100}
                  width={100}
                  className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h6 className="mb-1 text-sm font-normal leading-normal dark:text-white">
                  <span className="font-semibold">New message</span> from Laur
                </h6>
                <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                  <i className="mr-1 fa fa-clock"></i>
                  13 minutes ago
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
