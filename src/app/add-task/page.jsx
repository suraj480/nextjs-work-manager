import Image from "next/image";
import React from "react";
import SvgImg from "../../assets/login.svg";
export const metadata = {
  title: "Add Task : Work Manager",
};
const AddTask = () => {
  return (
    <div className="grid grid-cols-12 mt-4 justify-center">
      <div className="border col-span-4 col-start-5 p-5 shadow-sm ">
        <div className="my-8 flex justify-center">
          <Image
            src={SvgImg}
            style={{
              width: "50%",
            }}
          />
        </div>
        <h1 className="text-3xl text-center">Add your task here !!</h1>
        <form>
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
            <select id="task_status">
              <option value="none" selected disabled>
                ---Select Status
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="just added">just added</option>
            </select>
          </div>
          {/* button action */}
          <div className="mt-4 flex justify-center">
            <button className="bg-orange-100 hover:bg-orange-300">
              Create Task
            </button>
            <button className="bg-red-600 py-2 px-3 hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
