import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface Props {
  imageSrc: string,
  titleAlbum: string,
}

export default function AlbumButton({ imageSrc, titleAlbum }: Props) {
  return (
    <a href="/" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
      <Image src={imageSrc} alt="album image" width={104} height={104} />

      <strong>{titleAlbum}</strong>

      <button className="h-10 w-10 flex items-center pl-2 justify-center invisible selection:p-2 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
