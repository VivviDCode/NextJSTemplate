"use client";
import { useState, useEffect } from "react";
import { EmailIcon, ShowPassword } from "../../public/assets/Icons";
import Image from "next/image";
import gitimg from "../../public/assets/images/download.png";
import googleimg from "../../public/assets/images/images.jpg";
import loader from "../../public/assets/images/loader.png";
import { useDispatch, useSelector } from "react-redux";
import { getLoginFetch } from "@/app/saga-redux/redux/loginSlice";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function LoginForm() {
  const { loginMsg, isLoading, loginSuccess } = useSelector(
    (data) => data?.login
  );
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [notification, setNotification] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(getLoginFetch(formData));
    }
  };

  const handleRoute = () => {
    router.push("/register");
  };

  useEffect(() => {
    if (!isLoading && loginSuccess && loginMsg === "logged in successfully") {
      router.push("/dashboard/dashboardmain");
    } else if (!isLoading && !loginSuccess && loginMsg === "Auth Failed") {
      setNotification("Auth Failed");
    }
  }, [isLoading, loginSuccess, router, loginMsg]);
  const { data: session } = useSession();
  console.log(session);
  const onSignIn = (e, social) => {
    e.preventDefault();
    if (social === "github")
      signIn("github", {
        callbackUrl: "/dashboard/dashboardmain",
      });
    else if (social === "google")
      signIn("google", {
        callbackUrl: "/dashboard/dashboardmain",
      });
  };
  return (
    <div className="flex flex-col justify-center items-end w-full">
      {isLoading === false &&
        loginSuccess === false &&
        notification.length > 0 &&
        notification}
      <div className="flex flex-col justify-center items-center w-full xl:p-6 lg:p-10 md:p-8 sm:p-6 max-sm:p-6 rounded-3xl bg-white">
        <div className="px-2 w-full flex justify-between items-center rounded-lg bg-[#F7F8FA] py-[5px] mb-6">
          <button
            className={`w-[48%] py-2.5 font-semibold text-sm ${
              activeTab === 1 ? "bg-white rounded-lg shadow-md" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Email
          </button>
          <button
            className={`w-[48%] py-2.5 font-semibold text-sm ${
              activeTab === 2 ? "bg-white rounded-lg shadow-md" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Phone Number
          </button>
        </div>
        {/* form */}
        <div className="flex flex-col w-full h-full">
          <div className={`${activeTab === 1 ? "" : "hidden"}`}>
            <div className="flex flex-col relative mb-6">
              <label className="text-myblack mb-2 text-base font-semibold">
                Email id
              </label>
              <div className="w-full flex justify-center items-center rounded-lg bg-[#F7F8FA]">
                <input
                  className="px-5 w-full py-3 bg-transparent rounded-s-lg ring-0 outline-0 text-sm placeholder:font-medium placeholder:text-[#9A9998] text-myblack"
                  placeholder="enter email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <span>
                  <EmailIcon />
                </span>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col relative mb-6">
              <label className="text-myblack mb-2 text-base font-semibold">
                Password
              </label>
              <div className="w-full flex justify-center items-center rounded-lg bg-[#F7F8FA]">
                <input
                  className="px-5 w-full py-3 bg-transparent rounded-s-lg ring-0 outline-0 text-sm placeholder:font-medium placeholder:text-[#9A9998] text-myblack"
                  placeholder="Enter your password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <span>
                  <ShowPassword />
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-end mb-8">
              <p
                className="text-base font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-500 cursor-pointer"
                onClick={() => router.push("/forgotPassword")}
              >
                Forgot password?
              </p>
            </div>
          </div>
          <div className={`${activeTab === 2 ? "" : "hidden"}`}>
            <div className="flex flex-col relative mb-10">
              <label className="text-myblack mb-2 text-base font-semibold">
                Phone Number
              </label>
              <div className="px-5 py-4 w-full flex justify-center items-center rounded-lg bg-[#F7F8FA]">
                <input
                  className="w-full bg-transparent rounded-s-lg ring-0 outline-0 text-sm placeholder:font-medium placeholder:text-[#9A9998] text-myblack"
                  placeholder="enter phone number"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <span>
                  <EmailIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={handleSubmit}
              className="text-white w-full flex justify-center items-center bg-mygraybutton font-medium rounded-lg text-base px-5 py-3 text-center mb-6"
            >
              {isLoading ? (
                <Image
                  src={loader}
                  alt="loading"
                  height={24}
                  width={24}
                  className="animate-spin"
                />
              ) : (
                "Login"
              )}
            </button>
            <h5 className="text-base font-semibold mb-6">
              Do not have an account?{" "}
              <span
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-500 cursor-pointer"
                onClick={handleRoute}
              >
                Register
              </span>
            </h5>
            <p className="text-red-500 text-lg font-medium mb-6">
              or continue with <b>Next Auth click to continue</b>
            </p>
            <div className="flex space-x-5">
              <p
                className="p-3 rounded-full bg-mylightbg"
                onClick={(e) => onSignIn(e, "github")}
              >
                <Image
                  src={gitimg}
                  alt="err"
                  height={100}
                  width={100}
                  className="w-16 h-16"
                />
              </p>
              <p
                className="p-3 rounded-full bg-mylightbg"
                onClick={(e) => onSignIn(e, "google")}
              >
                <Image
                  src={googleimg}
                  alt="err"
                  height={100}
                  width={100}
                  className="w-16 h-16"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
