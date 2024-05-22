import React from "react";
import img from "../../public/assets/images/kisspng-computer-icons-login-management-user-5ae155f3386149.6695613615247170432309.jpg";

import Image from "next/image";
export default function LoginUi() {
  return (
    <div className="flex flex-col justify-center xl:items-start lg:items-start md:items-center sm:items-center max-sm:items-center w-full h-full ">
      <div className="flex flex-col justify-center items-center mb-4  ">
        <h1 className="xl:text-[48px] lg:text-[48px] max-md:text-[35px] text-[30px] font-bold xl:mb-4 lg:mb-4 md:mb-3 sm:mb-3 max-sm:mb-3 text-mygraybutton text-center">
          Welcome To My E-com Store Admin !{" "}
        </h1>
        <p className="xl:text-[24px] lg:text-[24px] max-md:text-[20px] text-[18px] text-mygraybutton text-center">
          The reputable marketplace for buyers and sellers
        </p>
      </div>
      <div className="w-full xl:flex lg:flex justify-center md:hidden max-sm:hidden sm:hidden ">
        <Image
          src={img}
          alt="err"
          className="w-8/12"
          height={500}
          width={500}
          loading="lazy"
        />
      </div>
    </div>
  );
}
