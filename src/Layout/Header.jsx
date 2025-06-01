import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Only update active link on home page
      if (isHomePage) {
        // Update active link based on scroll position
        const sections = document.querySelectorAll('section[id], div[id="contact"]');
        let currentSection = '';
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          // Check if we're currently within this section
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            // Only update if we found a section and it's different from current active link
            if (sectionId && currentSection === '') {
              currentSection = sectionId;
            }
          }
        });
        
        // Only update active link if we found a section
        if (currentSection !== '') {
          setActiveLink(currentSection);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);
  
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-dark-200/90 shadow-md py-3 glass-effect' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {isHomePage ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary-500/40 overflow-hidden">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-xl font-bold gradient-text">Swarna Gowri S</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/"
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary-500/40 overflow-hidden">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-xl font-bold gradient-text">Swarna Gowri S</span>
            </RouterLink>
          )}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              // Show section links on home page
              navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`nav-link ${activeLink === link.to ? 'active' : ''}`}
                  onClick={() => setActiveLink(link.to)}
                >
                  {link.name}
                </ScrollLink>
              ))
            ) : (
              // Show only home link on other pages
              <RouterLink
                to="/"
                className="nav-link"
              >
                Back to Home
              </RouterLink>
            )}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun className="w-5 h-5 text-yellow-500" /> : <FiMoon className="w-5 h-5 text-primary-500" />}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun className="w-5 h-5 text-yellow-500" /> : <FiMoon className="w-5 h-5 text-primary-500" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-200/95 shadow-lg glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isHomePage ? (
              // Show section links on home page
              navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeLink === link.to 
                      ? 'bg-primary-500/10 text-primary-500' 
                      : 'hover:bg-gray-100 dark:hover:bg-dark-100'
                  } cursor-pointer transition-colors`}
                  onClick={() => {
                    setActiveLink(link.to);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </ScrollLink>
              ))
            ) : (
              // Show only home link on other pages
              <RouterLink
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-dark-100 cursor-pointer transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Back to Home
              </RouterLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;