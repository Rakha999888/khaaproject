import React, { useState, useRef, useEffect } from 'react';

const skillsAndTools = [
  { 
    name: 'HTML', 
    image: 'https://img.icons8.com/color/48/000000/html-5.png',
    description: 'Standard markup language for creating web page structure.'
  },
  { 
    name: 'CSS', 
    image: 'https://img.icons8.com/color/48/000000/css3.png',
    description: 'Styling language for designing the look and layout of web pages.'
  },
  { 
    name: 'JavaScript', 
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    description: 'Programming language for creating interactive and dynamic web pages.'
  },
  { 
    name: 'React', 
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    description: 'JavaScript library for building efficient user interfaces.'
  },
  { 
    name: 'Tailwind', 
    image: 'https://img.icons8.com/color/48/000000/tailwindcss.png',
    description: 'Utility-first CSS framework for building custom designs quickly.'
  },
  { 
    name: 'Figma', 
    image: 'https://img.icons8.com/color/48/000000/figma.png',
    description: 'Web-based interface design tool for creating prototypes and collaboration.'
  },
  { 
    name: 'VS Code', 
    image: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png',
    description: 'Lightweight yet powerful source code editor with extensive extension support.'
  },
  { 
    name: 'Canva', 
    image: 'https://img.icons8.com/color/48/000000/canva.png',
    description: 'Online graphic design tool for easily creating visual content.'
  },
];

const hobbies = [
  { 
    name: 'Gaming', 
    icon: 'https://img.icons8.com/color/48/000000/joystick.png',
    items: ['Mobile Legends', 'E-football', 'HOK (Honor of Kings)']
  },
  { 
    name: 'Sports', 
    icon: 'https://img.icons8.com/color/48/000000/basketball.png',
    items: ['Football']
  },
  { 
    name: 'Reading', 
    icon: 'https://img.icons8.com/color/48/000000/book.png',
    items: ['Game Over', 'Bumi', 'Atomic Habits', 'Nonversation']
  }
];

const pageStyle = {
  width: '100%',
  height: '100%',
  padding: '2rem',
  backgroundColor: '#1F2937',
  borderRadius: '0.5rem',
  overflowY: 'auto'
};

const headingStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
  color: '#3B82F6'
};

const textStyle = {
  color: '#D1D5DB',
  lineHeight: '1.75',
  marginBottom: '1.5rem'
};

const fadeInStyle = {
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 2s ease-out, transform 2s ease-out',
  willChange: 'opacity, transform'
};

const fadeInActiveStyle = {
  opacity: 1,
  transform: 'translateY(0)'
};

