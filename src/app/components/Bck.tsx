
'use client';
import React from 'react';
const StarsBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      
      <div className="absolute top-[5%] left-[10%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
      <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}></div>
      <div className="absolute top-[8%] left-[45%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animation: 'float 5s ease-in-out infinite 1s' }}></div>
      <div className="absolute top-[20%] left-[60%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" style={{ animation: 'float 3.5s ease-in-out infinite 1.5s' }}></div>
      <div className="absolute top-[12%] left-[75%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animation: 'float 4.5s ease-in-out infinite 0.8s' }}></div>
      <div className="absolute top-[25%] left-[15%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animation: 'float 3.8s ease-in-out infinite 2s' }}></div>
      <div className="absolute top-[35%] left-[30%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animation: 'float 4.2s ease-in-out infinite 0.3s' }}></div>
      <div className="absolute top-[28%] left-[55%] w-1 h-1 bg-white rounded-full opacity-90 animate-pulse" style={{ animation: 'float 3.2s ease-in-out infinite 1.8s' }}></div>
      <div className="absolute top-[40%] left-[20%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animation: 'float 4.8s ease-in-out infinite 0.7s' }}></div>
      <div className="absolute top-[45%] left-[70%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" style={{ animation: 'float 3.6s ease-in-out infinite 2.2s' }}></div>
      <div className="absolute top-[50%] left-[40%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animation: 'float 4.4s ease-in-out infinite 1.2s' }}></div>
      <div className="absolute top-[55%] left-[80%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animation: 'float 3.4s ease-in-out infinite 0.9s' }}></div>
      <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animation: 'float 4.6s ease-in-out infinite 1.7s' }}></div>
      <div className="absolute top-[65%] left-[50%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" style={{ animation: 'float 3.3s ease-in-out infinite 0.4s' }}></div>
      <div className="absolute top-[70%] left-[15%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animation: 'float 4.1s ease-in-out infinite 2.5s' }}></div>
      <div className="absolute top-[75%] left-[65%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animation: 'float 3.7s ease-in-out infinite 1.3s' }}></div>
      <div className="absolute top-[80%] left-[35%] w-1 h-1 bg-white rounded-full opacity-90 animate-pulse" style={{ animation: 'float 4.3s ease-in-out infinite 0.6s' }}></div>
      <div className="absolute top-[85%] left-[75%] w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animation: 'float 3.9s ease-in-out infinite 1.9s' }}></div>
      <div className="absolute top-[90%] left-[45%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" style={{ animation: 'float 4.7s ease-in-out infinite 0.2s' }}></div>
      <div className="absolute top-[95%] left-[20%] w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animation: 'float 3.1s ease-in-out infinite 1.6s' }}></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
      `}</style>
    </div>
  );
};

export default StarsBackground;