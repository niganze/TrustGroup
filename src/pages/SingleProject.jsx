import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder images (in production, these would come from your project data)
import Foundation from '../assets/images/Busanza.jpeg';
import Commercial from '../assets/images/estate.jpeg';
import Rebero from '../assets/images/single.jpeg';
import Building from '../assets/images/Building.jpeg';
import Apartments from '../assets/images/Apartment.jpeg';
import Villa from '../assets/images/Single.jpeg';

function SingleProject() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [relatedProjects, setRelatedProjects] = useState([]);
  
  // All projects data (in a real app, this would come from your API or context)
  const allProjects = [
    {
      id: "1",
      name: "Busy Bees Foundation School Extension",
      category: "design",
      status: "ongoing",
      image: Foundation,
      description: "The project's objective is to enhance the school's facilities by constructing a G+2 block equipped with cutting-edge technology to bring the Cambridge program to an international standard. Additionally, a new G+2 block will be built to enhance the national primary program, providing all necessary facilities.",
      client: "Busy Bees Foundation",
      featured: true,
      location: "Kigali, Rwanda",
      timeline: "January 2024 - July 2025",
      services: ["Architectural Design", "Structural Engineering", "Project Management"],
      challenge: "The main challenge was to design an educational facility that meets international standards while integrating with the existing school infrastructure. The design needed to accommodate modern technological requirements while maintaining a cohesive aesthetic with the current buildings.",
      solution: "Our team created a modular design approach that allows for seamless integration with existing structures. We incorporated flexible learning spaces and cutting-edge technology infrastructure while ensuring the design remains visually harmonious with the current campus architecture.",
      gallery: [Foundation, Foundation, Foundation],
      testimonial: {
        quote: "Trusty Construction has exceeded our expectations with their innovative design solutions for our school extension. Their attention to detail and understanding of educational facility requirements has been impressive.",
        author: "Director, Busy Bees Foundation"
      },
      stats: [
        { label: "Size", value: "3,500 sq m" },
        { label: "Timeframe", value: "18 months" },
        { label: "Completion", value: "2025" }
      ]
    },
    {
      id: "2",
      name: "G+2 Commercial Building",
      category: "design",
      subcategory: "build",
      status: "ongoing",
      image: Commercial,
      description: "The project envisions transforming the plot facing the main arterial road into a mixed-use development. The ground and first floors will be dedicated to commercial services, while the second and third floors will house two-bedroom residential apartments on each level.",
      client: "Commercial Client",
      featured: true,
      location: "Kacyiru, Kigali",
      timeline: "March 2024 - May 2025",
      services: ["Architectural Design", "Construction", "Interior Design"],
      challenge: "Creating a harmonious mixed-use building that balances commercial needs on lower floors with residential comfort on upper floors, while maximizing space utilization and ensuring proper separation of functions.",
      solution: "We designed dedicated access points for commercial and residential areas, implemented sound insulation between floors, and created a stepped facade design that provides privacy for residential units while maintaining commercial visibility at street level.",
      gallery: [Commercial, Commercial, Commercial],
      testimonial: {
        quote: "The team's ability to balance commercial requirements with residential comfort in our mixed-use development has been remarkable. The project is progressing smoothly and exactly as planned.",
        author: "Project Owner"
      },
      stats: [
        { label: "Size", value: "2,800 sq m" },
        { label: "Timeframe", value: "14 months" },
        { label: "Completion", value: "2025" }
      ]
    },
    {
      id: "3",
      name: "G+3 Rebero Apartment",
      category: "design",
      subcategory: "build",
      status: "ongoing",
      image: Rebero,
      description: "The project intends to transform the existing land by demolishing the two-bedroom section of the current landed villa and constructing a G+2 residential apartment building with six dwelling units, each featuring two self-contained bedrooms.",
      client: "Residential Client",
      featured: true,
      location: "Rebero, Kigali",
      timeline: "February 2024 - February 2025",
      services: ["Demolition Planning", "Architectural Design", "Construction Management"],
      challenge: "Executing a partial demolition while preserving certain structural elements, and ensuring minimal disruption to surrounding properties during construction in a densely populated residential area.",
      solution: "We implemented a phased construction approach, utilizing precision demolition techniques and noise reduction strategies. The new structure was designed to maximize natural light and ventilation while maintaining privacy between units.",
      gallery: [Rebero, Rebero, Rebero],
      testimonial: {
        quote: "The transformation of our property has been handled with exceptional care and professionalism. The team's attention to preserving neighborhood relations during construction has been particularly appreciated.",
        author: "Property Owner"
      },
      stats: [
        { label: "Size", value: "1,500 sq m" },
        { label: "Timeframe", value: "12 months" },
        { label: "Completion", value: "2025" }
      ]
    },
    {
      id: "4",
      name: "G+4 Mixed Use Building",
      category: "design",
      subcategory: "supervision",
      status: "ongoing",
      image: Building,
      description: "The project envisions a mixed-use building that caters to a diverse range of needs, offering commercial and retail spaces on the ground floor, office spaces on the first floor, and residential apartments on the second and third floors.",
      client: "Mixed-use Development Client",
      featured: false,
      stats: [
        { label: "Size", value: "4,200 sq m" },
        { label: "Timeframe", value: "24 months" },
        { label: "Completion", value: "2026" }
      ]
    },
    {
      id: "5",
      name: "Busanza Apartments",
      category: "design",
      subcategory: "supervision",
      status: "completed",
      image: Apartments,
      description: "The project aims to develop the existing land located in the City of Kigali, Gasabo District, Busanza Sector. The project comprises 84 apartments distributed across six building blocks, with private car parking at each block building.",
      client: "Apartment Developer",
      featured: true,
      stats: [
        { label: "Size", value: "12,500 sq m" },
        { label: "Timeframe", value: "36 months" },
        { label: "Completion", value: "2024" }
      ]
    },
    {
      id: "6",
      name: "Single-storied Villa Projects",
      category: "design",
      subcategory: "build",
      status: "ongoing",
      image: Villa,
      description: "We have undertaken various single-story villa projects, ranging from single-family villas to multi-family homes.",
      client: "Various Clients",
      featured: false,
      stats: [
        { label: "Size", value: "Varied" },
        { label: "Timeframe", value: "8-14 months" },
        { label: "Completion", value: "Ongoing" }
      ]
    }
  ];

  useEffect(() => {
    // Simulate loading data from an API
    setLoading(true);
    
    // Find the project with the matching ID
    const foundProject = allProjects.find(p => p.id === id);
    
    // Find related projects (same category)
    if (foundProject) {
      const related = allProjects
        .filter(p => p.id !== id && (p.category === foundProject.category || p.subcategory === foundProject.category))
        .slice(0, 3);
      setRelatedProjects(related);
    }
    
    // Set the project data after a short delay to simulate API fetch
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 800);
  }, [id]);

  const getStatusColor = (status) => {
    return status === 'completed' 
      ? 'bg-green-500 text-white' 
      : 'bg-blue-500 text-white';
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00A3D9] mb-4"></div>
          <p className="text-gray-600 font-body">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#00A3D9] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 font-heading">Project Not Found</h2>
          <p className="text-gray-600 mb-6 font-body">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects" className="bg-[#00A3D9] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0087b3] transition-all inline-block">
            Back to Projects
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="inline-block mb-4">
                <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold ${
                  getStatusColor(project.status)
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">{project.name}</h1>
              <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto font-body">
                {project.description.split('.')[0] + '.'}
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Back button */}
        <Link 
          to="/projects"
          className="absolute top-6 left-6 z-30 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 text-white transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </motion.div>
      
      {/* Project Quick Info */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-white py-6 md:py-8 border-b border-gray-200 shadow-sm relative z-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {project.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-sm text-gray-500 mb-1 font-body">{stat.label}</div>
                <div className="text-lg font-bold text-gray-900 font-heading">{stat.value}</div>
              </div>
            ))}
            {project.client && (
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1 font-body">Client</div>
                <div className="text-lg font-bold text-gray-900 font-heading">{project.client}</div>
              </div>
            )}
            {project.location && (
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1 font-body">Location</div>
                <div className="text-lg font-bold text-gray-900 font-heading">{project.location}</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 md:mb-12 border-b border-gray-200"
          >
            <div className="flex overflow-x-auto gap-1 md:gap-2 pb-1 no-scrollbar">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === 'overview'
                    ? 'text-[#00A3D9] border-b-2 border-[#00A3D9]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Project Overview
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === 'details'
                    ? 'text-[#00A3D9] border-b-2 border-[#00A3D9]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Project Details
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === 'gallery'
                    ? 'text-[#00A3D9] border-b-2 border-[#00A3D9]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setActiveTab('testimonial')}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === 'testimonial'
                    ? 'text-[#00A3D9] border-b-2 border-[#00A3D9]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Testimonial
              </button>
            </div>
          </motion.div>
          
          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={itemVariants} className="prose max-w-none">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">About the Project</h2>
                  <p className="text-gray-700 leading-relaxed mb-6 font-body">{project.description}</p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Project Timeline</h3>
                    <p className="text-gray-700 font-body">{project.timeline || 'Timeline information not available'}</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Challenge</h3>
                    <p className="text-gray-700 font-body">{project.challenge || 'Challenge information not available'}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Solution</h3>
                    <p className="text-gray-700 font-body">{project.solution || 'Solution information not available'}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
            
            {/* Details Tab */}
            {activeTab === 'details' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Project Specifications</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading">Services Provided</h3>
                      {project.services && project.services.length > 0 ? (
                        <ul className="space-y-2">
                          {project.services.map((service, index) => (
                            <li key={index} className="flex items-start font-body">
                              <span className="text-[#00A3D9] mr-2">✓</span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 font-body">Service details not available</p>
                      )}
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading">Project Stats</h3>
                      <div className="space-y-4">
                        {project.stats.map((stat, index) => (
                          <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                            <span className="text-gray-600 font-body">{stat.label}</span>
                            <span className="font-semibold text-gray-900 font-body">{stat.value}</span>
                          </div>
                        ))}
                        {project.client && (
                          <div className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                            <span className="text-gray-600 font-body">Client</span>
                            <span className="font-semibold text-gray-900 font-body">{project.client}</span>
                          </div>
                        )}
                        {project.location && (
                          <div className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                            <span className="text-gray-600 font-body">Location</span>
                            <span className="font-semibold text-gray-900 font-body">{project.location}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                          <span className="text-gray-600 font-body">Status</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                            {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
            
            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Project Gallery</motion.h2>
                
                {project.gallery && project.gallery.length > 0 ? (
                  <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg shadow-md group h-64">
                        <img src={image} alt={`${project.name} - Image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                            View Larger
                          </button>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div variants={itemVariants} className="text-center py-16 bg-gray-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2 font-heading">No Gallery Images Available</h4>
                    <p className="text-gray-500 font-body">Gallery images for this project will be added soon.</p>
                  </motion.div>
                )}
              </motion.div>
            )}
            
            {/* Testimonial Tab */}
            {activeTab === 'testimonial' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-heading">Client Testimonial</motion.h2>
                
                {project.testimonial ? (
                  <motion.div variants={itemVariants} className="bg-gray-50 p-6 md:p-10 rounded-lg border border-gray-100 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#00A3D9] opacity-10 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391C14.017 10.612 16.612 8.017 19.609 8.017H21v7.391h-2v5.592h-4.983zM3 21v-7.391C3 10.612 5.595 8.017 8.592 8.017H10v7.391H8v5.592H3z" />
                    </svg>
                    <div className="relative z-10">
                      <p className="text-xl md:text-2xl font-light text-gray-700 mb-6 leading-relaxed italic font-body">
                        "{project.testimonial.quote}"
                      </p>
                      <div className="font-semibold text-gray-900 font-body">
                        — {project.testimonial.author}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div variants={itemVariants} className="text-center py-16 bg-gray-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <h4 className="text-xl font-semibold text-gray-700 mb-2 font-heading">No Testimonial Available</h4>
                    <p className="text-gray-500 font-body">Client testimonial for this project will be added upon completion.</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center font-heading">Related Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          getStatusColor(project.status)
                        }`}>
                          {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{project.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 font-body">{project.description}</p>
                      <Link 
                        to={`/projects/${project.id}`}
                        className="text-[#00A3D9] font-medium inline-flex items-center hover:text-[#0087b3] transition-colors"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#00A3D9] text-white py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-heading">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto font-body">
              Contact us today to discuss how we can bring your vision to life with our expert design and construction services.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-[#00A3D9] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SingleProject;