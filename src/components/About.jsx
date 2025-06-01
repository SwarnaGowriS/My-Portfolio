import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiMapPin, FiCalendar, FiGlobe, FiCode, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-dark-300/50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Left column - Image */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 absolute top-4 left-4 -z-10"></div>
              <img 
                src="/my profile.jpg" 
                alt="Swarna Gowri S" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-white dark:border-dark-200 shadow-xl"
              />
              
              {/* Decorative elements */}
              {/* <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary-500 rounded-lg"></div> */}
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
              Who am I?
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              Frontend Developer & UI/UX Enthusiast
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hello! I&apos;m Swarna Gowri S, a passionate frontend developer with a keen eye for creating beautiful, 
              responsive, and user-friendly websites. I specialize in turning complex problems into simple, 
              intuitive interfaces.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With a strong foundation in modern web technologies and a commitment to clean, efficient code, 
              I strive to build digital experiences that are not only visually appealing but also performant 
              and accessible to all users.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Name</h4>
                  <p className="text-gray-700 dark:text-gray-300">Swarna Gowri S</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Bangalore, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <FiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Experience</h4>
                  <p className="text-gray-700 dark:text-gray-300">5+ Months</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <FiGlobe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Languages</h4>
                  <p className="text-gray-700 dark:text-gray-300">English, Kannada, Hindi, Telugu</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary flex items-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </a> */}
              
              <Link 
                to="/detailed-profile" 
                className="btn btn-outline"
                onClick={() => {
                  // Ensure scroll to top when navigating
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}
              >
                More About Me
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* What I do section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">What I Do</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="card p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500 mb-4">
                <FiCode className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Web Development</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Building responsive and performant websites using modern frameworks and best practices.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/20 flex items-center justify-center text-secondary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">UI/UX Design</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Creating intuitive and visually appealing user interfaces that enhance user experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="card p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent-500/10 dark:bg-accent-500/20 flex items-center justify-center text-accent-500 mb-4">
                <FiTarget className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Performance Optimization</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Optimizing web applications for speed, accessibility, and search engine visibility.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;