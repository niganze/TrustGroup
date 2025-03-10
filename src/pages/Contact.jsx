import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const Contact = () => {

    
    const [email, setEmail] = useState('');
    
 const [isHovered, setIsHovered] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  // FAQ data
  const faqData = [
    {
      question: "What are Trusty Group's main subsidiaries?",
      answer: "Trusty Group has several subsidiaries including Trusty Estates and Trusty Construction, as well as Trusty Technologies, Trusty Pictures, Trusty Fashion, and Trusty Trade & Commerce."
    },
    {
      question: "What services does Trusty Construction offer?",
      answer: "Trusty Construction offers comprehensive services including design, construction execution, and project management. You can find more details on our construction services at construction.trustygroup.co."
    },
    {
      question: "How can I view Trusty Group's projects?",
      answer: "You can view our featured projects in the Projects Gallery on our website, where they are sorted by categories including Construction, Design, and Execution."
    },
    {
      question: "Where are Trusty Group's offices located?",
      answer: "Our headquarters is located at 123 Kigali Business Center, KG 11 Ave, Kigali, Rwanda. We also have a Technology Hub at 456 Kigali Innovation Park, Nyarutarama Road, Kigali, Rwanda."
    },
    {
      question: "How can I apply for a job at Trusty Group?",
      answer: "You can view our current job openings and apply through our Careers page. Visit trustygroup.co/careers to see available positions across all our subsidiaries."
    },
    {
      question: "Does Trusty Group have a blog?",
      answer: "Yes, we regularly publish articles, industry insights, and resources on our blog. Visit the Blog page to read our latest news and insights in the construction, real estate, and other sectors."
    }
  ];

  // Subsidiary data
  const subsidiaryData = [
    {
        name: "Trusty Construction",
        phone: "+250 782 345 678",
        email: "construction@trustygroup.com",
        icon: "🏗️"
      },
      {
        name: "Trusty Estates",
        phone: "+250 783 456 789",
        email: "estates@trustygroup.com",
        icon: "🏢"
      },
      {
        name: "Trusty Pictures",
        phone: "+250 784 567 890",
        email: "pictures@trustygroup.com",
        icon: "🎬"
      },
      {
        name: "Trusty Technologies",
        phone: "+250 785 678 901",
        email: "tech@trustygroup.com",
        icon: "💻"
      },
      {
        name: "Trusty Fashion",
        phone: "+250 786 789 012",
        email: "fashion@trustygroup.com",
        icon: "👕"
      },
      {
        name: "Trusty Trade & Commerce",
        phone: "+250 787 890 123",
        email: "trade@trustygroup.com",
        icon: "🛒"
      }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const itemsPerPage = 3;
  const pageCount = Math.ceil(subsidiaryData.length / itemsPerPage);
  
  const handlePrevious = () => {
    if (currentPage > 0) {
      setSlideDirection('left');
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if (currentPage < pageCount - 1) {
      setSlideDirection('right');
      setCurrentPage(currentPage + 1);
    }
  };
  
  // Get current items
  const currentItems = subsidiaryData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Thank you! Your message has been sent successfully. Our team will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: ''
      });
    }, 1500);
  };

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMap = () => {
    mapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  
  return (
    <div className="bg-white">
      {/* Hero Section with Floating Cards */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-500 opacity-20 rounded-full"></div>
          <div className="absolute right-1/3 bottom-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full"></div>
          <div className="absolute left-1/4 top-1/4 w-48 h-48 bg-blue-300 opacity-15 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Have questions or want to learn more about Trusty Group? Our team is here to help.
          </motion.p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <motion.button 
              onClick={scrollToForm}
              className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send a Message
            </motion.button>
            <motion.button 
              onClick={scrollToMap}
              className="bg-transparent text-white border-2 border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-800 transition flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find Our Offices
            </motion.button>
          </div>
        </div>
        
        {/* Floating contact method cards */}
        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto relative -mb-24">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-800 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm</p>
              <a href="tel:+250781234567" className="text-blue-600 font-medium hover:underline flex items-center">
                +250 781 234 567
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-800 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll respond as soon as possible</p>
              <a href="mailto:info@trustygroup.com" className="text-blue-600 font-medium hover:underline flex items-center">
                info@trustygroup.com
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-800 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our customer support</p>
              <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition flex items-center">
                Start Chat
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs for Contact Form and Our Locations */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex p-1 bg-gray-100 rounded-full">
                <button 
                  onClick={() => {scrollToForm(); setActiveAccordion(null);}}
                  className={`py-2 px-6 rounded-full font-medium transition ${activeAccordion !== 1 ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700'}`}
                >
                  Send Message
                </button>
                <button 
                  onClick={() => {scrollToMap(); setActiveAccordion(1);}}
                  className={`py-2 px-6 rounded-full font-medium transition ${activeAccordion === 1 ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700'}`}
                >
                  Our Locations
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`transition-all duration-500 ${activeAccordion === 1 ? 'hidden' : 'block'}`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form and our team will get back to you as soon as possible. We're here to help with any questions you might have.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-medium text-blue-800 mb-2">Get a quick response</h3>
                    <p className="text-sm text-gray-600">
                      Our team typically responds within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
                
                {formStatus.isSuccess && (
                  <motion.div 
                    className="mb-6 p-4 bg-green-50 border border-green-100 text-green-800 rounded-lg flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {formStatus.message}
                  </motion.div>
                )}
                
                {formStatus.isError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-800 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
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
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department*
                      </label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                        required
                      >
                        <option value="">Select a department</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales</option>
                        <option value="support">Customer Support</option>
                        <option value="hr">Human Resources</option>
                        <option value="media">Media & Press</option>
                        <option value="partnerships">Business Partnerships</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                      required
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
                      I agree to the Trusty Group's <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to having my data processed.
                    </label>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="small-width-button bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition flex justify-center items-center"
                      disabled={formStatus.isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {formStatus.isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Map and Address */}
            <div 
              ref={mapRef}
              className={`transition-all duration-500 ${activeAccordion !== 1 ? 'hidden' : 'block'}`}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Visit Our Offices</h2>
                  <p className="text-gray-600 mb-8">
                    We'd love to meet you in person at one of our office locations.
                  </p>
                </div>
                
                {/* Interactive Map */}
                <div className="bg-gray-200 h-64 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-600/10">
                  
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
                  
                  </div>
                  <p className="text-gray-600 relative z-10">Interactive Map Would Be Here</p>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      className="bg-blue-300 p-6 rounded-xl border border-gray-500 shadow-sm"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">Headquarters</h3>
                          <p className="text-gray-700 mb-4">
                            123 Kigali Business Center<br/>
                            KG 11 Ave, Kigali<br/>
                            Rwanda
                          </p>
                          <div className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">Technology Hub</h3>
                          <p className="text-gray-700 mb-4">
                            456 Kigali Innovation Park<br/>
                            Nyarutarama Road, Kigali<br/>
                            Rwanda
                          </p>
                          <div className="flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subsidiary Contact Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Contact Our Subsidiaries</h2>
        <p className="text-gray-600">Reach out directly to any of our subsidiary companies for specialized assistance.</p>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${slideDirection === 'left' ? '2%' : slideDirection === 'right' ? '-2%' : '0'})`,
            opacity: 0.9
          }}
        >
          <div className="flex flex-row gap-4 justify-center">
            {currentItems.map((subsidiary, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-shrink-0">
                    {subsidiary.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{subsidiary.name}</h3>
                </div>
                <div className="pl-0 space-y-1">
                  <p className="text-gray-700">{subsidiary.phone}</p>
                  <p className="text-blue-600">{subsidiary.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <button 
          onClick={handlePrevious} 
          disabled={currentPage === 0}
          className={`p-2 rounded-lg flex items-center ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Previous</span>
        </button>
        
        <div className="flex space-x-1">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSlideDirection(index > currentPage ? 'right' : 'left');
                setCurrentPage(index);
              }}
              className={`w-2 h-2 rounded-full ${
                currentPage === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext} 
          disabled={currentPage === pageCount - 1}
          className={`p-2 rounded-lg flex items-center ${currentPage === pageCount - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
        >
          <span className="mr-1">Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to the most common questions about Trusty Group.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-gray-500 transition-transform ${activeFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all ${activeFaq === index ? 'max-h-40 pb-4' : 'max-h-0'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-16 bg-blue-700 text-white overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Subscribe to Our Newsletter
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-70" style={{
              transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
              transition: "transform 0.5s ease",
              transformOrigin: "left"
            }}></div>
          </h2>
          
          <p className="text-blue-100 mb-8">
            Get the latest updates, news, and special offers from Trusty Group.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow p-3 rounded-lg focus:ring-2 focus:ring-white text-gray-800 border-2 border-transparent focus:border-blue-300 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="relative overflow-hidden bg-white text-blue-700 font-medium py-3 px-6 rounded-lg transition-all duration-300"
              style={{
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isHovered ? "0 4px 12px rgba(0,0,0,0.15)" : "0 0 0 rgba(0,0,0,0)"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                if (email) {
                  alert(`Thank you for subscribing with: ${email}`);
                  setEmail('');
                }
              }}
            >
              <span className="relative z-10">Subscribe</span>
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
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
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
    </div>

      
    </div>
  );
};

export default Contact;