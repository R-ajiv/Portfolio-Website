import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "80px",
      transition: { 
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      } 
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center mb-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center dark:text-white"
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-gray-600 dark:text-gray-300 text-center mt-2 max-w-2xl"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                duration: 0.6,
                delay: 0.3
              } 
            }
          }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className="h-1 bg-blue-500 mt-4 rounded-full"
        variants={lineVariants}
      />
    </motion.div>
  );
};

export default SectionTitle;