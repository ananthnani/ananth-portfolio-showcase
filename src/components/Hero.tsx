
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-fade-in">
            BA
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-600">Basani Ananth</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
          Java Full Stack Developer
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
          Recent ECE graduate passionate about building efficient, scalable web applications
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Hire Me
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="border-2 border-coral-500 text-coral-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-coral-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown 
            className="mx-auto text-blue-600 cursor-pointer hover:text-blue-700 transition-colors" 
            size={32}
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
