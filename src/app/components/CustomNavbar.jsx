"use client";
import UserContext from "@/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";
const CustomNavbar = () => {
  const userContext = useContext(UserContext);
  console.log("userContext", userContext);
  return (
    <nav className="bg-orange-100 h-16 py-2 px-4 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4 ">
          {userContext.user && (
            <>
              <li>
                <Link href={"/"} className="hover:bg-orange-300">
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/add-task"} className="hover:bg-orange-300">
                  Add Task
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/show-tasks"} className="hover:bg-orange-300">
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {!userContext.user && (
            <>
              <Link href={"/login"}>Login</Link>
              <Link href={"/signup"}>Sign-Up</Link>
            </>
          )}
          {userContext.user && (
            <>
              <li>
                {" "}
                <Link href={"#!"}>{userContext.user.name}</Link>
              </li>
              <li>
                <Link href={"#!"}>Logout</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default CustomNavbar;
