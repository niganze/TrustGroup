import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Mail, Phone, Send, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Profiler from '../assets/images/Byiringiro.jpeg';

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


  const socialIcons = [
    {
      name: 'facebook',
      path: 'M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z'
    },
    {
      name: 'twitter',
      path: 'M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z'
    },
    {
      name: 'instagram',
      path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z'
    },
    {
      name: 'linkedin',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    }
  ];

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

  const filteredJobs = selectedSubsidiary === 'all' 
    ? jobs 
    : jobs.filter(job => job.subsidiary === selectedSubsidiary);

  const handleApplyEmail = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(`Dear Hiring Manager,\n\nI am writing to apply for the ${jobTitle} position at Trusty Group. Please find my CV attached.\n\nThank you for your consideration.\n\nSincerely,\n[Your Name]`);
    window.location.href = `mailto:niganzealain@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Improved with more modern gradient and better visual hierarchy */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        {/* Wave Background - Enhanced animation properties */}
        <div className="absolute inset-0 z-0 opacity-30">
          <svg
            className="absolute bottom-0 left-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <motion.path
              initial={{ opacity: 0.3, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              fill="#ffffff"
              fillOpacity="0.4"
              d="M0,144L48,136C96,128,192,112,288,106.7C384,101,480,107,576,109.3C672,112,768,112,864,98.7C960,85,1056,59,1152,56C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></motion.path>
            <motion.path
              initial={{ opacity: 0.3, y: 15 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.2
              }}
              fill="#ffffff"
              fillOpacity="0.3"
              d="M0,48L48,64C96,80,192,112,288,112C384,112,480,80,576,69.3C672,59,768,69,864,82.7C960,96,1056,112,1152,112C1248,112,1344,96,1392,88L1440,80L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></motion.path>
          </svg>
        </div>

        {/* Floating particles - Better particle system */}
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 6 + 3 + "px",
                height: Math.random() * 6 + 3 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                y: [0, Math.random() * -20 - 5],
                x: [0, Math.random() * 15 - 7]
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
        
        {/* Main content with improved typography and spacing */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text md:text-3xl font-serif mb-3 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join Our Vision of Creating Thriving Communities
            </motion.h1>
            
            <motion.p 
              className="text mb-3 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Become part of a company that's building peace and prosperity worldwide through innovative investments and community-centric approaches.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#openings" 
                className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5 mr-2" />
                Explore Open Positions
              </motion.a>
              
              <motion.a 
                href="#mission" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#4338ca"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Discover Our Mission
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Our Mission and Values Section - Improved layout and visual hierarchy */}
      <div id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 font-heading">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Our Mission</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                To leverage our investment portfolio as a catalyst for cultivating peace and prosperity among communities worldwide. 
                Optimize the use of talent, time, and treasure and establish a niche in the finance industry, and contribute to its scaling.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the world's leading catalyst for transformative growth through investment, creating a future where vibrant communities thrive in harmony.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Core Values</h3>
              <ul className="space-y-6">
                {[
                  { title: "Timely Delivery", text: "We pledge ourselves to providing our clients and communities with the best possible value without sacrificing quality." },
                  { title: "Innovative Mindset", text: "We believe in the power of creativity and forward-thinking, pushing limits and discovering new opportunities." },
                  { title: "Community-Centric Approach", text: "Our investments and projects are designed with the community at heart." },
                  { title: "Sustainability Focus", text: "We are devoted to sustainable practices that ensure long-term growth and environmental stewardship." },
                  { title: "Integrity and Trustworthiness", text: "We uphold the highest standards of honesty, transparency, and accountability." }
                ].map((value, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <span className="bg-indigo-600 text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-indigo-800">{value.title}:</span>{" "}
                      <span className="text-gray-700">{value.text}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Join Us Section - Enhanced with more interactive elements */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 font-heading">Why Join Trusty Group?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Diverse Career Paths",
                description: "With multiple subsidiaries spanning construction, real estate, technology, and more, we offer diverse career opportunities that allow employees to explore different industries without changing companies."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Meaningful Impact",
                description: "At Trusty Group, you'll contribute to projects that create lasting positive impacts on communities. Our vision is to cultivate peace and prosperity worldwide through our work."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Growth & Development",
                description: "We view our employees as trustees with a stake in our collective success. We invest in your personal and professional growth, providing opportunities to develop new skills and advance your career."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section - Enhanced with better job card design */}
      <div id="openings" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 font-heading">Open Positions</h2>
          
          {/* Filter - Enhanced with better design */}
          <div className="mb-12 max-w-md mx-auto">
            <label htmlFor="subsidiary-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Subsidiary
            </label>
            <div className="relative">
              <select
                id="subsidiary-filter"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white shadow-sm hover:border-indigo-300 transition-all"
                value={selectedSubsidiary}
                onChange={(e) => setSelectedSubsidiary(e.target.value)}
              >
                {subsidiaries.map((sub) => (
                  <option key={sub.value} value={sub.value}>
                    {sub.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Job Listings - Improved card design and interactions */}
          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-6 text-gray-600 text-lg">Loading job opportunities...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {filteredJobs.map((job, index) => (
                <motion.div 
                  key={job.id} 
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-indigo-600 mb-1">{job.title}</h3>
                      <p className="text-gray-600 flex items-center">
                        <span className="inline-block w-4 h-4 bg-indigo-100 rounded-full mr-2"></span>
                        {job.subsidiary}
                      </p>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-4 py-1 rounded-full font-medium">
                        {job.type}
                      </span>
                      <p className="text-gray-600 text-sm mt-2 flex items-center md:justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-gray-800">Key Qualifications:</h4>
                    <ul className="space-y-2">
                      {job.qualifications.map((qualification, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-6 border-gray-100">
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Posted: {new Date(job.postedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </p>
                    <motion.button 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleApplyEmail(job.title)}
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Apply via Email
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="mt-6 text-xl font-medium text-gray-700">No open positions found</h3>
              <p className="mt-2 text-gray-500 max-w-md mx-auto">We don't currently have open positions for this subsidiary. Please check back later or try a different filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* Application Process - Modernized with better visuals */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 font-heading">Our Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 h-full w-1 bg-indigo-200 hidden md:block rounded-full"></div>
              
              {/* Steps - Enhanced design */}
              <div className="space-y-12 relative">
                {[
                  {
                    number: 1,
                    title: "Application Submission",
                    description: "Email your resume/CV to niganzealain@gmail.com with the subject line containing the position you're applying for. Include a brief cover letter explaining your qualifications and interest in our mission."
                  },
                  {
                    number: 2,
                    title: "Initial Screening",
                    description: "Our hiring team will review your application. If your qualifications match our needs, we'll contact you for a brief phone or video interview to learn more about your background and experience."
                  },
                  {
                    number: 3,
                    title: "In-Depth Interview",
                    description: "Qualified candidates will be invited for a comprehensive interview with the hiring manager and team members. This may include technical assessments for specialized roles."
                  },
                  {
                    number: 4,
                    title: "Offer & Onboarding",
                    description: "Successful candidates will receive a job offer. Once accepted, our HR team will guide you through the onboarding process to ensure a smooth transition into your new role at Trusty Group."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="relative flex flex-col md:flex-row items-start group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Step number bubble - Enhanced with animations */}
                    <motion.div 
                      className="h-16 w-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold z-10 mb-4 md:mb-0 md:mr-8 shadow-md"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#4338ca"
                      }}
                    >
                      {step.number}
                    </motion.div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm w-full hover:shadow-md transition-all">
                      <h3 className="text-xl font-semibold mb-3 text-indigo-600 group-hover:text-indigo-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Improved Call-to-Action - Enhanced with better visuals and animation */}
      <div className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="white" strokeWidth="2">
              <circle cx="400" cy="400" r="200" />
              <circle cx="400" cy="400" r="250" />
              <circle cx="400" cy="400" r="300" />
              <circle cx="400" cy="400" r="350" />
            </g>
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1
              }}
              animate={{
                y: [0, Math.random() * -30 - 10],
                x: [0, Math.random() * 20 - 10]
              }}
              transition={{
                duration: Math.random() * 2 + 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3 
              className="text-xl md:text-4xl font-heading mb-3 "
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Build a Meaningful Career with Trusty Group?
            </motion.h3>
            <motion.p 
              className="text-xl md:text-xl opacity-90 mb-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our team of dedicated professionals working to create positive change and build thriving communities worldwide.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="#openings" 
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                View Open Positions
              </motion.a>
              
              <motion.a 
                href="mailto:carrertrustgroup@gmail.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#4338ca"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Recruiting
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* New: Success Stories Section - Adding a testimonial section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 font-heading">
            Employee Success Stories
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "David Murenzi",
                role: "Senior Project Manager, Trusty Construction",
                image: Profiler,
                quote: "Since joining Trusty Group four years ago, I've had the opportunity to lead major construction projects that have transformed communities. The collaborative culture and focus on excellence has allowed me to grow both professionally and personally."
              },
              {
                name: "Sarah Uwimana",
                role: "Software Developer, Trusty Technologies",
                image: Profiler,
                quote: "Starting as a junior developer, I've been able to advance my skills and take on leadership responsibilities in just two years. The mentorship program and investment in continuous learning sets Trusty Group apart from other employers."
              },
              {
                name: "Jean-Paul Habimana",
                role: "Marketing Director, Trusty Group",
                image: Profiler,
                quote: "Working across multiple subsidiaries has given me a unique perspective on how integrated business approaches can create greater impact. The values-driven culture and commitment to community development makes this more than just a job."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 bg-indigo-600 w-16 h-16 rounded-bl-xl rounded-tr-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="mb-6 flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-600" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information Section - Enhanced with better layout and visuals */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 font-heading">
              Contact Our Recruitment Team
            </h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-5">
                {/* Map or Image Section */}
                <div className="md:col-span-2 bg-indigo-600 p-8 text-white flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trusty Group Headquarters</h3>
                  <p className="opacity-80 leading-relaxed">
                    KN 2 St, Kigali<br />
                    Rwanda<br />
                    East Africa
                  </p>
                  <div className="mt-6 pt-6 border-t border-indigo-500 w-full">
                    <p className="opacity-80 text-sm">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 1:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="md:col-span-3 p-8">
                  <h3 className="text-xl font-semibold mb-6 text-indigo-600">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">
                          <a 
                            href="mailto:niganzealain@gmail.com" 
                            className="hover:text-indigo-600 transition-colors"
                          >
                          carrertrustgroup@gmail.com
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">For job inquiries and applications</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                        <p className="text-gray-600">
                          <a 
                            href="tel:+250780000000" 
                            className="hover:text-indigo-600 transition-colors"
                          >
                            +250 780 000 000
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Monday to Friday, 8am to 6pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <ExternalLink className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Website</h4>
                        <p className="text-gray-600">
                          <a 
                            href="https://trustygroup.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-indigo-600 transition-colors"
                          >
                            www.trustygroup.com
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Visit our main website for more information</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
      {socialIcons.map((social, index) => (
        <a 
          key={index}
          href="#" 
          className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors text-indigo-600"
        >
          <svg 
            className="h-5 w-5" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;