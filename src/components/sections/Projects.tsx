import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projects';
import { Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const ProjectCard: React.FC<{ 
  title: string;
  date: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveLink?: string;
  index: number;
}> = ({ title, date, description, technologies, features, image, liveLink, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      className="h-[500px] w-full perspective hover-lift"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full duration-700 preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover image-zoom"
            />
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {title}
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Calendar size={16} className="mr-1" />
                <span>{date}</span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-5">
              {description}
            </p>
            
            <div className="mt-auto">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 
                               text-blue-600 dark:text-blue-400 rounded-full shimmer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm group">
                  <span>View details</span>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                
                {liveLink && (
                  <a 
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline font-medium text-sm group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col rotate-y-180">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            {title} - Features
          </h3>
          
          <ul className="space-y-3 mb-6 flex-grow">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start group">
                <span className="inline-block w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-center text-xs leading-5 font-bold mr-2 mt-0.5 transition-colors group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50">
                  {idx + 1}
                </span>
                <span className="text-gray-600 dark:text-gray-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="flex justify-between items-center">
            <button className="flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm group">
              <span>Back to overview</span>
            </button>
            
            {liveLink && (
              <a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline font-medium text-sm group"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Live Demo</span>
                <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Projects" 
          subtitle="Check out some of the projects I've worked on"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              date={project.date}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              image={project.image}
              liveLink={project.liveLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;