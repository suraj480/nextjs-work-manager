"use client";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";
const CustomNavbar = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();
  console.log("userContext", userContext);
  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      userContext.setUser(undefined);
      toast.success("Logout successful !!");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout error !!");
    }
  }
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
          {!userContext.user ? (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign-Up</Link>
              </li>
            </>
          ) : null}
          {userContext.user && (
            <>
              <li>
                {" "}
                <div>{userContext.user.name}</div>
              </li>
              <li>
                <button onClick={doLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default CustomNavbar;
