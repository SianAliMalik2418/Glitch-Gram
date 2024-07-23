import Image from "next/image";
import React from "react";
import defaultAvatarImage from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";

type ImageAvatarPropsType = {
  size?: number;
  className?: string;
  imgUrl?: string;
};

const ImageAvatar = ({ size, className, imgUrl }: ImageAvatarPropsType) => {
  return (
    <Image
      src={imgUrl || defaultAvatarImage}
      alt="avatar"
      className={cn(" rounded-full object-cover", className)}
      fill
    />
  );
};

export default ImageAvatar;
