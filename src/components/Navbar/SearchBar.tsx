"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleSearch = handleSubmit(async (data) => {
    const searchInput = data.searchInput;

    if (!data?.searchInput) return;

    router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
  });

  return (
    <form className="relative rounded-lg bg-input" onSubmit={handleSearch}>
      <Input placeholder="Search" {...register("searchInput")} />
      <SearchIcon className="absolute right-3 top-1/2 w-4 -translate-y-1/2" />
    </form>
  );
};

export default SearchBar;
