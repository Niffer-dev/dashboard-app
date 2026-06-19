import React from "react";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import AttendanceChart from "../components/dashboard/AttendanceChart";
import StatsUpdateForm from "../components/forms/StatsUpdateForm";
import AttendanceEntryForm from "../components/forms/AttendanceEntryForm";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <WelcomeHeader />

      {/* Top row: stats and chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* On mobile, StatsGrid appears above AttendanceChart */}
        <StatsGrid />
        <AttendanceChart />
      </div>

      {/* Bottom row: forms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* On mobile, StatsUpdateForm appears above AttendanceEntryForm */}
        <div className="flex flex-col h-full">
          <StatsUpdateForm />
        </div>
        <div className="flex flex-col h-full">
          <AttendanceEntryForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
