import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  MessageSquare,
  Image,
  Briefcase,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import logoImage from "../assets/images/logo.png";

const Sidebar = ({ onLogout }) => {
  return (
    <div className="bg-white border-r border-gray-200 h-screen w-64 flex flex-col overflow-y-auto shadow-sm">
      <div className="p-5 flex items-center">
        <img
          src={logoImage}
          alt="Trusty Group Logo"
          className="h-8 mr-3 object-contain"
        />
        <div className="flex items-center font-semibold font-heading">
          <span className="text-black font-bold text-xl">TRUSTY</span>
          <span className="text-[#00A3D9] font-bold text-xl">GROUP</span>
        </div>
      </div>

      <nav className="flex-grow mt-8 px-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-lg mb-1 transition-all duration-200 ${
              isActive
                ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard className="mr-3" size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/team"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-200 ${
              isActive
                ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Users className="mr-3" size={20} />
          Team
        </NavLink>

        <NavLink
          to="/dashboard/projects"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-200 ${
              isActive
                ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Briefcase className="mr-3" size={20} />
          Projects
        </NavLink>

        <NavLink
          to="/dashboard/subsidiaries"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-200 ${
              isActive
                ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Building2 className="mr-3" size={20} />
          Subsidiaries
        </NavLink>

        <NavLink
          to="/dashboard/blog"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-200 ${
              isActive
                ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <FileText className="mr-3" size={20} />
          Blog Posts
        </NavLink>

        <NavLink
          to="/dashboard/messages"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-200 ${
              isActive
                ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <MessageSquare className="mr-3" size={20} />
          Messages
        </NavLink>

        <NavLink
          to="/dashboard/hero"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-lg mb-7 transition-all duration-200  ${
              isActive
                ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <Image className="mr-3" size={20} />
          Hero Sections
        </NavLink>

        <div className="mt-14 border-t shadow-2xl pt-12">
          <NavLink
            to="/dashboard/reports"
            className={({ isActive }) =>
              `flex items-center py-3 px-4 rounded-lg mb-1 transition-all duration-200 ${
                isActive
                  ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <BarChart3 className="mr-3" size={20} />
            Reports
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-200 ${
                isActive
                  ? "bg-[#00A3D9]/10 text-[#00A3D9] font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Settings className="mr-3" size={20} />
            Settings
          </NavLink>
        </div>
      </nav>

      <button
        onClick={onLogout}
        className="flex items-center py-2 px-4 mx-3 mb-5 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-200"
      >
        <LogOut className="mr-3" size={20} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
