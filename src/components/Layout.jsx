// Layout.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check if there's a hash in the URL (for scrolling to specific sections)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;