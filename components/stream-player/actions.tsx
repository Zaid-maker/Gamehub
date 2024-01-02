"use client";

import React from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionsProps {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
}

export const Actions = ({
  hostIdentity,
  isFollowing,
  isHost,
}: ActionsProps) => {
  return (
    <Button variant="primary" size="sm" className="w-full lg:w-auto">
      <Heart
        className={cn(
          "h-4, w-4 mr-2",
          isFollowing ? "fill-white" : "fill-none"
        )}
      />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
