import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { training } from '../../data/training';
import { Calendar, Briefcase } from 'lucide-react';

const Training: React.FC = () => {
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
        ease: "easeOut"
      } 
    }
  };

  return (
    <section id="training" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Training Experience" 
          subtitle="Professional training experiences that have enhanced my skills"
        />
        
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {training.map((item) => (
            <motion.div 
              key={item.id}
              className="relative pl-8 pb-12 border-l-2 border-blue-500 dark:border-blue-400"
              variants={cardVariants}
            >
              <div className="absolute top-0 -left-3">
                <div className="w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Briefcase size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <span>{item.company}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Training;