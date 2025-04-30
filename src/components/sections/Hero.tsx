import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, Phone, FileText, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text Content */}
          <motion.div className="w-full md:w-3/5" variants={itemVariants}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rajiv Kumar Singh</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Full Stack Developer | Problem Solver | AI Enthusiast
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl"
              variants={itemVariants}
            >
              I build modern web applications with a focus on user experience, performance, and clean code. Let's turn your ideas into reality!
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <a 
                href="mailto:rajivsingh0315@gmail.com" 
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span>rajivsingh0315@gmail.com</span>
              </a>
              
              <a 
                href="tel:+919330393035" 
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone size={20} />
                <span>+91-9330393035</span>
              </a>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <a 
                href="/assets/General_CV PES.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <FileText size={20} />
                <span>View CV</span>
              </a>

              <a 
                href="/assets/General_CV PES.pdf" 
                download
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              <a 
                href="https://linkedin.com/in/rajiv-kumar-cse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 
                         hover:bg-blue-200 dark:hover:bg-blue-900/60 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              
              <a 
                href="https://github.com/R-ajiv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                         hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHub size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            variants={itemVariants}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-lg">
              <img 
                src="/assets/profilepic.png" 
                alt="Profilepic" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 1.6, duration: 0.6 } 
          }}
        >
          <a 
            href="#skills" 
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 animate-bounce"
          >
            <span className="text-lg font-medium">Scroll Down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
