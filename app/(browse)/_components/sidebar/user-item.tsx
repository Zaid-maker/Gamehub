"use client";

import { LiveBadge } from "@/components/live-badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hint } from "@/components/hint";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

export const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const pathname = usePathname();

  const { collapsed } = useSidebar((state) => state);

  const href = `/${username}`;
  const isActive = pathname === href;

  return (
    <Hint label={username} side="right" disabled={!collapsed}>
      <Button
        asChild
        variant="ghost"
        className={cn(
          "w-full h-12 relative group",
          collapsed ? "justify-center" : "justify-start",
          isActive && "bg-accent"
        )}
      >
        <Link href={href}>
          {isActive && (
            <div className="absolute left-0 w-[4px] h-8 bg-blue-600 rounded-r-full group-hover:h-full transition-all duration-200" />
          )}
          <div
            className={cn(
              "flex items-center w-full gap-x-4",
              collapsed && "justify-center"
            )}
          >
            <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
            {!collapsed && <p className="truncate">{username}</p>}
            {!collapsed && isLive && <LiveBadge className="ml-auto" />}
          </div>
        </Link>
      </Button>
    </Hint>
  );
};

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
