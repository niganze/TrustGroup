// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import SingleProject from './pages/SingleProject';
import DashboardLayout from './admin/DashboardLayout';
import AdminDashboardHome from './admin/AdminDashboardHome';
import Project from './admin/Project';
import Blog from './admin/Blog';
import Team from './admin/Team';
import Subsidiaries from './admin/Subsidiaries';
import Messages from './admin/Messages';
import Hero_section from './admin/Hero_section';

import Reports from './admin/Reports';
import  Setting  from './admin/Setting';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with main layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/singleproject" element={<SingleProject />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Route>
        
        {/* Protected dashboard routes with dashboard layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<AdminDashboardHome />} />
          <Route path='projects' element={<Project />} />
          <Route path='blog' element={<Blog/>} />
          <Route path='team' element={<Team />} />
          <Route path='messages' element={<Messages />} />
          <Route path='subsidiaries' element={<Subsidiaries/>} />
          <Route path='hero' element={<Hero_section />} />
          <Route path='reports' element={<Reports />} />
          <Route path='settings' element={<Setting />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;