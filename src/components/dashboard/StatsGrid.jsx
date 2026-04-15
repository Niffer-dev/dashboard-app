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

  //option1
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stats")
      .then((response) => {
        if (response.data.length > 0) {
          setStats(response.data[0]); // take the first stats document
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
      <StatCard title="Revenue" value={`$${stats.revenue}`} />
      <StatCard title="Attendance" value={`${stats.attendance}%`} />
    </div>
  );
};

export default StatsGrid;
