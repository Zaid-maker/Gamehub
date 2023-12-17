import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import React from "react";

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

  return <div>User: {params.username}</div>;
};

export default UserPage;
