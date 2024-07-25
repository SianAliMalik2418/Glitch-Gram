import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectDB } from "@/lib/dbConnect";
import { UserModel } from "@/models/UserModel";
import { getServerSession } from "next-auth";
import React from "react";
import ImageAvatar from "../Navbar/ImageAvatar";
import Link from "next/link";
import { Button } from "../ui/button";

const TrendsSideBar = () => {
  return (
    <>
      <WhoToFollow />
    </>
  );
};

const WhoToFollow = async () => {
  const session = await getServerSession(authOptions);

  const sessionUserId = (session?.user._id);

  await connectDB();

  const users = await UserModel.find({ _id: { $ne: sessionUserId } });

  return (
    <div className="sticky top-[7rem] ml-10 hidden h-fit w-[25rem] flex-col rounded-2xl bg-card p-3 md:flex">
      <h1 className="text-xl font-bold">Who to Follow</h1>
      <div className="mt-3 space-y-7 py-2">
        {users.map((user) => (
          <>
            <div
              className="flex items-center justify-center gap-2"
              key={user._id as string}
            >
              <Link href={`/user/${user._id}`}>
                <div className="relative h-10 w-10 flex-1 rounded-full">
                  <ImageAvatar imgUrl={user.avatarUrl} />
                </div>
              </Link>

              <div className="flex flex-1 flex-col text-sm">
                <h1 className="line-clamp-1 whitespace-break-spaces">
                  {user.displayName || user.username}
                </h1>
                <span className="-mt-1 line-clamp-1 text-muted-foreground">
                  @{user.username}
                </span>
              </div>
              <Button className="">Follow</Button>
            </div>
            <div
              className="flex items-center justify-center gap-2"
              key={user._id as string}
            >
              <Link href={`/user/${user._id}`}>
                <div className="relative h-10 w-10 flex-1 rounded-full">
                  <ImageAvatar imgUrl={user.avatarUrl} />
                </div>
              </Link>

              <div className="flex flex-1 flex-col text-sm">
                <h1 className="line-clamp-1 whitespace-break-spaces">
                  {user.displayName || user.username}
                </h1>
                <span className="-mt-1 line-clamp-1 text-muted-foreground">
                  @{user.username}
                </span>
              </div>
              <Button className="">Follow</Button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TrendsSideBar;
