import { Link } from 'react-scroll';
import { FiArrowUp, FiGithub, FiLinkedin, FiInstagram, FiMail, FiMapPin } from 'react-icons/fi';
import Logo from '../assets/logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];
  
  return (
    <footer className="bg-gradient-to-r from-primary-900/90 to-dark-200 dark:from-dark-200 dark:to-dark-300 text-white relative">
      {/* Background pattern with animated dots */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-3 h-3 bg-primary-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-40 left-[30%] w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-[25%] w-2 h-2 bg-accent-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-[20%] w-2 h-2 bg-primary-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-[15%] w-3 h-3 bg-secondary-300 rounded-full animate-pulse-slow"></div>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
      </div>
      
      {/* Back to top button */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 flex items-center justify-center rounded-full text-white cursor-pointer transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-110"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Footer content with modern styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Logo and social links */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-primary-500/40 overflow-hidden">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Swarna</span>
            </div>
            
            <p className="text-gray-300 dark:text-gray-400 mb-6 text-sm">
              A passionate frontend developer focused on creating responsive, accessible, and performant web applications.
            </p>
            
            {/* Social links with improved styling */}
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/SwarnaGowriS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800/50 dark:bg-dark-100/50 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-primary-500 hover:text-white transition-all hover:scale-110 hover:shadow-md hover:shadow-primary-500/30"
                aria-label="GitHub Profile"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/swarna-gowri-s-4414b8267" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800/50 dark:bg-dark-100/50 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-primary-500 hover:text-white transition-all hover:scale-110 hover:shadow-md hover:shadow-primary-500/30"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/swarna_gowri_s" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800/50 dark:bg-dark-100/50 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-primary-500 hover:text-white transition-all hover:scale-110 hover:shadow-md hover:shadow-primary-500/30"
                aria-label="Instagram Profile"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:swarna8052@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800/50 dark:bg-dark-100/50 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:bg-primary-500 hover:text-white transition-all hover:scale-110 hover:shadow-md hover:shadow-primary-500/30"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links with improved styling */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-transparent rounded"></span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors cursor-pointer inline-block py-1 hover:translate-x-1 duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Contact with improved styling */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-5 text-white relative inline-block">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-transparent rounded"></span>
            </h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="mailto:swarna8052@gmail.com"
                className="text-gray-300 dark:text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800/50 dark:bg-dark-100/50 backdrop-blur-sm flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all mr-3">
                  <FiMail className="w-5 h-5" />
                </div>
                <span>swarna8052@gmail.com</span>
              </a>
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800/50 dark:bg-dark-100/50 backdrop-blur-sm flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all mr-3">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <span className="text-gray-300 dark:text-gray-400">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright with modern styling */}
        <div className="border-t border-gray-800/50 dark:border-gray-700/30 pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {currentYear} <span className="text-primary-400">Swarna Gowri S</span>. All rights reserved.
          </p>
          
          <div className="mt-3 sm:mt-0 text-gray-400 dark:text-gray-500 text-sm">
            <span>Built with</span>
            <span className="text-red-500 mx-1 animate-pulse">❤</span>
            <span>by <span className="text-primary-400">Swarna</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;