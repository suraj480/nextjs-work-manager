import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
//Get all the task
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json(
      tasks,
      getResponseMessage("taks fetched successfully !!", 200, true)
    );
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting data !!", 404, false);
  }
}
//create all the task
export async function POST(request) {
  const { title, content, userId, status } = await request.json();
  //fethced loggedIn userId
  const authToken = request.cookies.get("authToken")?.value;

  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
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
