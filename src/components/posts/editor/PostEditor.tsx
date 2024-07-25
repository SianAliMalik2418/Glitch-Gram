"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import ImageAvatar from "@/components/Navbar/ImageAvatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import "./styles.css";
import { CreatePostAction } from "@/actions/CreatePostAction";

const PostEditor = () => {
  const { data: session } = useSession();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "What's good fella'?",
      }),
    ],

    immediatelyRender: false,
  });

  const input =
    editor?.getText({
      blockSeparator: "\n",
    }) || "";

  const handleCreatePost = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await CreatePostAction(input);
    console.log(response);
    editor?.commands.clearContent();
  };

  return (
    <form
      onSubmit={handleCreatePost}
      className="flex w-full flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="relative hidden h-12 w-14 rounded-full sm:inline">
          <ImageAvatar imgUrl={session?.user?.image} />
        </div>

        <div className="w-full">
          <EditorContent
            editor={editor}
            className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-end">
        <Button disabled={!input.trim()} className="w-fit min-w-20">
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostEditor;
