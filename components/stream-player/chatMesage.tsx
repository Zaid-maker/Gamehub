"use client";

import { ReceivedChatMessage } from "@livekit/components-react";
import React from "react";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

export const ChatMessage = ({ data }: ChatMessageProps) => {
  return (
    <div>
      <p></p>
      <div>
        <p>
          <span className="truncate"></span>
        </p>
        <p>{data.message}</p>
      </div>
    </div>
  );
};
