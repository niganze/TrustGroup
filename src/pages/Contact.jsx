import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('message');

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

  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const formRef = useRef(null);
  const mapRef = useRef(null);
 
  // Subsidiary data with enhanced structure
  const subsidiaryData = [
    {
      name: "Trusty Construction",
      phone: "+250 782 345 678",
      email: "construction@trustygroup.com",
      icon: "🏗️",
      color: "bg-amber-50",
      iconBg: "bg-amber-100",
      textColor: "text-amber-800"
    },
    {
      name: "Trusty Estates",
      phone: "+250 783 456 789",
      email: "estates@trustygroup.com",
      icon: "🏢",
      color: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-800"
    },
    {
      name: "Trusty Pictures",
      phone: "+250 784 567 890",
      email: "pictures@trustygroup.com",
      icon: "🎬",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      textColor: "text-purple-800"
    },
    {
      name: "Trusty Technologies",
      phone: "+250 785 678 901",
      email: "tech@trustygroup.com",
      icon: "💻",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-800"
    },
    {
      name: "Trusty Fashion",
      phone: "+250 786 789 012",
      email: "fashion@trustygroup.com",
      icon: "👕",
      color: "bg-pink-50",
      iconBg: "bg-pink-100",
      textColor: "text-pink-800"
    },
    {
      name: "Trusty Trade & Commerce",
      phone: "+250 787 890 123",
      email: "trade@trustygroup.com",
      icon: "🛒",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
      textColor: "text-orange-800"
    }
  ];

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
    setActiveTab('message');
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMap = () => {
    setActiveTab('location');
    mapRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = () => {
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient Mesh Background */}
      <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-indigo-400 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-12 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Have questions or want to learn more about Trusty Group? Our team is here to help.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <motion.button 
              onClick={scrollToForm}
              className="bg-white text-blue-800 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition shadow-xl flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              Send a Message
            </motion.button>
            <motion.button 
              onClick={scrollToMap}
              className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <MapPin className="h-5 w-5 mr-3 group-hover:-translate-y-1 transition-transform duration-300" />
              Find Our Offices
            </motion.button>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 -mt-16 mb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 text-center flex flex-col items-center transform transition-all duration-300 hover:translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4 ring-8 ring-blue-50/50">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Call Us</h3>
            <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+250781234567" className="text-blue-600 font-medium group flex items-center">
              +250 781 234 567
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 text-center flex flex-col items-center transform transition-all duration-300 hover:translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-full bg-indigo-50 w-16 h-16 flex items-center justify-center mb-4 ring-8 ring-indigo-50/50">
              <Mail className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Email Us</h3>
            <p className="text-gray-600 mb-4">We'll respond as soon as possible</p>
            <a href="mailto:info@trustygroup.com" className="text-indigo-600 font-medium group flex items-center">
              info@trustygroup.com
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 text-center flex flex-col items-center transform transition-all duration-300 hover:translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-full bg-purple-50 w-16 h-16 flex items-center justify-center mb-4 ring-8 ring-purple-50/50">
              <MessageSquare className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our customer support</p>
            <button className="bg-purple-50 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-100 transition-all duration-300 group flex items-center">
              Start Chat
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section with Tabs */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs for Contact Form and Our Locations */}
            <div className="mb-10 flex justify-center">
              <div className="inline-flex p-1 bg-white rounded-lg shadow-md">
                <button 
                  onClick={scrollToForm}
                  className={`py-3 px-8 rounded-lg font-medium transition-all duration-300 flex items-center ${activeTab === 'message' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-50'}`}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
                <button 
                  onClick={scrollToMap}
                  className={`py-3 px-8 rounded-lg font-medium transition-all duration-300 flex items-center ${activeTab === 'location' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-50'}`}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Our Locations
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`transition-all duration-500 ${activeTab === 'location' ? 'hidden' : 'block'}`}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center mb-8 border-b border-gray-100 pb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
                    <p className="text-gray-600">
                      Fill out the form and our team will get back to you as soon as possible. We're here to help with any questions you might have.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Get a quick response
                    </h3>
                    <p className="text-sm text-gray-600">
                      Our team typically responds within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
                
                {formStatus.isSuccess && (
                  <motion.div 
                    className="mb-6 p-4 bg-green-50 border border-green-100 text-green-800 rounded-lg flex items-start"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">Message Sent Successfully!</p>
                      <p className="text-sm mt-1">{formStatus.message}</p>
                    </div>
                  </motion.div>
                )}
                
                {formStatus.isError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-800 rounded-lg flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">Error Sending Message</p>
                      <p className="text-sm mt-1">{formStatus.message}</p>
                    </div>
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300"
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300"
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300"
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
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="privacy-policy"
                      name="privacy-policy"
                      type="checkbox"
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                      required
                    />
                    <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                      I agree to the Trusty Group's <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to having my data processed.
                    </label>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition flex justify-center items-center w-full md:w-auto"
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
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
            
            {/* Map and Address */}
            <div 
              ref={mapRef}
              className={`transition-all duration-500 ${activeTab !== 'location' ? 'hidden' : 'block'}`}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Visit Our Offices</h2>
                  <p className="text-gray-600 mb-8">
                    We'd love to meet you in person at one of our office locations.
                  </p>
                </div>
                
                {/* Interactive Map */}
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
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-sm overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      {/* Abstract decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500 opacity-10 rounded-full -ml-10 -mb-10"></div>
                      
                      <div className="flex items-start relative z-10">
                        <div className="bg-white rounded-full p-3 mr-4 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">Headquarters</h3>
                          <address className="not-italic text-gray-600">
                            KN 27 Street 5<br />
                            Kigali, Rwanda<br />
                            <a href="tel:+250781234567" className="text-blue-600 hover:underline mt-2 block">+250 781 234 567</a>
                            <a href="mailto:info@trustygroup.com" className="text-blue-600 hover:underline">info@trustygroup.com</a>
                          </address>
                          <div className="mt-4">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2">Main Office</span>
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Open Mon-Fri</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200 shadow-sm overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      {/* Abstract decorative element */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500 opacity-10 rounded-full -ml-10 -mb-10"></div>
                      
                      <div className="flex items-start relative z-10">
                        <div className="bg-white rounded-full p-3 mr-4 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">Regional Office</h3>
                          <address className="not-italic text-gray-600">
                            123 Business Park<br />
                            Nairobi, Kenya<br />
                            <a href="tel:+254712345678" className="text-purple-600 hover:underline mt-2 block">+254 712 345 678</a>
                            <a href="mailto:nairobi@trustygroup.com" className="text-purple-600 hover:underline">nairobi@trustygroup.com</a>
                          </address>
                          <div className="mt-4">
                            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2">Regional Office</span>
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Open Mon-Fri</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Subsidiaries */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Subsidiaries
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Trusty Group operates through several subsidiaries across different sectors. 
              Need to reach a specific division? Find the right contact details below.
            </motion.p>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            <motion.button 
              onClick={handlePrevious} 
              disabled={currentPage === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg ${currentPage === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:text-blue-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            
            <motion.button 
              onClick={handleNext} 
              disabled={currentPage >= pageCount - 1}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg ${currentPage >= pageCount - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:text-blue-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
            
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                initial={false}
                animate={{ 
                  x: slideDirection === 'right' 
                    ? [-100, 0] 
                    : [100, 0] 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {currentItems.map((subsidiary, index) => (
                    <motion.div 
                      key={subsidiary.name}
                      className={`${subsidiary.color} p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300`}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`${subsidiary.iconBg} rounded-full w-12 h-12 flex items-center justify-center mr-4 text-2xl`}>
                          {subsidiary.icon}
                        </div>
                        <h3 className={`font-bold ${subsidiary.textColor}`}>{subsidiary.name}</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className={`h-4 w-4 ${subsidiary.textColor} mr-3 opacity-70`} />
                          <a href={`tel:${subsidiary.phone}`} className={`${subsidiary.textColor} hover:underline text-sm`}>
                            {subsidiary.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className={`h-4 w-4 ${subsidiary.textColor} mr-3 opacity-70`} />
                          <a href={`mailto:${subsidiary.email}`} className={`${subsidiary.textColor} hover:underline text-sm`}>
                            {subsidiary.email}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Pagination Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSlideDirection(index > currentPage ? 'right' : 'left');
                    setCurrentPage(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === index ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter and FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Newsletter Subscription */}
            <div className="w-full md:w-1/2">
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Abstract shapes in background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-900 opacity-20 rounded-full -mb-10 -ml-10"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Stay Updated with Trusty Group</h3>
                  <p className="mb-6 text-blue-100">
                    Subscribe to our newsletter to receive company news, event invitations, and exclusive offers.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-grow p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 outline-none"
                    />
                    <motion.button
                      onClick={handleNewsletterSubmit}
                      className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg flex items-center justify-center hover:bg-blue-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setIsButtonHovered(true)}
                      onHoverEnd={() => setIsButtonHovered(false)}
                    >
                      <span>Subscribe</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-2 transition-transform duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                  
                  <p className="text-xs mt-4 text-blue-200">
                    By subscribing, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a>. You can unsubscribe at any time.
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* FAQ Section */}
            <div className="w-full md:w-1/2">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-gray-800 mb-2">What are your office hours?</h4>
                    <p className="text-gray-600 text-sm">
                      Our offices are open Monday to Friday from 8:00 AM to 5:00 PM. We are closed on weekends and public holidays.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-gray-800 mb-2">How quickly can I expect a response?</h4>
                    <p className="text-gray-600 text-sm">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Do you have international offices?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we have our headquarters in Kigali, Rwanda and regional offices in Nairobi, Kenya. We also have partner offices in several other countries.
                    </p>
                  </div>
                  
                  
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-700">
                    Can't find what you're looking for? 
                    <button 
                      onClick={scrollToForm}
                      className="text-blue-600 font-medium hover:underline ml-1"
                    >
                      Contact us directly
                    </button>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;