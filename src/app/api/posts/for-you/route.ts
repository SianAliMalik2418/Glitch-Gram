import { connectDB } from "@/lib/dbConnect";
import { ResponseJson } from "@/lib/ResponseJson";
import { PostModel } from "@/models/PostModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const page = Number(request.nextUrl.searchParams.get("page")) || 1;

    const pageSize = 10;
    const skip = page * pageSize - pageSize;

    await connectDB();

    const posts = await PostModel.find({})
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(skip);

    const totalDocuments = await PostModel.countDocuments();
    const totalPages = Math.ceil(totalDocuments / pageSize);

    return NextResponse.json(
      {
        success: true,
        message: "Posts fetched successfully",
        data: posts,
        pagination: {
          page,
          pageSize,
          totalPages,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return ResponseJson(false, `Something went wrong!`, 500);
  }
};
