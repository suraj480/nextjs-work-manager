import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//Get all the task
export async function GET() {}
//create all the task
export async function POST(request) {
  const { title, content, userId } = await request.json();
  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      message: "task created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create task",
      success: false,
    });
  }
}
