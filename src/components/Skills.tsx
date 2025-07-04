
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Framework', level: 85 },
    { name: 'SpringBoot', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 80 },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Quick Learner',
    'Team Collaboration',
    'Leadership',
    'Teamwork',
  ];

  const certifications = [
    'Java (Basic) – Hacker Rank',
    'Certificate in SQL – 360DigiTMG',
    'Learn Java – CodeCademy',
    'Learn SQL – CodeCademy',
    'Python for Data Science – NPTEL',
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-coral-50 to-coral-100 p-4 rounded-xl hover:from-coral-100 hover:to-coral-200 transition-all duration-300"
                >
                  <span className="text-gray-700 font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
