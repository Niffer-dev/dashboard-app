import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const DashboardLayout = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
        <Sidebar/>

        <div className='flex-1 flex flex-col'>
            <Navbar/>

            <main className='p-6 overflow-y-auto'>
                <Outlet/>
            </main>

        </div>
    </div>
  )
}

export default DashboardLayout