"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/httpHelper";
import { currentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  useEffect(() => {
    async function load() {
      try {
        const logUser = await currentUser();
        setUser({ ...logUser });
        console.log(logUser);
        console.log(user);
      } catch (error) {
        console.log(error);
        // toast.error("error in laoding user");
        setUser(undefined);
      }
    }
    load();
  }, []);
  const [user, setUser] = useState(undefined);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
