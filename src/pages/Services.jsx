import React, { useState } from 'react';
import Trusty from '../assets/images/construction.jpg';
import Estates from '../assets/images/estate.jpeg';
function Services() {
  const [activeTab, setActiveTab] = useState('group');

  const subsidiaries = [
    {
      id: 'group',
      name: 'Trusty Group',
      logo: Trusty,
      description: 'Using Real Estate Development as an art form to cultivate peace among citizens of planet Earth.',
      services: [
        'Real Estate Development',
        'Investment Portfolio Management',
        'Community Development',
        'Sustainable Growth Solutions'
      ]
    },
    {
      id: 'estates',
      name: 'Trusty Estates',
      logo: Estates,
      description: 'Focused on real estate development and investment opportunities that maximize the use of talent, time, and treasure.',
      services: [
        'Real Estate Study Proposal',
        'Consultancy',
        'Real Estate Investment',
        'Investment Guidance'
      ],
      details: [
        {
          title: 'Real Estate Study Proposal',
          description: 'Detailed insights and assessments for real estate investors, developers, and stakeholders.',
          items: ['Feasibility Studies', 'Market Trends Analysis', 'Financial Modeling and Projections']
        },
        {
          title: 'Consultancy',
          description: 'Expert guidance for every step of a real estate project from concept to completion.',
          items: ['Strategic Planning and Development', 'Regulatory Compliance and Due Diligence', 'Sustainability Consulting']
        },
        {
          title: 'Real Estate Investment',
          description: 'Diverse investment opportunities in the real estate market.',
          items: ['Own Rentals', 'Fix/Flip Estates', 'Wholesale Estates']
        },
        {
          title: 'Investment Guidance',
          description: 'Strategic investment advice tailored to investor needs.',
          items: ['Portfolio Diversification Strategies', 'Risk Management and Mitigation', 'Access to Exclusive Opportunities']
        }
      ]
    },
    {
      id: 'construction',
      name: 'Trusty Construction',
      logo: '/api/placehold',
      description: 'Specializing in innovative construction projects that combine efficiency, quality, and long-term sustainability.',
      services: [
        'Architectural, Structural, and Interior Design',
        'Supervision of Construction Projects',
        'Execution of Construction Projects',
        'Construction Permit Application',
        'Material Supply'
      ],
      details: [
        {
          title: 'Architectural, Structural, and Interior Design',
          description: 'Crafting layouts, ensuring structural integrity, and designing interior aesthetics of buildings.',
          items: ['Blueprint Design', 'Structural Stability Assessment', 'Interior Space Planning']
        },
        {
          title: 'Supervision of Construction Projects',
          description: 'Overseeing construction projects with precision and expertise.',
          items: ['Timeline Management', 'Contractor Coordination', 'Quality Standards Enforcement']
        },
        {
          title: 'Execution of Construction Projects',
          description: 'Carrying out construction works on behalf of clients with dedication to excellence.',
          items: ['Budget Planning', 'Deadline Adherence', 'Complete Project Handover']
        },
        {
          title: 'Construction Permit Application',
          description: 'Navigating the process of obtaining necessary construction permits.',
          items: ['Paperwork Management', 'Building Code Compliance', 'Regulatory Liaison']
        },
        {
          title: 'Material Supply',
          description: 'Sourcing and delivering essential construction materials.',
          items: ['Cement, Steel, and Brick Sourcing', 'Quality Material Selection', 'Timely Delivery']
        }
      ]
    },
    {
      id: 'pictures',
      name: 'Trusty Pictures',
      logo: '/api/placeholder/80/80',
      description: 'A creative hub for photography, film, and videography services, crafting stories that connect people and inspire communities.',
      services: [
        'Photography Services',
        'Videography Services',
        'Post-Production Services',
        'Media Consultancy'
      ],
      details: [
        {
          title: 'Photography Services',
          description: 'Professional photography tailored to diverse client needs.',
          items: ['Event Photography', 'Portrait Photography', 'Commercial Photography', 'Real Estate Photography']
        },
        {
          title: 'Videography Services',
          description: 'High-quality video production for various purposes.',
          items: ['Event Videography', 'Promotional Videos', 'Documentaries and Short Films', 'Aerial Videography']
        },
        {
          title: 'Post-Production Services',
          description: 'Professional editing and enhancement of visual content.',
          items: ['Editing and Color Grading', 'Motion Graphics and Animation', 'Sound Design and Mixing']
        },
        {
          title: 'Media Consultancy',
          description: 'Strategic guidance for building media presence.',
          items: ['Content Creation Strategy', 'Brand Media Planning', 'Digital Presence Optimization']
        }
      ]
    },
    {
      id: 'technologies',
      name: 'Trusty Technologies',
      logo: '/api/placeholder/80/80',
      description: 'A venture into technology, exploring Artificial Intelligence, cybersecurity, and software/web development for tech-driven solutions.',
      services: [
        'Artificial Intelligence Solutions',
        'Cybersecurity Services',
        'Software Development',
        'Web Development'
      ]
    },
    {
      id: 'fashion',
      name: 'Trusty Fashion',
      logo: '/api/placeholder/80/80',
      description: 'Creating cultural value through fashion, pioneering the advancement of Africa\'s textile industry.',
      services: [
        'Apparel Design',
        'Textile Innovation',
        'Fashion Brand Development',
        'Global Lifestyle Products'
      ]
    },
    {
      id: 'trade',
      name: 'Trusty Trade & Commerce',
      logo: '/api/placeholder/80/80',
      description: 'Engaging in various trade activities leveraging our extensive global network and expertise.',
      services: [
        'Global Chemical Trading',
        'Steel Trading',
        'Energy Resource Management',
        'Industrial Material Sourcing'
      ]
    }
  ];

  const activeSubsidiary = subsidiaries.find(sub => sub.id === activeTab);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the comprehensive range of services offered through our diverse portfolio of subsidiaries.
          </p>
        </div>

        {/* Subsidiary Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {subsidiaries.map(subsidiary => (
            <button
              key={subsidiary.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === subsidiary.id
                  ? 'bg-[#00A3D9] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(subsidiary.id)}
            >
              {subsidiary.name}
            </button>
          ))}
        </div>

        {/* Active Subsidiary Content */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="bg-white p-2 rounded-full shadow-sm mr-4">
              <img
                src={activeSubsidiary.logo}
                alt={`${activeSubsidiary.name} logo`}
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{activeSubsidiary.name}</h3>
              <p className="text-gray-600">{activeSubsidiary.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Services List */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Services</h4>
              <ul className="space-y-3">
                {activeSubsidiary.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A3D9] flex items-center justify-center text-white text-xs mt-0.5">
                      {index + 1}
                    </span>
                    <span className="ml-3 text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Details */}
            {activeSubsidiary.details ? (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Service Details</h4>
                <div className="space-y-4">
                  {activeSubsidiary.details.map((detail, index) => (
                    <div key={index} className="border-l-4 border-[#00A3D9] pl-4">
                      <h5 className="font-medium text-gray-900">{detail.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">{detail.description}</p>
                      {detail.items && (
                        <ul className="mt-2 ml-4 text-sm text-gray-700 list-disc">
                          {detail.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl text-[#00A3D9] mb-4">🚀</div>
                  <p className="text-gray-600 max-w-xs mx-auto">
                    More detailed information about {activeSubsidiary.name} services coming soon. Contact us to learn more.
                  </p>
                  <button className="mt-4 bg-[#00A3D9] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-[#00A3D9] to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Work With Us?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team is ready to help you achieve your goals. Reach out to learn more about how our services can benefit your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;