import React from 'react'

const sidebar = () => {
  return (
    <>
        <section className='w-64 bg-white border-r p-4 flex flex-col'>
            <h1 className='text-xl font-bold mb-6'>Efficio</h1>

            {/* Profile */}
            <div className='mb-6'>
                <p className='font-medium'>Jennifer Ngini</p>
                <p className='text-sm text-gray-500'>email@gmail.com</p>
            </div>

            {/* menu */}
            <div className="flex flex-col gap-4 text-sm">
                <p className='text-gray-400 mt'>Main Menu</p>
                <a href="">Dashboard</a>
                <a href="">Tasks</a>
                <a href="">Inbox</a>
                <a href="">Calendar</a>
                <a href="">Projects</a>

                <p className='text-gray-400 mt-4'>HR Management</p>
                <a href="">Employees</a>
                <a href="">Attendance</a>
                <a href="">Payroll</a>
                <a href="">Hiring</a>

                <p className='text-gray-400 mt-4'>Analytics & Reports</p>
                <a href="">Settings</a>
                <a href="">Help</a>
            </div>

            {/* logout */}
            <button className='mt-auto text-red-500'>Logout</button>
        </section>
    
    </>
  )
}

export default sidebar