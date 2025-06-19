"use client";
import * as React from 'react';

const RotatingText = ({ texts, className }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <span
      key={index}
      className={`inline-block px-2 bg-black text-white py-1 rounded-lg transition-opacity duration-500 ease-in-out ${className}`}
      style={{ opacity: 1 }}
    >
      {texts[index]}
    </span>
  );
};

export default RotatingText;
