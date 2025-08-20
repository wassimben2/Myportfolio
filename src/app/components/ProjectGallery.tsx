import React, { useState } from 'react';


interface Project {
  title: string;
  description: string;
  tech: string;
  image: string;
  link: string;
}

const ProjectGallery: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Red Button Game",
      description: "A fun interactive game where you must avoid clicking the red button!",
      tech: "React, Next.js, Tailwind CSS",
      image: "red.png",
      link: "red-button-game.vercel.app"

    },
    {
      title: "Project 2",
      description: "Coming soon...",
      tech: "",
      image: "https://i.pinimg.com/736x/6d/57/09/6d5709284622301416f0cb5a645093ee.jpg",
      link: "#"
    },
    {
      title: "Project 3",
      description: "Coming soon...",
      tech: "",
      image: "https://i.pinimg.com/736x/6d/57/09/6d5709284622301416f0cb5a645093ee.jpg",
      link: "#"
    }
  ];
  
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  return (
    <div id="projects" className="mt-16 mx-auto w-full sm:w-11/12 md:w-5/6 lg:w-4/5">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 text-4xl sm:text-5xl font-extrabold text-center mb-4">
        Featured Projects
      </h1>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-2"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-52 object-cover"
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end transition-opacity duration-300 ${
                  activeProject === index ? 'opacity-100' : 'opacity-70'
                }`}
              >
                <div className="p-4">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-xs">{project.tech}</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              
              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
             <a
  href={`https://${project.link}`} // ici on utilise ton lien du tableau
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block text-pink-400 hover:text-pink-300 font-semibold text-sm transition-colors"
>
  View Project →
</a>

   

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
