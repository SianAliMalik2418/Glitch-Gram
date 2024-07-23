"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div
      className="flex cursor-pointer items-center justify-between text-sm md:text-base"
      onClick={() => signOut()}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </div>
  );
};

export default LogoutButton;
