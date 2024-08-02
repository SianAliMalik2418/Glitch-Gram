"use client";

import { Check, LogOut, Monitor, Moon, Sun, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ImageAvatar from "./ImageAvatar";
import LogoutButton from "./LogoutButton";
import { useTheme } from "next-themes";

type NavbarDropDownProps = {
  imgUrl?: string | null | undefined;
  username?: string;
};

export function NavbarDropDown({ imgUrl, username }: NavbarDropDownProps) {
  const { theme, setTheme } = useTheme();



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="relative size-10 rounded-full">
          <ImageAvatar />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Logged in as @{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem>
            <Link
              href={"profile"}
              className="flex items-center justify-between text-sm md:text-base"
            >
              <User className="mr-2 size-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Monitor className="mr-2 size-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  className="flex w-32 items-center justify-between"
                  onClick={() => setTheme("system")}
                >
                  <div className="flex items-center gap-1">
                    <Monitor className="mr-2 size-4" />
                    <span>System</span>
                  </div>
                  {theme === "system" && <Check className="mr-2 size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center justify-between p-2"
                  onClick={() => setTheme("light")}
                >
                  <div className="flex items-center gap-1">
                    <Sun className="mr-2 size-4" />
                    <span>Light</span>
                  </div>
                  {theme === "light" && <Check className="mr-2 size-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center justify-between p-2"
                  onClick={() => setTheme("dark")}
                >
                  <div className="flex items-center gap-1">
                    <Moon className="mr-2 size-4" />

                    <span>Dark</span>
                  </div>
                  {theme === "dark" && <Check className="mr-2 size-4" />}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="py-3">
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
