import React from 'react'

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sun", present: 40, absent: 24 },
  { name: "Mon", present: 30, absent: 13 },
  { name: "Tue", present: 50, absent: 20 },
  { name: "Wed", present: 47, absent: 18 },
  { name: "Thu", present: 60, absent: 25 },
  { name: "Fri", present: 55, absent: 22 },
  { name: "Sat", present: 65, absent: 30 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm w-1/2">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Attendance Report</h3>

        {/* Tabs */}
        <div className="flex gap-2 text-sm">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Weekly</button>
          <button className="px-3 py-1 text-gray-500">Daily</button>
          <button className="px-3 py-1 text-gray-500">Monthly</button>
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
              stroke="#3B82F6" // blue
              strokeWidth={3}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="absent"
              stroke="#8B5CF6" // purple
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