import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, ArrowRight, Github as GitHub, Linkedin } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const formRef = useRef(null);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("c_fNtZDzK9cERkX4p");
    console.log("EmailJS initialized");
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(false);
    setErrorMessage('');

    // Check for internet connection
    if (!navigator.onLine) {
      setFormError(true);
      setErrorMessage('No internet connection. Please check your connection and try again.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Swarna',
        to_email: 'swarna8052@gmail.com',
        reply_to: formData.email,
      };

      console.log("Sending email with params:", templateParams);
      const response = await emailjs.send(
        'service_jhwpbym',
        'template_goafy3t',
        templateParams
      );

      console.log("EmailJS response:", response);
      if (response.status === 200) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Failed with status:", response.status);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormError(true);
      
      // More specific error messages based on the error type
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setErrorMessage('Network error. Please check your internet connection and try again.');
      } else if (error.text) {
        // EmailJS specific error
        console.error('EmailJS error details:', error.text);
        setErrorMessage(`Email service error: ${error.text}`);
      } else {
        setErrorMessage('Failed to send message. Please try again later or contact me directly at swarna8052@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      id="contact"
      className="section-spacing-reduced pt-24 md:pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <div ref={headingRef} className="section-container pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I&apos;d love to hear from you!
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary-600 to-secondary-600 p-8 lg:p-12 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="mb-8 opacity-90">
                Feel free to reach out through any of these channels. I&apos;ll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="opacity-90">swarna8052@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="opacity-90">Bengaluru, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="opacity-90">+91 8123891458</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-5">
                  <motion.a 
                    whileHover={{ y: -3 }}
                    href="https://github.com/SwarnaGowriS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white opacity-90 hover:opacity-100 transition-opacity"
                    aria-label="GitHub"
                  >
                    <GitHub size={20} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -3 }}
                    href="https://www.linkedin.com/in/swarna-gowri-s-4414b8267" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white opacity-90 hover:opacity-100 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://www.instagram.com/swarna_gowri_s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white opacity-90 hover:opacity-100 transition-opacity"
                    aria-label="Instagram"
                  >
                    <SiInstagram size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h2>
              
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                    <Send size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Thank you for reaching out. Your message has been sent to swarna8052@gmail.com. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)} 
                    className="btn btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg p-4 text-red-600 dark:text-red-400">
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full sm:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <ArrowRight className="ml-2" size={18} />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}