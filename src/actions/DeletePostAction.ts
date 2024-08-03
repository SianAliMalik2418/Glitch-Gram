"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { PostModel } from "@/models/PostModel";
import { getServerSession } from "next-auth";

export const DeletePostAction = async (postIdToDelete: string) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Unauthorized!");
  }

  const post = await PostModel.findOne({
    _id: postIdToDelete,
  });

  if (session.user._id !== post?.userId) {
    throw new Error("You can delete only your own post!");
  }

  const postToDelete = await PostModel.findByIdAndDelete(postIdToDelete);

  if (!postToDelete) {
    throw new Error("Post not found for deletion!");
  }
};
