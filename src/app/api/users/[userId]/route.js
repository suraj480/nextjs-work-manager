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

//update user
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;
    const updatedUser =await user.save()
    return NextResponse.json(updatedUser,{
      message:"user updated successfuly",
      success:true
    })
  } catch (error) {

    return NextResponse.json({
      message: "Error in updating user",
      success: false,
    });
  }
}
