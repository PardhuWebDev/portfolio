'use client';

<<<<<<< HEAD
import React, { useState } from 'react';

const artists = [
  {
    name: 'Travis Scott',
    genre: 'Hip-Hop / Rap',
    url: 'https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Travis_Scott_2019_by_Glenn_Francis.jpg/440px-Travis_Scott_2019_by_Glenn_Francis.jpg'
  },
  {
    name: 'J. Cole',
    genre: 'Hip-Hop / Rap',
    url: 'https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/J._Cole_2018.jpg/440px-J._Cole_2018.jpg'
  },
  {
    name: 'The Weeknd',
    genre: 'R&B / Pop',
    url: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/The_Weeknd_2021_cropped.jpg/440px-The_Weeknd_2021_cropped.jpg'
  },
  {
    name: 'Drake',
    genre: 'Hip-Hop / Rap',
    url: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/440px-Drake_July_2016.jpg'
  }
];

export default function MusicWidget() {
  const [current, setCurrent] = useState(0);
  const artist = artists[current];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="absolute right-4 top-4 z-10">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-green-500" fill="currentColor">
=======
import React from 'react';
import Image from 'next/image';
import { useSpotify } from '@/hooks/useSpotify';

/**
 * Music player widget showing currently playing track
 * Inspired by Marco.fyi about page
 */
export default function MusicWidget() {
  const { topTracks, isLoading } = useSpotify();
  const currentTrack = topTracks?.[0]; // Use first top track as "currently playing"

  if (isLoading || !currentTrack) {
    return (
      <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
        {/* Music note icon badge */}
        <div className="absolute right-4 top-4">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-red-500"
            fill="currentColor"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div className="pt-12">
          <div className="mb-3 h-32 w-full rounded-xl bg-foreground/5"></div>
          <div className="h-4 w-3/4 rounded bg-foreground/5"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Music note icon badge */}
      <div className="absolute right-4 top-4 z-10">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-red-500"
          fill="currentColor"
        >
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>

<<<<<<< HEAD
      <p className="mb-3 text-xs font-medium text-foreground/40 uppercase tracking-widest">Artists I code to</p>

      <a href={artist.url} target="_blank" rel="noopener noreferrer">
        <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h4 className="truncate font-semibold text-foreground">{artist.name}</h4>
          <p className="truncate text-sm text-foreground/60">{artist.genre}</p>
        </div>
      </a>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + artists.length) % artists.length)}
          className="text-foreground/40 hover:text-foreground transition-colors"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>
        <div className="flex gap-1.5">
          {artists.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 w-1.5 rounded-full cursor-pointer transition-colors ${i === current ? 'bg-foreground/70' : 'bg-foreground/20'}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % artists.length)}
          className="text-foreground/40 hover:text-foreground transition-colors"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
=======
      {/* Album art */}
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={currentTrack.albumArt || '/placeholder-album.png'}
          alt={`${currentTrack.album} cover`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 400px) 100vw, 300px"
        />
      </div>

      {/* Track info */}
      <div className="space-y-1">
        <h4 className="truncate font-semibold text-foreground">
          {currentTrack.name}
        </h4>
        <p className="truncate text-sm text-foreground/60">
          {currentTrack.artist} — {currentTrack.album}
        </p>
      </div>

      {/* Player controls placeholder */}
      <div className="mt-4 flex items-center justify-center gap-4 text-foreground/40">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
        <div className="h-1 flex-1 rounded-full bg-foreground/10"></div>
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> cd09fbcb131a00886d5a242a4e52696754e7ec6b
