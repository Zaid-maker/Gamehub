"use client";

import React from "react";

interface HeaderProps {
  hostName: string;
  imageUrl: string;
  hostIdentity: string;
  viewerIdentity: string;
  isFollowing: boolean;
  name: string;
}

export const Header = ({
  hostName,
  imageUrl,
  hostIdentity,
  viewerIdentity,
  isFollowing,
  name,
}: HeaderProps) => {
  return <div>Header</div>;
};
