import { User } from "@/models/user";
import { NextResponse } from "next/server";

//get single user
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await User.findById(userId);
    return NextResponse.json(user, {
      message: "Details of selected user !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Selected user not found",
      success: false,
    });
  }
}

//DELETE request function
export async function DELETE(request, { params }) {
  console.log(params);
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "Selected user deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deleting user",
      success: false,
    });
  }
}
