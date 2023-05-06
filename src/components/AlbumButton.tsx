/* eslint-disable react/button-has-type */
import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface Props {
  imageSrc: string,
  titleAlbum: string,
}

export default function AlbumButton({ imageSrc, titleAlbum }: Props) {
  return (
    <a href="/" className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
      <Image src={imageSrc} alt="album image" width={104} height={104} />
      <strong>{titleAlbum}</strong>
      <button className="p-2 rounded-full bg-green-400">
        <Play />
      </button>
    </a>
  );
}
