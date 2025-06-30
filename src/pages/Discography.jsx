import React from 'react';

const albums = [
  { title: 'Amour Suprême', year: 2025, cover: '/assets/album-front.jpg' },
  { title: 'NGRTD', year: 2015, cover: '/assets/ngrtd.jpg' },
  { title: 'Noir D****', year: 2012, cover: '/assets/noird.jpg' },
];

const Discography = () => {
  return (
    <div className="bg-neutral-100 text-black px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 uppercase">Discographie</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {albums.map((album, index) => (
          <div key={index} className="bg-white p-4 shadow rounded text-center">
            <img src={album.cover} alt={album.title} className="w-full h-64 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{album.title}</h2>
            <p className="text-gray-500">{album.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discography;
