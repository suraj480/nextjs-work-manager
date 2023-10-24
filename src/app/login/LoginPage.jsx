"use client";
import React, { useState } from "react";
import loginpage from "../../assets/loginpage.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const clearAll = () => {
    setLoginData({ email: "", password: "" });
  };
  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    if (loginData.email.trim() === "" || loginData.email == null) {
      toast.warning("Email is required !!", {
        position: "top-center",
      });
      return;
    }
    if (loginData.password.trim() === "" || loginData.password == null) {
      toast.warning("Password is required !!", {
        position: "top-center",
      });
      return;
    }
    try {
      const result = await login(loginData);
      console.log("RESULT", result);
      
      if (result.message === "Successfully logedIn") {
        toast.success(result.message, {
          position: "top-center",
        });
        router.push("/profile/user");
      }else{
        toast.warning(result.message, {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 shadow-sm bg-orange-50">
        <div className="flex justify-end m-5">
          {" "}
          <Image
            src={loginpage}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>

        <div>
          <h1 className="text-3xl text-center">Login Here</h1>
          <form action="#!" className="mt-5" onSubmit={loginFormSubmitted}>
            {/* email */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter here"
                id="user_email"
                className="w-full p-3 rounded-3xl bg-gray-300 focus:ring-gray-400-100 border border-gray-800"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    email: event.target.value,
                  });
                }}
                value={loginData.email}
              />
            </div>
            {/* Password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter here"
                id="user_password"
                className="w-full p-3 rounded-3xl bg-gray-300 focus:ring-gray-400-100 border border-gray-800"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    password: event.target.value,
                  });
                }}
                value={loginData.password}
              />
            </div>
            <div className="mt-3 flex justify-center">
              <button className="bg-green-200 py-2 px-3 hover:bg-orange-300">
                Login
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="bg-red-600 py-2 px-3 hover:bg-red-800 ms-3"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
