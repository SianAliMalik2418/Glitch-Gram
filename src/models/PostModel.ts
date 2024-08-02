import { PostType } from "@/types/types";
import mongoose, { Document, Schema } from "mongoose";

export type PostModelType = Document & PostType;

const postSchema: Schema<PostModelType> = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User id for post is required"],
      ref: "users",
    },

    userName: {
      type: String,
      required: [true, "User name for post is required"],
    },

    userImage: {
      type: String,
    },

    postContent: {
      type: String,
      required: [true, "Post title is required"],
    },

    postImageUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

export const PostModel =
  (mongoose.models.posts as mongoose.Model<PostType>) ||
  mongoose.model<PostType>("posts", postSchema);
