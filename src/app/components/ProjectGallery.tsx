import React, { useState } from 'react';
import Link from "next/link";

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
      tech: "React, Next",
      image: "redbutton.png",
      link: "https://redbutton.example.com",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my projects and skills.",
      tech: "Next.js, TypeScript, Tailwind CSS",
      image: "portfolio.png",
      link: "https://portfolio.example.com",
    },
    {
      title: "Weather App",
      description: "Get real-time weather updates for any city in the world.",
      tech: "React, OpenWeather API, CSS",
      image: "weather.png",
      link: "https://weather.example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <p className="text-sm text-cyan-400 mt-2">{project.tech}</p>
              <Link
                href={project.link}
                className="inline-block mt-4 text-cyan-400 hover:underline"
              >
                Visit Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
