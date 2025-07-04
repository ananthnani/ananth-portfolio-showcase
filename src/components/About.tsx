
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Good Morning Sir, My name is Basani Ananth. I recently graduated with a Bachelor's degree in Electronics and Communication Engineering from SR University, where I maintained a CGPA of 7.2.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              During my studies, I developed strong communication skills, problem-solving abilities, and a quick learning nature. I'm proficient in document creation and formatting, with experience in organizing and managing academic projects.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy creative problem-solving and thrive in dynamic environments. I'm excited to pursue my passion for software development and create impactful web applications.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Team Player
              </span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">B.Tech - Electronics and Communication Engineering</h4>
                  <p className="text-gray-600">SR University (2020 - 2024)</p>
                  <p className="text-blue-600 font-medium">CGPA: 7.2</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Intermediate - PCM</h4>
                  <p className="text-gray-600">Narayana Junior College (2018 - 2020)</p>
                  <p className="text-blue-600 font-medium">Percentage: 90%</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">SSC</h4>
                  <p className="text-gray-600">Spectra Global School (2017 - 2018)</p>
                  <p className="text-blue-600 font-medium">Percentage: 90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
