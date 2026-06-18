// full width sidebar for desktop, collapsible for mobile/tablet
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Bell } from "lucide-react";
import DarkModeToggle from "../components/ui/DarkModeToggle";

const Sidebar = ({ darkMode, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar always visible on mobile/tablet */}
      <div className="md:hidden fixed top-0 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded-md shadow-md z-50 w-12 h-12 flex items-center justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 dark:text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar (desktop left, mobile/tablet dropdown from top) */}
      <section
        className={`
          fixed md:static top-0 left-0 md:h-screen
          w-full md:w-64 bg-white dark:bg-gray-800 border-b md:border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col
          transform md:transform-none transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"}
          z-50
        `}
      >
        {/* Navbar controls at the very top of dropdown */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Efficio
          </h1>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
            <DarkModeToggle darkMode={darkMode} onToggle={onToggle} />
          </div>
        </div>

        {/* Profile */}
        <div className="mb-6">
          <p className="font-medium text-gray-900 dark:text-white">
            Jennifer Ngini
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            email@gmail.com
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-4 text-sm flex-1">
          <p className="text-gray-400 dark:text-gray-500">Main Menu</p>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Students
          </NavLink>
          <NavLink
            to="/classes"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Classes
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Projects
          </NavLink>

          <p className="text-gray-400 mt-4">HR Management</p>
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Employees
          </NavLink>
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Attendance
          </NavLink>
          <NavLink
            to="/payroll"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Payroll
          </NavLink>
          <NavLink
            to="/hiring"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-600 dark:text-gray-400"
            }
          >
            Hiring
          </NavLink>
        </div>

        {/* Logout at bottom */}
        <div className="flex gap-2.5 pt-6">
          <Link to="/logout" className="mt-auto text-red-500 dark:text-red-400">
            Logout
          </Link>
        </div>
      </section>

      {/* Overlay for mobile/tablet */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40 transition-opacity duration-300"
        ></div>
      )}
    </>
  );
};

export default Sidebar;