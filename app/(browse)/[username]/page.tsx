import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import React from "react";
import { Actions } from "./_components/actions";

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

  return (
    <div>
      <Actions />
    </div>
  );
};

export default UserPage;
