import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

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
  return <div>UserAvatar</div>;
};
