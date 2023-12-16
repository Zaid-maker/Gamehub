import { User } from "@prisma/client";
import React from "react";

interface RecommendedProps {
  data: User[];
}

export const Recommended = ({ data }: RecommendedProps) => {
  return <div>Recommended</div>;
};
