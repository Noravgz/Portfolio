import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function ProjectsPage() {
  return (
    <section style={{ backgroundColor: "#EBD6BE" }}>
      <div className="container px-6 py-6 mx-auto">

        {/* Bloc titre + sous-titre + bouton avec image de fond */}
        <div className="flex justify-center overflow-hidden relative rounded-3xl max-w-4xl p-4 mx-auto mb-6">
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md w-full text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
              Découvrez mes projets
            </h1>
            <p className="mt-2 text-black font-semibold">
              Explorez mon GitHub pour d’autres créations
            </p>
            <div className="mt-4 flex justify-center">
              <Button
                href="https://github.com/Noravgz"
                label="GitHub"
                hoverText="Voir mes projets"
              />
            </div>
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 mb-10 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          
          {/* Projet 1 */}
          <div
            className="rounded-2xl p-4 w-full"
            style={{
              backgroundImage: "url('/background2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md">
              <a
                href="https://github.com/utilisateur/Owly-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="overflow-hidden rounded-lg cursor-pointer h-72 md:h-80 lg:h-[300px] group relative w-full">
                  <Image
                    src="/Owly-blog.png"
                    alt="Blog fictif"
                    fill
                    className="object-cover z-0"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center h-full px-8 py-4 transition duration-500 ease-in-out opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 z-10">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                      Owly blog - Blog fictif
                    </h2>
                    <p className="mt-2 text-base tracking-wider text-white uppercase">
                      Développée avec HTML, Ruby on Rails et Tailwind CSS
                    </p>
                  </div>
                </div>
              </a>
              <div className="flex gap-4 mt-4">
                <Image src="/html.svg" alt="HTML" width={50} height={50} />
                <Image src="/tailwind.svg" alt="Tailwind CSS" width={50} height={50} />
                <Image src="/ruby.svg" alt="Ruby" width={50} height={50} />
              </div>
            </div>
          </div>

          {/* Projet 2 */}
          <div
            className="rounded-2xl p-4 w-full"
            style={{
              backgroundImage: "url('/background2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md">
              <a
                href="https://github.com/Noravgz/Chatographe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="overflow-hidden rounded-lg cursor-pointer h-72 md:h-80 lg:h-[300px] group relative w-full">
                  <Image
                    src="/chatographe.png"
                    alt="Site de vente de photos de chat"
                    fill
                    className="object-cover z-0"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center w-full h-full px-8 py-4 transition duration-500 ease-in-out opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 z-10">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                      Chatographe - Photographies de chats à vendre
                    </h2>
                    <p className="mt-2 text-base tracking-wider text-white uppercase">
                      Projet réalisé en groupe avec HTML, CSS et Ruby on Rails
                    </p>
                  </div>
                </div>
              </a>
              <div className="flex gap-4 mt-4">
                <Image src="/html.svg" alt="HTML" width={50} height={50} />
                <Image src="/css.svg" alt="CSS" width={50} height={50} />
                <Image src="/ruby.svg" alt="Ruby" width={50} height={50} />
              </div>
            </div>
          </div>

          {/* Projet 3 */}
          <div
            className="rounded-2xl p-4 w-full"
            style={{
              backgroundImage: "url('/background2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md">
              <a
                href="https://github.com/Noravgz/Surfing_project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div className="overflow-hidden rounded-lg cursor-pointer h-72 md:h-80 lg:h-[300px] group relative w-full">
                  <Image
                    src="/surfing-project.png"
                    alt="Site vitrine de sessions de surf"
                    fill
                    className="object-cover z-0"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center w-full h-full px-8 py-4 transition duration-500 ease-in-out opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 z-10">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                      Surfing Project - Sessions de surf
                    </h2>
                    <p className="mt-2 text-base tracking-wider text-white uppercase">
                      Développée avec HTML et CSS
                    </p>
                  </div>
                </div>
              </a>
              <div className="flex gap-4 mt-4">
                <Image src="/html.svg" alt="HTML" width={50} height={50} />
                <Image src="/css.svg" alt="CSS" width={50} height={50} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
