"use client";
import { useEffect } from "react";
import Login from "./login/page";
import UseToken from "./saga-redux/Utils/Token";
import { useRouter } from "next/navigation";

export default function Home() {
  const { token } = UseToken() ?? {};
  const router = useRouter();
  // useEffect(() => {
  //   if(token?.token?.length>0){
  //     router.push("/dashboard/dashboardmain")
  //     console.log(token)
  //   } else{
  //     router.push("/")
  //   }

  // }, [token]);

  return (
    <>
      <Login />
    </>
  );
}
