import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Training from './components/sections/Training';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Footer from './components/layout/Footer';
import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Training />
          <Projects />
          <Certificates />
          <Achievements />
          <Education />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;