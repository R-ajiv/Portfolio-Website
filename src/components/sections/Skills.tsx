import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/skills';
import AnimatedContainer from '../ui/AnimatedContainer';

const SkillBar: React.FC<{ name: string; level: number; index: number }> = ({ name, level, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mb-5 h-[72px]">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div 
        ref={ref}
        className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const languages = skills.filter(skill => skill.category === 'language');
  const frameworks = skills.filter(skill => skill.category === 'framework');
  const tools = skills.filter(skill => skill.category === 'tool');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Skills" 
          subtitle="I've worked with a variety of technologies and continue to expand my knowledge"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <AnimatedContainer delay={0.1}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Languages</h3>
              {languages.map((skill, index) => (
                <SkillBar 
                  key={skill.id} 
                  name={skill.name} 
                  level={skill.level} 
                  index={index} 
                />
              ))}
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.2}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Frameworks</h3>
              {frameworks.map((skill, index) => (
                <SkillBar 
                  key={skill.id} 
                  name={skill.name} 
                  level={skill.level} 
                  index={index} 
                />
              ))}
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.3}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Tools & Platforms</h3>
              {tools.map((skill, index) => (
                <SkillBar 
                  key={skill.id} 
                  name={skill.name} 
                  level={skill.level} 
                  index={index} 
                />
              ))}
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer delay={0.4}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Soft Skills</h3>
              {softSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.id} 
                  name={skill.name} 
                  level={skill.level} 
                  index={index} 
                />
              ))}
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};

export default Skills;