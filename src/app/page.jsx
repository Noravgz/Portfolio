import React from "react";
import RotatingText from './ui/RotatingText';

export default function HomePage() {
  return (
<main className="max-h-screen overflow-hidden flex flex-col items-center justify-start px-4 pt-26">
<div className="flex flex-col md:flex-row items-center max-w-5xl gap-10">
        {/* Image à gauche avec cadre blanc arrondi */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="p-3 bg-white rounded-2xl shadow-lg">
            <img
              src="/nora3.png"
              alt="photo de profil portfolio"
              className="rounded-xl max-w-full h-auto w-56 md:w-90"
            />
          </div>
        </div>

        {/* Texte à droite */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Hello ! Je m'appelle Nora Vergoz
          </h1>

          <h2 className="text-xl font-semibold max-w-xl mt-2 flex items-center gap-2 justify-center md:justify-start">
            Développeuse web
            <RotatingText
              texts={['passionnée', 'créative', 'curieuse']}
              className="ml-2"
            />
          </h2>

          <h2 className="mt-6 mb-10 font-semibold max-w-xl">
          En quête d’une alternance en web design pour allier créativité et technique.
          </h2>
        </div>
      </div>
    </main>
  );
}
