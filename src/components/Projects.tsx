
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Water Quality Prediction Using Machine Learning",
      description: "Developed a comprehensive ML system to predict water quality using multiple algorithms including Decision Tree, SVC, Logistic Regression, and K-Neighbors Classifier.",
      role: "Machine Learning Developer",
      technologies: ["Python", "Machine Learning", "Decision Tree", "SVC", "Logistic Regression", "K-Neighbors"],
      highlights: [
        "Trained 6 different ML models for accurate predictions",
        "Achieved 94.98% accuracy with Decision Tree algorithm",
        "K-Neighbors Classifier achieved 70.57% prediction accuracy",
        "Implemented comprehensive model comparison and evaluation"
      ]
    },
    {
      title: "Night Patrol Robot (IoT Project)",
      description: "Designed and developed an IoT-based security robot for patrolling designated areas and monitoring for suspicious activities with real-time alerts.",
      role: "IoT Developer & Project Lead",
      technologies: ["IoT", "Sensors", "Real-time Monitoring", "Alert Systems", "Hardware Integration"],
      highlights: [
        "Designed autonomous patrol system for security monitoring",
        "Implemented real-time intrusion detection capabilities",
        "Achieved 95% accuracy in detecting suspicious activities",
        "Integrated alert system for appropriate authorities",
        "Suitable for residential and commercial security applications"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <span className="text-blue-600 font-semibold">Role: </span>
                <span className="text-gray-700">{project.role}</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
