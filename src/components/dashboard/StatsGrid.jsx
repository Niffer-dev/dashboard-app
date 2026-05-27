import React, { useState, useEffect } from "react";
import axios from "axios";
import StatCard from "../ui/StatCard";

const initialStatData = {
  totalEmployees: 0,
  jobApplicants: 0,
  revenue: 0,
  attendance: 0,
};

const StatsGrid = () => {
  const [stats, setStats] = useState(initialStatData);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/stats`, {
        withCredentials: true,
      })
      .then((response) => {
        // Handle both possible structures
        let statsData = response.data;
        if (statsData.data && Array.isArray(statsData.data)) {
          statsData = statsData.data[0];
        } else if (Array.isArray(statsData) && statsData.length > 0) {
          statsData = statsData[0];
        }

        if (statsData && statsData.totalEmployees !== undefined) {
          setStats(statsData);
        } else {
          console.warn("Unexpected stats response:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 w-1/2">
      <StatCard title="Total Employees" value={stats.totalEmployees} />
      <StatCard title="Job Applicants" value={stats.jobApplicants} />
      <StatCard title="Revenue" value={`${stats.revenue}`} />
      <StatCard title="Attendance" value={`${stats.attendance}%`} />
    </div>
  );
};

export default StatsGrid;
