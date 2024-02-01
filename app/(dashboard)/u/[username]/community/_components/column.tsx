"use client";

import { ColumnDef } from "@tanstack/react-table";

export type BlockedUser = {
  id: string;
  userId: string;
  imageUrl: string;
  username: string;
  createdAt: string;
};

export const columns: ColumnDef<BlockedUser>[] = [
  {
    accessorKey: "username",
    header: "username",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];
