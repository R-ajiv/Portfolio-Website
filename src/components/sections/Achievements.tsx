import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { achievements } from '../../data/achievements';
import AnimatedContainer from '../ui/AnimatedContainer';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Achievements" 
          subtitle="Milestones and accomplishments I'm proud of"
        />
        
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AnimatedContainer 
              key={achievement.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6 last:mb-0 overflow-hidden"
              delay={index * 0.1}
            >
              <div className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <Trophy className="text-yellow-600 dark:text-yellow-400" size={24} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  
                  {achievement.description && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;