import React from 'react'
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button onClick={onToggle} className="p-2 rounded-full border border-gray-200 
    dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" 
    aria-label="Toggle dark mode">
      {darkMode ? <Sun className="w-5 h-5 text-yellow-400"/> : <Moon className="w-5 h-5 text-gray-500"/>}
    </button>
  )
}

export default DarkModeToggle