// FINAL VERSION - SSE integrated with global context
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSSE } from "../../context/SSEProvider";

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
  const [view, setView] = useState("weekly");
  const events = useSSE();

  // Initial fetch
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/attendance?type=${view}`
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

    fetchAttendance();
  }, [view]);

  // React to SSE events
  useEffect(() => {
    if (!events || events.length === 0) return;
    const latest = events[events.length - 1];

    const handleUpdate = () => {
      switch (latest.type) {
        case "attendance":
          setData((prev) => [...prev, {
            name: latest.data.day,
            present: latest.data.present,
            absent: latest.data.absent,
          }]);
          break;
        case "attendance_bulk":
          setData((prev) => [...prev, ...latest.data.map((rec) => ({
            name: rec.day,
            present: rec.present,
            absent: rec.absent,
          }))]);
          break;
        case "attendance_update":
          setData((prev) =>
            prev.map((rec) =>
              rec.name === latest.data.name ? latest.data : rec
            )
          );
          break;
        case "attendance_delete":
          setData((prev) => prev.filter((rec) => rec._id !== latest.data.id));
          break;
        default:
          break;
      }
    };

    handleUpdate();
  }, [events]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm w-1/2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Attendance Report</h3>
        <div className="flex gap-2 text-sm">
          {["daily", "weekly", "monthly"].map((type) => (
            <button
              key={type}
              onClick={() => setView(type)}
              className={`px-3 py-1 rounded-md ${
                view === type ? "bg-blue-500 text-white" : "text-gray-500"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <Tooltip />
            <Line type="monotone" dataKey="present" stroke="#3B82F6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="absent" stroke="#8B5CF6" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
