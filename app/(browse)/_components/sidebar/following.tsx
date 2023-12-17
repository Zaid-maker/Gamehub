"use client";

import { Follow, User } from "@prisma/client";
import React from "react";

interface FollowingProps {
  data: (Follow & { following: User })[];
}

export const Following = ({ data }: FollowingProps) => {
  return <div>Following</div>;
};
