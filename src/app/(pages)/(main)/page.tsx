import PostEditor from "@/components/posts/editor/PostEditor";
import ForYouFeed from "@/components/posts/for-you-feed/ForYouFeed";
import TrendsSideBar from "@/components/Sidebars/TrendsSideBar";

export default async function Home() {
  return (
    <div className="mt-[1rem] flex w-full  justify-center  px-2 pb-32 sm:ml-10">
      <div className="ml-0 flex min-h-screen w-full flex-col items-center justify-center gap-5  px-2 sm:block sm:px-0 md:ml-5 md:w-[80%]">
        <PostEditor />
        <ForYouFeed />
      </div>
      <TrendsSideBar />
    </div>
  );
}
