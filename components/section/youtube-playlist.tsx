'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { YouTubeEmbed } from './youtube-embed';
import Image from 'next/image';
import { Play } from 'lucide-react';

// Video data extracted from the provided links
const videos = [
  {
    id: 'Rl-HGjZ_5Lk',
    title: 'Sri Ram Charit Manas Lecture - Part 8',
    playlist: 'PL_08cdzX6YXoDpXG_nSjHLewsPaYfTMZj',
    index: 8,
  },
  {
    id: 'xqM9pL5esEE',
    title: 'Sri Ram Charit Manas Lecture - Part 9',
    playlist: 'PL_08cdzX6YXoDpXG_nSjHLewsPaYfTMZj',
    index: 9,
  },
  {
    id: 'gWQemeu2T00',
    title: 'Sri Ram Charit Manas Lecture - Part 10',
    playlist: 'PL_08cdzX6YXoDpXG_nSjHLewsPaYfTMZj',
    index: 10,
  },
  {
    id: 'cuCptXk9WVE',
    title: 'Sri Ram Charit Manas Lecture - Part 11',
    playlist: 'PL_08cdzX6YXoDpXG_nSjHLewsPaYfTMZj',
    index: 11,
  },
  {
    id: 'Neo_pyps7Qw',
    title: 'Sri Ram Charit Manas Lecture - Special Series 19',
    playlist: 'PL_08cdzX6YXqOmGroyIilVmXXDLSAkMF5',
    index: 19,
  },
  {
    id: 'BygV1GP_6dY',
    title: 'Sri Ram Charit Manas Lecture - Special Series 20',
    playlist: 'PL_08cdzX6YXqOmGroyIilVmXXDLSAkMF5',
    index: 20,
  },
  {
    id: 'EcKERVLG530',
    title: 'Sri Ram Charit Manas Lecture - Special Series 32',
    playlist: 'PL_08cdzX6YXqOmGroyIilVmXXDLSAkMF5',
    index: 32,
  },
  {
    id: 'JfBJhAJD_4E',
    title: 'Sri Ram Charit Manas Lecture - Collection 16',
    playlist: 'PL_08cdzX6YXoYkrGT-EWz3msGHJJHJPvf',
    index: 16,
  },
  {
    id: 'fjn6_-K50Ew',
    title: 'Sri Ram Charit Manas Lecture - Extended Series 23',
    playlist: 'PL_08cdzX6YXqV1vYU7PuSptepWPeORx9z',
    index: 23,
  },
  {
    id: 'Usx6U8Jf0eU',
    title: 'Sri Ram Charit Manas Lecture - Extended Series 11',
    playlist: 'PL_08cdzX6YXqV1vYU7PuSptepWPeORx9z',
    index: 11,
  },
];

export function YouTubePlaylist() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="overflow-hidden">
          <div className="aspect-video">
            <YouTubeEmbed videoId={selectedVideo.id} />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{selectedVideo.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              From playlist: {selectedVideo.playlist} • Video #
              {selectedVideo.index}
            </p>
          </div>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <h3 className="text-lg font-medium mb-3">Playlist Videos</h3>
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                selectedVideo.id === video.id
                  ? 'bg-gray-100'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                if (selectedVideo.id !== video.id) {
                  setSelectedVideo(video);
                }
              }}
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt=""
                  width={120}
                  height={68}
                  className="rounded-md object-cover aspect-video"
                />
                {selectedVideo.id !== video.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
                    <Play className="w-8 h-8 text-white fill-white opacity-80" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Video #{video.index}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
