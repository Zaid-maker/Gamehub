import { Stream, User } from "@prisma/client";
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
  return <div>ResultsCard</div>;
};
