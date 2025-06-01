import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowLeft, FiBook, FiAward, FiCode, FiFileText, 
  FiGitBranch, FiCoffee, FiStar, FiChevronRight,
  FiBriefcase
} from 'react-icons/fi';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, 
         SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
         SiGit, SiGithub, SiRedux, SiFigma, SiVercel } from 'react-icons/si';
import { Link } from 'react-router-dom';

// Tailwind CSS classes are used directly in the JSX

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const floatingAnimation = {
  y: ['-10px', '10px'],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
};

const DetailedProfile = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [animateSkills, setAnimateSkills] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Reset animation state when tab changes
  useEffect(() => {
    if (activeTab === 'skills') {
      setAnimateSkills(true);
    } else {
      setAnimateSkills(false);
    }
  }, [activeTab]);

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="w-8 h-8" />, level: 90 },
        { name: "CSS3", icon: <SiCss3 className="w-8 h-8" />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" />, level: 90 },
        // { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, level: 80 },
        { name: "React.js", icon: <SiReact className="w-8 h-8" />, level: 90 },
        // { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, level: 85 },
        { name: "Redux", icon: <SiRedux className="w-8 h-8" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" />, level: 95 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" />, level: 75 },
        { name: "Express.js", icon: <SiExpress className="w-8 h-8" />, level: 75 },
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" />, level: 70 },
        { name: "MySQL", icon: <SiMysql className="w-8 h-8" />, level: 65 },
        // { name: "Firebase", icon: <SiFirebase className="w-8 h-8" />, level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <SiGit className="w-8 h-8" />, level: 85 },
        { name: "GitHub", icon: <SiGithub className="w-8 h-8" />, level: 90 },
        { name: "Figma", icon: <SiFigma className="w-8 h-8" />, level: 75 },
        { name: "Vercel", icon: <SiVercel className="w-8 h-8" />, level: 80 },
      ]
    }
  ];

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-300 pb-16 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-accent-500/30 rounded-full animate-floating"></div>
      <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-primary-500/30 rounded-full animate-floating"></div>
      
      <motion.div 
        className="absolute top-1/4 right-1/3 w-8 h-8 text-secondary-500/40 animate-floating"
        animate={floatingAnimation}
      >
        <FiStar className="w-full h-full" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-10 h-10 text-primary-500/40 animate-floating"
        animate={floatingAnimation}
      >
        <FiCoffee className="w-full h-full" />
      </motion.div>
      
      <div className="section-container relative z-10 pt-0">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-4 transition-colors group">
          <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          className={`py-4 mb-4 rounded-xl bg-gradient-to-r from-[#ee7752] via-[#e73c7e] to-[#23a6d5] bg-[length:400%_400%] animate-gradient`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold gradient-text text-center text-white">
            More About Me
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-6 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-medium text-primary-500">Passionate frontend developer</span> with a keen eye for design and a commitment to creating 
          responsive, accessible, and performant web applications. I blend <span className="font-medium text-secondary-500">creativity with technical expertise</span> to 
          build engaging digital experiences.
        </motion.p>
        
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {[
            { id: 'education', icon: <FiBook />, label: 'Education' },
            { id: 'certifications', icon: <FiAward />, label: 'Certifications' },
            { id: 'skills', icon: <FiCode />, label: 'Skills' },
            { id: 'experience', icon: <FiFileText />, label: 'Experience' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                  : 'bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-100'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="relative">
          {activeTab === 'education' && (
            <motion.section 
              key="education"
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <FiBook className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Education Journey</h2>
              </div>

              {/* Timeline for education */}
              <div className="relative border-l-2 border-primary-500/30 pl-8 ml-6 space-y-10">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    <FiStar className="w-4 h-4" />
                  </div>
                  <div className="card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Master of Computer Applications</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">2022 - 2024</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">Bangalore University</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Currently pursuing MCA with specialization in Advanced Web Technologies and Cloud Computing.
                      Focusing on full-stack development, system architecture, and enterprise applications.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">Advanced Programming</span>
                      <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">Cloud Computing</span>
                      <span className="px-2 py-1 bg-accent-500/10 text-accent-500 rounded text-sm">System Design</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    <FiStar className="w-4 h-4" />
                  </div>
                  <div className="card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Bachelor of Computer Applications</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">2018 - 2021</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">Bangalore University</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Completed my BCA with a focus on software development and web technologies.
                      Gained a strong foundation in programming concepts, database management, and web development.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">Programming</span>
                      <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">Web Development</span>
                      <span className="px-2 py-1 bg-accent-500/10 text-accent-500 rounded text-sm">Database Management</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    <FiStar className="w-4 h-4" />
                  </div>
                  <div className="card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Pre-University Course (PUC)</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">2016 - 2018</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-400">
                      Completed PUC with a focus on Computer Science, Mathematics, and Physics.
                      Developed analytical thinking and problem-solving skills.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">Computer Science</span>
                      <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">Mathematics</span>
                      <span className="px-2 py-1 bg-accent-500/10 text-accent-500 rounded text-sm">Physics</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeTab === 'certifications' && (
            <motion.section 
              key="certifications"
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/20 flex items-center justify-center text-secondary-500">
                  <FiAward className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Professional Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="card p-6 hover:shadow-lg transition-shadow border-t-4 border-secondary-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Amazon Aws Certified Cloud Practitioner</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">2025</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">Amazon Restart</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Demonstrated foundational knowledge of AWS Cloud concepts, services, and best practices to support cloud adoption.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">AWS</span>
                      <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">DOckers</span>
                    </div>
                    <a href="#" className="text-secondary-500 hover:underline flex items-center gap-1">
                      <span>View Certificate</span>
                      <FiChevronRight />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeTab === 'skills' && (
            <motion.section 
              key="skills"
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 dark:bg-accent-500/20 flex items-center justify-center text-accent-500">
                  <FiCode className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Technical Proficiency</h2>
              </div>
              
              {/* Background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
              </div>

              <div className="mt-8">
                {skillCategories.map((category, catIndex) => (
                  <motion.div 
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    className="mb-16 last:mb-0"
                  >
                    <h3 className="text-2xl font-bold mb-8 inline-block relative">
                      {category.title}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 + catIndex * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="card p-6 transition-all duration-300 ease-in-out hover:shadow-xl"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                              {skill.icon}
                            </div>
                            <h4 className="text-lg font-semibold">{skill.name}</h4>
                          </div>
                          
                          <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5 mb-1">
                            <motion.div 
                              className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 relative overflow-hidden after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-1 after:bg-white/30 after:animate-pulse after:rounded-r"
                              initial={{ width: "0%" }}
                              animate={{ width: animateSkills ? `${skill.level}%` : "0%" }}
                              transition={{ duration: 1.2, delay: index * 0.05 + catIndex * 0.1, ease: "easeOut" }}
                              style={{ width: animateSkills ? `${skill.level}%` : "0%" }}
                            ></motion.div>
                          </div>
                          <div className="flex justify-end">
                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
                
                {/* Additional skills section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-16 text-center"
                >
                  <h3 className="text-xl font-semibold mb-6">Other Skills & Interests</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {["Responsive Design", "UI/UX", "SEO", "Performance Optimization", "Web Accessibility", "Progressive Web Apps", "REST API", "GraphQL", "Agile Methodology", "Problem Solving"].map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1.5 bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeTab === 'experience' && (
            <motion.section 
              key="experience"
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <FiBriefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              {/* Timeline for experience */}
              <div className="relative border-l-2 border-primary-500/30 pl-8 ml-6 space-y-10">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    <FiGitBranch className="w-4 h-4" />
                  </div>
                  <div className="card p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Frontend Developer</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">Feb 2025 - Present</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">Yahweh Software Solutions</p>
                    
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Working on modern web applications using React.js and related technologies. Focusing on creating responsive, accessible, and performant user interfaces.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Developing and maintaining web applications using React.js, Node.js, and MongoDB</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Collaborating with cross-functional teams to define, design, and ship new features</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Implementing responsive design and ensuring cross-browser compatibility</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Participating in code reviews and providing constructive feedback to other developers</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">React</span>
                        <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">Node.js</span>
                        <span className="px-2 py-1 bg-accent-500/10 text-accent-500 rounded text-sm">MongoDB</span>
                        <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">Tailwind CSS</span>
                        <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">Redux</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white">
                    <FiCode className="w-4 h-4" />
                  </div>
                  <div className="card p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">MERN Stack Developer Intern</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">Jan 2021 - May 2022</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">Zidio Development</p>
                    
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Worked on full-stack web development projects using the MERN stack. Gained hands-on experience with modern JavaScript frameworks and tools.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="text-secondary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Assisted in the development of web applications using JavaScript, HTML, and CSS</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-secondary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Contributed to backend services using Node.js and Express</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-secondary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Fixed bugs and improved application performance</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-secondary-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Participated in daily stand-up meetings and sprint planning</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">JavaScript</span>
                        <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">React</span>
                        <span className="px-2 py-1 bg-accent-500/10 text-accent-500 rounded text-sm">Node.js</span>
                        <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">Express</span>
                        <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white">
                    <FiCode className="w-4 h-4" />
                  </div>
                  <div className="card p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Python Development Intern</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">Jun 2020 - Dec 2020</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">InternDev Pvt Ltd</p>
                    
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Started my development journey with Python programming and web development basics. Learned fundamental programming concepts and best practices.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Designed and developed responsive web pages</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Assisted senior developers with coding and debugging</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Created documentation for web applications</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-accent-500 mr-2 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-400">Learned about software development practices in a professional environment</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">Python</span>
                        <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded text-sm">HTML</span>
                        <span className="px-2 py-1 bg-accent-500/10 text-accent-500 rounded text-sm">CSS</span>
                        <span className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded text-sm">Flask</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </div>

        {/* Call to action section - Moved outside of AnimatePresence */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="card p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-none">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="btn btn-primary relative overflow-hidden after:content-[''] after:absolute after:top-[-50%] after:left-[-50%] after:w-[200%] after:h-[200%] after:bg-gradient-to-r after:from-white/0 after:via-white/30 after:to-white/0 after:rotate-30 after:animate-glow after:-z-10">
                Contact Me
              </Link>
              <Link to="/" className="btn btn-outline hover:scale-105 transition-transform">
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Floating back to top button */}
        <motion.button
          className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg hover:bg-primary-600 transition-all z-50 ${
            scrollY > 300 ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowLeft className="w-5 h-5 transform rotate-90" />
        </motion.button>
      </div>
    </div>
  );
};

export default DetailedProfile;