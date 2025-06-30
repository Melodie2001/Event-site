import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-neutral-100 text-black font-sans">
      {/* HERO */}
      <section className="relative bg-black text-white">
        <img
          src="/assets/youssoupha-bg.jpg"
          alt="Youssoupha"
          className="w-full h-[70vh] object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold uppercase">Youssoupha</h1>
          <p className="text-2xl mt-2">Amour Suprême</p>
          <Link
            to="/album"
            className="mt-6 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Écoutez maintenant
          </Link>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="flex flex-col md:flex-row justify-center gap-8 my-10 text-lg font-medium text-center">
        <Link to="/artist" className="hover:underline">Découvrez l’artiste</Link>
        <Link to="/discography" className="hover:underline">Voir toute la discographie</Link>
      </section>

      {/* Dates de tournée */}
      <section className="bg-yellow-100 py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Dates de tournée</h2>
        <div className="max-w-xl mx-auto space-y-3 text-lg">
          <div className="flex justify-between"><span>12.02</span><span>Lille – Zénith</span></div>
          <div className="flex justify-between"><span>27.02</span><span>Lyon – Tony Garnier</span></div>
          <div className="flex justify-between"><span>04.03</span><span>Paris – Accor Arena</span></div>
        </div>
      </section>

      {/* Dernières news */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Dernières news</h2>
        <div className="max-w-3xl mx-auto bg-white rounded shadow-md flex flex-col md:flex-row overflow-hidden">
          <img
            src="/assets/youssoupha-news.jpg"
            alt="News"
            className="w-full md:w-1/3 object-cover h-48 md:h-auto"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Aute arartiule actti texte</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi...
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-200 py-6 text-center">
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">🎵</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶️</a>
          <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer">🍎</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
        </div>
        <p className="mt-4 text-sm text-gray-500">&copy; 2025 Youssoupha – Amour Suprême</p>
      </footer>
    </div>
  );
};

export default Home;



