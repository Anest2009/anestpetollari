import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

interface TechStory {
  technology: string;
  whyChosen: string;
  impact: string;
  keyLearnings: string;
}

interface TechCategory {
  category: string;
  stories: TechStory[];
}

const TechStories = () => {
  usePageTitle('Tech Stack Stories');
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const techStories: TechCategory[] = [
    {
      category: 'Frontend Development',
      stories: [
        {
          technology: 'React & TypeScript',
          whyChosen: 'For building maintainable, type-safe applications with excellent developer experience',
          impact: 'Reduced runtime errors by 60% and improved onboarding for new team members',
          keyLearnings: 'How to leverage advanced TypeScript patterns with React hooks and context'
        },
        {
          technology: 'Tailwind CSS',
          whyChosen: 'For rapid UI development without context switching between files',
          impact: 'Cut styling time in half while achieving more consistent designs',
          keyLearnings: 'The power of utility-first CSS and designing with constraints'
        }
      ]
    },
    {
      category: 'Backend & Infrastructure',
      stories: [
        {
          technology: 'Node.js with Express',
          whyChosen: 'For its non-blocking I/O model perfect for I/O-heavy applications',
          impact: 'Handled 10x more concurrent connections than our previous PHP setup',
          keyLearnings: 'Mastering async patterns and proper error handling in Node'
        },
        {
          technology: 'PostgreSQL',
          whyChosen: 'For complex queries and relational data integrity needs',
          impact: 'Enabled powerful analytics features we couldn\'t build with NoSQL',
          keyLearnings: 'Advanced SQL optimization and indexing strategies'
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-black dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack Stories
      </motion.h1>
      
      <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
        Why I chose these technologies and what I've learned along the way
      </p>

      <div className="space-y-12">
        {techStories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h2 className="text-2xl font-medium mb-6 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.stories.map((story, storyIndex) => (
                <motion.div
                  key={story.technology}
                  className="bg-white dark:bg-gray-900 rounded-lg p-5 border border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + storyIndex * 0.05 }}
                  onClick={() => setExpandedStory(expandedStory === story.technology ? null : story.technology)}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                      {story.technology}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedStory === story.technology ? 180 : 0 }}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Why I Chose It</h4>
                      <p className="text-gray-600 dark:text-gray-400">{story.whyChosen}</p>
                    </div>

                    {expandedStory === story.technology && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 pt-2"
                      >
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Impact</h4>
                          <p className="text-gray-600 dark:text-gray-400">{story.impact}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Key Learnings</h4>
                          <p className="text-gray-600 dark:text-gray-400">{story.keyLearnings}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStories;