// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Task';
import Projects from './pages/Projects';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance'
import Payroll from './pages/Payroll';
import Hiring from './pages/Hiring';
import { useDarkMode } from './hooks/useDarkMode';
function App() {
  const { dark, toggle } = useDarkMode();
  return (
      <Routes>
        <Route path="/" element={<DashboardLayout darkMode={dark} onToggle={toggle}/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="projects" element={<Projects />}/>

          <Route path="employees" element={<Employees />}/>
          <Route path="attendance" element={<Attendance />}/>
          <Route path="payroll" element={<Payroll/>}/>
          <Route path="hiring" element={<Hiring/>}/>
        </Route>
      </Routes>
  )
}

export default App
