import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-20">
      <div className="stars"></div>
      <div className="twinkling"></div>
    </div>
  );
};

export default AnimatedBackground;