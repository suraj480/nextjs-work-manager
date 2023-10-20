import { NextResponse } from "next/server";
//DELETE request function
export function DELETE(request,{params}) {
    console.log(params)
    const {userId} = params
    console.log(userId)
    console.log("delete api called")
    return NextResponse.json({
      message:"Testing delete",
      status:true
    })
  }