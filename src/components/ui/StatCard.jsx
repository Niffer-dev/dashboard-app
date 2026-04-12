import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'

// const initialStatData = {
//     totalEmployees: 0,
//     jobApplicants: 0,
//     revenue: 0,
//     attendance: 0
// }

const StatCard = ({ title, value, }) => {
  return (
    <div className='bg-white p-4 rounded-xl shadow w-full' >
        <p className='text-gray-500 text-sm'>{title}</p>
        <h3 className='text-xl font-bold'>{value}</h3>
    </div>
  )
}

export default StatCard