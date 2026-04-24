import React from 'react'


const StatCard = ({ title, value, }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur p-4 rounded-xl shadow-md dark:shadow-black/40 w-full border border-gray-100 dark:border-gray-700 transition-colors ">
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{value}</h3>
    </div>
  )
}

export default StatCard