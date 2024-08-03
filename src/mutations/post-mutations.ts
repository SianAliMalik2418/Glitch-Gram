import { CreatePostAction } from "@/actions/CreatePostAction";
import { DeletePostAction } from "@/actions/DeletePostAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: CreatePostAction,
    onSuccess: (newPost) => {
      console.log(newPost);
      queryClient.invalidateQueries({
        queryKey: ["posts-feed", "for-you-feed"],
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  return mutation;
};

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: DeletePostAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts-feed"] });
    },

    onError: () => {
      toast.error("Something went wrong while deleting posts");
    },
  });

  return mutation;
};
