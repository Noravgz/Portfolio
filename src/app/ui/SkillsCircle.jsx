"use client";
import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Next.js', icon: '/next-js.svg' },
  { name: 'Tailwind', icon: '/tailwind.svg' },
  { name: 'Node.js', icon: '/node-js.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'HTML', icon: '/html.svg' },
  { name: 'Github', icon: '/github.svg' },
  { name: 'Figma', icon: '/figma.svg' },
  { name: 'Ruby on rails', icon: '/ruby.svg' },
  { name: 'Vite', icon: '/vite.svg' },
  { name: 'Postgresql', icon: '/postgresql.svg' },
];

export default function SkillsCircle() {
  const circleRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    let angle = 0;
    let animationFrame;

    function rotate() {
      if (hovered === null) {
        angle = (angle + 0.2) % 360;
        setRotation(angle);
      }
      animationFrame = requestAnimationFrame(rotate);
    }

    rotate();
    return () => cancelAnimationFrame(animationFrame);
  }, [hovered]);

  const size = 300; // Taille dynamique, tu peux aussi l'adapter selon l'écran
  const center = size / 2;
  const radius = center - 40; // padding intérieur pour les tooltips
  const iconSize = 48;
  const tooltipDistance = 50;

  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-square mx-auto">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        height="100%"
        className="overflow-visible"
      >
        <g
          ref={circleRef}
          style={{
            transformOrigin: `${center}px ${center}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {skills.map(({ name, icon }, i) => {
            const angle = (i / skills.length) * 2 * Math.PI;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            return (
              <g
                key={name}
                transform={`translate(${x}, ${y}) rotate(${-rotation})`}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
              >
                <image
                  href={icon}
                  x={-iconSize / 2}
                  y={-iconSize / 2}
                  width={iconSize}
                  height={iconSize}
                  style={{ pointerEvents: "auto", cursor: "default" }}
                />
              </g>
            );
          })}
        </g>
      </svg>

      {/* Tooltips */}
      {skills.map(({ name }, i) => {
        if (hovered !== name) return null;

        const angle = (i / skills.length) * 2 * Math.PI;
        const x = center + (radius + tooltipDistance) * Math.cos(angle);
        const y = center + (radius + tooltipDistance) * Math.sin(angle);

        return (
          <div
            key={name}
            className="absolute px-2 py-1 bg-black text-white text-sm rounded z-10 whitespace-nowrap pointer-events-none transition-opacity duration-200"
            style={{
              left: `${(x / size) * 100}%`,
              top: `${(y / size) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
}
