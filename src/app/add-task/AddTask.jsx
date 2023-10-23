"use client";
import Image from "next/image";
import React, { useState } from "react";
import SvgImg from "../../assets/login.svg";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "6533acb13fb8f5eb3f4df878",
  });
  console.log("TASK", task);
  const handleAddTask = async (event) => {
    event.preventDefault();
    // validate task data
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task is not added !!", {
        position: "top-center",
      });
    }
  };
  const clearAll = (e) => {
    // e.preventDefault();
    setTask({ ...task, title: "", content: "", status: "none" });
  };
  return (
    <div className="grid grid-cols-12 mt-4 justify-center">
      {console.log("cleared one", task)}
      <div className="border col-span-4 col-start-5 p-5 shadow-sm ">
        <div className="my-8 flex justify-center">
          <Image
            src={SvgImg}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>
        <h1 className="text-3xl text-center">Add your task here !!</h1>
        <form action="#!" onSubmit={handleAddTask}>
          {/* Task Title*/}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              className="w-full p-3 rounded-3xl bg-gray-300 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          {/* Task content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-300 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          {/* Task Status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" selected disabled>
                ---Select Status
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="just_added">just added</option>
            </select>
          </div>
          {/* button action */}
          <div className="mt-4 flex justify-center">
            <button className="bg-orange-100 hover:bg-orange-300">
              Create Task
            </button>
            <button
              type="reset"
              onClick={() => clearAll()}
              className="bg-red-600 py-2 px-3 hover:bg-red-800 ms-3"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
