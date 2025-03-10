import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/images/background.mp4";
import About from "../assets/images/about.jpg";
import Construction from "../assets/images/construction.jpg";
import Estate from "../assets/images/estate.jpeg";
import {
  SendIcon,

} from "lucide-react";

function Home() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
const [isButtonHovered, setIsButtonHovered] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
          setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
      
        return () => clearInterval(timer);
      }, []);
      

  // Sample project data (to be replaced with actual data)
  const subsidiaries = [
    {
      id: "trust-construction",
      name: "Trust Construction",
      projects: [
        {
          id: 1,
          title: "Luxury Residential Complex",
          category: "Construction",
          image: Construction,
          description: "A modern residential complex with state-of-the-art amenities",
        },
        {
          id: 2,
          title: "Commercial Office Tower",
          category: "Design & Construction",
          image: Construction,
          description: "Award-winning design of a sustainable office tower",
        },
      ]
    },
    {
      id: "trust-estate",
      name: "Trust Estate",
      projects: [
        {
          id: 3,
          title: "Residential Estate",
          category: "Estates",
          image: Estate,
          description: "Exclusive residential estate with premium facilities",
        },
      ]
    },
    {
      id: "Trusty Technologies",
      name: "Trusty Technologies",
      projects: [] // Empty for now as it's upcoming
    },
    {
      id: "Trusty Trade & Commerce",
      name: "Trusty Trade & Commerce",
      projects: [] // Empty for now as it's upcoming
    }, 

    {
      id: "Trusty Fashion",
      name: "Trusty Fashion",
      projects: [] // Empty for now as it's upcoming
    }, 
    {
      id: "Trusty Pictures",
      name: "Trusty Pictures",

      projects: [] // Empty for now as it's upcoming
    }, 

    
  ];

  // Set first subsidiary as default active
  const [activeSubsidiary, setActiveSubsidiary] = useState(subsidiaries[0].id);
  
  // Get current subsidiary's projects
  const currentSubsidiary = subsidiaries.find(sub => sub.id === activeSubsidiary);
  const featuredProjects = currentSubsidiary ? currentSubsidiary.projects : [];
  // Fade in animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10 opacity-70"></div>
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container mx-auto px-4 z-20 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "Agency FB" }}
            >
              TRUSTY GROUP
            </h1>
            <p
              className="text-xl md:text-2xl text-white mb-8"
              style={{ fontFamily: "Monda" }}
            >
              Building Excellence Through Innovation and Integrity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-[#00A3D9] hover:bg-[#0082AE] text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
              >
                Our Services
              </a>
              <a
                href="#about"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-all duration-300"
              >
                About Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a href="#about" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50 mx-8 md:mx-16 lg:mx-24">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2
        className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
        style={{ fontFamily: "Agency FB, sans-serif" }}
      >
        ABOUT US
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#007aaf] to-[#00A3D9] mx-auto mb-6 rounded-full"></div>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative h-[380px] rounded-lg overflow-hidden shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3D9]/40 to-transparent"></div>
        <img
          src={About}
          alt="Trusty Group"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <h3
          className="text-2xl font-bold text-gray-800"
          style={{ fontFamily: "Agency FB, sans-serif" }}
        >
          OUR MISSION & VISION
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "Monda, sans-serif" }}>
          At Trusty Group, we strive to be the leading force in integrated
          design, construction, and real estate development. Our vision is
          to create spaces that inspire and endure, while our mission is
          to deliver exceptional value through innovative solutions and
          unwavering quality.
        </p>
        <h4
          className="text-xl font-bold text-gray-800 pt-2"
          style={{ fontFamily: "Agency FB, sans-serif" }}
        >
          OUR SUBSIDIARIES
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/construction" className="group">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:border-[#00A3D9] transition-all duration-300"
            >
              <h5
                className="text-lg font-bold mb-1 text-black group-hover:text-[#00A3D9]"
                style={{ fontFamily: "Agency FB, sans-serif" }}
              >
                TRUSTY CONSTRUCTION
              </h5>
              <p
                className="text-gray-600 text-xs"
                style={{ fontFamily: "Monda, sans-serif" }}
              >
                Building excellence through precision and innovation
              </p>
            </motion.div>
          </Link>
          <Link to="/estates" className="group">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:border-[#00A3D9] transition-all duration-300"
            >
              <h5
                className="text-lg font-bold mb-1 text-black group-hover:text-[#00A3D9]"
                style={{ fontFamily: "Agency FB, sans-serif" }}
              >
                TRUSTY ESTATES
              </h5>
              <p
                className="text-gray-600 text-xs"
                style={{ fontFamily: "Monda, sans-serif" }}
              >
                Premium real estate solutions tailored to your needs
              </p>
            </motion.div>
          </Link>
        </div>
        <div className="pt-4">
          <Link
            to="/about"
            className="text-[#00A3D9] font-medium flex items-center group text-sm"
          >
            <span className="group-hover:underline">
              Learn more about our company
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 mx-8 md:mx-16 lg:mx-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold mb-4 text-black"
              style={{ fontFamily: "Agency FB" }}
            >
              OUR SERVICES
            </h2>
            <div className="w-20 h-1 bg-[#00A3D9] mx-auto mb-6"></div>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Monda" }}
            >
              Comprehensive solutions across design, construction, and real
              estate development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1 },
                },
              }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#00A3D9]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00A3D9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-3 text-black"
                style={{ fontFamily: "Agency FB" }}
              >
                DESIGN
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: "Monda" }}>
                Innovative architectural and interior design services that blend
                aesthetics with functionality
              </p>
              <Link
                to="/services#design"
                className="text-[#00A3D9] font-semibold flex items-center group"
              >
                <span className="group-hover:underline">Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#00A3D9]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00A3D9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-3 text-black"
                style={{ fontFamily: "Agency FB" }}
              >
                CONSTRUCTION
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: "Monda" }}>
                Expert construction management and execution with a focus on
                quality and sustainability
              </p>
              <Link
                to="/construction"
                className="text-[#00A3D9] font-semibold flex items-center group"
              >
                <span className="group-hover:underline">Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.3 },
                },
              }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#00A3D9]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#00A3D9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-3 text-black"
                style={{ fontFamily: "Agency FB" }}
              >
                ESTATES
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: "Monda" }}>
                Premium real estate development and property management services
              </p>
              <Link
                to="/estates"
                className="text-[#00A3D9] font-semibold flex items-center group"
              >
                <span className="group-hover:underline">Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white mx-8 md:mx-16 lg:mx-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold mb-4 text-black"
            style={{ fontFamily: "Agency FB" }}
          >
            FEATURED PROJECTS
          </h2>
          <div className="w-20 h-1 bg-[#00A3D9] mx-auto mb-6"></div>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Monda" }}
          >
            Showcasing our commitment to excellence and innovation
          </p>
        </motion.div>
        
        {/* Subsidiaries Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {subsidiaries.map((subsidiary) => (
            <button
              key={subsidiary.id}
              onClick={() => setActiveSubsidiary(subsidiary.id)}
              className={`px-6 py-3 text-lg font-bold transition-all duration-300 border-b-2 ${
                activeSubsidiary === subsidiary.id
                  ? "border-[#00A3D9] text-[#00A3D9]"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`}
              style={{ fontFamily: "Agency FB" }}
            >
              {subsidiary.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {featuredProjects.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1 * index },
                  },
                }}
                className="group overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image || `/api/placeholder/400/300`}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#00A3D9] text-white text-sm py-1 px-3 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 text-black"
                    style={{ fontFamily: "Agency FB" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-4"
                    style={{ fontFamily: "Monda" }}
                  >
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-[#00A3D9] font-semibold flex items-center group"
                  >
                    <span className="group-hover:underline">View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg" style={{ fontFamily: "Monda" }}>
              Projects coming soon for {currentSubsidiary?.name}!
            </p>
          </div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-12"
        >
          <Link
            to={`/projects?subsidiary=${activeSubsidiary}`}
            className="bg-[#00A3D9] hover:bg-[#0082AE] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 inline-block"
          >
            View All {currentSubsidiary?.name} Projects
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Testimonials Section */}
<section id="testimonials" className="py-20 bg-gray-50 mx-8 md:mx-16 lg:mx-24">
  <div className="container mx-auto px-4">

    {/* Static Header */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-12"
    >
      <h2
        className="text-4xl font-bold mb-4 text-black"
        style={{ fontFamily: "Agency FB" }}
      >
        TESTIMONIALS
      </h2>
      <div className="w-20 h-1 bg-[#00A3D9] mx-auto mb-6"></div>
      <p
        className="text-gray-600 max-w-2xl mx-auto text-center"
        style={{ fontFamily: "Monda" }}
      >
        What our clients say about working with us
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Testimonial 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
      >
        <svg
          className="h-12 w-12 text-[#00A3D9] mb-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p
          className="text-gray-700 text-lg italic mb-6 text-center"
          style={{ fontFamily: "Monda" }}
        >
          "This company exceeded our expectations! Professional and efficient."
        </p>
        <div className="text-center">
          <h4
            className="text-xl font-bold text-black"
            style={{ fontFamily: "Agency FB" }}
          >
            John Doe
          </h4>
          <p
            className="text-gray-600"
            style={{ fontFamily: "Monda" }}
          >
            CEO, ExampleCorp
          </p>
        </div>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"
      >
        <svg
          className="h-12 w-12 text-[#00A3D9] mb-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p
          className="text-gray-700 text-lg italic mb-6 text-center"
          style={{ fontFamily: "Monda" }}
        >
          "An amazing team to work with! Highly recommended for any project."
        </p>
        <div className="text-center">
          <h4
            className="text-xl font-bold text-black"
            style={{ fontFamily: "Agency FB" }}
          >
            Jane Smith
          </h4>
          <p
            className="text-gray-600"
            style={{ fontFamily: "Monda" }}
          >
            Marketing Manager, ABC Ltd.
          </p>
        </div>
      </motion.div>

      {/* Add more testimonials manually if you want */}
    </div>
  </div>
</section>


      {/* contact  section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-white to-gray-50 mx-8 md:mx-16 lg:mx-24"
      >
        <div className="container mx-auto px-9">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">CONTACT US</h2>
            <div className="w-20 h-1 bg-[#00A3D9] mx-auto mb-6"></div>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Monda" }}
            >
              Get in touch with our team to discuss your next project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                      style={{ fontFamily: "Monda" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3D9] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                      style={{ fontFamily: "Monda" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3D9] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: "Monda" }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3D9] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                    style={{ fontFamily: "Monda" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3D9] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-[#00A3D9] to-[#0082AE] text-white font-bold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Send Message</span>
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <SendIcon size={18} />
                    </motion.div>
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="h-96 mb-6 rounded-lg overflow-hidden">
                <div className="w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=KN%2027%20Street%205,%20Kigali,%20RW+(Trusty%20Group%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Trusty Group Office Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
<section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white">
  {/* Zigzag Pattern - Top */}
  <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
    <div className="w-full h-16 bg-blue-600" style={{
      clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)"
    }}></div>
  </div>
  
  {/* Wave Pattern - Left */}
  <div className="absolute left-0 top-1/4 bottom-1/4 w-16 opacity-30">
    <div className="absolute inset-0 bg-blue-500 animate-pulse" style={{
      clipPath: "path('M0,160 C30,220 30,110 60,160 C90,210 90,100 120,160 C150,220 150,110 180,160 C210,210 210,100 240,160 C270,220 270,110 300,160 L300,320 L0,320 Z')"
    }}></div>
  </div>
  
  {/* Wave Pattern - Right */}
  <div className="absolute right-0 top-1/3 bottom-1/3 w-16 opacity-30">
    <div className="absolute inset-0 bg-blue-500 animate-pulse" style={{
      clipPath: "path('M0,80 C30,140 30,30 60,80 C90,130 90,20 120,80 C150,140 150,30 180,80 C210,130 210,20 240,80 C270,140 270,30 300,80 L300,240 L0,240 Z')",
      animationDelay: "0.5s"
    }}></div>
  </div>
  
  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(10)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-40"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${3 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 2}s`,
          animation: "float 5s infinite ease-in-out"
        }}
      ></div>
    ))}
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 
        className="text-3xl font-bold mb-4 relative inline-block"
        style={{ fontFamily: "Agency FB" }}
      >
        READY TO START YOUR PROJECT?
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-70" style={{
          transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
          transition: "transform 0.5s ease",
          transformOrigin: "left"
        }}></div>
      </h2>
      
      <p className="text-blue-100 mb-8" style={{ fontFamily: "Monda" }}>
        Contact us today to discuss how Trusty Group can bring your vision to life
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="relative overflow-hidden bg-white text-blue-700 font-bold py-3 px-8 rounded-lg transition-all duration-300"
          style={{
            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
            boxShadow: isHovered ? "0 4px 12px rgba(0,0,0,0.15)" : "0 0 0 rgba(0,0,0,0)"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="relative z-10">Get In Touch</span>
          <div 
            className="absolute inset-0 bg-blue-50 opacity-0 transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.3 : 0 }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
            style={{
              transform: isHovered ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.5s ease",
            }}
          ></div>
        </a>
        <Link
          to="/projects"
          className="relative overflow-hidden bg-transparent text-white border-2 border-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
          style={{
            transform: isButtonHovered ? "translateY(-2px)" : "translateY(0)"
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <span className="relative z-10">Explore Our Work</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 bg-white"
            style={{
              transform: isButtonHovered ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.5s ease",
            }}
          ></div>
        </Link>
      </div>
    </motion.div>
  </div>
  
  {/* Zigzag Pattern - Bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
    <div className="w-full h-16 bg-blue-600" style={{
      clipPath: "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)"
    }}></div>
  </div>
  
  {/* Add global styling for animations */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(10deg); }
    }
  `}</style>
</section>
    </div>
  );
}

export default Home;
