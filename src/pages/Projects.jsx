import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Foundation from '../assets/images/Busanza.jpeg';
import Commercial from '../assets/images/estate.jpeg';
import Rebero from '../assets/images/single.jpeg';
import Building from '../assets/images/Building.jpeg';
import Apartments from '../assets/images/Apartment.jpeg';
import Villa from '../assets/images/Single.jpeg';
import { Link } from 'react-router-dom';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '📋' },
    { id: 'design', name: 'Design', icon: '✏️' },
    { id: 'build', name: 'Build', icon: '🏗️' },
    { id: 'supervision', name: 'Supervision', icon: '👁️' },
    { id: 'ongoing', name: 'Ongoing', icon: '⏳' },
    { id: 'completed', name: 'Completed', icon: '✓' }
  ];
  
  const projects = [
    {
      id: 1,
      name: "Busy Bees Foundation School Extension",
      category: "design",
      status: "ongoing",
      image: Foundation,
      description: "The project's objective is to enhance the school's facilities by constructing a G+2 block equipped with cutting-edge technology to bring the Cambridge program to an international standard. Additionally, a new G+2 block will be built to enhance the national primary program, providing all necessary facilities.",
      client: "Busy Bees Foundation",
      featured: true,
      stats: [
        { label: "Size", value: "3,500 sq m" },
        { label: "Timeframe", value: "18 months" },
        { label: "Completion", value: "2025" }
      ]
    },
    {
      id: 2,
      name: "G+2 Commercial Building",
      category: "design",
      subcategory: "build",
      status: "ongoing",
      image: Commercial,
      description: "The project envisions transforming the plot facing the main arterial road into a mixed-use development. The ground and first floors will be dedicated to commercial services, while the second and third floors will house two-bedroom residential apartments on each level.",
      client: "Commercial Client",
      featured: true,
      stats: [
        { label: "Size", value: "2,800 sq m" },
        { label: "Timeframe", value: "14 months" },
        { label: "Completion", value: "2025" }
      ]
    },
    {
      id: 3,
      name: "G+3 Rebero Apartment",
      category: "design",
      subcategory: "build",
      status: "ongoing",
      image: Rebero,
      description: "The project intends to transform the existing land by demolishing the two-bedroom section of the current landed villa and constructing a G+2 residential apartment building with six dwelling units, each featuring two self-contained bedrooms.",
      client: "Residential Client",
      featured: true,
      stats: [
        { label: "Size", value: "1,500 sq m" },
        { label: "Timeframe", value: "12 months" },
        { label: "Completion", value: "2025" }
      ]
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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

  const featuredProjects = projects.filter(project => project.featured);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Filter projects based on category
    const filtered = activeCategory === 'all' 
      ? projects 
      : projects.filter(project => 
          project.category === activeCategory || 
          project.subcategory === activeCategory || 
          project.status === activeCategory
        );
    
    setVisibleProjects(filtered);
  }, [activeCategory]);

  useEffect(() => {
    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  // Add resize handler to prevent layout issues
  useEffect(() => {
    const handleResize = () => {
      // Force re-render on resize to ensure proper layout
      setVisibleProjects([...visibleProjects]);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleProjects]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const getStatusColor = (status) => {
    return status === 'completed' 
      ? 'bg-green-500 text-white' 
      : 'bg-blue-500 text-white';
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-10 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-500 mb-4 font-heading ">Our <span className="text-[#00A3D9] font-heading">Projects</span></h2>
          <div className="w-16 md:w-24 h-1 bg-[#00A3D9] mx-auto mb-4 md:mb-6"></div>
          <p className="text md:text-lg text-gray-600 max-w-3xl mx-auto leading-normal px-2 font-body">
            Explore our portfolio of innovative construction and real estate projects through 
            Trusty Construction and Trusty Estates. Each project reflects our commitment 
            to excellence, innovation, and client satisfaction.
          </p>
        </motion.div>
        
        {/* Featured Projects Hero Carousel */}
        <div className="mb-16 md:mb-20 relative overflow-hidden rounded-xl shadow-xl">
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
          
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <img 
                  src={featuredProjects[currentSlide].image} 
                  alt={featuredProjects[currentSlide].name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Content */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black to-transparent p-4 md:p-8">
              <div className="max-w-4xl mx-auto text-white">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className={`px-2 py-1 rounded-full text-xs md:text-sm font-bold mb-2 inline-block ${
                    getStatusColor(featuredProjects[currentSlide].status)
                  }`}>
                    {featuredProjects[currentSlide].status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">{featuredProjects[currentSlide].name}</h3>
                  <p className="text-sm md:text-base mb-3 md:mb-4 opacity-90 line-clamp-2 hidden sm:block font-body">{featuredProjects[currentSlide].description}</p>
                  
                  <div className="flex flex-wrap gap-3 md:gap-6 mb-4 hidden sm:flex">
                    {featuredProjects[currentSlide].stats.map((stat, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-xs opacity-75">{stat.label}</span>
                        <span className="text-sm md:text-lg font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
  to="/singleproject"
  className="bg-[#00A3D9] hover:bg-[#0087b3] text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all"
>
  View Details
</Link>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white transition-all"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white transition-all"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-3 right-3 z-30 flex space-x-1">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white scale-110' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Project Categories */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center font-heading">Explore Our <span className="text-[#00A3D9]">Projects</span></h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center mb-8 md:mb-12 gap-2 md:gap-3"
          >
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 md:gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#00A3D9] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
        
        {/* Project Gallery */}
        <div className="relative min-h-[300px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#00A3D9]"></div>
            </div>
          ) : (
            <>
              {visibleProjects.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2 font-heading">No Projects Found</h4>
                  <p className="text-gray-500 font-body">We couldn't find any projects in this category. Please try another filter.</p>
                </div>
              ) : (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                  <AnimatePresence>
                    {visibleProjects.map(project => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 flex-shrink-0"
                      >
                        <div className="relative h-48 md:h-56 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                          <div className="absolute top-2 right-2 flex gap-1">
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-800 text-white font-heading">
                              {project.category === 'design' ? 'Design' : 'Build'}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              getStatusColor(project.status)
                            }`}>
                              {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                            </span>
                          </div>
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                          <Link
      to="/singleproject"
      className="block text-center w-full bg-[#00A3D9] text-white py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all"
    >
      View Details
    </Link>
                          </div>
                        </div>
                        <div className="p-4 md:p-5">
                          <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00A3D9] transition-colors font-heading">{project.name}</h4>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-3 mb-3">
                            {project.stats.map((stat, index) => (
                              <div key={index} className="flex flex-col">
                                <span className="text-xs text-gray-500">{stat.label}</span>
                                <span className="text-xs md:text-sm font-semibold">{stat.value}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                            <span className="text-xs md:text-sm text-gray-500">Client: <span className="font-medium text-gray-700">{project.client}</span></span>
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#00A3D9] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </>
          )}
        </div>
        
        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 mb-16 md:mb-20 bg-gray-900 rounded-xl p-6 md:p-10 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center font-heading">Our Impact in Numbers</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#00A3D9] mb-2">20+</div>
                <div className="text-xs md:text-sm text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#00A3D9] mb-2">150+</div>
                <div className="text-xs md:text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#00A3D9] mb-2">85%</div>
                <div className="text-xs md:text-sm text-gray-300">Repeat Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#00A3D9] mb-2">500+</div>
                <div className="text-xs md:text-sm text-gray-300">Happy Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-3 md:mt-16 mb-0 pb-0 bg-gradient-to-r from-[#00A3D9] to-[#0087b3] rounded-xl p-6 md:p-10 text-center text-white shadow-lg relative overflow-hidden"
>
  <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 font-heading">Have a Project in Mind?</h3>
  <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto text-sm md:text-base font-body">
    Whether you're looking to build, renovate, or invest, our team at Trusty Group is ready to bring your vision to life. Let's create something extraordinary together.
  </p>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
  <a href="/contact" className="no-underline">
    <button className="bg-white text-[#00A3D9] px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition-all shadow-md">
      Schedule a Consultation
    </button>
  </a>
  <a href="/projects" className="no-underline">
    <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-white hover:bg-opacity-10 transition-all">
      View More Projects
    </button>
  </a>
</div>
  
  {/* Decorative elements - contained within parent */}
  <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-white bg-opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-white bg-opacity-5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
</motion.div>
      </div>
    </div>
  );
}

export default Projects;