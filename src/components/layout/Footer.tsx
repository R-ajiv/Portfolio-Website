import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Rajiv Kumar Singh</h2>
            <p className="text-gray-400">Full Stack Developer | Problem Solver | AI Enthusiast</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="mailto:rajivsingh0315@gmail.com" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="https://linkedin.com/in/rajiv-kumar-cse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="https://github.com/R-ajiv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Rajiv Kumar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;