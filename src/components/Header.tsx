
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Basani Ananth
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <div className={`w-5 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              <button onClick={() => scrollToSection('home')} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
