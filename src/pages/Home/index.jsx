import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './animations.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  // Gaming background state
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for particles
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Add new particles occasionally
    if (Math.random() > 0.7 && particles.length < 50) {
      const size = Math.random() * 3 + 1;
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 60 + 180}, 80%, 60%)`
      };
      setParticles(prev => [...prev, newParticle].slice(-100)); // Limit to 100 particles
    }
  };

  // Update particles position
  useEffect(() => {
    let isMounted = true;
    
    const updateParticles = () => {
      if (!isMounted) return;
      
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.speedX,
            y: p.y + p.speedY,
            size: p.size * 0.98
          }))
          .filter(p => p.size > 0.5)
      );
    };
    
    const interval = setInterval(updateParticles, 30);
    
    // Cleanup function
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Generate grid pattern
  const gridPattern = [];
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      gridPattern.push(
        <div 
          key={`${i}-${j}`} 
          className="absolute w-1 h-1 bg-gray-800 rounded-full"
          style={{
            left: `${i * 5}%`,
            top: `${j * 5}%`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.3
          }}
        />
      );
    }
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 bg-gray-900 text-white py-20 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Gaming Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        {gridPattern}
        
        {/* Animated Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px ${particle.color}40`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.1s ease-out'
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/90 to-gray-900/80" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="text-left">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 leading-tight fade-in ${isVisible ? 'delay-1' : ''}`}>
            Hi, I'm <span className="text-accent">Rakha</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl font-semibold text-gray-300 mb-8 fade-in ${isVisible ? 'delay-2' : ''}`}>
            UI/UX Designer & Web Developer
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="assets/cv/CV-Rakhaa.pdf" 
              download="CV-Rakha-Akbar.pdf"
              className="px-6 py-3 border border-gray-600 text-white rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <FaFileDownload /> Download CV
            </a>
          </div>
          
          {/* Social Media Links with Gaming Style */}
          <div className="flex gap-4 flex-wrap">
            {[
              {
                icon: <FaGithub />,
                href: 'https://github.com/Rakha999888',
                color: 'text-accent',
                label: 'GitHub',
                shadow: '0 0 15px rgba(99, 102, 241, 0.7)'
              },
              {
                icon: <FaLinkedin />,
                href: 'https://www.linkedin.com/in/muhammad-rakha-akbar/',
                color: 'text-blue-400',
                label: 'LinkedIn',
                shadow: '0 0 15px rgba(59, 130, 246, 0.7)'
              },
              {
                icon: <FaInstagram />,
                href: 'https://www.instagram.com/rakhaakbr?igsh=MWExejlxOTJ4ZnFiag==',
                color: 'text-pink-400',
                label: 'Instagram',
                shadow: '0 0 15px rgba(236, 72, 153, 0.7)'
              },
              {
                icon: <HiOutlineMail />,
                href: 'mailto:rakhaakbar522@gmail.com',
                color: 'text-red-400',
                label: 'Email',
                shadow: '0 0 15px rgba(248, 113, 113, 0.7)'
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                           hover:border-${item.color.split('-')[1]}/50 transition-all duration-300 group
                           hover:shadow-lg hover:scale-110 ${index === 0 ? 'ml-0' : ''}`}
                aria-label={item.label}
                style={{
                  boxShadow: `0 0 0 0 ${item.color}40`,
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px 5px ${item.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0,0,0,0)';
                }}
              >
                <span className={`text-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </span>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded 
                           opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Right Column - Profile Image with Gaming Effects */}
        <div className={`fade-in ${isVisible ? 'delay-3' : ''} relative`}>
          <div className="relative z-10 bg-gray-800/30 backdrop-blur-sm rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden border-4 border-accent/20 
                  shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all duration-500">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
              
              {/* Profile Image */}
              <img 
                src="assets/images/poto profile.jpg" 
                alt="Rakha" 
                className="w-full h-full object-cover relative z-10"
              />
              
              {/* Animated Border */}
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-border-spin" 
                   style={{
                     backgroundImage: 'linear-gradient(90deg, transparent, transparent 50%, #6366f1 50%, #6366f1 100%)',
                     backgroundSize: '200% 100%',
                     animation: 'borderSpin 3s linear infinite',
                     mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                     WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude',
                     padding: '4px',
                   }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
