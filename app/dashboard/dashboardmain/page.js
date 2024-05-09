"use client";

import React from "react";
import Card from "../../components/Card";
import Graph from "../../components/Graph";
import Ads from "../../components/Ads";

export default function DashboardMain() {
  return (
    <div>
      <Card />
      <div className="flex  flex-wrap xl:mt-12 lg:mt-12 max-md:mt-0 -mx-3  mb-6 border">
        <Graph />
        <div className="w-full max-w-full  mt-0 lg:w-[19.5%] lg:flex-none  ">
          <div className="p-6  relative flex min-w-0 flex-col break-words rounded-3xl bg-white xl:max-h-[330px] xl:min-h-[330px]">
            <div className="flex items-center gap-5 mb-0 rounded-t-2xl  ">
              <h6 className="mb-0 text-sm  text-myblack">Trafic by Webistes</h6>
            </div>
            <div className="flex-auto mt-4">
              <ul className=" text-[12px] text-myblack flex flex-col justify-between h-screen pl-0 mb-0 rounded-lg  max-h-60 overflow-auto">
                <li className="  flex items-center  w-12/12">
                  <p className="w-6/12">Google</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                    <div className="bg-mygreen h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </li>
                <li className="  flex items-center  w-12/12">
                  <p className="w-6/12">YouTube</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                    <div className="bg-mygreen h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </li>
                <li className="  flex items-center  w-12/12">
                  <p className="w-6/12">Instagram</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                    <div className="bg-mygreen h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </li>
                <li className="  flex items-center  w-12/12">
                  <p className="w-6/12">Pinterest</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                    <div className="bg-mygreen h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </li>
                <li className="  flex items-center  w-12/12">
                  <p className="w-6/12">Facebook</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                    <div className="bg-mygreen h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </li>
                <li className="  flex items-center  w-12/12">
                  <p className="w-6/12">Twitter</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                    <div className="bg-mygreen h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </li>
                <li className="  flex items-center ">
                  <p className="w-6/12">Tumblr</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                    <div className="bg-mygreen h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
        <Ads />
      
    </div>
  );
}
