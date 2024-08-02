import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectDB } from "@/lib/dbConnect";
import { UserModel } from "@/models/UserModel";
import { getServerSession } from "next-auth";
import React, { Suspense } from "react";
import ImageAvatar from "../Navbar/ImageAvatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { PostModel } from "@/models/PostModel";
import { unstable_cache } from "next/cache";

const TrendsSideBar = () => {
  return (
    <div className="sticky top-[7rem] ml-10 hidden h-fit flex-col items-center justify-center py-2 md:flex">
      <Suspense fallback={<Loader className="mx-auto animate-spin" />}>
        <WhoToFollow />
        <TrendingTopics />
      </Suspense>
    </div>
  );
};

const WhoToFollow = async () => {
  const session = await getServerSession(authOptions);

  const sessionUserId = session?.user._id;

  await connectDB();

  const users = await UserModel.find({ _id: { $ne: sessionUserId } });

  return (
    <div className="hidden h-fit w-[20rem] max-w-[20rem] flex-col rounded-2xl bg-card p-3 md:flex">
      <h1 className="text-xl font-bold">Who to Follow</h1>
      <div className="mt-2 space-y-7 py-2">
        {users.map((user) => (
          <div
            className="flex items-center justify-between gap-2"
            key={user._id as string}
          >
            <div className="flex gap-2">
              <Link href={`/user/${user._id}`}>
                <div className="relative h-10 w-10 flex-1 rounded-full">
                  <ImageAvatar imgUrl={user.avatarUrl} />
                </div>
              </Link>

              <Link href={`/user/${user._id}`}>
                <div className="flex flex-1 flex-col text-sm">
                  <h1 className="line-clamp-1 whitespace-break-spaces hover:underline">
                    {user.displayName || user.username}
                  </h1>
                  <span className="-mt-1 line-clamp-1 text-muted-foreground">
                    @{user.username}
                  </span>
                </div>
              </Link>
            </div>

            <Button className="self-end justify-self-end">Follow</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const getHashtags = unstable_cache(
  async () => {
    await connectDB();

    const result = await PostModel.aggregate([
      // Match all documents
      { $match: {} },

      // Extract hashtags from postContent
      {
        $project: {
          hashtags: {
            $regexFindAll: {
              input: "$postContent",
              regex: /#\w+/g,
            },
          },
        },
      },

      // Unwind the hashtags array
      { $unwind: "$hashtags" },

      // Group by hashtag and count occurrences
      {
        $group: {
          _id: "$hashtags.match",
          count: { $sum: 1 },
        },
      },

      { $sort: { count: -1 } },
    ]);

    return result;
  },
  ["trending_hashtags"],
  { revalidate: 3 * 60 * 60 },
);
const TrendingTopics = async () => {
  const hashtags = await getHashtags();

  return (
    <div className="mt-5 hidden h-fit max-h-[20rem] w-[20rem] max-w-[20rem] flex-col overflow-y-auto rounded-2xl bg-card p-3 md:flex">
      <h1 className="text-xl font-bold">Trending Topics</h1>
      {hashtags.map((hashtag) => (
        <Link href={"/hashtags/typescript"} key={hashtag._id}>
          <Button
            asChild
            className="mt-3 flex h-fit cursor-pointer items-start justify-start px-1 py-1"
            variant={"ghost"}
          >
            <div className="flex w-full flex-col">
              <h1 className="font-semibold">{hashtag._id}</h1>
              <span className="text-sm text-muted-foreground">
                {hashtag.count} posts
              </span>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default TrendsSideBar;
