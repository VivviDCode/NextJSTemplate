"use client";
import React from "react";
import { GoogleIcon, SignUpButtonIcon } from "../../public/assets/Icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "../../public/assets/images/kisspng-computer-icons-login-management-user-5ae155f3386149.6695613615247170432309.jpg";

export default function Login() {
  const router = useRouter();
  const handleRoutes = (route) => {
    router.push(route);
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-3xl flex justify-center flex-1">
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
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <GoogleIcon />
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Sign in with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-md">
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
                <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">Login In</span>
                </button>
                <div className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
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
                  Don't have an account{" "}
                  <span
                    className="underline text-blue-600 cursor-pointer"
                    onClick={() => handleRoutes("/register")}
                  >
                    {" "}
                    Register
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex rounded-tr-3xl rounded-br-3xl">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat rounded-tr-3xl rounded-br-3xl"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
