'use client'
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { getUserTokenAuth } from "../saga-redux/redux/loginSlice";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const [hideSideBar, setHideSideBar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && typeof window !== 'undefined') {
      router.push("/login");
    }
    dispatch(getUserTokenAuth());
  }, [dispatch, router]);
  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth < 900) {
      setHideSideBar(true);
    }
    if (windowWidth && windowWidth > 900) {
      setHideSideBar(false);
    }
  }, [windowWidth]);

  return (
    <div className="App bg-gray-50">
      <div className="m-0  text-base antialiased font-normal bg-gray-50 text-slate-500  relative">
        <div className="fixed w-full bg-backgroundcol min-h-[331px]"></div>
        <SideBar setHideSideBar={setHideSideBar} hideSideBar={hideSideBar} />
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-[22em] rounded-xl">
          <Navbar setHideSideBar={setHideSideBar} hideSideBar={hideSideBar} />
          <div className="w-full ps-6 pe-6 py-2 mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
