import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();
//GET request function
export function GET(request) {
  const users = [
    { name: "suraj maurya", phone: "234", course: "next" },
    { name: "ritul mohanty", phone: "9393", course: "java" },
    { name: "poorna panda", phone: "12345", course: "react" },
  ];
  return NextResponse.json(users);
}

//POST request function
export  async  function POST(request) {
  const body=request.body
  console.log(body)
  const jsonData = await request.json();
  console.log(jsonData);

  return NextResponse.json({
    message:"posting user data"
  })
}

//DELETE request function
export function DELETE(request) {
  console.log("delete api called")
  return NextResponse.json({
    message:"deleted !!",
    status:true
  })
}
export function PUT() {}
