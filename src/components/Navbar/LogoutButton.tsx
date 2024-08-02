"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";

const LogoutButton = () => {
  const queryClient = useQueryClient();

  return (
    <div
      className="flex cursor-pointer items-center justify-between text-sm md:text-base"
      onClick={() => {
        signOut();
        queryClient.clear();
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </div>
  );
};

export default LogoutButton;
