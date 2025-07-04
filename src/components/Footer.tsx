
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Basani Ananth</h3>
          <p className="text-gray-400 mb-6">
            Java Full Stack Developer | Recent ECE Graduate
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Basani Ananth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
