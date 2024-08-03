"use client";

import { MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DeletePostDialog } from "./DeletePostDialog";

export function PostModificationDropDown({ postId }: { postId: string }) {
  const [showDialog, setShowDialog] = useState(false);

  const onClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size={"icon"}
            className="rounded-full bg-transparent hover:bg-muted"
          >
            <MoreHorizontal className="size-5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="cursor-pointer py-4"
              onClick={() => setShowDialog(true)}
            >
              <Trash className="mr-2 h-4 w-4" />
              <span className="text-red-400">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeletePostDialog open={showDialog} onClose={onClose} postId={postId} />
    </>
  );
}