const SimpleAbout = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showHobbyDetails, setShowHobbyDetails] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade in effect after component mounts
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const renderPage1 = () => (
    <div style={{
      ...pageStyle,
      opacity: fadeIn ? 1 : 0,
      transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 2s ease-out, transform 2s ease-out',
      willChange: 'opacity, transform'
    }}>
      <h3 style={headingStyle}>Who Am I?</h3>
      <p style={textStyle}>
        I am Rakha, a Mikroskil student focusing on UI/UX design and web development. 
        With a passion for building seamless digital experiences, I combine strong design 
        principles with technical development skills. Experienced in user interface design, 
        prototyping, user research, and full-stack web technologies, I am constantly seeking 
        opportunities to grow, build impactful solutions, and collaborate in the digital 
        innovation space.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <h4 style={{...headingStyle, fontSize: '1.25rem'}}>Education</h4>
        <div style={{
          backgroundColor: 'rgba(55, 65, 81, 0.5)',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>
          <p style={{ fontWeight: '500', margin: '0 0 0.5rem 0' }}>Mikroskil University</p>
          <p style={{ color: '#9CA3AF', margin: '0 0 0.25rem 0' }}>Information Systems</p>
          <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0 }}>2022 - Present</p>
        </div>
      </div>
    </div>
  );

  const renderPage2 = () => (
    <div style={pageStyle}>
      <h3 style={headingStyle}>My Hobbies</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {hobbies.map((hobby, idx) => (
          <div 
            key={hobby.name}
            onClick={() => setShowHobbyDetails(hobby)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(55, 65, 81, 0.5)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              ':hover': {
                backgroundColor: 'rgba(55, 65, 81, 0.8)'
              }
            }}
          >
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1rem'
            }}>
              <img 
                src={hobby.icon}
                alt={hobby.name}
                style={{ width: '1.5rem', height: '1.5rem' }}
              />
            </div>
            <span style={{
              fontSize: '1.125rem',
              fontWeight: '500'
            }}>{hobby.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPage3 = () => (
    <div style={pageStyle}>
      <h3 style={headingStyle}>Skills & Tools</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        position: 'relative'
      }}>
        {skillsAndTools.map((item, index) => (
          <div 
            key={index}
            onClick={() => setSelectedSkill(selectedSkill?.name === item.name ? null : item)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
              backgroundColor: 'rgba(55, 65, 81, 0.5)',
              borderRadius: '0.5rem',
              transition: 'all 0.2s',
              cursor: 'pointer',
              border: selectedSkill?.name === item.name ? '1px solid #3B82F6' : '1px solid transparent',
              ':hover': {
                backgroundColor: 'rgba(55, 65, 81, 0.7)'
              }
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: selectedSkill?.name === item.name ? '0.75rem' : 0,
              transition: 'margin-bottom 0.2s',
              position: 'relative',
              width: '100%',
              paddingRight: '1.5rem' // Memberi ruang untuk tombol silang
            }}>
              {selectedSkill?.name === item.name && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSkill(null);
                  }}
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    right: '-0.5rem',
                    background: '#EF4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '1.25rem',
                    height: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '0.75rem',
                    lineHeight: 1,
                    ':hover': {
                      background: '#DC2626'
                    },
                    ':focus': {
                      outline: '2px solid #FCA5A5',
                      outlineOffset: '2px'
                    }
                  }}
                  aria-label="Tutup deskripsi"
                >
                  ×
                </button>
              )}
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.75rem',
                flexShrink: 0
              }}>
                <img 
                  src={item.image}
                  alt={item.name}
                  style={{ width: '1.25rem', height: '1.25rem' }}
                />
              </div>
              <span style={{
                color: '#E5E7EB',
                fontSize: '0.9375rem',
                fontWeight: '500'
              }}>{item.name}</span>
            </div>
            {selectedSkill?.name === item.name && (
              <p style={{
                color: '#D1D5DB',
                fontSize: '0.8125rem',
                lineHeight: '1.5',
                margin: 0,
                opacity: 0.9
              }}>
                {item.description}
              </p>
            )}
            </div>
        ))}
      </div>
    </div>
  );

  const pages = [renderPage1(), renderPage2(), renderPage3()];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
      color: 'white',
      padding: '2.5rem 1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto',
        position: 'relative'
      }}>
        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: 'bold',
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#3B82F6'
        }}>
          About <span style={{ color: '#3B82F6' }}>Me</span>
        </h2>

        {/* Page Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2rem'
        }}>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              style={{
                width: currentPage === index ? '2rem' : '0.75rem',
                height: '0.75rem',
                borderRadius: '9999px',
                backgroundColor: currentPage === index ? '#3B82F6' : '#4B5563',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Page Content */}
        <div style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          minHeight: '600px',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'flex',
            width: '300%',
            height: '100%',
            transform: `translateX(-${currentPage * 33.333}%)`,
            transition: 'transform 0.5s ease'
          }}>
            {pages.map((page, index) => (
              <div key={index} style={{ width: '33.333%', height: '100%' }}>
                {page}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1.5rem'
        }}>
          <button
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentPage === 0 ? '#374151' : '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 0 ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
          </button>
          
          <button
            onClick={() => currentPage < 2 && setCurrentPage(currentPage + 1)}
            disabled={currentPage === 2}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentPage === 2 ? '#374151' : '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: currentPage === 2 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 2 ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Next
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Hobby Details Modal */}
        {showHobbyDetails && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
              padding: '1rem'
            }}
            onClick={() => setShowHobbyDetails(null)}
          >
            <div 
              style={{
                backgroundColor: '#1F2937',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                maxWidth: '28rem',
                width: '100%',
                position: 'relative'
              }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowHobbyDetails(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  color: '#9CA3AF',
                  borderRadius: '9999px',
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: 'transparent',
                  ':hover': {
                    backgroundColor: 'rgba(156, 163, 175, 0.1)'
                  }
                }}
              >
                <svg 
                  style={{
                    width: '1.5rem',
                    height: '1.5rem'
                  }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <img 
                  src={showHobbyDetails.icon}
                  alt={showHobbyDetails.name}
                  style={{ width: '1.5rem', height: '1.5rem' }}
                />
                {showHobbyDetails.name}
              </h3>
              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.5)',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginTop: '1rem'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: '#E5E7EB'
                }}>
                  Favorites:
                </h4>
                <ul style={{
                  listStyleType: 'disc',
                  paddingLeft: '1.25rem',
                  margin: 0,
                  color: '#D1D5DB'
                }}>
                  {showHobbyDetails.items.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleAbout;
