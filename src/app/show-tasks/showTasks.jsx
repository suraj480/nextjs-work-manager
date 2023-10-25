"use client";
import UserContext from "@/context/userContext";
import { getTasksOfUser } from "@/services/taskService";
import React, { useContext, useState, useEffect } from "react";
import Task from "./Task";

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
  return (
    <div className="container grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3">Your Task( {tasks.length} )</h1>
        {tasks.map((task) => (
          <Task task={task} key={tasks._id} />
        ))}
      </div>
    </div>
  );
};

export default ShowTasksPage;
