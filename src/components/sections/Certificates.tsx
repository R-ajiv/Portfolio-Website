import React, { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { certificates } from '../../data/certificates';
import { Award, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Certificates" 
          subtitle="Professional certifications I've earned to enhance my skills"
        />

        <div className="relative w-full max-w-3xl mx-auto">
          {/* Display the current certificate */}
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="h-65 w-65 overflow-hidden mx-auto">
                  <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  />
                </div>

                <div className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Award className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                      {cert.title}
                    </h3>

                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="mr-3">{cert.issuer}</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {cert.description && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;