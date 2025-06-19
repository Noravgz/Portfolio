"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center mt-10 px-4">
      {/* Bouton burger visible seulement mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden mb-4 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <ul
        className={`
          flex gap-8 bg-white px-10 py-4 rounded-full shadow-md
          max-w-5xl
          flex-col sm:flex-row
          items-center justify-center
          transition-all duration-300
          ${isOpen ? "flex" : "hidden sm:flex"}
        `}
      >
        <li>
          <Link
            href="/about"
            className="text-black font-semibold hover:text-[#BC8A5F] transition-colors"
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className="text-black font-semibold hover:text-[#BC8A5F] transition-colors"
          >
            Compétences
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/owl.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-auto"
            />
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-black font-semibold hover:text-[#BC8A5F] transition-colors"
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-black font-semibold hover:text-[#BC8A5F] transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
