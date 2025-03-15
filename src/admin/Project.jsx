import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Calendar, DollarSign, User, Image as ImageIcon, Clock, Building, Tag, ChevronDown, ChevronUp, Eye } from 'lucide-react';

function Project() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "OMICA Residence",
      image: "/api/placeholder/800/500",
      description: "Modern real estate development featuring 30 units in Kimihurura, Gasabo District with commercial spaces and premium amenities.",
      timeline: "Jan 2023 - Dec 2025",
      budget: "2,500,000",
      owner: "Trusty Estates",
      category: "Residential",
      status: "Ongoing",
      gallery: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
    },
    {
      id: 2,
      title: "Busy Bees Foundation School Extension",
      image: "/api/placeholder/800/500",
      description: "School expansion with multiple G+2 blocks for Cambridge and National programs with modern amenities.",
      timeline: "Mar 2023 - Aug 2024",
      budget: "1,800,000",
      owner: "Trusty Construction",
      category: "Educational",
      status: "Ongoing",
      gallery: ["/api/placeholder/800/500"]
    },
    {
      id: 3,
      title: "Gisozi Medical Plaza",
      image: "/api/placeholder/800/500",
      description: "Multi-story medical facility with comprehensive healthcare services and advanced infrastructure.",
      timeline: "Feb 2023 - May 2025",
      budget: "3,200,000",
      owner: "Trusty Construction",
      category: "Medical",
      status: "Planning",
      gallery: ["/api/placeholder/800/500", "/api/placeholder/800/500", "/api/placeholder/800/500"]
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [editingProject, setEditingProject] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    timeline: '',
    budget: '',
    owner: '',
    category: '',
    status: 'Planning',
    gallery: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddGalleryImage = () => {
    setFormData({
      ...formData,
      gallery: [...formData.gallery, '']
    });
  };

  const handleGalleryImageChange = (index, value) => {
    const newGallery = [...formData.gallery];
    newGallery[index] = value;
    setFormData({
      ...formData,
      gallery: newGallery
    });
  };

  const removeGalleryImage = (index) => {
    const newGallery = [...formData.gallery];
    newGallery.splice(index, 1);
    setFormData({
      ...formData,
      gallery: newGallery
    });
  };

  const openModal = (project = null) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        image: project.image,
        description: project.description,
        timeline: project.timeline,
        budget: project.budget,
        owner: project.owner,
        category: project.category,
        status: project.status,
        gallery: [...project.gallery]
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        image: '',
        description: '',
        timeline: '',
        budget: '',
        owner: '',
        category: '',
        status: 'Planning',
        gallery: []
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => 
        p.id === editingProject.id ? {...formData, id: p.id} : p
      ));
    } else {
      // Add new project
      const newProject = {
        ...formData,
        id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1
      };
      setProjects([...projects, newProject]);
    }
    
    closeModal();
  };

  const deleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
    }
  };

  const toggleRowExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filterCategories = ['All', 'Residential', 'Commercial', 'Educational', 'Medical', 'Mixed-Use'];
  const statusOptions = ['Planning', 'Ongoing', 'Completed', 'On Hold'];
  const ownerOptions = ['Trusty Estates', 'Trusty Construction', 'Trusty Pictures', 'Trusty Group'];
  const categoryOptions = ['Residential', 'Commercial', 'Educational', 'Medical', 'Mixed-Use', 'Industrial', 'Hospitality'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Apply sorting
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 font-heading">Project Management</h1>
        <button 
          onClick={() => openModal()} 
          className="flex items-center px-4 py-2 bg-[#00A3D9] text-white rounded-lg hover:bg-[#00A3D9] transition-colors"
        >
          <Plus size={18} className="mr-2" /> Add New Project
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-64">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filterCategories.map(category => (
            <button
              key={category}
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                activeFilter === category 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button 
                  className="flex items-center" 
                  onClick={() => requestSort('title')}
                >
                  Project
                  {sortConfig.key === 'title' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp size={14} className="ml-1" /> : 
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                <button 
                  className="flex items-center" 
                  onClick={() => requestSort('category')}
                >
                  Category
                  {sortConfig.key === 'category' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp size={14} className="ml-1" /> : 
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                <button 
                  className="flex items-center" 
                  onClick={() => requestSort('status')}
                >
                  Status
                  {sortConfig.key === 'status' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp size={14} className="ml-1" /> : 
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                <button 
                  className="flex items-center" 
                  onClick={() => requestSort('budget')}
                >
                  Budget
                  {sortConfig.key === 'budget' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp size={14} className="ml-1" /> : 
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                <button 
                  className="flex items-center" 
                  onClick={() => requestSort('owner')}
                >
                  Owner
                  {sortConfig.key === 'owner' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp size={14} className="ml-1" /> : 
                    <ChevronDown size={14} className="ml-1" />
                  )}
                </button>
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedProjects.map((project) => (
              <React.Fragment key={project.id}>
                <tr className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4" onClick={() => toggleRowExpand(project.id)}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden bg-gray-100">
                        <img className="h-10 w-10 object-cover" src={project.image} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{project.title}</div>
                        <div className="text-sm text-gray-500 md:hidden">{project.category}</div>
                        <div className="text-sm text-gray-500 md:hidden">
                          <span className={`inline-flex px-2 text-xs font-semibold rounded-full ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                            project.status === 'On Hold' ? 'bg-amber-100 text-amber-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell" onClick={() => toggleRowExpand(project.id)}>
                    <div className="text-sm text-gray-900">{project.category}</div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell" onClick={() => toggleRowExpand(project.id)}>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'On Hold' ? 'bg-amber-100 text-amber-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell" onClick={() => toggleRowExpand(project.id)}>
                    <div className="text-sm text-gray-900">${project.budget}</div>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell" onClick={() => toggleRowExpand(project.id)}>
                    <div className="text-sm text-gray-900">{project.owner}</div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button 
                        onClick={() => toggleRowExpand(project.id)} 
                        className="p-1 text-gray-500 hover:text-gray-700"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => openModal(project)} 
                        className="p-1 text-blue-500 hover:text-blue-700"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => deleteProject(project.id)} 
                        className="p-1 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedRow === project.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="6" className="px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                          <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-xs font-medium text-gray-500 uppercase">Timeline</h5>
                              <p className="text-sm flex items-center mt-1">
                                <Clock size={16} className="mr-1 text-gray-400" /> {project.timeline}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-xs font-medium text-gray-500 uppercase">Budget</h5>
                              <p className="text-sm flex items-center mt-1">
                                <DollarSign size={16} className="mr-1 text-gray-400" /> ${project.budget}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-xs font-medium text-gray-500 uppercase">Owner</h5>
                              <p className="text-sm flex items-center mt-1">
                                <Building size={16} className="mr-1 text-gray-400" /> {project.owner}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-xs font-medium text-gray-500 uppercase">Category</h5>
                              <p className="text-sm flex items-center mt-1">
                                <Tag size={16} className="mr-1 text-gray-400" /> {project.category}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Gallery ({project.gallery.length})</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.gallery.map((img, index) => (
                              <div key={index} className="h-24 bg-gray-200 rounded overflow-hidden">
                                <img 
                                  src={img} 
                                  alt={`Gallery ${index + 1}`} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            ))}
                            {project.gallery.length === 0 && (
                              <div className="col-span-2 p-4 text-center text-sm text-gray-500">
                                No gallery images for this project.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            {sortedProjects.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  No projects found. Try adjusting your search or filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Featured Image URL *
                    </label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="URL or path to image"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Timeline *
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      placeholder="e.g. Jan 2023 - Dec 2025"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget *
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="e.g. 2,500,000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Owner *
                    </label>
                    <select
                      name="owner"
                      value={formData.owner}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Owner</option>
                      {ownerOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Category</option>
                      {categoryOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      {statusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Gallery Images */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Gallery Images
                    </label>
                    <button 
                      type="button"
                      onClick={handleAddGalleryImage}
                      className="flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 text-sm"
                    >
                      <Plus size={14} className="mr-1" /> Add Image
                    </button>
                  </div>
                  
                  {formData.gallery.length === 0 && (
                    <p className="text-sm text-gray-500 mb-2">No gallery images yet.</p>
                  )}
                  
                  {formData.gallery.map((image, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={image}
                        onChange={(e) => handleGalleryImageChange(index, e.target.value)}
                        placeholder="Image URL"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="ml-2 p-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#00A3D9] text-white rounded-lg hover:bg-[#00A3D9]"
                  >
                    {editingProject ? 'Update Project' : 'Add Project'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;