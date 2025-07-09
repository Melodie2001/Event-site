import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-[#E7DFD6] text-black py-20 px-6 flex flex-col items-start justify-center min-h-[60vh]">
      <h1 className="text-5xl md:text-6xl font-bold mb-8">Amour Suprême</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/redirect">
          <button className="bg-white text-black border border-black px-6 py-3 text-lg font-semibold hover:bg-black hover:text-white transition">
            Écouter maintenant
          </button>
        </Link>

        <Link to="/artist">
          <button className="bg-black text-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-black border border-black transition">
            Découvrez l’artiste
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;












