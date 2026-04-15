import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const initialData = [
  { name: "Sun", present: 1, absent: 4 },
  { name: "Mon", present: 1, absent: 4 },
  { name: "Tue", present: 1, absent: 4 },
  { name: "Wed", present: 1, absent: 4 },
  { name: "Thu", present: 1, absent: 4 },
  { name: "Fri", present: 1, absent: 4 },
  { name: "Sat", present: 1, absent: 4 },
];

const AttendanceChart = () => {
  const [data, setData] = useState(initialData);
  const [view, setView] = useState("weekly"); // track active tab

  useEffect(() => {
    const fetchAttendance = async (type) => {
      try {
        const res = await axios.get(
          `http://localhost:4200/api/attendance?type=${type}`,
          {
            withCredentials: true, // include cookies for authentication
          },
        );
        if (Array.isArray(res.data) && res.data.length > 0) {
          setData(res.data);
        } else {
          setData(initialData);
        }
      } catch (err) {
        console.error("Error fetching attendance data:", err);
        setData(initialData);
      }
    };

    fetchAttendance(view);
  }, [view]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm w-1/2">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Attendance Report</h3>

        {/* Tabs */}
        <div className="flex gap-2 text-sm">
          <button
            onClick={() => setView("weekly")}
            className={`px-3 py-1 rounded-md ${
              view === "weekly" ? "bg-blue-500 text-white" : "text-gray-500"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setView("daily")}
            className={`px-3 py-1 rounded-md ${
              view === "daily" ? "bg-blue-500 text-white" : "text-gray-500"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setView("monthly")}
            className={`px-3 py-1 rounded-md ${
              view === "monthly" ? "bg-blue-500 text-white" : "text-gray-500"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="present"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="absent"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
