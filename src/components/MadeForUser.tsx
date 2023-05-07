import Image from 'next/image';
import React from 'react';

const imagesMadeForUser = [
  {
    src: '/images/divide.jpeg',
    id: 1
  },
  {
    src: '/images/divide.jpeg',
    id: 2
  },
  {
    src: '/images/divide.jpeg',
    id: 3
  },
  {
    src: '/images/divide.jpeg',
    id: 4
  },
  {
    src: '/images/divide.jpeg',
    id: 5
  },
]

export default function MadeForUser() {
  return (
    <>
      <h2 className="font-semibold text-2xl mt-10">Made For Vagner Dev</h2>

      <div className="flex flex-wrap gap-4 mt-4">
        {imagesMadeForUser.map((index) => (
          <a href="/" key={index.id} className="bg-white/5 grid p-3 gap-2 rounded hover:bg-white/10">
            <Image className="w-full" src={index.src} alt="tttt" width={120} height={120} />

            <strong className="font-semibold">Music 1</strong>

            <span className="text-xs text-zinc-500">Text music here</span>
          </a>
        ))}
      </div>
    </>
  );
}
