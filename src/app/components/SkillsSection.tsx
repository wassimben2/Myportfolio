import React, { useState } from 'react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);


  const skills = [
    { 
      name: "React", 
      gradient: "from-blue-400 via-cyan-500 to-blue-600",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]",
      particles: "🔵",
      mastery: "Expert"
    },
    { 
      name: "JavaScript", 
      gradient: "from-yellow-400 via-orange-500 to-yellow-600",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.5)]",
      particles: "⚡",
      mastery: "Advanced"
    },
    { 
      name: "CSS/Tailwind", 
      gradient: "from-purple-400 via-pink-500 to-purple-600",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.5)]",
      particles: "🎨",
      mastery: "Master"
    },
    { 
      name: "Node.js", 
      gradient: "from-green-400 via-emerald-500 to-green-600",
      glow: "shadow-[0_0_30px_rgba(34,197,94,0.5)]",
      particles: "🚀",
      mastery: "Proficient"
    },
    { 
      name: "Next.js", 
      gradient: "from-gray-700 via-gray-900 to-black",
      glow: "shadow-[0_0_30px_rgba(255,255,255,0.3)]",
      particles: "▲",
      mastery: "Advanced"
    },
    { 
      name: "UI/UX Design", 
      gradient: "from-rose-400 via-fuchsia-500 to-pink-600",
      glow: "shadow-[0_0_30px_rgba(244,63,94,0.5)]",
      particles: "✨",
      mastery: "Creative"
    }
  ];

  return (
    <div id="skills" className="mt-10 mx-auto w-full sm:w-11/12 md:w-5/6 lg:w-3/4 border-2 border-transparent rounded-lg shadow-lg bg-gray-800 flex flex-col items-center p-4 sm:p-8 overflow-hidden relative">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['⚡', '🚀', '✨', '🎨', '💫'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <h1 className="text-indigo-400 text-3xl sm:text-5xl font-bold mb-4 relative z-10">My Arsenal</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-12 relative z-10"></div>
      
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="relative group perspective-1000"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
          
            <div className={`
              relative transform-gpu transition-all duration-500 ease-out
              ${hoveredSkill === index ? 'scale-110 -rotate-2' : 'scale-100'}
              bg-gradient-to-br ${skill.gradient}
              rounded-2xl p-8 cursor-pointer
              ${hoveredSkill === index ? skill.glow : ''}
              border border-white/20
              backdrop-blur-sm
              hover:rotate-3d
            `}>
              
             
              <div className={`
                absolute -top-4 -right-4 text-4xl
                transition-all duration-300
                ${hoveredSkill === index ? 'animate-bounce text-6xl' : ''}
              `}>
                {skill.particles}
              </div>
              
             
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">
                {skill.name}
              </h3>
              
            
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <span className="text-white font-semibold text-sm">
                  {skill.mastery}
                </span>
              </div>
              
             
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden mb-4">
                <div 
                  className={`
                    absolute left-0 top-0 h-full bg-white/80 rounded-full
                    transition-all duration-1000 delay-300
                    ${hoveredSkill === index ? 'w-full animate-pulse' : 'w-0'}
                  `}
                ></div>
              </div>
              
             
              {hoveredSkill === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute text-yellow-300 text-xs animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    >
                      ✨
                    </div>
                  ))}
                </div>
              )}
              
             
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
      
    
      <div className="mt-16 text-center relative z-10">
        <div className="relative">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-xl font-bold animate-pulse">
            "Crafting digital experiences that transcend imagination"
          </p>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .hover\\:rotate-3d:hover {
          transform: rotateY(10deg) rotateX(10deg);
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;