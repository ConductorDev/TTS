"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Log initial audio element state
      console.log('Audio element initial state:', {
        src: audio.src,
        readyState: audio.readyState,
        networkState: audio.networkState,
        error: audio.error
      });

      const handleCanPlayThrough = () => {
        console.log('Audio can play through');
        setIsLoaded(true);
      };

      const handleLoadedData = () => {
        console.log('Audio loaded data');
        setIsLoaded(true);
      };

      const handleError = (e: Event) => {
        const audioError = audio.error;
        console.error('Audio error:', {
          code: audioError?.code,
          message: audioError?.message,
          event: e
        });
        setError('Error loading audio');
        toast.error(`Error loading audio: ${audioError?.message || 'Unknown error'}`);
      };

      // Add event listeners
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('error', handleError);

      // Cleanup
      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('error', handleError);
      };
    }
  }, []);

  const togglePlay = async () => {
    if (!isLoaded) {
      toast.error('Audio file is not loaded yet');
      return;
    }

    if (audioRef.current) {
      try {
        if (isPlaying) {
          await audioRef.current.pause();
          console.log('Audio paused successfully');
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            try {
              await playPromise;
              console.log('Audio playing successfully');
            } catch (error) {
              console.error('Error during play:', error);
              toast.error('Error playing audio');
              return;
            }
          }
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Error toggling play:', error);
        toast.error('Error controlling audio playback');
      }
    }
  };

  const toggleMute = () => {
    if (!isLoaded) {
      toast.error('Audio file is not loaded yet');
      return;
    }

    if (audioRef.current) {
      try {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
        console.log('Audio mute toggled:', !isMuted);
      } catch (error) {
        console.error('Error toggling mute:', error);
        toast.error('Error controlling audio volume');
      }
    }
  };

  // Show loading state
  if (!isLoaded && !error) {
    return (
      <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg p-4 flex items-center gap-4">
        <div className="text-sm text-muted-foreground">Loading audio...</div>
      </div>
    );
  }

  // Hide player if there's an error
  if (error) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg p-4 flex items-center gap-4">
      <audio
        ref={audioRef}
        src="/audio/AUDIO_1054.m4a"
        preload="auto"
        onEnded={() => {
          setIsPlaying(false);
          console.log('Audio playback ended');
        }}
        onError={(e) => {
          console.error('Audio error event:', e);
          setError('Error loading audio');
          toast.error('Error loading audio file');
        }}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        disabled={!isLoaded}
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
        disabled={!isLoaded}
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
