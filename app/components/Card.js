import { DownArrow, UpArrow } from "@/public/assets/Icons";
import React from "react";

export default function Cards() {
  return (
    <div className="flex flex-wrap -mx-3">
      {/* <!-- card1 --> */}
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-mygray shadow-xl p-6 rounded-3xl bg-clip-border">
          <div className="flex-auto ">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div>
                  <h5 className="text-sm font-light text-white mb-3">
                    Ads Listed
                  </h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-2xl font-medium text-white">721K</h5>
                  </div>
                  <div className="gap-2 flex justify-center items-center">
                    {" "}
                    <p className="text-[12px] font-light text-white">+11.01%</p>
                    <UpArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-mygray shadow-xl p-6 rounded-3xl bg-clip-border">
          <div className="flex-auto ">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div>
                  <h5 className="text-sm font-light text-white mb-3">
                    Ads Sold
                  </h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-2xl font-medium text-white">367K</h5>
                  </div>
                  <div className="gap-2 flex justify-center items-center">
                    {" "}
                    <p className="text-[12px] font-light text-white">-0.03%</p>
                    <DownArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-mygray shadow-xl p-6 rounded-3xl bg-clip-border">
          <div className="flex-auto ">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div>
                  <h5 className="text-sm font-light text-white mb-3">
                    New Users
                  </h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-2xl font-medium text-white">1,156</h5>
                  </div>
                  <div className="gap-2 flex justify-center items-center">
                    {" "}
                    <p className="text-[12px] font-light text-white">+15.03%</p>
                    <UpArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-mygray shadow-xl p-6 rounded-3xl bg-clip-border">
          <div className="flex-auto ">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div>
                  <h5 className="text-sm font-light text-white mb-3">
                    Complaints
                  </h5>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-2xl font-medium text-white">239K</h5>
                  </div>
                  <div className="gap-2 flex justify-center items-center">
                    {" "}
                    <p className="text-[12px] font-light text-white">+6.08%</p>
                    <UpArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
