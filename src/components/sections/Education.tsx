import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { education } from '../../data/education';
import AnimatedContainer from '../ui/AnimatedContainer';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <AnimatedContainer
              key={edu.id}
              className="relative pl-8 mb-12 last:mb-0 border-l-2 border-indigo-500 dark:border-indigo-400"
              delay={index * 0.1}
            >
              <div className="absolute top-0 -left-3">
                <div className="w-6 h-6 bg-indigo-500 dark:bg-indigo-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 md:mb-0">
                    {edu.institution}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.year}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                  {edu.degree}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;