import { useState } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Trainee",
      company: "CloudJournee",
      location: "Bengaluru, India",
      period: "Nov 2025 - Present",
      description: [
        "Built RAG pipelines on AWS to extract insights from large-scale internal data.",
        "Designed knowledge bases, embeddings, and vector search using S3, SageMaker, Lambda, and OpenSearch",
        "Implemented prompt augmentation to produce accurate, source-grounded LLM outputs.",
        "Optimized for performance, security, and trustworthiness in real-world AI applications."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Yahweh Software Solutions",
      location: "Bengaluru, India",
      period: "feb 2025 - Present",
      description: [
        "Developing and maintaining web applications using React.js, Node.js, and MongoDB",
        "Collaborating with cross-functional teams to define, design, and ship new features",
        "Implementing responsive design and ensuring cross-browser compatibility",
        "Participating in code reviews and providing constructive feedback to other developers"
      ]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Zidio Development",
      location: "Bengaluru, India",
      period: "Jan 2021 - May 2022",
      description: [
        "Assisted in the development of web applications using JavaScript, HTML, and CSS",
        "Contributed to backend services using Node.js and Express",
        "Fixed bugs and improved application performance",
        "Participated in daily stand-up meetings and sprint planning"
      ]
    },
    {
      title: "Python Development Intern",
      company: "InternDev Pvt Ltd",
      location: "Remote",
      period: "Jun 2020 - Dec 2020",
      description: [
        "Designed and developed responsive web pages",
        "Assisted senior developers with coding and debugging",
        "Created documentation for web applications",
        "Learned about software development practices in a professional environment"
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">My Experience</h2>
        <p className="section-subtitle animate-on-scroll">
          I&apos;ve had the opportunity to work with diverse teams on various projects.
          Here&apos;s a summary of my professional journey.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Company tabs for larger screens */}
          <div className="lg:w-1/4 hidden lg:block animate-on-scroll">
            <div className="sticky top-24 space-y-2">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === index 
                    ? 'bg-primary-500 text-white font-medium shadow-md' 
                    : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className="font-medium">{exp.company}</div>
                  <div className="text-sm opacity-80">{exp.title}</div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile dropdown */}
          <div className="lg:hidden w-full animate-on-scroll">
            <select 
              className="w-full p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
              value={activeTab}
              onChange={(e) => setActiveTab(Number(e.target.value))}
            >
              {experiences.map((exp, index) => (
                <option key={index} value={index}>
                  {exp.company} - {exp.title}
                </option>
              ))}
            </select>
          </div>
          
          {/* Experience details */}
          <div className="lg:w-3/4 animate-on-scroll">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">{experiences[activeTab].title}</h3>
              <h4 className="text-lg text-primary-500 mb-4">{experiences[activeTab].company}</h4>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FiCalendar className="mr-2" />
                  <span>{experiences[activeTab].period}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FiMapPin className="mr-2" />
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Timeline for mobile/tablet */}
        <div className="mt-16 lg:hidden animate-on-scroll">
          <h3 className="text-xl font-bold mb-6 text-center">Career Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600 transform md:translate-x-[-0.5px]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Circle */}
                  <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                      <h4 className="font-bold">{exp.title}</h4>
                      <h5 className="text-primary-500">{exp.company}</h5>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-2">
                        <FiCalendar className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
