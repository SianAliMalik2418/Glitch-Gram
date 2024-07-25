import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDate, formatDistanceToNowStrict } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createFormmatedDate = (postCreationDate: Date) => {
  const currentDate = new Date();

  if (
    currentDate.getTime() - postCreationDate.getTime() <
    24 * 60 * 60 * 1000
  ) {
    return formatDistanceToNowStrict(postCreationDate, { addSuffix: true });
  } else {
    if (currentDate.getFullYear() === postCreationDate.getFullYear()) {
      return formatDate(postCreationDate, "MMM dd");
    } else {
      return formatDate(postCreationDate, "MMM dd, yyyy");
    }
  }
};
