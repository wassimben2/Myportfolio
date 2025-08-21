"use client";
import React, { useState } from 'react';
import "./globals.css";
import RotatingText from "./components/RotatingText";
import Image from "next/image";

import SkillsSection from "./components/SkillsSection";
import ProjectGallery from "./components/ProjectGallery";
import SocialBar from "./components/SocialBar";
import StarsBackground from "./components/Bck";
import Link from "next/link";


export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
   <main className="min-h-screen relative bg-white dark:bg-[#0f172a] transition-colors duration-500">
  



      <StarsBackground/>
      
     
      <SocialBar />
     
    
      <header className="w-full bg-[rgba(30,41,59,0.7)] backdrop-blur-md px-4 sm:px-6 py-4 flex flex-col shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 px-2 sm:px-4 py-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.8)] hover:scale-110 transition duration-300">
              My Portfolio
            </h1>
          </div>

        
          <div className="block sm:hidden">
            <button 
              className="text-white p-2" 
              onClick={toggleMobileMenu}
              aria-label="Menu mobile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        
          <nav className="hidden sm:flex text-white space-x-4 md:space-x-6 font-bold">
            <a
              href="#about"
              className="text-lg md:text-xl inline-block hover:scale-110 transition duration-300 pl-3 md:pl-5 relative group pb-1"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-3 md:left-5 right-2 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 w-0 group-hover:w-3/4 transition-all duration-500 ease-out origin-center"></div>
            </a>
            <a
              href="#skills"
              className="text-lg md:text-xl inline-block hover:scale-110 transition duration-300 pl-3 md:pl-5 relative group pb-1"
            >
              <span>Skills</span>
              <div className="absolute bottom-0 left-3 md:left-5 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 w-0 group-hover:w-3/4 transition-all duration-500 ease-out origin-center"></div>
            </a>
            <a
              href="#Service"
              className="text-lg md:text-xl inline-block hover:scale-110 transition duration-300 pl-3 md:pl-5 relative group pb-1"
            >
              <span>Services</span>
              <div className="absolute bottom-0 left-3 md:left-5 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 w-0 group-hover:w-3/4 transition-all duration-500 ease-out origin-center"></div>
            </a>
            <a
              href="#projects"
              className="text-lg md:text-xl inline-block hover:scale-110 transition duration-300 pl-3 md:pl-5 relative group pb-1"
            >
              <span>Projects</span>
              <div className="absolute bottom-0 left-3 md:left-5 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 w-0 group-hover:w-3/4 transition-all duration-500 ease-out origin-center"></div>
            </a>
            <a
              href="#Contact"
              className="text-lg md:text-xl inline-block hover:scale-110 transition duration-300 pl-3 md:pl-5 relative group pb-1"
            >
              <span>Contact</span>
              <div className="absolute bottom-0 left-3 md:left-5 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 w-0 group-hover:w-3/4 transition-all duration-500 ease-out origin-center"></div>
            </a>
          </nav>
        </div>

       
        {mobileMenuOpen && (
          <nav className="sm:hidden bg-[rgba(30,41,59,0.95)] text-white flex flex-col space-y-4 py-4 px-2 mt-2 rounded-md animate-fadeIn">
            <a href="#about" className="text-lg font-semibold px-3 py-2 hover:bg-indigo-800 rounded-md transition">
              About
            </a>
            <a href="#skills" className="text-lg font-semibold px-3 py-2 hover:bg-indigo-800 rounded-md transition">
              Skills
            </a>
            <a href="#Service" className="text-lg font-semibold px-3 py-2 hover:bg-indigo-800 rounded-md transition">
              Services
            </a>
            <a href="#projects" className="text-lg font-semibold px-3 py-2 hover:bg-indigo-800 rounded-md transition">
              Projects
            </a>
            <a href="#Contact" className="text-lg font-semibold px-3 py-2 hover:bg-indigo-800 rounded-md transition">
              Contact
            </a>
          </nav>
        )}
      </header>
<div id="Port" className="relative w-full flex flex-col items-center justify-center text-center pt-20 sm:pt-32 mb-10">
 
<h1 className="text-4xl sm:text-7xl font-bold text-gray-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] mb-6 px-4 hover:animate-pulse hover:text-cyan-300 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-200 cursor-pointer">
  Hi, I&apos;m Wassim
</h1>


 
  <div className="absolute top-20 left-10 b">
    <RotatingText
      staticText="A Web developer,"
      rotatingWords={["Dark mode lover", "Creative soul", "Pixel perfect", "Coffee lover"]}
      interval={1500}
    />
  </div>


  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
  <Link href="/project">
    <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold font-sans px-8 py-4 rounded-2xl shadow-[0_0_15px_rgba(129,140,248,0.6)] hover:shadow-[0_0_25px_rgba(129,140,248,0.9)] transition-all duration-300 ease-in-out hover:scale-105">
      <h1 className="text-lg tracking-wide">See My Work</h1>
    </button>
    </Link>
<Link href="/contact">
    <button className="bg-transparent border border-indigo-500 text-white font-semibold font-sans px-8 py-4 rounded-2xl shadow-[0_0_15px_rgba(129,140,248,0.6)] hover:shadow-[0_0_25px_rgba(129,140,248,0.9)] transition-all duration-300 ease-in-out hover:scale-105">
      <h1 className="text-lg tracking-wide">Get in Touch</h1>
    </button>
    </Link>
  </div>
</div>


