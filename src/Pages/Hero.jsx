import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React, { useState, useEffect, useMemo } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Using useMemo to prevent the array from being recreated on each render
  const textArray = useMemo(() => [
    'web apps',
    'responsive websites',
    'user interfaces',
    'interactive UIs',
    'modern applications'
  ], []);
  
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];
      
      setTypewriterText(
        isDeleting 
          ? fullText.substring(0, typewriterText.length - 1) 
          : fullText.substring(0, typewriterText.length + 1)
      );
      
      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(80); // Faster when deleting
      } else {
        setTypingSpeed(150); // Normal speed when typing
      }
      
      // If completed typing the word
      if (!isDeleting && typewriterText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
      } 
      // If deleted the word
      else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing next word
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, loopNum, typingSpeed, textArray]);
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-white dark:from-dark-300 dark:to-dark-200 -z-10"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.02]">
          <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundImage: 'linear-gradient(to right, #6b7280 1px, transparent 1px), linear-gradient(to bottom, #6b7280 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
        </div>
      </div>
      
      {/* Floating tech icons */}
      <motion.div 
        className="absolute top-20 right-10 text-primary-500/20 dark:text-primary-500/10"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <FaReact className="w-16 h-16 md:w-24 md:h-24" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 text-secondary-500/20 dark:text-secondary-500/10"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <FaNodeJs className="w-12 h-12 md:w-20 md:h-20" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 left-20 text-accent-500/20 dark:text-accent-500/10"
        animate={{ y: [0, 8, 0], rotate: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <FaJs className="w-10 h-10 md:w-16 md:h-16" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 text-primary-400/20 dark:text-primary-400/10"
        animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <FaHtml5 className="w-8 h-8 md:w-14 md:h-14" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/3 text-secondary-400/20 dark:text-secondary-400/10"
        animate={{ y: [0, 6, 0], rotate: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
      >
        <FaCss3Alt className="w-9 h-9 md:w-12 md:h-12" />
      </motion.div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
                Frontend Developer
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I&apos;m <span className="gradient-text text-glow">Swarna Gowri S</span>
              </h1>
              
              <div className="flex flex-wrap items-center h-auto min-h-[3rem] mb-6">
                <span className="text-xl md:text-2xl lg:text-3xl font-medium mr-3">I build</span>
                <span 
                  className="typing-text text-xl md:text-2xl lg:text-3xl font-medium text-primary-500 dark:text-primary-400 inline-block min-w-[220px] sm:min-w-[300px] md:min-w-[350px]" 
                  style={{ 
                    whiteSpace: 'nowrap',
                    borderRight: 'none'
                  }}
                >
                  {typewriterText}
                </span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                I&apos;m a passionate frontend developer specializing in creating beautiful, 
                responsive websites and web applications with modern technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn btn-primary"
                >
                  Get in Touch
                </Link>
                <a
                  href="/resume.pdf"
                  download="Swarna_Gowri_S_Resume.pdf"
                  className="btn btn-outline flex items-center gap-2 group relative"
                  onClick={() => {
                    // Optional: Add download tracking or analytics here
                    console.log('Resume downloaded');
                  }}
                >
                  <FiDownload className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  <span>Resume</span>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Download PDF
                  </span>
                </a>
              </div>
              
              <div className="flex mt-8 space-x-5">
                <a 
                  href="https://github.com/SwarnaGowriS" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/swarna-gowri-s-4414b8267" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=swarna8052@gmail.com&su=Hello%20Swarna&body=I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors group relative"
                  aria-label="Send Email via Gmail"
                >
                  <FiMail className="w-5 h-5" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Email via Gmail
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 rotate-3 animate-pulse-slow box-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/my profile.jpg" 
                  alt="Swarna Gowri S" 
                  className="w-60 h-60 md:w-72 md:h-72 rounded-2xl object-cover border-4 border-white dark:border-dark-200 -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
              
              {/* Current status indicator */}
              {/* <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-100 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div> */}
            </motion.div>
          </div>
        </div>
        
        {/* Featured work preview */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 md:mt-32 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Link
                key={item}
                to="projects"
                smooth={true}
                duration={500}
                className="card card-hover p-4 flex flex-col items-center cursor-pointer group"
              >
                <div className="w-full h-40 bg-gray-100 dark:bg-dark-300 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                    <span className="text-4xl text-primary-500/50">#{item}</span>
                  </div>
                </div>
                <h4 className="font-medium group-hover:text-primary-500 transition-colors">Project {item}</h4>
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>View details</span>
                  <FiExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div> */}
        {/* </motion.div> */}
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;