"use client";

import { Button } from "@/components/ui/button";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  return (
    <>
      <Button variant="primary">{isFollowing ? "Unfollow" : "Follow"}</Button>
    </>
  );
};
