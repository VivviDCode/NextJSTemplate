import Image from "next/image";
import React, { useState } from "react";
import topLogo from "../../public/assets/images/8899687.png";
import { CategoriesIcon, DashBoardIcon, UserIcon } from "@/public/assets/Icons";
import { usePathname ,useRouter} from "next/navigation";

export default function SideBar({ hideSideBar }) {
  const [activeTab, setActiveTab] = useState(""); // State to track active tab
  const router = useRouter();
  const pathname = usePathname();

  const SidebarMenu = [
    {
      id: 1,
      name: "Dashboard",
      icon: <DashBoardIcon />,
      route: "/dashboard/dashboardmain",
    },
    {
      id: 2,
      name: "Categories",
      icon: <CategoriesIcon color={"black"} />,
      route: "/dashboard/categories",
    },
    {
      id: 3,
      name: "Users",
      icon: <UserIcon color={"black"} />,
      route: "/dashboard/users",
    },
  ];

  const handleTabClick = (route) => {
    setActiveTab(route);
    router.push(route);
  };

  // Set active tab based on current route pathname
  React.useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <aside className={`
      fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 mt-8 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0
      dark:bg-slate-850 max-w-[302px] ease-nav-brand z-50 xl:ml-11 rounded-3xl xl:left-0 xl:translate-x-0 px-4
      ${hideSideBar ? "" : "translate-x-0 ml-5"}
    `}>
      <div className="flex justify-center items-center gap-5 py-4">
        <Image
          src={topLogo}
          alt="err"
          height={500}
          width={500}
          className="w-[3em]"
        />
        <h3 className="font-bold text-2xl">Dashboard</h3>
      </div>
      <hr className="border-b-black border w-full" />
      <ul className="flex flex-col pl-0 mb-0">
        {SidebarMenu.map((item) => (
          <li
            className={`w-full hover:border-black border-slate-400 border-b rounded mt-8 duration-300 ${
              activeTab === item.route ? "bg-[#dcfaee]" : ""
            }`}
            key={item.id}
            onClick={() => handleTabClick(item.route)}
          >
            <div className="py-2.5 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors">
              <div
                className={`mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5`}
              >
                {item.icon}
              </div>
              <span
                className={`ml-1 duration-300 opacity-100 ${
                  activeTab === item.route
                    ? "text-black font-semibold text-xl"
                    : "font-semibold text-base"
                }`}
              >
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
