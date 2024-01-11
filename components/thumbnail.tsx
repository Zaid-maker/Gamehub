import React from "react";
import { Skeleton } from "./ui/skeleton";

export const Thumbnail = () => {
  return <div>Thumbnail</div>;
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
