import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const DashboardLayout = ({ darkMode, onToggle }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar handles both sidebar + navbar in mobile/tablet */}
      <Sidebar darkMode={darkMode} onToggle={onToggle}/>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout