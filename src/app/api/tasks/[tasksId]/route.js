import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//get single task
//api/task/{taskId}
export async function GET(request, { params }) {
  const { tasksId } = params;
  try {
    const task = await Task.findById(tasksId);
    console.log("check-1", tasksId);
    return NextResponse.json(task);
  } catch (error) {
    return getResponseMessage("Error in getting taks !! ", 404, false);
  }
}

//update task
export async function PUT(request, { params }) {
  const { tasksId } = params;
  try {
    const { title, content, status } = await request.json();
    let task = await Task.findById(tasksId);

    task.title = title;
    task.content = content;
    task.status = status;
    const updatedTask = await task.save();
    return NextResponse.json(
      updatedTask,
      getResponseMessage("task updated successfully", 201, true)
    );
  } catch (error) {
    getResponseMessage("Error in updating task", 404, false);
  }
}

//delete task
export async function DELETE(request, { params }) {
  const { tasksId } = params;
  try {
    await Task.deleteOne({
      _id: tasksId,
    });
    return NextResponse.json({
      message: "Selected task deleted !!",
      success: true,
    });
  } catch (error) {
    getResponseMessage("Error in deleting task", 404, false);
  }
}
