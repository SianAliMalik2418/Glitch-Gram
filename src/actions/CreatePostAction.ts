"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectDB } from "@/lib/dbConnect";
import { PostModel } from "@/models/PostModel";
import { getServerSession } from "next-auth";

export const CreatePostAction = async (postContent: string) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw Error("Unauthorized!");
  }

  if (!postContent) {
    return console.log("Post content cant be empty");
  }

  try {
    await connectDB();

    const newPost = new PostModel({
      userId: session.user._id,
      userName: session.user.username,
      userImage: session.user.image,
      postContent,
    });

    await newPost.save();

    return { message: "Post created", newPost };
  } catch (error) {
    console.log(error);
  }
};
