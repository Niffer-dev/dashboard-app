import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <section className='w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col'>
            <h1 className='text-xl font-bold mb-6 text-gray-900 dark:text-white'>Efficio</h1>

            {/* Profile */}
            <div className='mb-6'>
                <p className='font-medium text-gray-900 dark:text-white'>Jennifer Ngini</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>email@gmail.com</p>
            </div>

            {/* menu */}
            <div className="flex flex-col gap-4 text-sm">
                <p className='text-gray-400 dark:text-gray-500 mt'>Main Menu</p>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-400"}>Dashboard</NavLink>
                <NavLink to="/tasks" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-400"}>Tasks</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-400"}>Projects</NavLink>

                <p className='text-gray-400 mt-4'>HR Management</p>
                <NavLink to="/employees" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-400"}>Employees</NavLink>
                <NavLink to="/attendance" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-400"}>Attendance</NavLink>
                <NavLink to="/payroll" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-400"}>Payroll</NavLink>
                <NavLink to="/hiring" className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-400"}>Hiring</NavLink>
            </div>

            {/* logout */}
            <button className='mt-auto text-red-500 dark:text-red-400'>Login</button>
        </section>
    
    </>
  )
}

export default Sidebar