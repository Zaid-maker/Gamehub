"use client";

import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebat";
import { MessageSquare, Users } from "lucide-react";
import React from "react";
import { Hint } from "../hint";
import { Button } from "../ui/button";

export const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state);

  const isChat = variant === ChatVariant.CHAT;

  const Icon = isChat ? Users : MessageSquare;

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    onChangeVariant(newVariant);
  };

  const label = isChat ? "Community" : "Go back to Chat";

  return (
    <Hint label={label} side="left" asChild>
      <Button
        variant="ghost"
        onClick={onToggle}
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </Hint>
  );
};
