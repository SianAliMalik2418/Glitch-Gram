import mongoose, { Document, Schema } from "mongoose";

export type PostType = Document & {
  userId: mongoose.Schema.Types.ObjectId;
  userName: string;
  userImage: string;
  postContent: string;
  postImageUrl: string;
  createdAt: Date;
  lastUpdated: Date;
};

const postSchema: Schema<PostType> = new mongoose.Schema(
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
