"use client";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center mt-20 gap-10 px-4 max-h-[450px]">
      {/* Bloc CV */}
      <a
        href="/CV.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center rounded-3xl shadow-lg p-6 w-full max-w-md hover:scale-105 transition-transform duration-300 bg-cover bg-center flex-1 h-full"
        style={{ backgroundImage: "url('/background2.png')" }}
      >
        <Image
          src="/CV.jpg"
          alt="CV de Nora Vergoz"
          width={320}
          height={420}
          className="rounded-xl object-contain"
        />
        <p className="mt-4 text-center text-gray-600 font-medium">
          Cliquez pour ouvrir le CV
        </p>
      </a>

      {/* Bloc Texte */}
      <div className="bg-white text-black p-6 mb-10 rounded-3xl w-full max-w-2xl shadow-lg flex flex-col flex-1 h-full">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Hello ! Je m'appelle Nora Vergoz!
        </h1>
        <h2 className="text-lg font-normal leading-relaxed whitespace-pre-line flex-grow overflow-auto">
          Après avoir exploré plusieurs voies, j’ai choisi de me former intensivement chez The Hacking Project, où j’ai appris à développer des applications web de A à Z, en autonomie mais aussi en équipe. À l’issue de cette formation, j’ai obtenu le titre professionnel Développeur Web (RNCP niveau 5).

          {"\n\n"}Ce qui me motive dans ce métier, c’est le côté concret de la création : voir une idée se transformer en une application fonctionnelle, utile et intuitive.

          {"\n\n"}Je suis quelqu’un de motivée, curieuse et persévérante. J’apprends vite, et je prends plaisir à me challenger au quotidien.

          {"\n\n"}Aujourd’hui, je suis à la recherche d’une alternance pour poursuivre un bachelor en webdesign, afin de développer encore plus mes compétences créatives et techniques tout en contribuant activement à des projets professionnels.
        </h2>
      </div>
    </div>
  );
}
