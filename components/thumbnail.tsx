import React from "react";
import { Skeleton } from "./ui/skeleton";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail = ({
  src,
  fallback,
  isLive,
  username,
}: ThumbnailProps) => {
  let content;

  return (
    <div className="group aspect-video relative rounded-md cursor-pointer">
      <div className="rounded-md absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 flex items-center justify-center">
        {content}
      </div>
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
