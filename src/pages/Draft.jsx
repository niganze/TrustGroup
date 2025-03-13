
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Users, Target, Clock, Globe, Briefcase, Heart } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('history');
  const [activeIndex, setActiveIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // References for animations
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    },
    {
      question: "What makes Trusty Group different from other investment companies?",
      answer: "Our commitment to trust, community development, and long-term sustainability sets us apart. We focus not just on profit, but on cultivating peace and prosperity among communities through strategic investments that create lasting positive impact."
    },
    {
      question: "How can I collaborate with Trusty Group?",
      answer: "We're always open to meaningful partnerships that align with our vision and values. Whether you're a business owner, community leader, or industry expert, you can reach out through our Contact page to discuss potential collaboration opportunities."
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-r from-[#00A3D9] to-[#0070a0] overflow-hidden">
        <div 
          className="absolute inset-0 bg-black opacity-25"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Trusty+Group+Office')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply"
          }}
        ></div>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="relative">
                Trusty Group
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Established in 2017 with a mission to cultivate peace and prosperity through strategic investments.
            </motion.p>
            
            <motion.div
              className="mt-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#mission" className="inline-block bg-white text-[#00A3D9] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                Discover Our Story
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Dynamic wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,80C480,85,600,107,720,106.7C840,107,960,85,1080,69.3C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Counter Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#00A3D9] mb-2">7+</div>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#00A3D9] mb-2">5+</div>
              <p className="text-gray-600">Subsidiary Companies</p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#00A3D9] mb-2">100+</div>
              <p className="text-gray-600">Team Members</p>
            </motion.div>
            
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#00A3D9] mb-2">20+</div>
              <p className="text-gray-600">Completed Projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Enhanced Design */}
      <section id="mission" ref={missionRef} className="py-24 px-4 container mx-auto relative overflow-hidden">
        <div className="absolute -right-32 top-10 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
        <div className="absolute -left-32 bottom-10 w-96 h-96 rounded-full bg-cyan-100 opacity-30 blur-3xl"></div>
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <motion.span 
            className="text-sm uppercase tracking-wider text-[#00A3D9] font-semibold"
            initial={{ opacity: 0 }}
            animate={isMissionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Purpose
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mission & Vision
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#00A3D9] mx-auto my-6"
            initial={{ width: 0 }}
            animate={isMissionInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={isMissionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The foundational principles that guide everything we do at Trusty Group
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            variants={fadeIn}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To leverage our investment portfolio as a catalyst for cultivating peace and prosperity among communities worldwide. Optimize the use of talent, time, and treasure and establish a niche in the finance industry, and contribute to its scaling.
            </p>
            <div className="w-20 h-1 bg-blue-600"></div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-white to-cyan-50 p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            variants={fadeIn}
          >
            <div className="w-16 h-16 bg-[#00A3D9] rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To be the world's leading catalyst for transformative growth through investment, creating a future where vibrant communities thrive in harmony.
            </p>
            <div className="w-20 h-1 bg-[#00A3D9]"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Tab Section - History, Core Values, etc. */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide">
              <div className="inline-flex bg-white p-1 rounded-full shadow-md">
                <button 
                  className={`py-3 px-6 rounded-full font-medium transition-all duration-300 focus:outline-none ${activeTab === 'history' ? 'bg-[#00A3D9] text-white shadow-md' : 'text-gray-700 hover:text-[#00A3D9]'}`}
                  onClick={() => setActiveTab('history')}
                >
                  Our History
                </button>
                <button 
                  className={`py-3 px-6 rounded-full font-medium transition-all duration-300 focus:outline-none ${activeTab === 'values' ? 'bg-[#00A3D9] text-white shadow-md' : 'text-gray-700 hover:text-[#00A3D9]'}`}
                  onClick={() => setActiveTab('values')}
                >
                  Core Values
                </button>
                <button 
                  className={`py-3 px-6 rounded-full font-medium transition-all duration-300 focus:outline-none ${activeTab === 'subsidiaries' ? 'bg-[#00A3D9] text-white shadow-md' : 'text-gray-700 hover:text-[#00A3D9]'}`}
                  onClick={() => setActiveTab('subsidiaries')}
                >
                  Our Subsidiaries
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                {activeTab === 'history' && (
                  <motion.div
                    key="history"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h3>
                        <div className="space-y-6">
                          <div className="flex">
                            <div className="flex-shrink-0 mr-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-[#00A3D9]" />
                              </div>
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">2017 - Foundation</h4>
                              <p className="text-gray-600">Trusty Group was established with a clear vision to create positive impact through strategic investments.</p>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <div className="flex-shrink-0 mr-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-[#00A3D9]" />
                              </div>
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">2019 - Expansion</h4>
                              <p className="text-gray-600">Launched our first major real estate development project and established key subsidiaries.</p>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <div className="flex-shrink-0 mr-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-[#00A3D9]" />
                              </div>
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">2022 - Growth</h4>
                              <p className="text-gray-600">Extended operations across Rwanda and formed strategic partnerships to accelerate our vision.</p>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <div className="flex-shrink-0 mr-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-[#00A3D9]" />
                              </div>
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">2024 - Present</h4>
                              <p className="text-gray-600">Continuing to expand our portfolio with innovative projects while preparing for international growth.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative h-full min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#00A3D9] rounded-2xl overflow-hidden shadow-xl">
                          <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: "url('https://via.placeholder.com/800x600?text=Trusty+Group+History')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                          }}></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white">Building a Legacy of Trust</h3>
                            <p className="text-white/80 mt-2">Our growth has been built on strong foundations of integrity and community impact.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'values' && (
                  <motion.div
                    key="values"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <motion.div 
                        className="bg-blue-50 p-8 rounded-xl"
                        variants={scaleIn}
                      >
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Trust</h4>
                        <p className="text-gray-600">
                          Building lasting relationships through transparency, integrity, and consistent delivery on our promises to all stakeholders.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-cyan-50 p-8 rounded-xl"
                        variants={scaleIn}
                      >
                        <div className="w-16 h-16 bg-[#00A3D9] rounded-full flex items-center justify-center mb-6">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Community</h4>
                        <p className="text-gray-600">
                          Recognizing our responsibility to contribute positively to the communities where we operate and to prioritize social impact.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-blue-50 p-8 rounded-xl"
                        variants={scaleIn}
                      >
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-gray-800">Excellence</h4>
                        <p className="text-gray-600">
                          Pursuing the highest standards in all our operations and continuously innovating to exceed expectations.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'subsidiaries' && (
                  <motion.div
                    key="subsidiaries"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Subsidiaries</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold text-white">TR</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Trusty Real Estate</h4>
                          <p className="text-gray-600 mb-3">Premium property development and management with a focus on sustainable design and community integration.</p>
                          <a href="#" className="flex items-center text-[#00A3D9] font-medium hover:underline">
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-16 h-16 bg-[#00A3D9] rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold text-white">TC</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Trusty Construction</h4>
                          <p className="text-gray-600 mb-3">Innovative building solutions and project management services for residential and commercial developments.</p>
                          <a href="#" className="flex items-center text-[#00A3D9] font-medium hover:underline">
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold text-white">TM</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Trusty Media</h4>
                          <p className="text-gray-600 mb-3">Creative content production and media services focused on storytelling that inspires positive change.</p>
                          <a href="#" className="flex items-center text-[#00A3D9] font-medium hover:underline">
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-16 h-16 bg-[#00A3D9] rounded-lg flex items-center justify-center">
                            <span className="text-xl font-bold text-white">TT</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Trusty Tech</h4>
                          <p className="text-gray-600 mb-3">Digital solutions and technology services that enhance business operations and community connectivity.</p>
                          <a href="#" className="flex items-center text-[#00A3D9] font-medium hover:underline">
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-[#00A3D9] font-semibold">Questions & Answers</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#00A3D9] mx-auto my-6"></div>
            <p className="text-gray-600">
              Find answers to common questions about Trusty Group and our operations
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <motion.div 
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div 
                  className={`flex justify-between items-center p-5 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-all duration-300 ${activeIndex === index ? 'shadow-lg bg-gray-50' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                  />
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-gray-50 rounded-b-lg">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-[#00A3D9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Partner with Trusty Group?
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join us in our mission to create sustainable growth and positive community impact through strategic investments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="/contact" 
                className="inline-block bg-white text-[#00A3D9] font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Leadership Preview - Simplified Version */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-[#00A3D9] font-semibold">Our Team</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Leadership</h2>
            <div className="w-24 h-1 bg-[#00A3D9] mx-auto my-6"></div>
            <p className="text-gray-600">
              Meet the visionaries behind Trusty Group's success and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-72 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gray-300"
                  style={{
                    backgroundImage: "url('https://via.placeholder.com/400x500?text=CEO')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white/90 text-sm">With over 15 years of experience in investment management and community development projects.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">John Trusty</h3>
                <p className="text-[#00A3D9] font-medium">Founder & CEO</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-72 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gray-300"
                  style={{
                    backgroundImage: "url('https://via.placeholder.com/400x500?text=COO')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white/90 text-sm">Strategic operations expert with a passion for sustainable business practices and organizational excellence.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
                <p className="text-[#00A3D9] font-medium">Chief Operations Officer</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-72 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gray-300"
                  style={{
                    backgroundImage: "url('https://via.placeholder.com/400x500?text=CFO')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white/90 text-sm">Financial strategist with expertise in investment portfolio management and sustainable growth planning.</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Michael Kamali</h3>
                <p className="text-[#00A3D9] font-medium">Chief Financial Officer</p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/team" className="inline-flex items-center text-[#00A3D9] font-medium hover:underline">
              View Full Team <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm uppercase tracking-wider text-[#00A3D9] font-semibold">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">What Our Partners Say</h2>
            <div className="w-24 h-1 bg-[#00A3D9] mx-auto my-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Jean Mukiza</h4>
                  <p className="text-sm text-gray-600">Community Leader</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Trusty Group's investments have transformed our community. Their commitment to sustainable development has created jobs and improved infrastructure while respecting our local culture."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Maria Ndayishimiye</h4>
                  <p className="text-sm text-gray-600">Business Partner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working with Trusty Group has been a game-changer for our business. Their innovative approach and commitment to excellence helped us scale our operations beyond expectations."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Robert Kagame</h4>
                  <p className="text-sm text-gray-600">Investor</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Trusty Group combines financial returns with genuine social impact. Their transparent approach and consistent performance make them a standout investment partner in East Africa."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
