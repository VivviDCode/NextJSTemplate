"use client";
import { useEffect } from "react";
import Login from "./login/page";
import UseToken from "./saga-redux/Utils/Token";
import { useRouter } from "next/navigation";

export default function Home() {
  const { token } = UseToken() ?? {};
  const router = useRouter();

  return (
    <>
      <Login />
    </>
  );
}
