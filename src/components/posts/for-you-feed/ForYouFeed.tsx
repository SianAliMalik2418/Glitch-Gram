"use client";

import { PostType } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import Post from "../Post";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import PostsSkeleton from "./PostsSkeleton";

const ForYouFeed = () => {
  const { ref, inView } = useInView();

  const fetchPosts = async ({ pageParam }: { pageParam: number }) => {
    try {
      const res = await axios(`/api/posts/for-you?page=${pageParam}`);

      const data = res.data.data;

      return data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["posts-feed", "for-you-feed"],
      queryFn: fetchPosts,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  const content = data?.pages.map((page) => page);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return <PostsSkeleton />;
  }

  if (status === "error") {
    return (
      <p className="mx-auto mt-5 h-[70vh] text-center text-destructive">
        Something went wrong while fetching posts.
      </p>
    );
  }

  return (
    <>
      {content?.map((posts) =>
        posts.map((post: PostType) => {
          return (
            <Post
              key={post._id}
              createdAt={post.createdAt}
              postContent={post.postContent}
              postId={post._id}
              userId={post.userId}
              userImage={post.userImage}
              userName={post.userName}
            />
          );
        }),
      )}
      {isFetchingNextPage ? (
        <Loader2 className="mx-auto my-10 animate-spin" />
      ) : (
        <div ref={ref}></div>
      )}

      {!hasNextPage && (
        <p className="mt-5 text-center">
          <span className="text-primary">You have scrolled till the end!</span>
          <br /> You can rest now :)
        </p>
      )}
    </>
  );
};

export default ForYouFeed;
