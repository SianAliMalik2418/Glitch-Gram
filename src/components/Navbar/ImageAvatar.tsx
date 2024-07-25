import Image from "next/image";
import React from "react";
import defaultAvatarImage from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";

type ImageAvatarPropsType = {
  className?: string;
  imgUrl?: string | undefined | null;
};

const ImageAvatar = ({ className, imgUrl }: ImageAvatarPropsType) => {
  return (
    <Image
      src={imgUrl || defaultAvatarImage}
      alt="avatar"
      className={cn("rounded-full object-cover", className)}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
};

export default ImageAvatar;
