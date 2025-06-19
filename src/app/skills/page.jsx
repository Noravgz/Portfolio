import React from "react";
import SkillsCircle from "../ui/SkillsCircle";
import SoftSkills from "../ui/SoftSkills";

export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-14 px-6">
      {/* Wrapper avec background derrière le titre */}
      <div
        className="relative rounded-3xl max-w-xl w-full p-4"
        style={{
          backgroundImage: "url('/background2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Fond blanc arrondi derrière le titre */}
        <div className="bg-white rounded-3xl p-6 shadow-md max-w-xl mx-auto text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Mes compétences et mes savoir-être
          </h1>
        </div>
      </div>

      {/* Section compétences */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-8 px-4 mb-10 mt-12">
        <SoftSkills side="left" />
        <SkillsCircle />
        <SoftSkills side="right" />
      </div>
    </div>
  );
}
