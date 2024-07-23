import { UserModel } from "@/models/UserModel";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/dbConnect";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any): Promise<any> {

        const { email, password } = credentials;

        await connectDB();
        const user = await UserModel.findOne({ email });

        if (!user) {
          throw new Error("Invalid credentials!");
        }

        const isPasswordMatch = bcrypt.compareSync(password, user.password);

        if (!isPasswordMatch) {
          throw new Error("Invalid credentials!");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.username = user.username;
        token.displayName = user.displayName;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.username = token.username;
        session.user.displayName = token.displayName;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
};
