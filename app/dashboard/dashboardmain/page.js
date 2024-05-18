"use client";

import React from "react";
import Card from "../../components/Card";
import Graph from "../../components/Graph";
import Ads from "../../components/Ads";

export default function DashboardMain() {
  const websites = [
    { name: "Google", traffic: 45 },
    { name: "YouTube", traffic: 35 },
    { name: "Instagram", traffic: 25 },
    { name: "Pinterest", traffic: 20 },
    { name: "Facebook", traffic: 15 },
    { name: "Twitter", traffic: 10 },
    { name: "Tumblr", traffic: 5 },
  ];

  return (
    <div>
      <Card />
      <div className="flex  flex-wrap xl:mt-6 lg:mt-4 max-md:mt-0 -mx-3  mb-6 ">
        <Graph />
        <div className="w-full max-w-full mt-0 lg:w-[19.5%] lg:flex-none">
          <div className="p-6 relative flex min-w-0 flex-col break-words rounded-3xl bg-white xl:max-h-[330px] xl:min-h-[330px]">
            <div className="flex items-center gap-5 mb-0 rounded-t-2xl">
              <h6 className="mb-0 text-sm text-myblack">Traffic by Websites</h6>
            </div>
            <div className="flex-auto mt-4">
              <ul className="text-[12px] text-myblack flex flex-col justify-between h-screen pl-0 mb-0 rounded-lg max-h-60 overflow-auto">
                {websites.map((website, index) => (
                  <li key={index} className="flex items-center w-12/12">
                    <p className="w-6/12">{website.name}</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-mygreen h-1.5 rounded-full"
                        style={{ width: `${website.traffic}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Ads />
    </div>
  );
}
