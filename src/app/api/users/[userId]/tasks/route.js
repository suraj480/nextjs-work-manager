import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//http://localhost:3000/api/users/[userId]/tasks
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const tasks = await Task.find({ userId: userId });
    return NextResponse.json(
      tasks,
      getResponseMessage("Task for user fetched successfully", 201, true)
    );
  } catch (error) {
    return getResponseMessage("Task for user not found", 404, false);
  }
}
