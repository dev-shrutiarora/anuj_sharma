'use client';

import { useEffect, useRef, useState } from 'react';

// Define interfaces for YouTube API types
interface YouTubePlayer {
  destroy: () => void;
}

interface YouTubeWindow extends Window {
  YT?: {
    Player: new (
      element: HTMLDivElement,
      config: {
        videoId: string;
        width: string | number;
        height: string | number;
        playerVars: {
          autoplay: number;
          modestbranding: number;
          rel: number;
        };
      }
    ) => YouTubePlayer;
  };
  onYouTubeIframeAPIReady?: () => void;
}

interface YouTubeEmbedProps {
  videoId: string;
  height?: number | string;
  width?: number | string;
}

export function YouTubeEmbed({
  videoId,
  height = '100%',
  width = '100%',
}: YouTubeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isApiReady, setIsApiReady] = useState(false);

  // Load the YouTube API
  useEffect(() => {
    const win = window as YouTubeWindow;
    
    if (!win.YT) {
      // Create a global callback for when the API is ready
      win.onYouTubeIframeAPIReady = () => {
        setIsApiReady(true);
      };

      // Load the YouTube iframe API
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    } else {
      // API already loaded
      setIsApiReady(true);
    }
  }, []);

  // Initialize or update the player when the API is ready or videoId changes
  useEffect(() => {
    if (!isApiReady || !containerRef.current) return;
    const win = window as YouTubeWindow;

    // If player already exists, destroy it to prevent issues
    if (playerRef.current) {
      try {
        playerRef.current.destroy();
      } catch (e) {
        console.error('Error destroying player:', e);
      }
      playerRef.current = null;
    }

    // Create a new player instance
    try {
      if (win.YT) {
        playerRef.current = new win.YT.Player(containerRef.current, {
          videoId: videoId,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
          },
        });
      }
    } catch (e) {
      console.error('Error creating YouTube player:', e);
    }

    // Cleanup function
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error('Error destroying player:', e);
        }
      }
    };
  }, [isApiReady, videoId]);

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      className="w-full h-full"
    />
  );
}
