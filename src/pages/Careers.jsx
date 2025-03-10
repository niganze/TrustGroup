import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown , Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedSubsidiary, setSelectedSubsidiary] = useState('all');
  const [loading, setLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  // Mock data - In a real implementation, this would come from an API
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setJobs([
        {
          id: 1,
          title: 'Project Manager',
          subsidiary: 'Trusty Construction',
          location: 'Kigali, Rwanda',
          type: 'Full-time',
          description: 'Oversee construction projects from planning to completion, ensuring timely delivery and quality standards.',
          qualifications: [
            'Bachelor\'s degree in Civil Engineering, Construction Management, or related field',
            'Minimum 5 years of experience in construction project management',
            'Strong leadership and communication skills',
            'Proficient in project management software'
          ],
          postedDate: '2025-02-15'
        },
        {
          id: 2,
          title: 'Real Estate Analyst',
          subsidiary: 'Trusty Estates',
          location: 'Kigali, Rwanda',
          type: 'Full-time',
          description: 'Conduct market research and financial analysis for real estate investment opportunities.',
          qualifications: [
            'Bachelor\'s degree in Finance, Economics, Real Estate, or related field',
            'Minimum 3 years of experience in real estate analysis',
            'Strong analytical and financial modeling skills',
            'Knowledge of real estate market trends'
          ],
          postedDate: '2025-02-20'
        },
        {
          id: 3,
          title: 'Photographer/Videographer',
          subsidiary: 'Trusty Pictures',
          location: 'Kigali, Rwanda',
          type: 'Full-time',
          description: 'Capture high-quality photos and videos for various client projects and internal marketing needs.',
          qualifications: [
            'Diploma or degree in Photography, Cinematography, or related field',
            'Portfolio demonstrating skills in both photography and videography',
            'Proficiency in Adobe Creative Suite',
            'Minimum 2 years of professional experience'
          ],
          postedDate: '2025-02-25'
        },
        {
          id: 4,
          title: 'Software Developer',
          subsidiary: 'Trusty Technologies',
          location: 'Kigali, Rwanda',
          type: 'Full-time',
          description: 'Design and build innovative applications and solutions for internal and client projects.',
          qualifications: [
            'Bachelor\'s degree in Computer Science, Software Engineering, or related field',
            'Proficiency in full-stack development',
            'Experience with modern frameworks and tools',
            'Strong problem-solving skills'
          ],
          postedDate: '2025-02-28'
        },
        {
          id: 5,
          title: 'Administrative Assistant',
          subsidiary: 'Trusty Group',
          location: 'Kigali, Rwanda',
          type: 'Full-time',
          description: 'Provide administrative support to the leadership team and coordinate cross-subsidiary activities.',
          qualifications: [
            'Diploma or degree in Business Administration or related field',
            'Excellent organizational and communication skills',
            'Proficiency in MS Office suite',
            'Previous administrative experience preferred'
          ],
          postedDate: '2025-03-01'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const subsidiaries = [
    { value: 'all', label: 'All Subsidiaries' },
    { value: 'Trusty Group', label: 'Trusty Group' },
    { value: 'Trusty Construction', label: 'Trusty Construction' },
    { value: 'Trusty Estates', label: 'Trusty Estates' },
    { value: 'Trusty Pictures', label: 'Trusty Pictures' },
    { value: 'Trusty Technologies', label: 'Trusty Technologies' },
    { value: 'Trusty Fashion', label: 'Trusty Fashion' },
    { value: 'Trusty Trade & Commerce', label: 'Trusty Trade & Commerce' }
  ];

  const faqCategories = [
    {
      title: "General Questions",
      items: [
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
      ]
    },
    {
      title: "Career Questions",
      items: [
        {
          question: "What is it like to work at Trusty Group?",
          answer: "At Trusty Group, we foster a collaborative environment where employees are viewed as trustees with a stake in our collective success. Our culture emphasizes integrity, innovation, and community impact across all our subsidiaries. We encourage growth, creativity, and entrepreneurial thinking."
        },
        {
          question: "Do you offer opportunities for career advancement?",
          answer: "Yes, we're committed to the growth and development of our team members. With multiple subsidiaries under the Trusty Group umbrella, there are opportunities for both vertical advancement and horizontal movement across different companies and industries within our organization."
        },
        {
          question: "What benefits do you offer?",
          answer: "Our benefits package includes competitive salaries, healthcare coverage, professional development opportunities, and a supportive work environment. We also offer flexible work arrangements and the chance to contribute to meaningful projects that make a real difference in communities."
        },
        {
          question: "How long does the hiring process typically take?",
          answer: "Our hiring process typically takes 2-4 weeks from initial application to offer, depending on the position and number of applicants. We strive to keep candidates informed at each stage and provide timely feedback."
        },
        {
          question: "Do you offer remote work opportunities?",
          answer: "This depends on the position and subsidiary. Some roles allow for remote or hybrid work arrangements, while others require an on-site presence due to the nature of the work. Each job posting will specify the work location requirements."
        }
      ]
    }
  ];

  const filteredJobs = selectedSubsidiary === 'all' 
    ? jobs 
    : jobs.filter(job => job.subsidiary === selectedSubsidiary);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <motion.path
            initial={{ opacity: 0.3, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            fill="#0099ff"
            fillOpacity="0.4"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,197.3C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
          <motion.path
            initial={{ opacity: 0.3, y: 30 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2
            }}
            fill="#0099ff"
            fillOpacity="0.6"
            d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,138.7C672,117,768,139,864,165.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
          <motion.path
            initial={{ opacity: 0.4, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.4
            }}
            fill="#0099ff"
            fillOpacity="0.8"
            d="M0,0L48,37.3C96,75,192,149,288,165.3C384,181,480,139,576,117.3C672,96,768,96,864,128C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></motion.path>
        </svg>
      </div>

      {/* Floating particles for added visual interest */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [0, Math.random() * -30 - 10],
              x: [0, Math.random() * 20 - 10]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Main content with background */}
      <div className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join Our Team
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Be part of a company that's building thriving communities and cultivating peace worldwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#openings" 
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Open Positions
              </motion.a>
              
              <motion.a 
                href="#mission" 
                className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#2563eb"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Learn About Our Mission
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-white opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 1.2, delay: 1 }}
      />
    </div>

      {/* Our Mission and Values Section */}
      <div id="mission" className="py-16 bg-gray-50 mx-8 md:mx-16 lg:mx-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To leverage our investment portfolio as a catalyst for cultivating peace and prosperity among communities worldwide. 
                Optimize the use of talent, time, and treasure and establish a niche in the finance industry, and contribute to its scaling.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's leading catalyst for transformative growth through investment, creating a future where vibrant communities thrive in harmony.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Timely Delivery:</span> We pledge ourselves to providing our clients and communities with the best possible value without sacrificing quality.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Innovative Mindset:</span> We believe in the power of creativity and forward-thinking, pushing limits and discovering new opportunities.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Community-Centric Approach:</span> Our investments and projects are designed with the community at heart.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Sustainability Focus:</span> We are devoted to sustainable practices that ensure long-term growth and environmental stewardship.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white p-1 rounded-full mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Integrity and Trustworthiness:</span> We uphold the highest standards of honesty, transparency, and accountability.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16 bg-white mx-8 md:mx-16 lg:mx-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">Why Join Trusty Group?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Career Paths</h3>
              <p className="text-gray-700">
                With multiple subsidiaries spanning construction, real estate, technology, and more, we offer diverse career opportunities that allow employees to explore different industries without changing companies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
              <p className="text-gray-700">
                At Trusty Group, you'll contribute to projects that create lasting positive impacts on communities. Our vision is to cultivate peace and prosperity worldwide through our work.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth & Development</h3>
              <p className="text-gray-700">
                We view our employees as trustees with a stake in our collective success. We invest in your personal and professional growth, providing opportunities to develop new skills and advance your career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div id="openings" className="py-16 bg-gray-50 mx-8 md:mx-16 lg:mx-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">Open Positions</h2>
          
          {/* Filter */}
          <div className="mb-8">
            <label htmlFor="subsidiary-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Subsidiary
            </label>
            <select
              id="subsidiary-filter"
              className="w-full md:w-72 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={selectedSubsidiary}
              onChange={(e) => setSelectedSubsidiary(e.target.value)}
            >
              {subsidiaries.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Job Listings */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading job listings...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600">{job.title}</h3>
                      <p className="text-gray-600">{job.subsidiary}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                      <p className="text-gray-600 text-sm mt-1">{job.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Qualifications:</h4>
                    <ul className="list-disc pl-5">
                      {job.qualifications.map((qualification, index) => (
                        <li key={index} className="text-gray-700">{qualification}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <p className="text-sm text-gray-500 mb-2 sm:mb-0">Posted on: {new Date(job.postedDate).toLocaleDateString()}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="mt-4 text-lg font-medium text-gray-600">No open positions found for this subsidiary</p>
              <p className="mt-2 text-gray-500">Please check back later or try a different filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">Our Application Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-600 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="relative flex items-start group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center z-10">
                      1
                    </div>
                    <div className="h-full w-0.5 bg-blue-600 hidden md:block"></div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg w-full">
                    <h3 className="text-xl font-semibold mb-2">Application Submission</h3>
                    <p className="text-gray-700">
                      Click "Apply Now" on the job listing that interests you. You'll be asked to submit your resume/CV and answer a few questions about your qualifications and interest in our mission.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex items-start group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center z-10">
                      2
                    </div>
                    <div className="h-full w-0.5 bg-blue-600 hidden md:block"></div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg w-full">
                    <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
                    <p className="text-gray-700">
                      Our hiring team will review your application. If your qualifications match our needs, we'll contact you for a brief phone or video interview to learn more about your background and experience.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex items-start group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center z-10">
                      3
                    </div>
                    <div className="h-full w-0.5 bg-blue-600 hidden md:block"></div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg w-full">
                    <h3 className="text-xl font-semibold mb-2">In-Depth Interview</h3>
                    <p className="text-gray-700">
                      Qualified candidates will be invited for a comprehensive interview with the hiring manager and team members. This may include technical assessments for specialized roles.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex items-start group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center z-10">
                      4
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg w-full">
                    <h3 className="text-xl font-semibold mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-700">
                      Successful candidates will receive a job offer. Once accepted, our HR team will guide you through the onboarding process to ensure a smooth transition into your new role at Trusty Group.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Openings CTA */}
      <div className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">Don't See the Right Position?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our vision and values. Send us your resume, and we'll keep it on file for future opportunities.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="preferred-area" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Area of Interest*
                </label>
                <select
                  id="preferred-area"
                  name="preferred-area"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Trusty Group">Trusty Group (Main Company)</option>
                  <option value="Trusty Construction">Trusty Construction</option>
                  <option value="Trusty Estates">Trusty Estates</option>
                  <option value="Trusty Pictures">Trusty Pictures</option>
                  <option value="Trusty Technologies">Trusty Technologies</option>
                  <option value="Trusty Fashion">Trusty Fashion</option>
                  <option value="Trusty Trade & Commerce">Trusty Trade & Commerce</option>
                </select>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume/CV*
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us a bit about yourself and why you're interested in joining Trusty Group..."
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  id="privacy-policy"
                  name="privacy-policy"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  required
                />
                <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                  I agree to the Trusty Group's <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to having my data processed for recruitment purposes.
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find answers to common questions about Trusty Group
          </p>
          
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">{category.title}</h3>
              
              <div className="space-y-4">
                {category.items.map((faq, index) => {
                  // Create a unique index for each FAQ across all categories
                  const globalIndex = categoryIndex * 100 + index;
                  
                  return (
                    <div 
                      key={globalIndex} 
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <button
                        className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <h4 className="text font-semibold text-gray-800">{faq.question}</h4>
                        <motion.div
                          animate={{ rotate: activeIndex === globalIndex ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-blue-600 flex-shrink-0"
                        >
                          <ChevronDown size={24} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {activeIndex === globalIndex && (
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50 mx-8 md:mx-16 lg:mx-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-200">What Our Team Says</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">JK</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Jean Kwizera</h3>
                  <p className="text-gray-600 text-sm">Senior Engineer, Trusty Construction</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working at Trusty Construction has given me the opportunity to contribute to meaningful projects that are transforming communities across Rwanda. The supportive environment and emphasis on innovation have helped me grow professionally."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">DM</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Diana Mutoni</h3>
                  <p className="text-gray-600 text-sm">Marketing Manager, Trusty Group</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The best part about Trusty Group is how they value their employees as trustees. There's a true sense of ownership and collective purpose. I've had opportunities to work across different subsidiaries, which has broadened my skillset tremendously."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">EM</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Eric Mugisha</h3>
                  <p className="text-gray-600 text-sm">Developer, Trusty Technologies</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a developer at Trusty Technologies, I'm encouraged to innovate and explore new solutions. The company invests in our growth with training opportunities and challenging projects that make a real difference in how our other subsidiaries operate."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us CTA */}
      <div className="relative py-14 text-white overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-blue-600 z-0"></div>
      
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Zigzag pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <svg className="w-full h-full" width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path 
            d="M0,100 L100,150 L200,100 L300,150 L400,100 L500,150 L600,100 L700,150 L800,100 L900,150 L1000,100 L1100,150 L1200,100 L1200,300 L0,300 Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      
      {/* Content container */}
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.h2 
          className="text-xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Have Questions?
        </motion.h2>
        
        <motion.p 
          className="text mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our recruitment team is here to help you navigate your career journey with Trusty Group.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="mailto:careers@trustygroup.com" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Mail className="h-5 w-5 mr-2" />
            Email Us
          </motion.a>
          
          <motion.a 
            href="tel:+250781234567" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Phone className="h-5 w-5 mr-2" />
            Call Us
          </motion.a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Careers;