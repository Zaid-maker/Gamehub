"use client";

import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    onFollow("123");
  };

  return (
    <>
      <Button disabled={isPending} variant="primary">
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </>
  );
};
