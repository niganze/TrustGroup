// Footer.jsx
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const subsidiaryVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const comingSoonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  const comingSoonSubsidiaries = [
    "Trusty Pictures",
    "Trusty Technologies",
    "Trusty Fashion",
    "Trusty Trade & Commerce"
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link to="/" className="flex items-center mb-4">
              <motion.img 
                src={Logo} 
                alt="Trusty Group Logo" 
                className="h-8"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />
              <span className="ml-2 text-lg font-bold">Trusty Group</span>
            </Link>
            <p className="mb-4 text-sm text-gray-300">
              Established in 2017 with a mission to use Real Estate Development as an art form to cultivate peace.
            </p>
            <motion.div 
              className="flex space-x-4"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.a 
                href="https://facebook.com/trustygroup" 
                aria-label="Facebook" 
                className="text-white hover:text-[#00A3D9] transition-colors duration-300"
                variants={subsidiaryVariant}
                whileHover={{ scale: 1.2 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/trustygroup" 
                aria-label="Twitter" 
                className="text-white hover:text-[#00A3D9] transition-colors duration-300"
                variants={subsidiaryVariant}
                whileHover={{ scale: 1.2 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/trustygroup" 
                aria-label="LinkedIn" 
                className="text-white hover:text-[#00A3D9] transition-colors duration-300"
                variants={subsidiaryVariant}
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://instagram.com/trustygroup" 
                aria-label="Instagram" 
                className="text-white hover:text-[#00A3D9] transition-colors duration-300"
                variants={subsidiaryVariant}
                whileHover={{ scale: 1.2 }}
              >
                <Instagram size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-base font-bold mb-4 text-gray-100">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link to="/" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">Home</Link>
              <Link to="/about" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">About Us</Link>
              <Link to="/services" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">Services</Link>
              <Link to="/projects" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">Projects</Link>
              <Link to="/blog" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">Blog</Link>
              <Link to="/contact" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">Contact</Link>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <h3 className="text-base font-bold mb-3 mt-6 text-gray-100">Our Subsidiaries</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <motion.div variants={subsidiaryVariant}>
                  <Link to="https://construction.trustygroup.co" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">
                    Trusty Construction
                  </Link>
                </motion.div>
                <motion.div variants={subsidiaryVariant}>
                  <Link to="https://estates.trustygroup.co" className="text-sm text-gray-300 hover:text-[#00A3D9] transition duration-300">
                    Trusty Estates
                  </Link>
                </motion.div>
              </div>
              
              <h3 className="text-base font-bold mb-3 mt-4 text-gray-100">Coming Soon</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {comingSoonSubsidiaries.map((subsidiary, index) => (
                  <motion.div 
                    key={index}
                    variants={comingSoonVariant}
                    className="flex items-center"
                  >
                    <Clock size={12} className="mr-1 text-[#00A3D9]" />
                    <motion.span 
                      className="text-sm text-gray-400"
                      whileHover={{ color: "#00A3D9" }}
                    >
                      {subsidiary}
                    </motion.span>
                    <motion.span
                      className="relative ml-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        delay: index * 0.2 
                      }}
                    >
                      <span className="absolute top-0 h-1 w-1 rounded-full bg-[#00A3D9]"></span>
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-base font-bold mb-4 text-gray-100">Contact Us</h3>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.li className="flex items-start" variants={subsidiaryVariant}>
                <MapPin size={16} className="mt-1 mr-2 text-[#00A3D9]" />
                <span className="text-sm text-gray-300">KN 08 AVE Muhima Rd. SHEMA HOUSE, Second Floor</span>
              </motion.li>
              <motion.li className="flex items-center" variants={subsidiaryVariant}>
                <Phone size={16} className="mr-2 text-[#00A3D9]" />
                <span className="text-sm text-gray-300">+250 782 009 576</span>
              </motion.li>
              <motion.li className="flex items-center" variants={subsidiaryVariant}>
                <Mail size={16} className="mr-2 text-[#00A3D9]" />
                <span className="text-sm text-gray-300">construction@trustygroup.co</span>
              </motion.li>
              <motion.li className="flex items-center" variants={subsidiaryVariant}>
                <Mail size={16} className="mr-2 text-[#00A3D9]" />
                <span className="text-sm text-gray-300">estates@trustygroup.co</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Trusty Group Ltd. All rights reserved.</p>
            <motion.p 
              className="text-xs text-[#00A3D9] md:ml-2 mt-1 md:mt-0"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Designed in The House of Kemmy
            </motion.p>
          </div>
          <div className="mt-3 md:mt-0">
            <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-[#00A3D9] mr-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-xs text-gray-400 hover:text-[#00A3D9]">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;