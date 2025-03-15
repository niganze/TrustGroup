import React from 'react';
import { Users, Building, Hammer, Camera, CodeSquare, ShoppingBag, TrendingUp, ArrowUpRight, ArrowDownRight, Clock, Calendar, Shield } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const AdminDashboardHome = () => {
  // Updated sample data for Trusty Group's actual business lines
  const businessGrowthData = [
    { name: 'Jan', estates: 4, construction: 3, pictures: 8, total: 15 },
    { name: 'Feb', estates: 5, construction: 4, pictures: 10, total: 19 },
    { name: 'Mar', estates: 6, construction: 5, pictures: 12, total: 23 },
    { name: 'Apr', estates: 7, construction: 4, pictures: 15, total: 26 },
    { name: 'May', estates: 8, construction: 6, pictures: 16, total: 30 },
    { name: 'Jun', estates: 10, construction: 7, pictures: 18, total: 35 },
    { name: 'Jul', estates: 12, construction: 8, pictures: 21, total: 41 },
  ];

  const projectCategoryData = [
    { name: 'Mixed-Use', count: 8, color: '#8b5cf6' },
    { name: 'Residential', count: 12, color: '#3b82f6' },
    { name: 'Commercial', count: 6, color: '#10b981' },
    { name: 'School', count: 4, color: '#f59e0b' },
    { name: 'Medical', count: 3, color: '#ef4444' },
    { name: 'Other', count: 5, color: '#6b7280' },
  ];
  
  const projectStatusData = [
    { name: 'Completed', value: 45 },
    { name: 'Ongoing', value: 35 },
    { name: 'Planning', value: 20 }
  ];
  
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];

  const stats = [
    {
      title: 'Total Projects',
      value: '38',
      icon: <Building size={24} className="text-violet-500" />,
      bgColor: 'bg-violet-100',
      trend: '+12%',
      trendUp: true
    },
    {
      title: 'Construction Jobs',
      value: '14',
      icon: <Hammer size={24} className="text-blue-500" />,
      bgColor: 'bg-blue-100',
      trend: '+8%',
      trendUp: true
    },
    {
      title: 'Real Estate Listings',
      value: '26',
      icon: <Building size={24} className="text-green-500" />,
      bgColor: 'bg-green-100',
      trend: '+15%',
      trendUp: true
    },
    {
      title: 'Media Projects',
      value: '18',
      icon: <Camera size={24} className="text-amber-500" />,
      bgColor: 'bg-amber-100',
      trend: '+23%',
      trendUp: true
    },
  ];

  const recentActivities = [
    { id: 1, type: 'estate', project: 'OMICA Residence', activity: 'New unit listing', timestamp: '2 hours ago' },
    { id: 2, type: 'construction', project: 'Busy Bees School', activity: 'Phase 1 completed', timestamp: '5 hours ago' },
    { id: 3, type: 'pictures', project: 'Corporate Event', activity: 'Photos delivered', timestamp: '1 day ago' },
    { id: 4, type: 'construction', project: 'Gisozi Medical Plaza', activity: 'Materials ordered', timestamp: '2 days ago' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-semibold text-gray-800">Trusty Group Dashboard</h1>
        <p className="text-gray-600">Creating a future where communities thrive in harmony</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-2">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <div className={`flex items-center mt-2 ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trendUp ? (
                    <ArrowUpRight size={16} className="mr-1" />
                  ) : (
                    <ArrowDownRight size={16} className="mr-1" />
                  )}
                  <span className="text-sm font-medium">{stat.trend} this month</span>
                </div>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-bold font-heading text-gray-800 mb-4">Business Growth</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={businessGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="total" 
                  name="Total Projects"
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="estates" 
                  name="Real Estate"
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="construction" 
                  name="Construction"
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="pictures" 
                  name="Media Projects"
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-bold font-heading text-gray-800 mb-4">Project Categories</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectCategoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="count" name="Project Count" radius={[4, 4, 0, 0]}>
                  {projectCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Status */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 font-heading">Project Status</h2>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800 font-heading" >Recent Activity</h2>
            <button className="text-blue-500 text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                <div className={`rounded-full p-2 mr-3 ${
                  activity.type === 'estate' ? 'bg-green-100' : 
                  activity.type === 'construction' ? 'bg-blue-100' : 
                  activity.type === 'pictures' ? 'bg-amber-100' : 'bg-violet-100'
                }`}>
                  {activity.type === 'estate' ? <Building size={18} className="text-green-500" /> : 
                   activity.type === 'construction' ? <Hammer size={18} className="text-blue-500" /> :
                   activity.type === 'pictures' ? <Camera size={18} className="text-amber-500" /> :
                   <CodeSquare size={18} className="text-violet-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-800">{activity.project}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    {activity.activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links or Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-violet-500">
          <h3 className="text-lg font-medium text-gray-800 mb-2 font-heading">Upcoming Deadlines</h3>
          <p className="text-gray-600 text-sm mb-4">3 project deadlines in the next 7 days</p>
          <button className="text-violet-600 text-sm font-medium hover:underline flex items-center">
            View Calendar <ArrowUpRight size={14} className="ml-1" />
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
          <h3 className="text-lg font-medium text-gray-800 mb-2 font-heading">Team Performance</h3>
          <p className="text-gray-600 text-sm mb-4">Construction team productivity up 12%</p>
          <button className="text-blue-600 text-sm font-medium hover:underline flex items-center">
            View Reports <ArrowUpRight size={14} className="ml-1" />
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
          <h3 className="text-lg font-medium text-gray-800 mb-2 font-heading">Revenue Overview</h3>
          <p className="text-gray-600 text-sm mb-4">Q1 targets exceeded by 8%</p>
          <button className="text-green-600 text-sm font-medium hover:underline flex items-center">
            Financial Dashboard <ArrowUpRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;