import React from "react";
import Button from "../ui/Button";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 px-6">
      {/* Wrapper avec background plus grand */}
      <div
        className="relative rounded-3xl max-w-3xl w-full p-10"
        style={{
          backgroundImage: "url('/background2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Bloc blanc plus grand avec padding */}
        <div className="bg-white rounded-3xl p-10 max-w-2xl mx-auto shadow-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Envie de discuter de projets web ou d'opportunités professionnelles ?<br />
            Contactez-moi par e-mail ou sur LinkedIn !
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10 mt-10">
        <Button href="mailto:vergoznora@gmail.com" label="E-mail" hoverText="Envoyer un email" />
        <Button href="https://www.linkedin.com/in/nora-vergoz-26534432b/" label="LinkedIn" hoverText="Voir mon profil" />
      </div>
    </div>
  );
}
