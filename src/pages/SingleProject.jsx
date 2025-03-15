import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import buildingImage from '../assets/images/Building.jpeg';
import buildingSource from '../assets/images/buildinginner.jpeg';
import buildingLeft from '../assets/images/buildingleft.jpeg';
import buildingRight from '../assets/images/buildingright.jpeg';
import buildingSide from '../assets/images/estate.jpeg';
import buildingInner from '../assets/images/buildingtop.jpeg';
import buildingTop from '../assets/images/buildingtop.jpeg';

// Static project data
const projectData = {
  id: '1',
  name: 'Modern Office Building Renovation',
  description: 'A complete renovation of a 10-story office building in downtown, transforming an outdated space into a modern, energy-efficient workspace with collaborative areas and state-of-the-art technology infrastructure.',
  timeline: 'January 2023 - December 2023 (12 months)',
  challenge: 'The main challenge was to complete the renovation while part of the building remained operational. This required careful planning and phased execution to minimize disruption to the current tenants.',
  solution: 'We implemented a floor-by-floor renovation strategy with soundproofing measures and after-hours work schedules. We also created temporary workspaces for displaced teams during their floor renovations.',
  services: [
    'Architectural Design',
    'Interior Space Planning',
    'Structural Engineering',
    'MEP Systems Upgrade',
    'Sustainable Building Practices',
    'Project Management'
  ],
  stats: [
    { label: 'Area', value: '45,000 sq ft' },
    { label: 'Budget', value: '$12.5M' },
    { label: 'Duration', value: '12 months' },
    { label: 'Team Size', value: '35 people' }
  ],
  client: 'Apex Business Solutions',
  location: 'Downtown, Metro City',
  status: 'completed',
  gallery: [
    buildingImage,
    buildingSource,
    buildingLeft,
    buildingRight,
    buildingSide,
    buildingInner,
    buildingTop,
  ],
  testimonial: {
    quote: 'The team delivered an exceptional renovation that exceeded our expectations. The new space has significantly improved employee satisfaction and productivity. Their attention to detail and ability to work around our ongoing operations was impressive.',
    author: 'Sarah Johnson, CEO of Apex Business Solutions'
  }
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Helper function for status color
const getStatusColor = (status) => {
  return status === 'completed' 
    ? 'bg-green-100 text-green-800' 
    : 'bg-blue-100 text-blue-800';
};

const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState(null);
  
  // Use static project data
  const project = projectData;

  // Auto-play functionality for gallery
  useEffect(() => {
    if (activeTab === 'gallery' && isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => 
          prev === project.gallery.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [activeTab, isAutoPlaying, project.gallery.length]);

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    // Pause autoplay briefly when manually changing slides
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  // Function to open image viewer
  const openViewer = (image, index) => {
    setViewerImage(image);
    setIsViewerOpen(true);
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-80 md:h-[400px] bg-gray-200 overflow-hidden"
      >
        {project.gallery && project.gallery.length > 0 && (
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            src={project.gallery[0]} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex flex-col justify-end">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="container mx-auto px-4 pb-16"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-heading">{project.name}</h1>
            <div className="flex items-center text-white/90">
              <div className={`px-3 py-1 rounded-full text-xs font-bold mr-3 ${getStatusColor(project.status)}`}>
                {project.status === 'completed' ? 'Completed' : 'Ongoing'}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-base md:text-lg"
              >
                {project.location}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Back button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="container mx-auto px-4 py-6"
      >
        <Link to="/projects" className="inline-flex items-center text-indigo-500 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="ml-2">Back to Projects</span>
        </Link>
      </motion.div>
      
      {/* Project Quick Info */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-white py-8 md:py-12 shadow-lg rounded-xl max-w-6xl mx-auto px-4 mb-8 relative -mt-8 z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {project.stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
            >
              <div className="text-sm text-gray-500 mb-1 font-body">{stat.label}</div>
              <div className="text-xl font-bold text-gray-900 font-heading">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 mb-16">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8 md:mb-12 overflow-hidden bg-white rounded-xl shadow-md"
          >
            <div className="flex overflow-x-auto gap-0 no-scrollbar">
              {['overview', 'details', 'gallery', 'testimonial'].map((tab, index) => (
                <motion.button
                  key={tab}
                  whileHover={{ backgroundColor: 'rgba(0, 163, 217, 0.1)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab(tab)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all flex-1 ${
                    activeTab === tab
                      ? 'text-[#00A3D9] border-b-2 border-[#00A3D9] bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-md p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants} className="prose max-w-none">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">About the Project</h2>
                    <p className="text-gray-700 leading-relaxed mb-6 font-body">{project.description}</p>
                    
                    <motion.div 
                      variants={scaleUpVariants}
                      className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Project Timeline</h3>
                      <p className="text-gray-700 font-body">{project.timeline || 'Timeline information not available'}</p>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Challenge</h3>
                      <p className="text-gray-700 font-body">{project.challenge || 'Challenge information not available'}</p>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Solution</h3>
                      <p className="text-gray-700 font-body">{project.solution || 'Solution information not available'}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
              
              {/* Details Tab */}
              {activeTab === 'details' && (
                <motion.div 
                  key="details"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Project Specifications</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div 
                        variants={scaleUpVariants}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="bg-white p-6 rounded-lg border-2 border-blue-100 shadow-sm"
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Services Provided</h3>
                        {project.services && project.services.length > 0 ? (
                          <ul className="space-y-2">
                            {project.services.map((service, index) => (
                              <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="flex items-start"
                              >
                                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-gray-700 font-body">{service}</span>
                              </motion.li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500 italic">No services listed</p>
                        )}
                      </motion.div>
                      
                      <motion.div 
                        variants={scaleUpVariants}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        className="bg-white p-6 rounded-lg border-2 border-blue-100 shadow-sm"
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">Client Information</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-500 mb-1 font-body">Client</p>
                            <p className="text-lg font-medium text-gray-900 font-heading">{project.client || 'Not specified'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1 font-body">Location</p>
                            <p className="text-lg font-medium text-gray-900 font-heading">{project.location || 'Not specified'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1 font-body">Completion</p>
                            <p className="text-lg font-medium text-gray-900 font-heading">{project.timeline || 'Not specified'}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
              
              {/* Gallery Tab */}
              {activeTab === 'gallery' && (
                <motion.div 
                  key="gallery"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Project Gallery</h2>
                  
                  {/* Main Gallery Image */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer h-[400px] w-full"
                    onClick={() => openViewer(project.gallery[currentSlide], currentSlide)}
                  >
                    {project.gallery && project.gallery.length > 0 && (
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={currentSlide}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          src={project.gallery[currentSlide]} 
                          alt={`Project image ${currentSlide + 1}`} 
                          className="w-full h-auto object-cover"
                        />
                      </AnimatePresence>
                    )}
                    
                    {/* Navigation Arrows */}
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(prev => prev === 0 ? project.gallery.length - 1 : prev - 1);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(prev => prev === project.gallery.length - 1 ? 0 : prev + 1);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                  
                  {/* Thumbnails */}
                  {project.gallery && project.gallery.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="grid grid-cols-4 md:grid-cols-6 gap-3 mt-4"
                    >
                      {project.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSlideChange(index)}
                          className={`relative aspect-square rounded-md overflow-hidden cursor-pointer ${
                            currentSlide === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                          }`}
                        >
                          <img 
                            src={image} 
                            alt={`Thumbnail ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  
                  {/* Full Screen Viewer */}
                  {isViewerOpen && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                      onClick={() => setIsViewerOpen(false)}
                    >
                      <img 
                        src={viewerImage} 
                        alt="Full size view" 
                        className="max-w-[90%] max-h-[90vh] object-contain"
                      />
                      <button 
                        className="absolute top-6 right-6 text-white hover:text-gray-300"
                        onClick={() => setIsViewerOpen(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              )}
              
              {/* Testimonial Tab */}
              {activeTab === 'testimonial' && project.testimonial && (
                <motion.div 
                  key="testimonial"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className="flex flex-col items-center py-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center font-heading">Client Testimonial</h2>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg relative"
                  >
                    <svg className="absolute text-blue-200 w-16 h-16 -top-6 -left-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-body italic">
                      {project.testimonial.quote}
                    </div>
                    <div className="flex items-center justify-end">
                      <div>
                        <div className="font-bold text-gray-900 font-heading">{project.testimonial.author}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;