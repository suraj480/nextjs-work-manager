"use client";
import React from "react";
import loginpage from "../../assets/loginpage.svg";
import Image from "next/image";
const LoginPage = () => {
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
          <form action="#!" className="mt-5">
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
              />
            </div>
          </form>
          <div className="mt-3 flex justify-center">
            <button className="bg-green-200 py-2 px-3 hover:bg-orange-300">
              Login
            </button>
            <button className="bg-red-600 py-2 px-3 hover:bg-red-800 ms-3">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
