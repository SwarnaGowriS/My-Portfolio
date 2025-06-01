import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "LynkT",
      description: "User dashboard for the Lynkt platform, built for managing all aspects of the platform including bookings, users, analytics, and more.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      category: "fullstack",
      liveLink: "https://www.lynkt.co/",
      // githubLink: "https://github.com/pavanpandya/ecommerce-platform",
      featured: true
    },
    {
      title: "Job Seeker Platform",
      description: "A job seeker platform where users can search for jobs, apply for them, and manage their applications.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Django", "python", "HTML", "CSS"],
      category: "fullstack",      
      // description: "A productivity application for managing tasks with features like task creation, deadlines, priority levels, and team collaboration.",
      // image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      // category: "frontend",
      // liveLink: "https://task-app-demo.com",
      // githubLink: "https://github.com/pavanpandya/task-manager",
      featured: true
    },
    // {
    //   title: "Weather Dashboard",
    //   description: "A weather application that provides current and forecasted weather information for locations worldwide with interactive visualizations.",
    //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
    //   category: "frontend",
    //   liveLink: "https://weather-app-demo.com",
    //   githubLink: "https://github.com/pavanpandya/weather-dashboard",
    //   featured: false
    // },
    {
      title: "Portfolio Website",
      description: "A professional portfolio website to showcase skills, projects, and experience with a responsive design and dark/light mode.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      liveLink: "https://portfolio-demo.com",
      githubLink: "https://github.com/pavanpandya/portfolio",
      featured: true
    },
    // {
    //   title: "Blog Platform",
    //   description: "A content management system for creating and managing blog posts with categories, tags, and user comments.",
    //   image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth.js"],
    //   category: "fullstack",
    //   liveLink: "https://blog-demo.com",
    //   githubLink: "https://github.com/pavanpandya/blog-platform",
    //   featured: false
    // },
    {
      title: "News App",
      description: "A news application that provides up-to-date news articles from various sources with a user-friendly interface.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // description: "An application to track workouts, set fitness goals, and visualize progress over time with interactive charts.",
      // image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Kotlin"],
      category: "mobile",
      // liveLink: "https://fitness-app-demo.com",
      // githubLink: "https://github.com/pavanpandya/fitness-tracker",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];

  return (
    <section id="projects" className="pt-10 pb-28 bg-gray-50/50 dark:bg-dark-300/50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title animate-on-scroll">My Projects</h2>
        <p className="section-subtitle animate-on-scroll">
          Check out some of my recent work
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Featured projects (larger cards) */}
        {activeFilter === 'all' && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 inline-block relative">
              Featured Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></span>
            </h3>
            
            <div className="grid grid-cols-1 gap-12">
              {projects.filter(p => p.featured).slice(0, 2).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                            <FiFolder className="w-5 h-5" />
                          </div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="skill-tag"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline py-2 px-4"
                        >
                          <FiGithub className="mr-2 inline" />
                          Code
                        </a>
                        {/* <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary py-2 px-4"
                        >
                          <FiExternalLink className="mr-2 inline" />
                          Live Demo
                        </a> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* All projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card card-hover overflow-hidden h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="skill-tag"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="skill-tag">+{project.tags.length - 3}</span>
                  )}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          {/* <a 
            href="https://github.com/pavanpandya" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            View All Projects on GitHub
            <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;