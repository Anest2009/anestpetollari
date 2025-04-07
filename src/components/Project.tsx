import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Portal } from '../utils/Portal';

interface TechItem {
  name: string;
  color?: string;  // Make this optional
  className?: string;  // Add this new optional property
}

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: TechItem[];
    link: string;
    previewImage: string;
  };
}

export const Project = ({ project }: ProjectProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const showPreview = () => {
    setIsHovering(true);
    document.addEventListener('mousemove', handleMouseMove as any);
  };

  const hidePreview = () => {
    setIsHovering(false);
    document.removeEventListener('mousemove', handleMouseMove as any);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, []);

  // Helper function to get the appropriate class for the tech tag
  const getTechTagClass = (tech: TechItem) => {
    if (tech.className) {
      return tech.className;
    }
    // Fallback to color-based classes if className isn't provided
    return `bg-${tech.color}-100 text-${tech.color}-800 dark:bg-${tech.color}-900 dark:text-${tech.color}-200`;
  };

  return (
    <div className="relative overflow-visible">
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group py-2"
        whileHover={{ scale: 1.05 }}
        style={{ transformOrigin: 'left' }}
        onMouseEnter={showPreview}
        onMouseLeave={hidePreview}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {project.tech.map((tech) => (
              <span
                key={tech.name}
                className={`
                  text-xs px-3 py-1 rounded-full min-w-[6rem] text-center
                  ${getTechTagClass(tech)}
                `}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </motion.a>

      {isHovering && (
        <Portal>
          <div
            className="fixed pointer-events-none"
            style={{
              position: 'fixed',
              left: position.x,
              top: position.y,
              transform: 'translate(-50%, -120%)',
              width: '200px',
              height: '120px',
              zIndex: 9999,
            }}
          >
            <img
              src={project.previewImage}
              alt={`Preview of ${project.title}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              draggable="false"
            />
          </div>
        </Portal>
      )}
    </div>
  );
};