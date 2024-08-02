"use client";

import React from "react";
import { NavbarDropDown } from "./NavbarDropDown";

import { Button } from "../ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SearchBar from "./SearchBar";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-10 w-full bg-card py-7 shadow-sm">
      <div className="mx-auto flex max-w-[75rem] items-center gap-5">
        <Link href={"/"}>
          <h1 className="flex-1 px-2 text-xl font-bold text-primary md:px-5 md:text-2xl">
            glitchgram.
          </h1>
        </Link>

        <div className="flex-1 md:flex-none md:justify-self-start">
          <SearchBar />
        </div>

        {session ? (
          <div className="mr-5 flex w-fit items-center justify-end md:mr-2 md:flex-1">
            <NavbarDropDown
              imgUrl={session?.user?.image}
              username={session?.user?.username}
            />
          </div>
        ) : (
          <Link
            href={"/login"}
            className="mr-5 flex w-fit items-center justify-end md:mr-2 md:flex-1"
          >
            <Button className="bg-primary py-4 font-semibold">Login Now</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
