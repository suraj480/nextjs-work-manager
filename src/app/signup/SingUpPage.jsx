"use client";
import Image from "next/image";
import React, { useState } from "react";
import SignUpImg from "../../assets/signup.svg";
import { toast } from "react-toastify";
import { Signup } from "@/services/userService";
const SignUpPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://www.google.com/search?q=default+profile+url&sca_esv=575703562&rlz=1C1CHBF_enIN869IN869&tbm=isch&sxsrf=AM9HkKlVm7l6NW7EFMiVltZ8OWOMT7Tq2w:1698041932572&source=lnms&sa=X&sqi=2&ved=2ahUKEwicnNGRw4uCAxWoyzgGHQtRCB0Q_AUoAXoECAEQAw&biw=1366&bih=619&dpr=1#imgrc=JpaFCmffhUdABM",
  });
  const doSignUp = async (event) => {
    event.preventDefault();
    console.log("AAD", data);
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required !!", {
        position: "top-center",
      });
      return;
    }
    if (data.email.trim() === "" || data.email == null) {
      toast.warning("Email is required !!", {
        position: "top-center",
      });
      return;
    }
    if (data.password.trim() === "" || data.password == null) {
      toast.warning("Password is required !!", {
        position: "top-center",
      });
      return;
    }
    if (data.about.trim() === "" || data.about == null) {
      toast.warning("About is required !!", {
        position: "top-center",
      });
      return;
    }
    //form submit
    try {
      const result = await Signup(data);
      console.log("result", result);
      toast.success("user is registered !!", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "",
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "",
    });
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 shadow-sm bg-orange-50">
        <div className="flex justify-end m-5">
          {" "}
          <Image
            src={SignUpImg}
            style={{
              width: "50%",
            }}
            alt="Signup banner"
          />
        </div>

        <div>
          <h1 className="text-3xl text-center">Sign-up Here</h1>
          <form action="#!" className="mt-5" onSubmit={doSignUp}>
            {/* name */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-2"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter here"
                id="user_name"
                className="w-full p-3 rounded-3xl bg-gray-300 focus:ring-gray-400-100 border border-gray-800"
                onChange={(event) =>
                  setData({ ...data, name: event.target.value })
                }
                value={data.name}
              />
            </div>
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
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
                value={data.email}
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
                onChange={(event) =>
                  setData({ ...data, password: event.target.value })
                }
                value={data.password}
              />
            </div>
            {/* About */}
            <div className="mt-3">
              <label
                htmlFor="about"
                className="block text-sm font-medium mb-2 ps-2"
              >
                About
              </label>
              <textarea
                placeholder="Enter here"
                id="user_about"
                className="w-full p-3 rounded-3xl bg-gray-300 focus:ring-gray-400-100 border border-gray-800"
                rows={5}
                onChange={(event) =>
                  setData({ ...data, about: event.target.value })
                }
                value={data.about}
              ></textarea>
            </div>
            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="bg-green-200 py-2 px-3 hover:bg-orange-300"
              >
                Singup
              </button>
              <button
                onClick={resetForm}
                type="button"
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

export default SignUpPage;
