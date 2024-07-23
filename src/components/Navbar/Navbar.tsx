import React from "react";
import { NavbarDropDown } from "./NavbarDropDown";

import { Button } from "../ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-card py-7 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href={"/"}>
        <h1 className="px-5 text-xl font-bold text-primary md:text-2xl">
          glitchgram.
        </h1>
        </Link>

        {session ? (
          <div className="mr-5">
            <NavbarDropDown
              imgUrl={session?.user?.image}
              username={session?.user?.username}
            />
          </div>
        ) : (
          <Link href={"/login"}>
            <Button className="bg-primary py-4 font-semibold text-white">
              Login Now
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
