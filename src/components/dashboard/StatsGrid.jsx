import React from 'react'
import StatCard from "../ui/StatCard";

const StatsGrid = () => {
  return (
    <div className='grid grid-cols-2 gap-5 w-1/2'>
        <StatCard title="Total Employees" value="173"/>
        <StatCard title="Job Applicants" value="983"/>
        <StatCard title="Revenue" value="$4,842"/>
        <StatCard title="Attendance" value="75%"/>
    </div>
  )
}

export default StatsGrid