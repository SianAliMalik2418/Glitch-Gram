import mongoose, { Document, Model, mongo, Schema } from "mongoose";



export type UserType = Document & {
  username: string;
  displayName?: string;
  bio?: string;
  avatarUrl?: string;
  googleId?: string;
  email: string;
  password: string;
  createdAt: Date;
};



const userSchema: Schema<UserType> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },

    displayName: {
      type: String,
    },

    bio: {
      type: String,
    },

    avatarUrl: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true },
);

export const UserModel =
  (mongoose.models?.users as mongoose.Model<UserType>) ||
  mongoose.model<UserType>("users", userSchema);
