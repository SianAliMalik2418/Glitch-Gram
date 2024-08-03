import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/buttonWithLoading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeletePostMutation } from "@/mutations/post-mutations";
import { toast } from "sonner";

type DeletePostDialogProps = {
  open: boolean;
  onClose: () => void;
  postId: string;
};

export function DeletePostDialog({
  open,
  onClose,
  postId,
}: DeletePostDialogProps) {
  const mutation = useDeletePostMutation();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Post?</DialogTitle>
          <DialogDescription>
            This action cannot be reverserd!.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-5">
          {mutation.isPending ? (
            <ButtonLoading variant="destructive" />
          ) : (
            <Button
              variant={"destructive"}
              onClick={() =>
                mutation.mutate(postId, {
                  onSuccess: () => {
                    onClose();
                    toast.success("Post deleted successfully!");
                  },
                  onError: () => {
                    toast.error("Something went wrong while deleting post");
                  },
                })
              }
            >
              Delete
            </Button>
          )}
          <Button
            variant={"outline"}
            onClick={onClose}
            disabled={mutation.isPending}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
