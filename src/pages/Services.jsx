import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Trusty from '../assets/images/construction.jpg';
import Estates from '../assets/images/estate.jpeg';

function Services() {
  const [activeTab, setActiveTab] = useState('group');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const subsidiaries = [
    {
      id: 'group',
      name: 'Trusty Group',
      logo: Trusty,
      icon: '🏢',
      description: 'Using Real Estate Development as an art form to cultivate peace among citizens of planet Earth.',
      services: [
        'Real Estate Development',
        'Investment Portfolio Management',
        'Community Development',
        'Sustainable Growth Solutions'
      ]
    },
    {
      id: 'estates',
      name: 'Trusty Estates',
      logo: Estates,
      icon: '🏘️',
      description: 'Focused on real estate development and investment opportunities that maximize the use of talent, time, and treasure.',
      services: [
        'Real Estate Study Proposal',
        'Consultancy',
        'Real Estate Investment',
        'Investment Guidance'
      ],
      details: [
        {
          title: 'Real Estate Study Proposal',
          description: 'Detailed insights and assessments for real estate investors, developers, and stakeholders.',
          items: ['Feasibility Studies', 'Market Trends Analysis', 'Financial Modeling and Projections']
        },
        {
          title: 'Consultancy',
          description: 'Expert guidance for every step of a real estate project from concept to completion.',
          items: ['Strategic Planning and Development', 'Regulatory Compliance and Due Diligence', 'Sustainability Consulting']
        },
        {
          title: 'Real Estate Investment',
          description: 'Diverse investment opportunities in the real estate market.',
          items: ['Own Rentals', 'Fix/Flip Estates', 'Wholesale Estates']
        },
        {
          title: 'Investment Guidance',
          description: 'Strategic investment advice tailored to investor needs.',
          items: ['Portfolio Diversification Strategies', 'Risk Management and Mitigation', 'Access to Exclusive Opportunities']
        }
      ]
    },
    {
      id: 'construction',
      name: 'Trusty Construction',
      logo: '/api/placehold',
      icon: '🏗️',
      description: 'Specializing in innovative construction projects that combine efficiency, quality, and long-term sustainability.',
      services: [
        'Architectural, Structural, and Interior Design',
        'Supervision of Construction Projects',
        'Execution of Construction Projects',
        'Construction Permit Application',
        'Material Supply'
      ],
      details: [
        {
          title: 'Architectural, Structural, and Interior Design',
          description: 'Crafting layouts, ensuring structural integrity, and designing interior aesthetics of buildings.',
          items: ['Blueprint Design', 'Structural Stability Assessment', 'Interior Space Planning']
        },
        {
          title: 'Supervision of Construction Projects',
          description: 'Overseeing construction projects with precision and expertise.',
          items: ['Timeline Management', 'Contractor Coordination', 'Quality Standards Enforcement']
        },
        {
          title: 'Execution of Construction Projects',
          description: 'Carrying out construction works on behalf of clients with dedication to excellence.',
          items: ['Budget Planning', 'Deadline Adherence', 'Complete Project Handover']
        },
        {
          title: 'Construction Permit Application',
          description: 'Navigating the process of obtaining necessary construction permits.',
          items: ['Paperwork Management', 'Building Code Compliance', 'Regulatory Liaison']
        },
        {
          title: 'Material Supply',
          description: 'Sourcing and delivering essential construction materials.',
          items: ['Cement, Steel, and Brick Sourcing', 'Quality Material Selection', 'Timely Delivery']
        }
      ]
    },
    {
      id: 'pictures',
      name: 'Trusty Pictures',
      logo: '/api/placeholder/80/80',
      icon: '📸',
      description: 'A creative hub for photography, film, and videography services, crafting stories that connect people and inspire communities.',
      services: [
        'Photography Services',
        'Videography Services',
        'Post-Production Services',
        'Media Consultancy'
      ],
      details: [
        {
          title: 'Photography Services',
          description: 'Professional photography tailored to diverse client needs.',
          items: ['Event Photography', 'Portrait Photography', 'Commercial Photography', 'Real Estate Photography']
        },
        {
          title: 'Videography Services',
          description: 'High-quality video production for various purposes.',
          items: ['Event Videography', 'Promotional Videos', 'Documentaries and Short Films', 'Aerial Videography']
        },
        {
          title: 'Post-Production Services',
          description: 'Professional editing and enhancement of visual content.',
          items: ['Editing and Color Grading', 'Motion Graphics and Animation', 'Sound Design and Mixing']
        },
        {
          title: 'Media Consultancy',
          description: 'Strategic guidance for building media presence.',
          items: ['Content Creation Strategy', 'Brand Media Planning', 'Digital Presence Optimization']
        }
      ]
    },
    {
      id: 'technologies',
      name: 'Trusty Technologies',
      logo: '/api/placeholder/80/80',
      icon: '💻',
      description: 'A venture into technology, exploring Artificial Intelligence, cybersecurity, and software/web development for tech-driven solutions.',
      services: [
        'Artificial Intelligence Solutions',
        'Cybersecurity Services',
        'Software Development',
        'Web Development'
      ]
    },
    {
      id: 'fashion',
      name: 'Trusty Fashion',
      logo: '/api/placeholder/80/80',
      icon: '👔',
      description: 'Creating cultural value through fashion, pioneering the advancement of Africa\'s textile industry.',
      services: [
        'Apparel Design',
        'Textile Innovation',
        'Fashion Brand Development',
        'Global Lifestyle Products'
      ]
    },
    {
      id: 'trade',
      name: 'Trusty Trade & Commerce',
      logo: '/api/placeholder/80/80',
      icon: '🌐',
      description: 'Engaging in various trade activities leveraging our extensive global network and expertise.',
      services: [
        'Global Chemical Trading',
        'Steel Trading',
        'Energy Resource Management',
        'Industrial Material Sourcing'
      ]
    }
  ];

  const activeSubsidiary = subsidiaries.find(sub => sub.id === activeTab);
  
  // Animated background gradient
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setGradientPosition({ x, y });
  };

  // Service card hover effect
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="relative overflow-hidden py-16" onMouseMove={handleMouseMove}>
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-64 w-64 rounded-full bg-blue-100 opacity-20 -top-20 -left-20 animate-blob"></div>
        <div className="absolute h-80 w-80 rounded-full bg-cyan-100 opacity-20 top-1/3 right-10 animate-blob animation-delay-2000"></div>
        <div className="absolute h-64 w-64 rounded-full bg-teal-100 opacity-20 bottom-10 left-1/3 animate-blob animation-delay-4000"></div>
      </div>

      {/* Moving gradient background */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-40 pointer-events-none"
        style={{
          backgroundPosition: `${gradientPosition.x}% ${gradientPosition.y}%`,
          transition: 'background-position 0.5s ease-out',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
      <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16 relative"
>
  {/* Background decoration elements */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 opacity-30 blur-3xl"></div>
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
  </div>
  
  {/* Decorative geometric shapes */}
  <div className="absolute -top-6 left-1/3 w-12 h-12 rounded-xl bg-[#00A3D9] opacity-5 rotate-12 animate-float"></div>
  <div className="absolute top-10 right-1/4 w-8 h-8 rounded-full bg-blue-500 opacity-10 animate-float animation-delay-1000"></div>
  
  {/* Header content */}
  <h2 className="text-4xl font-bold mb-3 relative inline-block group">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 relative z-10">Our Services</span>
    
    {/* Animated underline on hover */}
    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#00A3D9] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
    
    {/* Subtle background accent for text */}
    <div className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-70 blur-sm -z-10"></div>
  </h2>
  
  <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
    Discover the comprehensive range of services offered through our diverse portfolio of subsidiaries.
  </p>
</motion.div>

        {/* Subsidiary Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 gap-3"
        >
          {subsidiaries.map((subsidiary, index) => (
            <motion.button
              key={subsidiary.id}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === subsidiary.id
                  ? 'bg-gradient-to-r from-[#00A3D9] to-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
              onClick={() => setActiveTab(subsidiary.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            >
              <span>{subsidiary.icon}</span>
              {subsidiary.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Subsidiary Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl backdrop-blur-lg bg-opacity-80"
          >
            <motion.div 
              className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-[#00A3D9] to-blue-600 p-0.5 rounded-2xl shadow-lg">
                <div className="bg-white p-3 rounded-2xl">
                  <div className="h-24 w-24 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50">
                    <img
                      src={activeSubsidiary.logo}
                      alt={`${activeSubsidiary.name} logo`}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#00A3D9] to-blue-600 bg-clip-text text-transparent">
                    {activeSubsidiary.name}
                  </h3>
                  <span className="text-3xl">{activeSubsidiary.icon}</span>
                </div>
                <p className="text-gray-600 mt-2 max-w-2xl">{activeSubsidiary.description}</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Services List */}
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  Key Services
                </h4>
                <ul className="space-y-4">
                  {activeSubsidiary.services.map((service, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 h-7 w-7 rounded-lg bg-gradient-to-r from-[#00A3D9] to-blue-600 flex items-center justify-center text-white text-xs mt-0.5 group-hover:shadow-md transition-all">
                        {index + 1}
                      </div>
                      <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Details */}
              {activeSubsidiary.details ? (
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                    Service Details
                  </h4>
                  <div className="space-y-6 overflow-y-auto max-h-96">
                    {activeSubsidiary.details.map((detail, index) => (
                      <motion.div 
                        key={index}
                        className={`pl-4 border-l-4 rounded-sm transition-all duration-300 ${
                          hoveredService === index ? 'border-blue-500 bg-blue-50 p-3' : 'border-[#00A3D9]'
                        }`}
                        onMouseEnter={() => setHoveredService(index)}
                        onMouseLeave={() => setHoveredService(null)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      >
                        <h5 className="font-medium text-gray-900 text-lg">{detail.title}</h5>
                        <p className="text-sm text-gray-600 mt-1">{detail.description}</p>
                        {detail.items && (
                          <motion.ul 
                            className="mt-2 ml-4 text-sm text-gray-700 list-disc space-y-1"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {detail.items.map((item, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 * i }}
                              >
                                {item}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex items-center justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: [0, 10, 0] }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {activeSubsidiary.icon}
                    </motion.div>
                    <p className="text-gray-600 max-w-xs mx-auto">
                      More detailed information about {activeSubsidiary.name} services coming soon. Contact us to learn more.
                    </p>
                    <motion.button 
                      className="mt-6 bg-gradient-to-r from-[#00A3D9] to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:translate-y-0.5 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A3D9] to-blue-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          
          {/* Floating objects */}
          <div className="absolute top-10 left-10 h-16 w-16 rounded-full bg-white opacity-10 animate-float"></div>
          <div className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-white opacity-5 animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 h-12 w-12 rounded-full bg-white opacity-10 animate-float animation-delay-2000"></div>
          
          <div className="relative z-10 p-10 text-white text-center">
            <motion.h3 
              className="text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Ready to Work With Us?
            </motion.h3>
            <motion.p 
              className="mb-8 max-w-2xl mx-auto text-lg opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Our team is ready to help you achieve your goals. Reach out to learn more about how our services can benefit your project.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button 
                className="bg-white text-blue-600 px-8 py-3.5 rounded-full font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-white px-8 py-3.5 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;