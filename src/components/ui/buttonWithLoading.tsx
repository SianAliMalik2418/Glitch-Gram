import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonLoading({
  classname,
  variant,
}: {
  classname?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) {
  return (
    <Button disabled className={`${classname} w-fit`} variant={variant}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}
