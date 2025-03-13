// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubsidiaries, setShowSubsidiaries] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on current route
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubsidiaries = () => {
    setShowSubsidiaries(!showSubsidiaries);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg py-2" : "bg-white/95 shadow-md py-3"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={Logo} 
                alt="Trusty Group Logo" 
                className="h-10 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="ml-2 text-2xl font-bold font-['Agency_FB'] transition-all duration-300 group-hover:tracking-wider">
                <span className="text-[#00A3D9]">TRUST</span>{" "}
                <span className="text-black">GROUP</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with indicator for active link */}
          <div className="hidden md:flex space-x-6 font-['Monda']">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/projects", label: "Projects" },
              { path: "/blog", label: "Blog" },
              { path: "/careers", label: "Careers" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-[#000000] hover:text-[#00A3D9] transition duration-300 py-2 ${
                  activeLink === item.path ? "text-[#00A3D9]" : ""
                }`}
              >
                {item.label}
                {activeLink === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A3D9] transform transition-transform duration-300" />
                )}
              </Link>
            ))}

            {/* Subsidiaries Dropdown with enhanced animation */}
            <div className="relative inline-block">
              <button
                onMouseEnter={() => setShowSubsidiaries(true)}
                onMouseLeave={() => setShowSubsidiaries(false)}
                className="text-[#000000] hover:text-[#00A3D9] transition duration-300 py-2"
              >
                Subsidiaries
                <span className={`ml-1 text-[#00A3D9] transition-transform duration-300 inline-block ${
                  showSubsidiaries ? "rotate-180" : ""
                }`}>▼</span>
              </button>

              {showSubsidiaries && (
                <div
                  className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-10 transform opacity-100 transition-all duration-300"
                  onMouseEnter={() => setShowSubsidiaries(true)}
                  onMouseLeave={() => setShowSubsidiaries(false)}
                >
                  {[
                    { url: "/", label: "Trusty Construction" },
                    { url: "/", label: "Trusty Estates" }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      className="block px-4 py-2 text-[#000000] hover:bg-[#00A3D9] hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button with hover effect */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#00A3D9] text-white px-6 py-2 rounded-md font-['Monda'] hover:shadow-lg hover:bg-[#0095c7] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#000000] focus:outline-none p-2"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke={isOpen ? "#00A3D9" : "currentColor"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with smooth transition */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 font-['Monda'] space-y-1">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/projects", label: "Projects" },
              { path: "/blog", label: "Blog" },
              { path: "/careers", label: "Careers" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-2 transition duration-200 rounded-md ${
                  activeLink === item.path 
                    ? "text-[#00A3D9] bg-blue-50" 
                    : "text-[#000000] hover:text-[#00A3D9] hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Subsidiaries Dropdown */}
            <div className="py-1 px-2">
              <button
                onClick={toggleSubsidiaries}
                className={`flex justify-between items-center w-full text-left rounded-md py-2 transition duration-200 ${
                  showSubsidiaries 
                    ? "text-[#00A3D9] bg-blue-50" 
                    : "text-[#000000] hover:text-[#00A3D9] hover:bg-gray-50"
                }`}
              >
                Subsidiaries
                <span className={`transition-transform duration-300 ${
                  showSubsidiaries ? "rotate-180" : ""
                }`}>{showSubsidiaries ? "▼" : "▼"}</span>
              </button>

              <div className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                showSubsidiaries ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
              }`}>
                {[
                  { url: "https://construction.trustygroup.co", label: "Trusty Construction" },
                  { url: "https://estates.trustygroup.co", label: "Trusty Estates" }
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="block py-2 px-2 text-[#000000] hover:text-[#00A3D9] hover:bg-gray-50 rounded-md transition duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Contact Us Button with pulsing effect */}
            <div className="pt-3 px-2">
              <Link
                to="/contact"
                className="block bg-[#00A3D9] text-white px-4 py-3 rounded-md text-center font-medium hover:bg-[#0095c7] transition-all duration-300 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;