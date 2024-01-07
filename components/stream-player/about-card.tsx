"use client";

import React from "react";

interface AboutCardProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  bio: string | null;
  followedByCount: number;
}

export const AboutCard = ({}: AboutCardProps) => {
  return <div>AboutCard</div>;
};
