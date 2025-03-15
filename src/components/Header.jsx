import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 fixed w-full z-10">
      <div className="flex justify-between items-center h-full px-6">
        <div className="relative flex items-center w-96">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 w-full rounded-lg bg-gray-100 focus:bg-white border border-transparent focus:border-gray-300 focus:ring-0 transition-all"
          />
        </div>
        
        <div className="flex items-center space-x-5">
          <div className="relative">
            <button className="relative p-1 rounded-full hover:bg-gray-100 transition-all">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-[#00A3D9] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>
            <div className="h-9 w-9 bg-[#00A3D9] rounded-full flex items-center justify-center text-white">
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;