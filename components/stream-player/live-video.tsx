import { Participant } from "livekit-client";
import React from "react";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo = ({ participant }: LiveVideoProps) => {
  return <div>LiveVideo</div>;
};
