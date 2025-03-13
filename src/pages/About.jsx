// About.jsx
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does Trusty Group do?",
      answer: "Trusty Group is a diversified investment company with subsidiaries in real estate, construction, media production, technology, fashion, and trade. We focus on creating sustainable growth opportunities that benefit both investors and communities."
    },
    {
      question: "How can I invest with Trusty Group?",
      answer: "We offer various investment opportunities through our subsidiaries, particularly in real estate. You can contact our investment team through the Contact page for more information about current and upcoming investment options."
    },
    {
      question: "Where does Trusty Group currently operate?",
      answer: "Currently, our primary operations are based in Rwanda, with plans for expansion throughout East Africa and beyond in the coming years. Our 10-year goal includes significant international presence."
    },
    {
      question: "How does Trusty Group contribute to community development?",
      answer: "Our business model is centered around community impact. We create job opportunities, develop sustainable infrastructure, and plan to establish the Trusty Foundation, which will focus specifically on education, healthcare, and economic empowerment initiatives."
    }
  ];

  
  // Animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#00A3D9] to-[#00A3D9] overflow-hidden">
        <div className="absolute inset-0 bg-[#00A3D9] opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">About Trusty Group</h1>
            <p className="text-xl text-white font-body">Established in 2017 with a mission to cultivate peace and prosperity through strategic investments.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-2"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div className="bg-gray-50 p-8 rounded-lg shadow-md" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4 text-black font-heading animate-bounce">Our Mission</h2>
            <p className="text-gray-700 mb-4">To leverage our investment portfolio as a catalyst for cultivating peace and prosperity among communities worldwide. Optimize the use of talent, time, and treasure and establish a niche in the finance industry, and contribute to its scaling.</p>
            <div className="w-20 h-1 bg-[#00A3D9]"></div>
          </motion.div>
          
          <motion.div className="bg-gray-50 p-8 rounded-lg shadow-md" variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4 text-black font-heading animate-bounce">Our Vision</h2>
            <p className="text-gray-700 mb-4">To be the world's leading catalyst for transformative growth through investment, creating a future where vibrant communities thrive in harmony.</p>
            <div className="w-20 h-1 bg-[#00A3D9]"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Tab Section - History, Core Values, etc. */}
      <section className="py-12 bg-gray-50 mx-8 md:mx-16 lg:mx-24" >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            <button 
              className={`mr-4 py-2 px-4 font-medium text-lg focus:outline-none ${activeTab === 'history' ? 'text-[#00A3D9] border-b-2 border-[#00A3D9]' : 'text-gray-500 hover:text-[#00A3D9]'}`}
              onClick={() => setActiveTab('history')}
            >
              Our History
            </button>
            <button 
              className={`mr-4 py-2 px-4 font-medium text-lg focus:outline-none ${activeTab === 'values' ? 'text-[#00A3D9] border-b-2 border-[#00A3D9]' : 'text-gray-500 hover:text-[#00A3D9]'}`}
              onClick={() => setActiveTab('values')}
            >
              Core Values
            </button>
            <button 
              className={`mr-4 py-2 px-4 font-medium text-lg focus:outline-none ${activeTab === 'subsidiaries' ? 'text-[#00A3D9] border-b-2 border-[#00A3D9]' : 'text-gray-500 hover:text-[#00A3D9]'}`}
              onClick={() => setActiveTab('subsidiaries')}
            >
              Our Subsidiaries
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'history' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-black">Founding Story</h3>
                  <p className="text-gray-700 mb-4">
                    As narrated by Jimmy Frederic Byiringiro, CEO:
                  </p>
                  <p className="text-gray-700 mb-4">
                    Initially branded as TrustyCo Ltd, Trusty Group was conceived in 2017 as a company solely devoted to construction services. In 2019, inspired by the idea of bringing my family together, I envisioned an even greater goal—a need to build a business environment that includes diverse fields of work-life without requiring anyone to abandon their primary careers.
                  </p>
                  <p className="text-gray-700 mb-4">
                    This vision meant creating a business that includes distinct areas of expertise: engineering, entertainment, agriculture, health, finance, technology, and more—areas to which the members of my family have dedicated their work lives.
                  </p>
                  <p className="text-gray-700">
                    But my family was just the beginning—the desire to unite the broader communities I belong to remained strong, and I knew I had to bring this dream to life. This vision led to the transformation from TrustyCo Ltd—a company focused purely on construction—to Trusty Group Ltd—a group of companies that embraces various careers and industries.
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-black">Why the name "Trusty"?</h3>
                    <p className="text-gray-700">
                      I believe that trust is undoubtedly among the most important aspects of cooperation and partnerships. Given that my personal drive is seeing communities cohabiting peacefully, and our vision as Trusty is "creating a future where communities thrive in harmony," all our efforts would go in vain if trust went unchecked, thus goes with culmination of experiences and perceptions related to the past, present, and future. This devotion to reliability and integrity is what makes us "Trusty."
                    </p>
                  </div>
                  <div className="bg-[#00A3D9] text-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4">Our Growth Timeline</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2017:</span> Established as TrustyCo Ltd, focusing on construction services
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2019:</span> Vision expanded to create a more diverse business environment
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2020:</span> Rebranded as Trusty Group Ltd with multiple subsidiary divisions
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2023:</span> Expanded operations and diversified investment portfolio
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'values' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-black">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#00A3D9] rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-black">Timely Delivery</h4>
                    <p className="text-gray-700">We pledge ourselves to providing our clients and communities with the best possible value without sacrificing quality by providing timely, high-quality solutions and services.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#00A3D9] rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-black">Innovative Mindset</h4>
                    <p className="text-gray-700">We believe in the power of creativity and forward-thinking. Our system combines novel approaches with an adherence to pushing limits and discovering new opportunities in all industries.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#00A3D9] rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-black">Community-Centric Approach</h4>
                    <p className="text-gray-700">Our investments and projects are designed with the community at heart. We strive to create spaces and solutions that not only satisfy the demands of today but also improve the well-being of coming generations.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#00A3D9] rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-black">Sustainability Focus</h4>
                    <p className="text-gray-700">Building communities that thrive together for centuries requires a vision that spans not just decades, but hundreds and even thousands of years. We are devoted to sustainable practices that ensure long-term growth and environmental stewardship.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#00A3D9] rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-black">Integrity and Trustworthiness</h4>
                    <p className="text-gray-700">We uphold the highest standards of honesty, transparency, and accountability in all our plans and partnerships, and ensure that these values endure for centuries to come.</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'subsidiaries' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-black">Our Subsidiaries</h3>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 pr-0 md:pr-6">
                        <h4 className="text-xl font-bold mb-2 text-black">Trusty Estates</h4>
                        <p className="text-gray-700 mb-4">Focused on real estate development and investment opportunities that maximize the use of talent, time, and treasure while giving everyone an opportunity for investment.</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Real Estate Study Proposal</li>
                          <li>Consultancy Services</li>
                          <li>Real Estate Investment</li>
                          <li>Investment Guidance</li>
                        </ul>
                      </div>
                      <div className="md:w-1/3 mt-4 md:mt-0">
                        <div className="bg-gray-100 h-full rounded-lg flex items-center justify-center p-6">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#00A3D9] rounded-full flex items-center justify-center mb-2">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <a href="https://estates.trustygroup.co" className="text-[#00A3D9] font-medium hover:underline">Visit Trusty Estates</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 pr-0 md:pr-6">
                        <h4 className="text-xl font-bold mb-2 text-black">Trusty Construction</h4>
                        <p className="text-gray-700 mb-4">Specializing in innovative construction projects that combine efficiency, quality, and long-term sustainability.</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Architectural, Structural, and Interior Design</li>
                          <li>Supervision of Construction Projects</li>
                          <li>Execution of Construction Projects</li>
                          <li>Construction Permit Application</li>
                          <li>Material Supply</li>
                        </ul>
                      </div>
                      <div className="md:w-1/3 mt-4 md:mt-0">
                        <div className="bg-gray-100 h-full rounded-lg flex items-center justify-center p-6">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#00A3D9] rounded-full flex items-center justify-center mb-2">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <a href="https://construction.trustygroup.co" className="text-[#00A3D9] font-medium hover:underline">Visit Trusty Construction</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 pr-0 md:pr-6">
                        <h4 className="text-xl font-bold mb-2 text-black">Trusty Pictures</h4>
                        <p className="text-gray-700 mb-4">A creative hub for photography, film, and videography services, crafting stories that connect people and inspire communities.</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Event Photography & Videography</li>
                          <li>Promotional Videos</li>
                          <li>Documentaries and Short Films</li>
                          <li>Post-Production Services</li>
                        </ul>
                      </div>
                      <div className="md:w-1/3 mt-4 md:mt-0">
                        <div className="bg-gray-100 h-full rounded-lg flex items-center justify-center p-6">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-[#00A3D9] rounded-full flex items-center justify-center mb-2">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-gray-500 font-medium">Coming Soon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-xl font-bold mb-2 text-black">Trusty Technologies</h4>
                      <p className="text-gray-700">A venture into technology, where we aim to explore Artificial Intelligence, cybersecurity, and software/web development in order to further tech-driven solutions in the future.</p>
                      <div className="mt-4 text-center">
                        <span className="text-gray-500 font-medium">Coming Soon</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-xl font-bold mb-2 text-black">Trusty Fashion</h4>
                      <p className="text-gray-700">Creating cultural value through fashion, pioneering the advancement of Africa's textile industry. Our goal is to build a strong foundation in apparel and expand the brand globally as a lifestyle innovator.</p>
                      <div className="mt-4 text-center">
                        <span className="text-gray-500 font-medium">Coming Soon</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-xl font-bold mb-2 text-black">Trusty Trade & Commerce</h4>
                      <p className="text-gray-700">Engaging in various trade activities including global chemical trading, steel trading, energy resource management, and industrial material sourcing.</p>
                      <div className="mt-4 text-center">
                        <span className="text-gray-500 font-medium">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-gradient-to-r from-[#00A3D9] to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Goals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white text-[#00A3D9] w-10 h-10 rounded-full flex items-center justify-center mr-3">5</span>
                5-Year Goals
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Establishing a minimum of 30 permanent positions and generating 5000 temporary jobs by 2028</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Successfully selling a minimum of 10 real estate projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Completing a targeted number of rental apartments catering to middle and working-class clients</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensure our trustees are in good shape personally, believing that ongoing self-growth is key</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Having a minimum of 5 subsidiary companies</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-white text-[#00A3D9] w-10 h-10 rounded-full flex items-center justify-center mr-3">10</span>
                10-Year Goals
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>International expansion</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Affordable housing investment established</span>
                </li>

                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuing from where the document left off in the 10-Year Goals section
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Diversification into technology and renewable energy sectors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Establishment of Trusty Foundation focused on community development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Having a minimum of 10 subsidiary companies operating globally</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      {/* Team Section */}
<section className="py-16 px-4 mx-8 md:mx-16 lg:mx-24 bg-gradient-to-b from-blue-50 to-white">
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Our Leadership</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#007aaf] to-[#00A3D9] mx-auto mb-4 rounded-full"></div>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300">
          {/* Placeholder for leader image */}
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1 text-gray-800">Jimmy Frederic Byiringiro</h3>
          <p className="text-[#00A3D9] font-medium text-sm mb-3">Founder & CEO</p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">Visionary leader with expertise in business development and strategic growth, passionate about creating opportunities for communities.</p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#00A3D9] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00A3D9] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300">
          {/* Placeholder for leader image */}
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1 text-gray-800">Sarah Mukamana</h3>
          <p className="text-[#00A3D9] font-medium text-sm mb-3">Chief Operations Officer</p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">Experienced operations leader with a background in project management and operational excellence across multiple industries.</p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#00A3D9] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300">
          {/* Placeholder for leader image */}
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-14 h-14 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold mb-1 text-gray-800">Jean-Paul Niyonzima</h3>
          <p className="text-[#00A3D9] font-medium text-sm mb-3">Chief Investment Officer</p>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">Strategic investment expert with extensive experience in portfolio management, financial analysis, and investment strategy.</p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#00A3D9] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* <motion.button 
        className="bg-gradient-to-r from-[#0090c1] to-[#00A3D9] hover:from-[#0080b0] hover:to-[#0090c5] text-white font-bold py-2.5 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Join Our Team
      </motion.button> */}
    </motion.div>
  </div>
</section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find answers to common questions about Trusty Group and our operations
          </p>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text font-semibold text-gray-800">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-600 flex-shrink-0"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-white via-[#00A3D9] to-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">Join Us in Building a Better Future</h2>
          <p className="text mb-8 max-w-3xl mx-auto">Whether you're an investor, potential partner, or community member, we invite you to be part of our journey toward creating prosperity and peace.</p>
          <div className="flex flex-wrap justify-center gap-4">
  <a href="/contact">
    <button className="bg-white text-[#00A3D9] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
      Contact Us
    </button>
  </a>
  <a href="/careers">
    <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#00A3D9] font-bold py-3 px-8 rounded-lg transition duration-300">
      Explore Opportunities
    </button>
  </a>
</div>
        </div>
      </section>
    </div>
  );
};

export default About;