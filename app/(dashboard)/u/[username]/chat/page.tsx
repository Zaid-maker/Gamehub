import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import React from "react";
import { ToggleCard } from "./_components/toggle-card";

const Chat = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  //if (!stream) {
  //  throw new Error("Stream not found");
  //}

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Chat Settings</h1>
      </div>
      <div className="">
        <ToggleCard label="Enable Chat" />
        <ToggleCard />
        <ToggleCard />
        <ToggleCard />
      </div>
    </div>
  );
};

export default Chat;
