"use client";
import React from "react";
import { SignUpButtonIcon } from "../../public/assets/Icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "../../public/assets/images/kisspng-computer-icons-login-management-user-5ae155f3386149.6695613615247170432309.jpg";
import BgImg from "../../public/assets/images/retrosupply-jLwVAUtLOAQ-unsplash.jpg";

export default function Register() {
  const router = useRouter();
  const handleRoutes = (route) => {
    router.push(route);
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-2xl m-0 sm:m-10 bg-white shadow rounded-3xl flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="justify-center flex">
            <Image
              src={img}
              alt="err"
              height={150}
              width={150}
              className="mix-blend-hard-light"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
            <div className="w-full flex-1 ">
              <div className="mt-10 mb-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Register New Account
                </div>
              </div>

              <div className="mx-auto max-w-lg">
                <div className="flex gap-4 mb-5">
                  <input
                    className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Confirm Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">Sign Up</span>
                </button>
                <div className="mt-6 text-xs text-gray-600 text-center">
                  I agree to{" "}
                  <div
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </div>
                  and its
                  <div
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </div>
                </div>
                <p className="text-center mt-4">
                  Already have an account{" "}
                  <span
                    className="underline text-blue-600 cursor-pointer"
                    onClick={() => handleRoutes("/login")}
                  >
                    {" "}
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex rounded-3xl ">
          <div className="w-full bg-contain bg-center bg-no-repeat  bg-slate-500 rounded-tr-3xl rounded-br-3xl">
            {" "}
            <Image
              src={BgImg}
              alt="err"
              height={500}
              width={500}
              className="h-full w-full  rounded-tr-3xl rounded-br-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
