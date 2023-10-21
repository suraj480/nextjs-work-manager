import { NextResponse } from "next/server";

export const getResponseMessage = (message, statusCode) => {
  return NextResponse.json(
    {
      message: message,
      seccess: statusCode,
    },
    {
      status: statusCode,
    }
  );
};
