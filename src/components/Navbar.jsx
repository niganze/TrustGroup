// Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Trusty Group Logo" className="h-10" />
              <span className="ml-2 text-xl font-bold text-black">Trusty Group</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-black hover:text-[#00A3D9] transition duration-300">Home</Link>
            <Link to="/about" className="text-black hover:text-[#00A3D9] transition duration-300">About Us</Link>
            <Link to="/services" className="text-black hover:text-[#00A3D9] transition duration-300">Services</Link>
            <Link to="/projects" className="text-black hover:text-[#00A3D9] transition duration-300">Projects</Link>
            <Link to="/blog" className="text-black hover:text-[#00A3D9] transition duration-300">Blog</Link>
            <Link to="/careers" className="text-black hover:text-[#00A3D9] transition duration-300">Careers</Link>
            <Link to="/contact" className="text-black hover:text-[#00A3D9] transition duration-300">Contact</Link>
          </div>

          {/* Subsidiary Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="https://construction.trustygroup.co" 
              className="bg-[#00A3D9] text-white px-4 py-2 rounded hover:bg-opacity-80 transition duration-300"
            >
              Trusty Construction
            </Link>
            <Link 
              to="https://estates.trustygroup.co" 
              className="border border-[#00A3D9] text-[#00A3D9] px-4 py-2 rounded hover:bg-[#00A3D9] hover:text-white transition duration-300"
            >
              Trusty Estates
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link to="/" className="block py-2 text-black hover:text-[#00A3D9]">Home</Link>
            <Link to="/about" className="block py-2 text-black hover:text-[#00A3D9]">About Us</Link>
            <Link to="/services" className="block py-2 text-black hover:text-[#00A3D9]">Services</Link>
            <Link to="/projects" className="block py-2 text-black hover:text-[#00A3D9]">Projects</Link>
            <Link to="/blog" className="block py-2 text-black hover:text-[#00A3D9]">Blog</Link>
            <Link to="/careers" className="block py-2 text-black hover:text-[#00A3D9]">Careers</Link>
            <Link to="/contact" className="block py-2 text-black hover:text-[#00A3D9]">Contact</Link>
            <div className="mt-4 space-y-2">
              <Link 
                to="https://construction.trustygroup.co" 
                className="block bg-[#00A3D9] text-white px-4 py-2 rounded text-center"
              >
                Trusty Construction
              </Link>
              <Link 
                to="https://estates.trustygroup.co" 
                className="block border border-[#00A3D9] text-[#00A3D9] px-4 py-2 rounded text-center hover:bg-[#00A3D9] hover:text-white"
              >
                Trusty Estates
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;