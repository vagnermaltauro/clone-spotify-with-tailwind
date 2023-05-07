import React from 'react';
import AlbumButton from 'components/AlbumButton';
import MadeForUser from 'components/MadeForUser';
import Footer from 'components/Footer';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from 'components/Sidebar';

const albumImages = [
  {
    src: '/images/album-2.jpg',
    title: 'Example',
    id: 1,
  },
  {
    src: '/images/album.jpeg',
    title: 'Food',
    id: 2,
  },
  {
    src: '/images/album.jpeg',
    title: 'Tailwind',
    id: 3,
  },
  {
    src: '/images/album.jpeg',
    title: 'Example1',
    id: 4,
  },
  {
    src: '/images/album.jpeg',
    title: 'commit',
    id: 5,
  },
  {
    src: '/images/album.jpeg',
    title: 'Brain',
    id: 6,
  },
];

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {albumImages.map((index) => (
              <AlbumButton
                key={index.id}
                imageSrc={index.src}
                titleAlbum={index.title}
              />
            ))}
          </div>

          <MadeForUser />
        </main>
      </div>

      <Footer />
    </div>
  );
}
