import React, { Suspense } from "react";
import { Logo } from "./logo";
import { Actions } from "./actions";
import { LiveCount, LiveCountSkeleton } from "@/app/(browse)/_components/navbar/live-count";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#1a1c23]/95 backdrop-blur-sm border-b border-white/5 px-2 lg:px-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-x-4">
        <Logo />
        <Suspense fallback={<LiveCountSkeleton />}>
          <LiveCount />
        </Suspense>
      </div>
      <Actions />
    </nav>
  );
};
