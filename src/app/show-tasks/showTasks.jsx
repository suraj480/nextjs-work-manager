"use client";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useState, useEffect } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const userContext = useContext(UserContext);

  useEffect(() => {
    async function loadTasks(userId) {
      try {
        const tasks = await getTasksOfUser(userId);

        setTasks([...tasks]);
      } catch (error) {
        console.log(error);
      }
    }

    if (userContext.user) {
      loadTasks(userContext.user._id);
    }
  }, [userContext.user]);
  async function deleteTaskParent(tasksId) {
    try {
      const result = await deleteTask(tasksId);
      const newTasks = tasks.filter((item) => item._id != tasksId);
      setTasks(newTasks);
      toast.success("Task deleted successfully !!");
      console.log("delete", result);
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting !!");
    }
  }
  return (
    <div className="container grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3">Your Task( {tasks.length} )</h1>
        {tasks.map((task) => (
          <Task
            task={task}
            key={tasks._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasksPage;
