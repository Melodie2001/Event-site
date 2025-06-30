import React from 'react';

const Album = () => {
  const tracks = [
    "Gestel", "Africa", "Sœur", "Bandor", "Omniscient", "Amour suprême",
    "Covidéo", "Rocafé", "Laisse de", "Bitumisé à Rass", "Boulevard", "Isola", "Chère"
  ];

  return (
    <div className="bg-neutral-100 text-black px-4 py-8 font-sans">
      {/* Titre */}
      <h1 className="text-4xl font-bold text-center mb-10 uppercase">Album – Amour Suprême</h1>

      {/* Pochette */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <img
          src="/assets/album-front.jpg"
          alt="Pochette recto"
          className="w-64 h-auto rounded shadow"
        />
        <img
          src="/assets/album-back.jpg"
          alt="Pochette verso"
          className="w-64 h-auto rounded shadow"
        />
      </div>

      {/* Tracklisting */}
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Tracklist</h2>
        <ol className="list-decimal list-inside text-lg space-y-1">
          {tracks.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ol>
      </div>

      {/* Bouton écoute */}
      <div className="text-center mt-10">
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Écouter l’album
        </a>
      </div>
    </div>
  );
};

export default Album;


