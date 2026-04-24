import React from 'react'
import DarkModeToggle from '../components/ui/DarkModeToggle'
import { Bell } from 'lucide-react'

const Navbar = ({darkMode, onToggle}) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer"/>
        <DarkModeToggle darkMode={darkMode} onToggle={onToggle}/>
    </nav>
  )
}

export default Navbar