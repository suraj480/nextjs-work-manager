"use client";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);
  function deleteTask(taskId) {
    // ....
    deleteTaskParent(taskId);
  }
  const taskStatus = () => {
  let  className = "";
    if (task.status == "completed") {
      className = "shadow-lg mt-2 rounded-md bg-green-800";
    }
    if (task.status == "pending") {
      className = "shadow-lg mt-2 rounded-md bg-red-600";
    }
    if (task.status == "just added") {
      className = "shadow-lg mt-2 rounded-md bg-yellow-400";
    }
    console.log("classNames",className)
    return className;
  };
  return (
    <div
      className={taskStatus()}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>

          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="shadow-lg hover:bg-red-500 bg-gray-150 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer "
          >
            <RxCross1 className="shadow-lg" />
          </span>
        </div>

        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status:{" "}
            <span className="font-bold">{task.status.toUpperCase()}</span>
          </p>
          <p className="text-right">
            {" "}
            Author:{" "}
            <span className="font-bold italic">{user && user.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
