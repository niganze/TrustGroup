import React, { useState } from 'react';
import { Trash2, Plus, Search } from 'lucide-react';

function Subsidiaries() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [foundedYear, setFoundedYear] = useState('');
  
  const [subsidiaries, setSubsidiaries] = useState([
    { id: 1, name: 'TechSolutions Inc.', location: 'San Francisco, CA', industry: 'Software Development', foundedYear: 2015 },
    { id: 2, name: 'Global Logistics Ltd.', location: 'Singapore', industry: 'Transportation', foundedYear: 2010 },
    { id: 3, name: 'Green Energy Systems', location: 'Berlin, Germany', industry: 'Renewable Energy', foundedYear: 2018 },
    { id: 4, name: 'HealthTech Innovations', location: 'Boston, MA', industry: 'Healthcare', foundedYear: 2017 },
    { id: 5, name: 'Financial Services Group', location: 'London, UK', industry: 'Finance', foundedYear: 2008 },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this subsidiary?')) {
      setSubsidiaries(subsidiaries.filter(subsidiary => subsidiary.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubsidiary = {
      id: subsidiaries.length > 0 ? Math.max(...subsidiaries.map(s => s.id)) + 1 : 1,
      name,
      location,
      industry,
      foundedYear: parseInt(foundedYear)
    };
    setSubsidiaries([...subsidiaries, newSubsidiary]);
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setName('');
    setLocation('');
    setIndustry('');
    setFoundedYear('');
  };

  const filteredSubsidiaries = subsidiaries.filter(subsidiary => 
    subsidiary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subsidiary.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subsidiary.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800 font-heading">Subsidiaries</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search subsidiaries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[#00A3D9] hover:bg-[#00A3D9] text-white px-4 py-2 rounded-lg shadow transition-colors duration-200"
          >
            <Plus size={18} />
            <span>Add Subsidiary</span>
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                  Industry
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Founded
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubsidiaries.length > 0 ? (
                filteredSubsidiaries.map((subsidiary) => (
                  <tr key={subsidiary.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{subsidiary.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <div className="text-sm text-gray-500">{subsidiary.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-[#00A3D9]">
                        {subsidiary.industry}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                      {subsidiary.foundedYear}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDelete(subsidiary.id)}
                        className="text-red-600 hover:text-red-900 transition-colors duration-200"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No subsidiaries found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Subsidiary Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h2 className="text-xl font-bold text-gray-800">Add New Subsidiary</h2>
              <button 
                onClick={() => {
                  resetForm();
                  setIsModalOpen(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                  Company Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="City, Country"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="industry">
                  Industry
                </label>
                <input
                  id="industry"
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="foundedYear">
                  Founded Year
                </label>
                <input
                  id="foundedYear"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={foundedYear}
                  onChange={(e) => setFoundedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#00A3D9] text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Add Subsidiary
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Subsidiaries;