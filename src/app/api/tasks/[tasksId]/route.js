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

export async function PUT() {}
export async function DELETE() {}
