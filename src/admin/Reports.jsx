import React, { useState } from 'react';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download, 
  Calendar, 
  Filter, 
  Users, 
  Clock, 
  DollarSign, 
  ShoppingCart, 
  ChevronDown, 
  Search, 
  X
} from 'lucide-react';

function Reports() {
  const [dateRange, setDateRange] = useState('last30days');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for reports
  const salesData = [
    { month: 'Jan', sales: 12500 },
    { month: 'Feb', sales: 18200 },
    { month: 'Mar', sales: 15300 },
    { month: 'Apr', sales: 22000 },
    { month: 'May', sales: 19800 },
    { month: 'Jun', sales: 24600 },
    { month: 'Jul', sales: 26200 },
    { month: 'Aug', sales: 23100 },
    { month: 'Sep', sales: 28400 },
    { month: 'Oct', sales: 31200 },
    { month: 'Nov', sales: 35600 },
    { month: 'Dec', sales: 42000 }
  ];
  
  const productPerformance = [
    { name: 'Premium Plan', sales: 28450, percentage: 35 },
    { name: 'Basic Plan', sales: 24300, percentage: 30 },
    { name: 'Standard Plan', sales: 20160, percentage: 25 },
    { name: 'Enterprise Plan', sales: 8060, percentage: 10 }
  ];
  
  const recentReports = [
    {
      id: 1,
      name: 'Q1 Sales Report',
      description: 'Quarterly sales analysis with regional performance breakdowns',
      type: 'Sales',
      date: '2025-03-12',
      downloads: 48
    },
    {
      id: 2,
      name: 'User Engagement Analysis',
      description: 'Monthly analysis of user engagement metrics and retention',
      type: 'User',
      date: '2025-03-08',
      downloads: 32
    },
    {
      id: 3,
      name: 'Inventory Status Report',
      description: 'Current inventory levels and projected stock requirements',
      type: 'Inventory',
      date: '2025-03-05',
      downloads: 24
    },
    {
      id: 4,
      name: 'Marketing Campaign ROI',
      description: 'Return on investment analysis for Q1 marketing campaigns',
      type: 'Marketing',
      date: '2025-03-01',
      downloads: 56
    },
    {
      id: 5,
      name: 'Customer Satisfaction Survey',
      description: 'Analysis of customer feedback and satisfaction metrics',
      type: 'Customer',
      date: '2025-02-25',
      downloads: 37
    }
  ];

  // Handle date range change
  const handleDateRangeChange = (range) => {
    setDateRange(range);
    // In a real app, this would fetch new data based on the selected range
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Filter reports based on search and filter
  const filteredReports = recentReports.filter(report => {
    const matchesSearch = 
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    return matchesSearch && report.type.toLowerCase() === filterStatus.toLowerCase();
  });

  // Calculate summary statistics
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const averageSales = totalSales / salesData.length;
  const totalProducts = productPerformance.reduce((sum, item) => sum + item.sales, 0);
  
  // Create a simple bar chart visualization with div heights
  const maxSales = Math.max(...salesData.map(item => item.sales));
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 font-heading">Reports</h1>
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={dateRange}
                  onChange={(e) => handleDateRangeChange(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="last7days">Last 7 Days</option>
                  <option value="last30days">Last 30 Days</option>
                  <option value="last90days">Last 90 Days</option>
                  <option value="ytd">Year to Date</option>
                  <option value="lastyear">Last Year</option>
                </select>
                <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
              
              <button 
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <Download size={18} />
                <span>Export Reports</span>
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-indigo-500">
              <div className="flex items-center gap-3">
                <DollarSign className="text-indigo-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Total Sales</p>
                  <p className="text-xl font-bold text-gray-800">{formatCurrency(totalSales)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-blue-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Avg Monthly</p>
                  <p className="text-xl font-bold text-gray-800">{formatCurrency(averageSales)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-green-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Products</p>
                  <p className="text-xl font-bold text-gray-800">{formatCurrency(totalProducts)}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
              <div className="flex items-center gap-3">
                <Users className="text-purple-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Customers</p>
                  <p className="text-xl font-bold text-gray-800">24,853</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Trend Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Sales Trends</h2>
                <p className="text-sm text-gray-500">Monthly sales performance</p>
              </div>
              <BarChart3 className="text-indigo-500" size={24} />
            </div>
            
            <div className="h-64 flex items-end justify-between">
              {salesData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-6 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-md transition-all duration-300 hover:from-indigo-600 hover:to-purple-700"
                    style={{ height: `${(item.sales / maxSales) * 200}px` }}
                  ></div>
                  <p className="text-xs text-gray-600 mt-2">{item.month}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Performance */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Product Performance</h2>
                <p className="text-sm text-gray-500">Sales distribution by product</p>
              </div>
              <PieChart className="text-indigo-500" size={24} />
            </div>
            
            <div className="space-y-4">
              {productPerformance.map((product, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-600">{product.name}</span>
                    <span className="text-sm font-medium text-gray-800">{formatCurrency(product.sales)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${product.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Recent Reports Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Recent Reports</h2>
                <p className="text-sm text-gray-500">Download and manage your reports</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-72">
                  <input
                    type="text"
                    placeholder="Search reports..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
                
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                  >
                    <option value="all">All Types</option>
                    <option value="sales">Sales</option>
                    <option value="user">User</option>
                    <option value="inventory">Inventory</option>
                    <option value="marketing">Marketing</option>
                    <option value="customer">Customer</option>
                  </select>
                  <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Downloads
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReports.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      No reports found
                    </td>
                  </tr>
                ) : (
                  filteredReports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">{report.name}</span>
                          <span className="text-xs text-gray-500">{report.description}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          report.type === 'Sales' ? 'bg-green-100 text-green-800' :
                          report.type === 'User' ? 'bg-blue-100 text-blue-800' :
                          report.type === 'Inventory' ? 'bg-yellow-100 text-yellow-800' :
                          report.type === 'Marketing' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {report.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={14} className="text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">{formatDate(report.date)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Download size={14} className="text-gray-400 mr-1" />
                          <span>{report.downloads}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredReports.length}</span> reports
              </p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;