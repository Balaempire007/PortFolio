import React from 'react'
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">Bala</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">Chandar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a passionate Web Developer skilled in creating responsive, user-friendly websites and applications using HTML, CSS, JavaScript, and React.js. I build modern, clean, and efficient interfaces that deliver excellent user experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Explore My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
       
         <a href="#about" >
                         <ArrowDown className="h-5 w-5 text-primary" />
                        </a>
      </div>
    </section>
  );
};

export default HeroSection;
