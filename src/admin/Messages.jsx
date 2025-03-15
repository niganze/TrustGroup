import React, { useState } from 'react';
import { Trash2, Mail, Star, StarOff, Archive, Search, X, ChevronDown, Filter, Clock, MessageSquare } from 'lucide-react';

function Messages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  
  // Form states
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Sample messages data
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      subject: 'Product Inquiry',
      description: 'I would like to know more about your latest product features and pricing options.',
      date: '2025-03-14T14:30:00',
      isStarred: true,
      status: 'unread'
    },
    {
      id: 2,
      name: 'Emily Johnson',
      email: 'emily.j@company.co',
      subject: 'Partnership Opportunity',
      description: 'Our team is interested in exploring potential partnership opportunities with your organization.',
      date: '2025-03-13T09:45:00',
      isStarred: false,
      status: 'read'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      email: 'emily.j@company.co',
      subject: 'Partnership Opportunity',
      description: 'Our team is interested in exploring potential partnership opportunities with your organization.',
      date: '2025-03-13T09:45:00',
      isStarred: false,
      status: 'read'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@gmail.com',
      subject: 'Feedback on Recent Update',
      description: 'I wanted to share some feedback on your recent platform update. There are several impressive improvements!',
      date: '2025-03-12T11:05:00',
      isStarred: true,
      status: 'unread'
    },
    {
      id: 5,
      name: 'Robert Davis',
      email: 'robert.davis@business.org',
      subject: 'Invoice #INV-2025-003',
      description: 'Please find attached the invoice for services provided during the month of February 2025.',
      date: '2025-03-10T08:15:00',
      isStarred: false,
      status: 'archived'
    }
  ]);
  
  // Get filtered messages based on search and filter
  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    if (filterStatus === 'starred') return matchesSearch && message.isStarred;
    return matchesSearch && message.status === filterStatus;
  });
  
  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };
  
  // Toggle message selection
  const toggleSelect = (id) => {
    if (selectedMessages.includes(id)) {
      setSelectedMessages(selectedMessages.filter(mId => mId !== id));
    } else {
      setSelectedMessages([...selectedMessages, id]);
    }
  };
  
  // Handle bulk selection
  const toggleSelectAll = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(m => m.id));
    }
  };
  
  // Delete message(s)
  const handleDelete = (ids) => {
    if (window.confirm(`Are you sure you want to delete ${ids.length > 1 ? 'these messages' : 'this message'}?`)) {
      const newMessages = messages.filter(message => !ids.includes(message.id));
      setMessages(newMessages);
      setSelectedMessages(selectedMessages.filter(id => !ids.includes(id)));
    }
  };
  
  // Toggle star on a message
  const toggleStar = (id) => {
    const newMessages = messages.map(message => {
      if (message.id === id) {
        return { ...message, isStarred: !message.isStarred };
      }
      return message;
    });
    setMessages(newMessages);
  };
  
  // Archive message(s)
  const archiveMessages = (ids) => {
    const newMessages = messages.map(message => {
      if (ids.includes(message.id)) {
        return { ...message, status: 'archived' };
      }
      return message;
    });
    setMessages(newMessages);
    setSelectedMessages(selectedMessages.filter(id => !ids.includes(id)));
  };
  
  // Mark as read/unread
  const markAsRead = (ids, isRead = true) => {
    const newMessages = messages.map(message => {
      if (ids.includes(message.id)) {
        return { ...message, status: isRead ? 'read' : 'unread' };
      }
      return message;
    });
    setMessages(newMessages);
  };
  
  // Open reply modal
  const handleReply = (message) => {
    setReplyTo(message);
    setSubject(`Re: ${message.subject}`);
    setEmail(message.email);
    setIsComposeOpen(true);
  };
  
  // Send reply
  const handleSendReply = (e) => {
    e.preventDefault();
    // Here you would typically connect to an email API
    alert(`Reply sent to ${email}`);
    
    // Mark the message as read
    if (replyTo) {
      markAsRead([replyTo.id]);
    }
    
    resetComposeForm();
  };
  
  // Reset compose form
  const resetComposeForm = () => {
    setSubject('');
    setEmail('');
    setMessage('');
    setReplyTo(null);
    setIsComposeOpen(false);
  };
  
  // Get message statistics
  const getMessageStats = () => {
    return {
      total: messages.length,
      unread: messages.filter(m => m.status === 'unread').length,
      starred: messages.filter(m => m.isStarred).length,
      archived: messages.filter(m => m.status === 'archived').length
    };
  };
  
  const stats = getMessageStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 font-heading">Messages</h1>
            
          </div>
          
          {/* Message Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-indigo-500">
              <div className="flex items-center gap-3">
                <MessageSquare className="text-indigo-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Total</p>
                  <p className="text-xl font-bold text-gray-800">{stats.total}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Unread</p>
                  <p className="text-xl font-bold text-gray-800">{stats.unread}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Starred</p>
                  <p className="text-xl font-bold text-gray-800">{stats.starred}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-gray-500">
              <div className="flex items-center gap-3">
                <Archive className="text-gray-500" size={20} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Archived</p>
                  <p className="text-xl font-bold text-gray-800">{stats.archived}</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search messages..."
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
            
            <div className="flex gap-2">
              <div className="relative">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="all">All Messages</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="starred">Starred</option>
                  <option value="archived">Archived</option>
                </select>
                <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Messages Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Action Bar */}
          {selectedMessages.length > 0 && (
            <div className="bg-indigo-50 py-2 px-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>{selectedMessages.length} selected</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => markAsRead(selectedMessages)}
                  className="p-1.5 hover:bg-indigo-100 rounded-md text-gray-600 hover:text-indigo-700"
                  title="Mark as read"
                >
                  <Mail size={18} />
                </button>
                <button 
                  onClick={() => archiveMessages(selectedMessages)}
                  className="p-1.5 hover:bg-indigo-100 rounded-md text-gray-600 hover:text-indigo-700"
                  title="Archive"
                >
                  <Archive size={18} />
                </button>
                <button 
                  onClick={() => handleDelete(selectedMessages)}
                  className="p-1.5 hover:bg-red-100 rounded-md text-gray-600 hover:text-red-600"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          )}
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-3 py-3 text-left">
                    <input
                      type="checkbox" 
                      checked={filteredMessages.length > 0 && selectedMessages.length === filteredMessages.length}
                      onChange={toggleSelectAll}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </th>
                  <th scope="col" className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
                    Sender
                  </th>
                  <th scope="col" className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
                    Subject & Message
                  </th>
                  <th scope="col" className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMessages.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      No messages found
                    </td>
                  </tr>
                ) : (
                  filteredMessages.map((message) => (
                    <tr 
                      key={message.id} 
                      className={`hover:bg-gray-50 ${message.status === 'unread' ? 'bg-indigo-50' : ''}`}
                    >
                      <td className="px-3 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedMessages.includes(message.id)}
                          onChange={() => toggleSelect(message.id)}
                          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </td>
                      <td className="px-3 py-4">
                        <div className="flex flex-col">
                          <span className={`text-sm font-medium ${message.status === 'unread' ? 'text-gray-900' : 'text-gray-600'}`}>
                            {message.name}
                          </span>
                          <span className="text-xs text-gray-500">{message.email}</span>
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <div className="flex flex-col">
                          <span className={`text-sm font-medium ${message.status === 'unread' ? 'text-gray-900' : 'text-gray-600'}`}>
                            {message.subject}
                          </span>
                          <span className="text-xs text-gray-500 truncate max-w-md">
                            {message.description}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={14} className="text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">{formatDate(message.date)}</span>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-1">
                          <button
                            onClick={() => toggleStar(message.id)}
                            className={`p-1.5 rounded-md ${message.isStarred ? 'text-yellow-500 hover:text-yellow-600' : 'text-gray-400 hover:text-gray-600'}`}
                            title={message.isStarred ? "Unstar" : "Star"}
                          >
                            {message.isStarred ? <Star size={18} /> : <StarOff size={18} />}
                          </button>
                          <button
                            onClick={() => handleReply(message)}
                            className="p-1.5 text-gray-400 hover:text-indigo-600 rounded-md"
                            title="Reply"
                          >
                            <Mail size={18} />
                          </button>
                          <button
                            onClick={() => archiveMessages([message.id])}
                            className="p-1.5 text-gray-400 hover:text-indigo-600 rounded-md"
                            title="Archive"
                          >
                            <Archive size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete([message.id])}
                            className="p-1.5 text-gray-400 hover:text-red-600 rounded-md"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Compose/Reply Modal */}
      {isComposeOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                {replyTo ? `Reply to ${replyTo.name}` : 'Compose New Message'}
              </h2>
              <button onClick={resetComposeForm} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSendReply} className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={resetComposeForm}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#00A3D9] to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;