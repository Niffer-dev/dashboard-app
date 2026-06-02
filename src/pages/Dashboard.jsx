import React from "react";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import AttendanceChart from "../components/dashboard/AttendanceChart";
import StatsUpdateForm from "../components/forms/StatsUpdateForm";
import AttendanceEntryForm from "../components/forms/AttendanceEntryForm";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top row: stats and chart side by side */}
      <div className="flex gap-6">
        <StatsGrid />
        <AttendanceChart />
      </div>

      {/* Bottom row: two forms side by side, equal height */}
      <div className="grid grid-cols-2 gap-6 items-stretch">
        {/* Update Dashboard Stats */}
        <div className="flex flex-col h-full">
          <StatsUpdateForm />
        </div>

        {/* Attendance Report */}
        <div className="flex flex-col h-full">
          <AttendanceEntryForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