<div id="about" className="relative mt-20 mx-auto w-full sm:w-11/12 md:w-5/6 lg:w-3/4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
 
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.25),transparent_60%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.25),transparent_60%)]"></div>

  <div className="relative flex flex-col items-center p-6 sm:p-12">
   
    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
      About <span className="text-indigo-400">Me</span>
    </h1>
    <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-10"></div>

   
<div className="relative mb-10 group">
  
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 blur-3xl opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse"></div>

  
  <div className="p-[4px] rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow">
    <Image
  src="/ff.jpg"
  alt="Hero Image"
  width={500}  
  height={500} 
  className="relative rounded-full w-36 h-36 sm:w-56 sm:h-56 object-cover border-4 border-gray-900 shadow-[0_0_35px_rgba(139,92,246,0.7)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"

    />
  </div>
</div>

<style jsx>{`
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
`}</style>


    
    <div className="text-gray-300 text-center max-w-3xl space-y-6">
      <p className="leading-relaxed text-lg">
        I&apos;m a <span className="text-indigo-400 font-semibold">web developer</span> passionate about designing impactful digital experiences. 
        My mission is to build websites that don&apos;t just look beautiful, but also <span className="text-purple-400 font-bold">perform</span>.
      </p>
      
      <p className="leading-relaxed text-lg">
        From <span className="text-blue-400">clean code</span> and responsive layouts to intuitive interfaces, I blend design & functionality to create 
        sites that help brands grow and leave a strong online presence. 🚀
      </p>
    </div>
  </div>
</div>

     
      <SkillsSection />

    <div
  id="Service"
  className="mt-10 mx-auto w-full sm:w-11/12 md:w-5/6 lg:w-3/4 
             border-2 border-transparent rounded-2xl shadow-xl 
             bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
             flex flex-col items-center p-6 sm:p-10"
>
  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500 text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
    What I Offer
  </h1>
  <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-8"></div>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-8">
    <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 flex flex-col items-center text-center 
                    shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 
                    hover:from-indigo-700 hover:to-blue-600 transition-all duration-500 ease-in-out">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      </div>
      <h2 className="text-white text-xl font-bold mb-2">Dynamic Landing Pages</h2>
      <p className="text-gray-300 text-sm">Single-page sites tailored for impact, optimized for conversion with engaging effects.</p>
    </div>

    <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 flex flex-col items-center text-center 
                    shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 
                    hover:from-indigo-700 hover:to-blue-600 transition-all duration-500 ease-in-out">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-white text-xl font-bold mb-2">Immersive Websites</h2>
      <p className="text-gray-300 text-sm">Multi-page sites with clear structure, showcasing your brand with interactive elements.</p>
    </div>

    <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 flex flex-col items-center text-center 
                    shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 
                    hover:from-indigo-700 hover:to-blue-600 transition-all duration-500 ease-in-out">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <h2 className="text-white text-xl font-bold mb-2">Fluid Responsive Design</h2>
      <p className="text-gray-300 text-sm">Flawless adaptation to all screen sizes, prioritizing a seamless mobile experience.</p>
    </div>
  </div>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
    <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 flex flex-col items-center text-center 
                    shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 
                    hover:from-indigo-700 hover:to-blue-600 transition-all duration-500 ease-in-out">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>
      <h2 className="text-white text-xl font-bold mb-2">Engaging UX/UI</h2>
      <p className="text-gray-300 text-sm">Intuitive layouts and compelling interactions designed for user delight and goal completion.</p>
    </div>

    <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 flex flex-col items-center text-center 
                    shadow-md hover:shadow-2xl hover:scale-105 hover:-rotate-1 
                    hover:from-indigo-700 hover:to-blue-600 transition-all duration-500 ease-in-out">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h2 className="text-white text-xl font-bold mb-2">Peak Performance</h2>
      <p className="text-gray-300 text-sm">Optimized code and assets for lightning-fast load times, enhancing UX.</p>
    </div>
  </div>
</div>

      
      
      <ProjectGallery />

      <div 
  id="Contact" 
  className="mt-10 mx-auto w-full sm:w-11/12 md:w-5/6 lg:w-3/4 relative border-2 border-transparent rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center p-6 sm:p-10 mb-10 overflow-hidden"
>
  
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-600/10 to-pink-500/10 blur-3xl opacity-40 animate-pulse"></div>

  <h1 className="text-indigo-400 text-3xl sm:text-5xl font-extrabold mb-4 text-center drop-shadow-lg">
    Ready to Ignite Your Online Presence?
  </h1>
  <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full shadow-lg"></div>
  
  <div className="text-white text-center max-w-3xl mx-auto relative z-10">
    <p className="mb-12 text-base sm:text-lg p-3 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm shadow-inner border border-white/10 leading-relaxed">
      Let&apos;s collaborate! Reach out via Reddit, and I&apos;ll get back to you quickly to discuss how we can bring your vision to life with stunning design and powerful functionality.
    </p>
     <Link href="/contact">
    <div className="flex justify-center">
      <button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.9)] transition-all duration-300 ease-in-out hover:scale-110 flex items-center space-x-3 group">
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <span className="text-base sm:text-lg tracking-wide">Send me a DM</span>
      </button>
    </div>
    </Link>
  </div>
</div>
 
 


    
      <footer className="w-full text-center text-gray-400 py-6 sm:py-8 bg-[#0f172a]">
        <p className="hover:text-indigo-400 transition-colors duration-300">© 2025 FlowState Creations. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
