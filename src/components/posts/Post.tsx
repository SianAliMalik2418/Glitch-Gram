"use client";

import React, { useState } from "react";
import ImageAvatar from "../Navbar/ImageAvatar";
import Link from "next/link";
import { createFormmatedDate } from "@/lib/utils";
import { PostModificationDropDown } from "./postUiComponents/PostModificationDropDown";
import { useSession } from "next-auth/react";

type PostProps = {
  postContent: string;
  userName: string;
  userImage: string;
  createdAt: Date;
  postId: string;
  userId: string;
};

const Post = ({
  postContent,
  userImage,
  userName,
  createdAt,
  postId,
  userId,
}: PostProps) => {
  const { data: session } = useSession();


  return (
    <div className="mt-7 flex w-[22rem] cursor-pointer flex-col gap-3 rounded-2xl bg-card p-5 shadow-sm transition-all duration-100 sm:w-[25rem] md:w-full">
      {/* userDetailsDiv */}
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3">
          <Link href={`/user/${userId}`}>
            <div className="relative h-12 w-12 rounded-full">
              <ImageAvatar imgUrl={userImage} />
            </div>
          </Link>
          <div className="flex flex-col justify-center">
            <Link href={`/user/${userId}`}>
              <span className="w-fit text-lg font-bold transition-all hover:underline">
                {userName}
              </span>
            </Link>
            <span className="text-xs text-muted">
              {createFormmatedDate(createdAt)}
            </span>
          </div>
        </div>

        {session?.user._id === userId && (
          <PostModificationDropDown postId = {postId}  />
        )}

      </div>
      {/* Post content */}
      <Link href={`/post/${postId}`}>
        <span className="max-h-[20rem] overflow-y-auto whitespace-break-spaces">
          {postContent}
        </span>
      </Link>
    </div>
  );
};

export default Post;
