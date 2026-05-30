import { getLiveStreamsCount } from "@/lib/feed-service";
import { cn } from "@/lib/utils";
import { Radio } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const LiveCount = async () => {
  const count = await getLiveStreamsCount();

  if (count === 0) return null;

  return (
    <div className="hidden md:flex items-center gap-x-2 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full animate-pulse group hover:bg-rose-500/20 transition cursor-default">
      <Radio className="h-3 w-3 text-rose-500" />
      <p className="text-[10px] font-bold text-rose-500 uppercase tracking-tighter">
        {count} {count === 1 ? "LIVE" : "LIVE NOW"}
      </p>
    </div>
  );
};

export const LiveCountSkeleton = () => {
    return (
        <Skeleton className="hidden md:block h-6 w-16 rounded-full bg-white/5" />
    );
};
