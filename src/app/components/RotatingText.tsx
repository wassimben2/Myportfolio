'use client';

import { useEffect, useState } from 'react';

interface Props {
  staticText: string;
  rotatingWords: string[];
  interval?: number;
}

export default function RotatingText({
  staticText,
  rotatingWords,
  interval = 2000,
}: Props) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, interval);
    
    return () => clearInterval(id);
  }, [rotatingWords, interval]);
  
  return (
    <div className="flex items-center text-xl md:text-2xl font-light text-white whitespace-nowrap absolute left-153 top-55">
      <span className="inline-flex items-center">{staticText}</span>
      <span className="bg-cyan-400 text-black px-3 py-1 rounded-md transition-all duration-500 inline-flex items-center ml-2 font-semibold">
        {rotatingWords[index]}
      </span>
    </div>
  );
}