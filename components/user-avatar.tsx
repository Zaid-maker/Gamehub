import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

export const UserAvatar = ({ username, imageUrl, isLive }: UserAvatarProps) => {
  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border border-background"
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
      </Avatar>
    </div>
  );
};
