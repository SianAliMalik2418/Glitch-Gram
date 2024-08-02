import mongoose from "mongoose";

export type PostType = {
  userId: string;
  _id: string;
  userName: string;
  userImage: string;
  postContent: string;
  postImageUrl: string;
  createdAt: Date;
  lastUpdated: Date;
};

export type ApiResponseType = {
  success: boolean;
  message: string;
  statusCode: number;
  data?: [];
};
