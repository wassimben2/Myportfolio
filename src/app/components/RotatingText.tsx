'use client';

import { useEffect, useState } from 'react';

interface Props {
  staticText: string;
  rotatingWords: string[];
  interval?: number;
  centered?: boolean; // Nouvelle prop pour choisir le style
}

export default function RotatingText({
  staticText,
  rotatingWords,
  interval = 2000,
  centered = false,
}: Props) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, interval);
    
    return () => clearInterval(id);
  }, [rotatingWords, interval]);
  
  // Style conditionnel basé sur la prop centered
  const containerClass = centered 
    ? "flex items-center justify-center text-xl md:text-2xl font-light text-white -ml-8" 
    : "flex items-center text-xl md:text-2xl font-light text-white whitespace-nowrap absolute left-153 top-55";
  
  return (
    <div className={containerClass}>
      <span className="inline-flex items-center">{staticText}</span>
      <span className="bg-cyan-400 text-black px-3 py-1 rounded-md transition-all duration-500 inline-flex items-center ml-2 font-semibold">
        {rotatingWords[index]}
      </span>
    </div>
  );
}