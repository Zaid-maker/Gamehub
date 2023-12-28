import { ReceivedChatMessage } from "@livekit/components-react";
import React from "react";

interface ChatListProps {
  messages: ReceivedChatMessage[];
  isHidden: boolean;
}

export const ChatList = ({ messages, isHidden }: ChatListProps) => {
  return <div>ChatList</div>;
};
