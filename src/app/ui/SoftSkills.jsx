"use client";
import React from "react";

const softSkills = [
  "Travail en équipe",
  "Communication",
  "Curiosité",
  "Adaptabilité",
  "Gestion du temps",
  "Persévérance",
];

export default function SoftSkills({ side }) {
  const split = softSkills.length / 2;
  const displayed =
    side === "left" ? softSkills.slice(0, split) : softSkills.slice(split);

  return (
    <div className="w-full md:w-[200px] flex flex-col gap-10">
      {displayed.map((skill, index) => (
        <div
          key={index}
          className="px-4 py-4 bg-white text-black font-semibold text-lg rounded-lg shadow-md text-center
                     transition-transform duration-300 ease-in-out
                     hover:-translate-y-1 hover:scale-105 cursor-pointer"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
