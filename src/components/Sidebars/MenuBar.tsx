import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Bell, Bookmark, Home, Mail } from "lucide-react";

type MenuBarProps = {
  className: string;
};

const MenuBar = ({ className }: MenuBarProps) => {
  return (
    <div className={className}>
      <Button
        className="flex w-fit items-center justify-start gap-2 px-3 py-5"
        variant={"ghost"}
        asChild
      >
        <Link href={"/"}>
          <Home />

          <span className="hidden sm:inline">Home</span>
        </Link>
      </Button>
      <Button
        className="flex w-fit items-center justify-start gap-2 px-3 py-5"
        variant={"ghost"}
        asChild
      >
        <Link href={"/notifications"}>
          <Bell />
          <span className="hidden sm:inline">Notifications</span>
        </Link>
      </Button>
      <Button
        className="flex w-fit items-center justify-start gap-2 px-3 py-5"
        variant={"ghost"}
        asChild
      >
        <Link href={"/messages"}>
          <Mail />
          <span className="hidden sm:inline">Messages</span>
        </Link>
      </Button>
      <Button
        className="flex w-fit items-center justify-start gap-2 px-3 py-5"
        variant={"ghost"}
        asChild
      >
        <Link href={"/bookmarks"}>
          <Bookmark />
          <span className="hidden sm:inline">Bookmarks</span>
        </Link>
      </Button>
    </div>
  );
};

export default MenuBar;
