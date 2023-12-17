import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import React from "react";
import { Actions } from "./_components/actions";
import { isFollowingUser } from "@/lib/follow-service";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(params.username);

  return (
    <div>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default UserPage;
