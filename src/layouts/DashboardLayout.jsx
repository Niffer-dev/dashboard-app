import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const DashboardLayout = ({darkMode, onToggle}) => {
  return (
    <div className='flex h-screen bg-gray-100 dark:bg-gray-900'>
        <Sidebar/>

        <div className='flex-1 flex flex-col'>
            <Navbar darkMode={darkMode} onToggle={onToggle}/>

            <main className='p-6 overflow-y-auto'>
                <Outlet/>
            </main>

        </div>
    </div>
  )
}

export default DashboardLayout