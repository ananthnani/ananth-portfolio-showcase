
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Java Full Stack Development",
      description: "Building dynamic web applications using Java, SpringBoot, HTML, CSS, and SQL with clean backend architecture and responsive front-end integration.",
      features: [
        "RESTful API Development",
        "Database Design & Integration",
        "Responsive Web Interfaces",
        "Application Architecture",
        "Performance Optimization"
      ]
    },
    {
      title: "Web Application Development",
      description: "Creating modern, responsive web applications with focus on user experience and performance optimization using latest technologies.",
      features: [
        "Frontend Development",
        "Backend Integration",
        "Mobile-First Design",
        "Cross-Browser Compatibility",
        "SEO Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What I <span className="text-blue-600">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">{index + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
