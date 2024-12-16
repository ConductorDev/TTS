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
      const handleCanPlayThrough = () => {
        console.log('Audio can play through');
        setIsLoaded(true);
      };

      const handleLoadedMetadata = () => {
        console.log('Audio metadata loaded:', {
          duration: audio.duration,
          readyState: audio.readyState
        });
      };

      const handleLoadedData = () => {
        console.log('Audio data loaded:', {
          duration: audio.duration,
          paused: audio.paused,
          readyState: audio.readyState,
          networkState: audio.networkState
        });
        setIsLoaded(true);
      };

      const handleError = (e: Event) => {
        const audioError = audio.error;
        console.error('Audio error:', {
          code: audioError?.code,
          message: audioError?.message,
          event: e,
          src: audio.src,
          networkState: audio.networkState,
          readyState: audio.readyState
        });
        setError(`Error loading audio: ${audioError?.message || 'Unknown error'}`);
        toast.error(`Error loading audio: ${audioError?.message || 'Unknown error'}`);
      };

      const handleWaiting = () => {
        console.log('Audio is waiting for data');
      };

      const handleStalled = () => {
        console.log('Audio download has stalled');
      };

      const handleProgress = (e: Event) => {
        if (audio.buffered.length > 0) {
          console.log('Audio loading progress:', {
            buffered: audio.buffered.end(0),
            duration: audio.duration,
            percent: (audio.buffered.end(0) / audio.duration) * 100
          });
        }
      };

      // Add event listeners
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
      audio.addEventListener('error', handleError);
      audio.addEventListener('waiting', handleWaiting);
      audio.addEventListener('stalled', handleStalled);
      audio.addEventListener('progress', handleProgress);

      // Force load the audio
      try {
        audio.load();
      } catch (error) {
        console.error('Error forcing audio load:', error);
      }

      // Cleanup
      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('waiting', handleWaiting);
        audio.removeEventListener('stalled', handleStalled);
        audio.removeEventListener('progress', handleProgress);
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

  return (
    <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg p-4 flex items-center gap-4">
      {!isLoaded && !error && (
        <div className="text-sm text-muted-foreground">Loading audio...</div>
      )}
      {error && (
        <div className="text-sm text-red-500">{error}</div>
      )}
      <audio
        ref={audioRef}
        preload="auto"
        crossOrigin="anonymous"
        onEnded={() => {
          setIsPlaying(false);
          console.log('Audio playback ended');
        }}
      >
        <source 
          src="/audio/AUDIO_1054.mp3" 
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      {isLoaded && (
        <>
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
        </>
      )}
    </div>
  );
}
