// next-auth.d.ts
import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    username?: string;
    displayName?: string;
  }

  interface Session extends DefaultSession {
    user: {
      _id?: string;
      username?: string;
      displayName?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    username?: string;
    displayName?: string;
  }
}
