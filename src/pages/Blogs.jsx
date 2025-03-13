import React, { useState } from 'react';
import profile from '../assets/images/Byiringiro.jpeg'; 
import Future from '../assets/images/Building Communities.jpeg';
import Consider from '../assets/images/Urban Spaces.jpeg';
import Construction from '../assets/images/Project Management.jpeg';
import Developments from '../assets/images/Busanza.jpeg';
import Building from '../assets/images/Building.jpeg';
import Optimizing from '../assets/images/Trusty Construction.jpeg';
import Estate from '../assets/images/Estate.jpeg';
import Trusty from '../assets/images/construction.jpg';


function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'news', name: 'Latest News' },
    { id: 'insights', name: 'Insights & Articles' },
    { id: 'tips', name: 'Tips & Resources' },
    { id: 'construction', name: 'Construction' },
    { id: 'realestate', name: 'Real Estate' }
  ];

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Construction in East Africa",
      excerpt: "Exploring innovative building techniques and materials that are shaping the future of sustainable construction across East Africa.",
      category: "insights",
      tags: ["construction", "sustainability", "innovation"],
      author: "Frederic Byiringiro",
      authorRole: "CEO & Chief Product Architect",
      authorImage: profile,
      publishDate: "February 15, 2025",
      readTime: "8 min read",
      image: Future,
      featured: true
    },
    {
      id: 2,
      title: "5 Key Factors to Consider Before Investing in Real Estate",
      excerpt: "A comprehensive guide to the most important factors that every investor should consider before venturing into the real estate market.",
      category: "tips",
      tags: ["realestate", "investment", "guide"],
      author: "Providence Mukakarama",
      authorRole: "Chief Finance Officer",
      authorImage: profile,
      publishDate: "January 28, 2025",
      readTime: "6 min read",
      image: Consider,
      featured: true
    },
    {
      id: 3,
      title: "Trusty Construction Completes Busanza Apartments Project",
      excerpt: "Celebrating the successful completion of the Busanza Apartments project, featuring 84 modern dwelling units across six building blocks.",
      category: "news",
      tags: ["construction", "projects", "completion"],
      author: "Clemence Nyiransabimana",
      authorRole: "Project Lead Designer",
      authorImage: profile,
      publishDate: "January 10, 2025",
      readTime: "4 min read",
      image: Construction,
      featured: false
    },
    {
      id: 4,
      title: "How Mixed-Use Developments Are Transforming Urban Spaces",
      excerpt: "An examination of how mixed-use developments are creating more vibrant, walkable, and sustainable urban communities.",
      category: "insights",
      tags: ["realestate", "urban", "development"],
      author: "Eric Hitimana",
      authorRole: "Chief of Research Program & COO",
      authorImage: profile,
      publishDate: "December 18, 2024",
      readTime: "7 min read",
      image: Developments,
      featured: false
    },
    {
      id: 5,
      title: "Building Communities: The Social Impact of Trusty Group Projects",
      excerpt: "How our development projects go beyond buildings to create lasting positive impacts on communities and social cohesion.",
      category: "insights",
      tags: ["community", "impact", "development"],
      author: "Marie Claire Uwera",
      authorRole: "Chief Personnel Officer",
      authorImage: profile,
      publishDate: "December 5, 2024",
      readTime: "5 min read",
      image: Building,
      featured: false
    },
    {
      id: 6,
      title: "Optimizing Construction Timelines: Best Practices for Project Management",
      excerpt: "Expert tips on how to keep construction projects on schedule and within budget through effective project management techniques.",
      category: "tips",
      tags: ["construction", "management", "efficiency"],
      author: "William Tuyikunde",
      authorRole: "Project Lead Engineer",
      authorImage: profile,
      publishDate: "November 22, 2024",
      readTime: "6 min read",
      image: Optimizing,
      featured: false
    },
    {
      id: 7,
      title: "Real Estate Valuation: Understanding Property Worth in Changing Markets",
      excerpt: "A comprehensive guide to understanding how properties are valued and what factors influence their worth in dynamic market conditions.",
      category: "tips",
      tags: ["realestate", "valuation", "market"],
      author: "Olivier Ndayisabye",
      authorRole: "Product Senior Valuer",
      authorImage: profile,
      publishDate: "November 10, 2024",
      readTime: "8 min read",
      image: Estate,
      featured: false
    },
    {
      id: 8,
      title: "Trusty Group Announces New G+4 Mixed-Use Building Project",
      excerpt: "Exciting announcement of our latest mixed-use development project featuring commercial spaces, offices, and residential apartments.",
      category: "news",
      tags: ["construction", "projects", "announcement"],
      author: "Emmanuel Iradukunda",
      authorRole: "Sales and Brand Manager",
      authorImage: profile,
      publishDate: "October 28, 2024",
      readTime: "3 min read",
      image: Trusty,
      featured: true
    }
  ];

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory || post.tags.includes(activeCategory);
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        
      <div className="text-center mb-16 bg-[#00A3D9] py-12 px-4 rounded-lg">
  <h2 className="text-4xl font-bold text-white mb-4 font-heading">Trusty Group Blog</h2>
  <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
  <p className="text-white max-w-2xl mx-auto">
    Stay updated with the latest news, industry insights, and expert advice from Trusty Group.
  </p>
