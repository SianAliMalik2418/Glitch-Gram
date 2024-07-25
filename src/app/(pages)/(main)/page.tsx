import PostEditor from "@/components/posts/editor/PostEditor";
import Post from "@/components/posts/Post";
import TrendsSideBar from "@/components/Sidebars/TrendsSideBar";
import { connectDB } from "@/lib/dbConnect";
import { PostModel, PostType } from "@/models/PostModel";

export default async function Home() {
  await connectDB();

  const posts = await PostModel.find({}).sort({ createdAt: -1 });
  console.log(posts);

  return (
    <div className="mt-[1rem] flex w-full pb-32 sm:ml-10">
      <div className="flex min-h-screen w-[70%] flex-col items-center justify-center gap-5 sm:block">
        <PostEditor />
        <div>
          {posts.map((post) => (
            <Post
              key={post._id as string}
              postContent={post.postContent}
              userName={post.userName}
              userImage={post.userImage}
              createdAt={post.createdAt}
              postId={post._id as string}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
      <TrendsSideBar />
    </div>
  );
}
