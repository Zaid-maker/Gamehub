import { Skeleton } from "@/components/ui/skeleton";
import { getStreams } from "@/lib/feed-service";
import React from "react";

export const Results = async () => {
  const data = await getStreams();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Streams we think you&apos;ll like
      </h2>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      )}
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-4 w-[290px] mb-4" />
    </div>
  );
};
