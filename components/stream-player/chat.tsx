import { useChatSidebar } from "@/store/use-chat-sidebat";
import React from "react";
import { ChatHeader } from "./chat-header";

interface ChatProps {
  hostName: string;
  hostIdentity: string;
  viewerName: string;
  isFollowing: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat = ({
  hostName,
  hostIdentity,
  viewerName,
  isFollowing,
  isChatEnabled,
  isChatDelayed,
  isChatFollowersOnly,
}: ChatProps) => {
  const { variant, onExpand } = useChatSidebar((state) => state);

  return (
    <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]">
      <ChatHeader />
    </div>
  );
};
