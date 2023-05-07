import React from 'react';
import Image from 'next/image';
import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-900 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/images/divide.jpeg" alt="divide image" width={56} height={56} />

        <div className="flex flex-col">
          <strong className="font-normal">Name Music</strong>

          <span className="text-xs text-zinc-400">Artist Name</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />

          <SkipBack size={20} className="text-zinc-200" />

          <button className="h-10 w-10 flex items-center pl-1 justify-center selection:p-2 rounded-full bg-white text-black ml-auto">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />

          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>

          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-20 h-1 rounded-full" />
          </div>

          <span className="text-xs text-zinc-400">2:17</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />

        <LayoutList size={20} />

        <Laptop2 size={20} />

        <div className="flex items-center gap-2">
          <Volume size={20} />

          <div className="bg-zinc-200 w-10 h-1 rounded-full" />
        </div>

        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
