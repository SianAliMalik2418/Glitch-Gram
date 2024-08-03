import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const PostsSkeleton = () => {
  return (
    <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
};

export default PostsSkeleton;

const PostSkeleton = () => {
  return (
    <div className="mt-7 flex w-[22rem] cursor-pointer flex-col gap-3 rounded-2xl bg-card p-5 shadow-sm transition-all duration-100 sm:w-[25rem] md:w-full">
      {/* userDetailsDiv */}
      <div className="flex w-full items-center gap-3">
        <Skeleton className="relative h-12 w-12 rounded-full"></Skeleton>
        <div className="flex flex-col justify-center">
          <Skeleton className="w-32 h-5"></Skeleton>
        </div>
      </div>
      {/* Post content */}

      <Skeleton className="max-h-[20rem] h-[10rem]"></Skeleton>
    </div>
  );
};
