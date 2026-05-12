// // import { useState } from 'react'
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import DashboardLayout from "./layouts/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import Students from "./pages/Students"
// import Classes from "./pages/Classes";
// import Projects from "./pages/Projects";
// import Employees from "./pages/Employees";
// import Attendance from "./pages/Attendance";
// import Payroll from "./pages/Payroll";
// import Hiring from "./pages/Hiring";
// import { useDarkMode } from "./hooks/useDarkMode";
// import Login from "./pages/auth/Login";
// import SignUp from "./pages/auth/SignUp";
// import { Toaster } from "react-hot-toast";
// import { Fragment } from "react";
// function App() {
//   const { dark, toggle } = useDarkMode();
//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={<DashboardLayout darkMode={dark} onToggle={toggle} />}
//         >
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="students" element={<Students />} />
//           <Route path="classes" element={<Classes />} />
//           <Route path="projects" element={<Projects />} />

//           <Route path="employees" element={<Employees />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="payroll" element={<Payroll />} />
//           <Route path="hiring" element={<Hiring />} />
//         </Route>
//         <Route path="login" element={<Login />} />
//         <Route path="sign-up" element={<SignUp />} />
//       </Routes>
//       <Toaster />
//     </>
//   );
// }

// export default App;



// // import { useState } from 'react'
// import "./App.css";
// import { Route, Routes, Navigate } from "react-router-dom";
// import DashboardLayout from "./layouts/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import Students from "./pages/Students";
// import Classes from "./pages/Classes";
// import Projects from "./pages/Projects";
// import Employees from "./pages/Employees";
// import Attendance from "./pages/Attendance";
// import Payroll from "./pages/Payroll";
// import Hiring from "./pages/Hiring";
// import { useDarkMode } from "./hooks/useDarkMode";
// import Login from "./pages/auth/Login";
// import SignUp from "./pages/auth/SignUp";
// import { Toaster } from "react-hot-toast";
// import { Fragment } from "react";

// // 🔒 Protected Route component
// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("token"); // or your auth check
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// function App() {
//   const { dark, toggle } = useDarkMode();
//   return (
//     <>
//       <Routes>
//         {/* Protected routes – only accessible when logged in */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <DashboardLayout darkMode={dark} onToggle={toggle} />
//             </ProtectedRoute>
//           }
//         >
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="students" element={<Students />} />
//           <Route path="classes" element={<Classes />} />
//           <Route path="projects" element={<Projects />} />
//           <Route path="employees" element={<Employees />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="payroll" element={<Payroll />} />
//           <Route path="hiring" element={<Hiring />} />
//         </Route>

//         {/* Public routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/sign-up" element={<SignUp />} />

//         {/* Optional: redirect any unknown private route to login */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//       <Toaster />
//     </>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
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

// Hook to reactively track authentication status
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    // Listen to changes in localStorage (triggered by login/logout in same tab)
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    // Custom event for login/logout (optional, for same-tab updates)
    window.addEventListener("authChange", handleStorageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("authChange", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isAuthenticated;
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const { dark, toggle } = useDarkMode();

  return (
    <>
      <Routes>
        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout darkMode={dark} onToggle={toggle} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="classes" element={<Classes />} />
          <Route path="projects" element={<Projects />} />
          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="hiring" element={<Hiring />} />
        </Route>

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;