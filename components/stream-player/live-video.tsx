import { useTracks } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import React, { useEffect, useRef, useState } from "react";
import { FullscreenControl } from "./fullscreen-control";
import { useEventListener } from "usehooks-ts";
import { VolumeControl } from "./volume-control";
import { QualityControl } from "./quality-control";

interface LiveVideoProps {
  participant: Participant;
}

export const LiveVideo = ({ participant }: LiveVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(0);
  const [quality, setQuality] = useState<{ width: number; height: number }>({
    width: 1280,
    height: 720,
  });

  const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant.identity);

  const onVolumeChange = (value: number) => {
    setVolume(+value);

    if (videoRef?.current) {
      videoRef.current.muted = value === 0;
      videoRef.current.volume = +value * 0.01;
    }
  };

  const toggleMute = () => {
    const isMuted = volume === 0;

    setVolume(isMuted ? 50 : 0);

    if (videoRef?.current) {
      videoRef.current.muted = !isMuted;
      videoRef.current.volume = isMuted ? 0.5 : 0;
    }
  };

  const onQualityChange = (newQuality: { width: number; height: number }) => {
    setQuality(newQuality);
    // Apply quality constraints to video tracks
    const videoElement = videoRef.current;
    if (videoElement) {
      tracks.forEach((track) => {
        if (track.publication.track?.kind === "video") {
          const videoTrack = track.publication.track;
          videoTrack.detach();
          videoTrack.attach(videoElement);
          // Apply quality constraints
          if (videoTrack.mediaStreamTrack) {
            videoTrack.mediaStreamTrack.applyConstraints({
              width: { ideal: newQuality.width },
              height: { ideal: newQuality.height },
            });
          }
        }
      });
    }
  };

  useEffect(() => {
    // Attach tracks initially
    const videoElement = videoRef.current;
    if (videoElement) {
      tracks.forEach((track) => {
        track.publication.track?.attach(videoElement);
      });
    }

    // Set initial volume
    onVolumeChange(0);

    // Cleanup on unmount
    return () => {
      tracks.forEach((track) => {
        if (track.publication.track) {
          track.publication.track.detach();
        }
      });
    };
  }, [tracks]);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else if (wrapperRef?.current) {
      wrapperRef.current.requestFullscreen();
    }
  };

  const handleFullscreenChange = () => {
    const isCurrentlyFullscreen = document.fullscreenElement !== null;

    setIsFullscreen(isCurrentlyFullscreen);
  };

  useEventListener("fullscreenchange", handleFullscreenChange, wrapperRef);

  return (
    <div ref={wrapperRef} className="relative h-full flex">
      <video ref={videoRef} width="100%" />
      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 hover:transition-all">
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-gradient-to-r from-neutral-900 px-4">
          <div className="flex items-center gap-4">
            <VolumeControl
              onChange={onVolumeChange}
              value={volume}
              onToggle={toggleMute}
            />
            <QualityControl onChange={onQualityChange} />
          </div>
          <FullscreenControl
            isFullscreen={isFullscreen}
            onToggle={toggleFullscreen}
          />
        </div>
      </div>
    </div>
  );
};
