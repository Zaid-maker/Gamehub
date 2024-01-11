import { UserAvatar } from "@/components/user-avatar";
import { Stream, User } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface ResultsCardProps {
  data: {
    user: User;
    isLive: boolean;
    name: string;
    thumbnailUrl: string | null;
  };
}

export const ResultsCard = ({ data }: ResultsCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="h-dull w-full space-y-4">
        Thumbnail
        <div className="flex gap-x-3">
          <UserAvatar
            username={data.user.username}
            imageUrl={data.user.imageUrl}
            isLive={data.isLive}
          />
          <div className="flex flex-col text-sm overflow-hidden">
            <p className="truncate font-semibold hover:text-blue-500">
              {data.name}
            </p>
            <p className="text-muted-foreground">{data.user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
