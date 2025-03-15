import React, { useState } from 'react';
import { Trash2, Edit, PlusCircle, Image, Search, X, ArrowUp, ArrowDown } from 'lucide-react';

function Blog() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('publishedAt');
  const [sortDirection, setSortDirection] = useState('desc');
  const [selectedBlog, setSelectedBlog] = useState(null);
  
  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('Technology');
  
  // Sample blog data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Future of Artificial Intelligence',
      description: 'Exploring how AI is transforming industries and what to expect in the coming years.',
      imageUrl: '/api/placeholder/800/500',
      category: 'Technology',
      publishedAt: '2025-02-15',
      status: 'Published',
      views: 1245
    },
    {
      id: 2,
      title: 'Sustainable Business Practices',
      description: 'How companies are adapting their operations to be more environmentally friendly.',
      imageUrl: '/api/placeholder/800/500',
      category: 'Business',
      publishedAt: '2025-02-10',
      status: 'Published',
      views: 873
    },
    {
      id: 3,
      title: 'Remote Work Culture',
      description: 'The impact of remote work on company culture and employee satisfaction.',
      imageUrl: '/api/placeholder/800/500',
      category: 'Workplace',
      publishedAt: '2025-01-28',
      status: 'Published',
      views: 2156
    },
    {
      id: 4,
      title: 'Blockchain Beyond Cryptocurrency',
      description: 'Exploring practical applications of blockchain technology beyond digital currencies.',
      imageUrl: '/api/placeholder/800/500',
      category: 'Technology',
      publishedAt: '2025-01-15',
      status: 'Draft',
      views: 412
    },
    {
      id: 5,
      title: 'Mental Health in the Digital Age',
      description: 'Strategies for maintaining mental wellbeing in an increasingly connected world.',
      imageUrl: '/api/placeholder/800/500',
      category: 'Health',
      publishedAt: '2025-01-05',
      status: 'Published',
      views: 1689
    }
  ]);
  
  const categories = ['Technology', 'Business', 'Workplace', 'Health', 'Finance', 'Lifestyle'];
  
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  const sortedBlogs = [...blogs].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  
  const filteredBlogs = sortedBlogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };
  
  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setTitle(blog.title);
    setDescription(blog.description);
    setImageUrl(blog.imageUrl);
    setCategory(blog.category);
    setIsEditModalOpen(true);
  };
  
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
      title,
      description,
      imageUrl: imageUrl || '/api/placeholder/800/500', // Default placeholder if no image provided
      category,
      publishedAt: new Date().toISOString().split('T')[0],
      status: 'Draft',
      views: 0
    };
    setBlogs([...blogs, newBlog]);
    resetForm();
    setIsAddModalOpen(false);
  };
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedBlogs = blogs.map(blog => {
      if (blog.id === selectedBlog.id) {
        return {
          ...blog,
          title,
          description,
          imageUrl,
          category
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
    resetForm();
    setIsEditModalOpen(false);
  };
  
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setCategory('Technology');
    setSelectedBlog(null);
  };
  
  const getBlogStats = () => {
    const published = blogs.filter(blog => blog.status === 'Published').length;
    const drafts = blogs.filter(blog => blog.status === 'Draft').length;
    const totalViews = blogs.reduce((total, blog) => total + blog.views, 0);
    const categoryCounts = {};
    
    blogs.forEach(blog => {
      categoryCounts[blog.category] = (categoryCounts[blog.category] || 0) + 1;
    });
    
    const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0];
    
    return {
      published,
      drafts,
      totalViews: totalViews.toLocaleString(),
      topCategory: topCategory ? topCategory[0] : 'None'
    };
  };
  
  const stats = getBlogStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 font-heading">Blog Management</h1>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-[#00A3D9] hover:bg-[#00A3D9] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <PlusCircle size={18} />
              <span>Create New Blog</span>
            </button>
          </div>
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-indigo-500">
              <p className="text-sm text-gray-500 font-medium">Total Blogs</p>
              <p className="text-2xl font-bold text-gray-800">{blogs.length}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
              <p className="text-sm text-gray-500 font-medium">Published</p>
              <p className="text-2xl font-bold text-gray-800">{stats.published}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500">
              <p className="text-sm text-gray-500 font-medium">Drafts</p>
              <p className="text-2xl font-bold text-gray-800">{stats.drafts}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
              <p className="text-sm text-gray-500 font-medium">Total Views</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalViews}</p>
            </div>
          </div>
        </header>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <div className="flex gap-3 flex-wrap">
              <select 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e) => setSearchTerm(e.target.value === 'All' ? '' : e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <select 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e) => setSearchTerm(e.target.value === 'All' ? '' : e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Blog Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('title')}>
                    <div className="flex items-center gap-1">
                      Blog
                      {sortColumn === 'title' && (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell cursor-pointer" onClick={() => handleSort('category')}>
                    <div className="flex items-center gap-1">
                      Category
                      {sortColumn === 'category' && (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell cursor-pointer" onClick={() => handleSort('status')}>
                    <div className="flex items-center gap-1">
                      Status
                      {sortColumn === 'status' && (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell cursor-pointer" onClick={() => handleSort('publishedAt')}>
                    <div className="flex items-center gap-1">
                      Date
                      {sortColumn === 'publishedAt' && (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell cursor-pointer" onClick={() => handleSort('views')}>
                    <div className="flex items-center gap-1">
                      Views
                      {sortColumn === 'views' && (sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />)}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden">
                            <img src={blog.imageUrl} alt={blog.title} className="h-10 w-10 object-cover" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{blog.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${blog.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {blog.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-gray-500">{blog.publishedAt}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-gray-500">{blog.views.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => handleEdit(blog)} 
                            className="text-[#00A3D9] hover:text-[#00A3D9]"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(blog.id)} 
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                      No blogs found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Add Blog Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Create New Blog Post</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Enter image URL or leave blank for placeholder"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <Image className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#00A3D9] hover:bg-[#00A3D9] text-white rounded-lg"
                >
                  Create Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Edit Blog Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Edit Blog Post</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleEditSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    id="edit-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    id="edit-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="edit-imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="edit-imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <Image className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="edit-category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    id="edit-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A3D9] focus:border-indigo-500"
                    required
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#00A3D9] hover:bg-[#00A3D9] text-white rounded-lg"
                >
                  Update Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;