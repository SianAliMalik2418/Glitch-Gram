import mongoose, { Document, Schema } from "mongoose";

export type PostType = Document & {
  userId: mongoose.Schema.Types.ObjectId;
  postTitle: string;
  postImageUrl: string;
};

const postSchema: Schema<PostType> = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Post title is required"],
    ref: "users",
  },

  postTitle: {
    type: String,
    required: [true, "Post title is required"],
  },

  postImageUrl: {
    type: String,
    required: [true, "Post Image url is required!"],
  },
});

export const PostModel =
  (mongoose.models.posts as mongoose.Model<PostType>) ||
  mongoose.model<PostType>("posts", postSchema);
