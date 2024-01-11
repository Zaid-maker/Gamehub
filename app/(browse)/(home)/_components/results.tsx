import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const Results = () => {
  return <div>Results</div>;
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-4 w-[290px] mb-4" />
    </div>
  );
};
