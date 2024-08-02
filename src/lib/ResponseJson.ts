import { NextResponse } from "next/server";

export const ResponseJson = (
  success: boolean,
  message: string,
  statusCode: number,
) => {
  return NextResponse.json(
    {
      success,
      message,
    },
    { status: statusCode },
  );
};
