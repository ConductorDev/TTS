"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg p-4 flex items-center gap-4">
      <audio
        ref={audioRef}
        src="/audio/AUDIO_1054.m4a"
        onEnded={() => setIsPlaying(false)}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
