// import { useState } from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students"
import Classes from "./pages/Classes";
import Projects from "./pages/Projects";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Hiring from "./pages/Hiring";
import { useDarkMode } from "./hooks/useDarkMode";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { Toaster } from "react-hot-toast";
import { Fragment } from "react";
function App() {
  const { dark, toggle } = useDarkMode();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<DashboardLayout darkMode={dark} onToggle={toggle} />}
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="classes" element={<Classes />} />
          <Route path="projects" element={<Projects />} />

          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="hiring" element={<Hiring />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
