import { User } from "@/models/user";
import { NextResponse } from "next/server";
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
