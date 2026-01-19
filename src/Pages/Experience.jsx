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
        { name: "React.js", icon: <SiReact className="w-8 h-8" />, level: 90 },
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
              {/* Education timeline (unchanged, omitted here for brevity) */}
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
              {/* Certifications timeline (unchanged, omitted here for brevity) */}
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
              {/* Skills content (unchanged, omitted here for brevity) */}
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

                {/* New CloudJournee role */}
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
                      <h3 className="text-xl font-semibold">Associate Trainee</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full">Nov 2025 - Present</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">CloudJournee</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Bengaluru, India
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Built RAG pipelines on AWS to extract insights from large-scale internal data.</li>
                      <li>Designed knowledge bases, embeddings, and vector search using S3, SageMaker, Lambda, and OpenSearch.</li>
                      <li>Implemented prompt augmentation to produce accurate, source-grounded LLM outputs.</li>
                      <li>Optimized for performance, security, and trustworthiness in real-world AI applications.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Previous roles (Frontend Developer, MERN Intern, Python Intern) */}
                {/* ... (unchanged, keep all previous experience entries as-is) */}
                
              </div>
            </motion.section>
          )}
        </div>

        {/* Call to action section (unchanged) */}
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
        
        {/* Floating back to top button (unchanged) */}
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
