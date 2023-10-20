import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();
//Get All users
export async function GET(request) {
let users=[];
try{
users=await User.find()
}catch(error){
  return NextResponse.json({
    message:"failed to get users",
    success:false
  })
console.log(error)
}
  return NextResponse.json(users);
}

//POST request function
//Create user
export async function POST(request) {
  //fetch user details from  request
  const { name, email, password, about, profileURL } = await request.json();
  console.log({ name, email, password, about, profileURL });
  //create user object with user model
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  console.log(name, email, password, about, profileURL);
  try {
    //save the object to database
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log("hit me",error);
    console.log(name, email, password, about, profileURL);
    return NextResponse.json({
      message: "Failed to create user !!",
      status: false
    } ,{
      status: 500,
    });
  }
}

