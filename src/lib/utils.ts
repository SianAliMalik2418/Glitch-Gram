import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDate, formatDistanceToNowStrict } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createFormmatedDate = (postCreationDate: Date) => {
  const currentDate = new Date();

  const postCreatedDate = new Date(postCreationDate);

  if (currentDate.getTime() - postCreatedDate.getTime() < 24 * 60 * 60 * 1000) {
    return formatDistanceToNowStrict(postCreatedDate, { addSuffix: true });
  } else {
    if (currentDate.getFullYear() === postCreatedDate.getFullYear()) {
      return formatDate(postCreatedDate, "MMM dd");
    } else {
      return formatDate(postCreatedDate, "MMM dd, yyyy");
    }
  }
};
