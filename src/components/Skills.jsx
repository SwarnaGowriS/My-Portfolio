import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiTypescript, 
         SiNodedotjs, SiExpress, SiNextdotjs, SiMongodb, SiMysql, 
         SiGit, SiGithub, SiRedux, SiFirebase, SiFigma, SiVercel } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="w-8 h-8" />, level: 90 },
        { name: "CSS3", icon: <SiCss3 className="w-8 h-8" />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, level: 80 },
        { name: "React.js", icon: <SiReact className="w-8 h-8" />, level: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, level: 85 },
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
        { name: "Firebase", icon: <SiFirebase className="w-8 h-8" />, level: 80 },
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

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-200 relative">
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
      
      <div className="section-container relative z-10">
        <h2 className="section-title animate-on-scroll">My Skills</h2>
        
        <div className="mt-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + catIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="card p-6 card-hover"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2.5 mb-1">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Other Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Responsive Design", "UI/UX", "SEO", "Performance Optimization", "Web Accessibility", "Progressive Web Apps", "REST API", "GraphQL", "Agile Methodology", "Problem Solving"].map((skill, index) => (
              <span 
                key={index} 
                className="skill-tag"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;