</div>
        {/* Featured Posts - improved spacing and shadow effects */}
        {activeCategory === 'all' && searchQuery === '' && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Featured Articles</h3>
              <div className="h-px bg-gray-200 flex-grow ml-6 hidden md:block"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Featured Post - improved shadow and hover effects */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:col-span-2 transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPosts[0]?.image} 
                      alt={featuredPosts[0]?.title} 
                      className="w-full h-72 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                    <div className="uppercase tracking-wide text-sm text-[#00A3D9] font-semibold mb-2">
                      {featuredPosts[0]?.category === 'news' ? 'Latest News' : 
                       featuredPosts[0]?.category === 'insights' ? 'Insights & Articles' : 'Tips & Resources'}
                    </div>
                    <h4 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight font-heading">
                      {featuredPosts[0]?.title}
                    </h4>
                    <p className="text-gray-600 mb-8">
                      {featuredPosts[0]?.excerpt}
                    </p>
                    <div className="flex items-center mb-6">
                      <img 
                        className="h-12 w-12 rounded-full mr-4 border-2 border-gray-100" 
                        src={featuredPosts[0]?.authorImage} 
                        alt={featuredPosts[0]?.author} 
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{featuredPosts[0]?.author}</p>
                        <p className="text-sm text-gray-500">{featuredPosts[0]?.publishDate} · {featuredPosts[0]?.readTime}</p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <button className="px-6 py-2 bg-[#00A3D9] text-white rounded-full font-medium hover:bg-[#0088b3] transition-all duration-300 flex items-center">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Featured Posts - improved cards */}
              {featuredPosts.slice(1, 3).map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                  <div className="relative h-52">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1 rounded-full text-xs font-semibold bg-white text-gray-800 shadow-sm">
                        {post.category === 'news' ? 'Latest News' : 
                         post.category === 'insights' ? 'Insights & Articles' : 'Tips & Resources'}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 font-heading">{post.title}</h4>
                    <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          className="h-10 w-10 rounded-full mr-3 border-2 border-gray-100" 
                          src={post.authorImage} 
                          alt={post.author} 
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.publishDate}</p>
                        </div>
                      </div>
                      <button className="px-4 py-1 text-sm text-[#00A3D9] border border-[#00A3D9] rounded-full hover:bg-[#00A3D9] hover:text-white transition-all">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Search and Filter - improved UI */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00A3D9] focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-[#00A3D9] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid - improved card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <div className="relative h-52">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${post.category === 'news' ? 'bg-blue-100 text-blue-800' : 
                      post.category === 'insights' ? 'bg-purple-100 text-purple-800' : 
                      'bg-green-100 text-green-800'}`}>
                    {post.category === 'news' ? 'News' : 
                     post.category === 'insights' ? 'Insights' : 'Tips'}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-3 right-4">
                  <span className="text-xs text-white bg-gray-900 bg-opacity-50 px-3 py-1 rounded-full">
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#00A3D9] transition-colors font-heading">{post.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <img 
                    className="h-10 w-10 rounded-full mr-3 border-2 border-gray-100" 
                    src={post.authorImage} 
                    alt={post.author} 
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.publishDate}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="px-5 py-2 border border-[#00A3D9] text-[#00A3D9] rounded-full text-sm font-medium hover:bg-[#00A3D9] hover:text-white transition-all duration-300 w-full flex items-center justify-center">
                    Read Full Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results Message - improved styling */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No results found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              We couldn't find any articles matching your search for "{searchQuery}".
            </p>
            <button 
              className="px-6 py-2 bg-[#00A3D9] text-white rounded-full font-medium hover:bg-[#0088b3] transition-all duration-300"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Clear filters and show all posts
            </button>
          </div>
        )}
        
        {/* Newsletter Signup - improved design */}
        <div className="mt-3 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-[#00A3D9] to-blue-600 p-10 text-white text-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-3 font-heading">Subscribe to Our Newsletter</h3>
              <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
              <p className="mb-8 text-blue-50">
                Stay up-to-date with the latest insights, news, and tips from Trusty Group. We'll send you valuable content directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-64 shadow-sm"
                />
                <button className="bg-white text-[#00A3D9] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all shadow-sm">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs mt-6 text-blue-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;