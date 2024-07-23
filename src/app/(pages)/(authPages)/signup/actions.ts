"use server";

import { z } from "zod";
import { SignUpSchema } from "@/schemas/SignUpSchema";
import bcrypt from "bcryptjs";
import { UserModel } from "@/models/UserModel";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/dbConnect";

export const signUpAction = async (
  credentials: z.infer<typeof SignUpSchema>,
): Promise<{ error?: string; success?: boolean }> => {
  try {
    const { username, email, password } = SignUpSchema.parse(credentials);

    await connectDB();

    const existingEmail = await UserModel.findOne({ email });
    const existingUserName = await UserModel.findOne({ username });

    if (existingEmail) {
      return { error: "User already exists please login!" };
    }

    if (existingUserName) {
      return { error: "Username is already taken!" };
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
