import React from 'react'
import WelcomeHeader from "../components/dashboard/WelcomeHeader"
import StatsGrid from '../components/Dashboard/StatsGrid'
import AttendanceChart from '../components/dashboard/AttendanceChart'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <WelcomeHeader />
      
      <div className="flex gap-4">
          <StatsGrid/>
          <AttendanceChart />
      </div>
    </div>
  )
}

export default Dashboard