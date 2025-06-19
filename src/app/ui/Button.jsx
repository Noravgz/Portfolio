import React from "react";

const Cta = ({ href, label, hoverText }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button
        className="overflow-hidden relative w-36 p-2 h-12 bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
      >
        {label}
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-[#E7BC91] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-[#D4A276] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
        ></span>
        <span
          className="absolute w-36 h-32 -top-8 -left-2 bg-[#BC8A5F] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
        ></span>
        <span
          className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-2 text-black z-10 text-sm"
        >
          {hoverText}
        </span>
      </button>
    </a>
  );
};

export default Cta;
