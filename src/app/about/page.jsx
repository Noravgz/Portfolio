"use client";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center mt-20 gap-10 px-4">
      {/* Bloc CV */}
      <a
        href="/CV.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center rounded-3xl shadow-lg p-6 w-full max-w-md hover:scale-105 transition-transform duration-300 bg-cover bg-center flex-1"
        style={{ backgroundImage: "url('/background2.png')" }}
      >
        <div className="relative w-full aspect-[3/4] max-w-[340px]">
          <Image
            src="/CV.jpg"
            alt="CV de Nora Vergoz"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="rounded-xl object-contain"
          />
        </div>
        <p className="mt-4 text-center text-gray-600 font-medium">
          Cliquez pour ouvrir le CV
        </p>
      </a>

      {/* Bloc Texte */}
      <div className="bg-white text-black p-6 mb-10 rounded-3xl w-full max-w-2xl shadow-lg flex flex-col flex-1">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Hello ! Je m'appelle Nora Vergoz!
        </h1>
        <div className="text-lg font-normal leading-relaxed whitespace-pre-line flex-grow">
          <b>A</b>près avoir exploré plusieurs voies, j’ai choisi de me former intensivement chez <b>The Hacking Project</b>, où j’ai appris à développer des applications web de A à Z, en autonomie mais aussi en équipe. <b>À</b> l’issue de cette formation, j’ai obtenu le titre professionnel <b>Développeur Web</b> (RNCP niveau 5).

          {"\n\n"}<b>C</b>e qui me motive dans ce métier, c’est le côté concret de la création : voir une idée se transformer en une application fonctionnelle, utile et intuitive.

          {"\n\n"}<b>J</b>e suis quelqu’un de <b>motivée</b>, <b>curieuse</b> et <b>persévérante</b>. J’apprends vite, et je prends plaisir à me challenger au quotidien.

          {"\n\n"}<b>A</b>ujourd’hui, je suis à la recherche d’une <b>alternance</b> pour poursuivre un <b>Bachelor</b> en <b>Webdesign</b>, afin de développer encore plus mes compétences créatives et techniques tout en contribuant activement à des projets professionnels.
        </div>
      </div>
    </div>
  );
}
