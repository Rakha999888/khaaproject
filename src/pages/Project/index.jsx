import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../Home/animations.css';

// Project data
const projects = [
  {
    id: 1,
    title: 'Belajar Web',
    description: 'A learning platform for web development with interactive tutorials and examples.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: 'assets/images/logo-project.png',
    year: '2025',
    demo: 'https://belajarrrwebb.netlify.app/',
    github: '#'
  },
  {
    id: 2,
    title: 'Bookshelf App',
    description: 'A digital bookshelf application to organize and manage your reading list.',
    technologies: ['React', 'Local Storage', 'Responsive Design'],
    image: 'assets/images/logo-project.png',
    year: '2025',
    demo: 'https://khaabookself.netlify.app/',
    github: '#'
  },
  {
    id: 3,
    title: 'Data Dummy',
    description: 'A collection of dummy data for testing and development purposes.',
    technologies: ['JavaScript', 'JSON', 'API'],
    image: 'assets/images/logo-project.png',
    year: '2025',
    demo: 'https://datadummykha.netlify.app/',
    github: '#'
  },
  {
    id: 4,
    title: 'Coming Soon',
    description: 'Exciting new project under development. Stay tuned for updates!',
    technologies: ['React', 'Next.js', 'Tailwind', 'API'],
    image: '',
    year: 'Coming Soon',
    demo: '#',
    github: '#',
    isComingSoon: true
  }
];

const ProjectCard = ({ project, delay }) => {
  return (
    <motion.div 
      className={`group ${project.isComingSoon ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-gray-800/50'} backdrop-blur-sm rounded-lg overflow-hidden border ${project.isComingSoon ? 'border-gray-700/50 hover:border-blue-500/50' : 'border-gray-700/30 hover:border-accent/30'} transition-all duration-300 h-full flex flex-col relative`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: project.isComingSoon ? 0 : -5 }}
    >
      {project.isComingSoon && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
            Coming Soon
          </span>
        </div>
      )}
      <div className={`h-48 ${project.isComingSoon ? 'bg-gradient-to-br from-gray-800/30 to-gray-900/30' : 'bg-gray-700/30'} flex items-center justify-center p-6 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {project.isComingSoon ? (
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400 text-sm">Project under development</p>
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
            }}
          />
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="p-6 pt-0 mt-auto">
            {project.isComingSoon ? (
              <div className="text-center py-3">
                <p className="text-sm text-gray-400">Stay tuned for updates!</p>
                <div className="mt-2 h-1 w-full bg-gray-700/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    style={{
                      width: '75%',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors px-4 py-2 border border-accent/30 rounded-md hover:bg-accent/10"
                >
                  Live Demo <FiExternalLink className="ml-1" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          My Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto"
        >
          Here are some of my recent works and projects I've been working on.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              delay={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
