import { useState } from "react";
import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";

const ClassesTable = ({ classes = [], onEdit, onDelete }) => {
  const [hiddenRows, setHiddenRows] = useState({});

  const toggleRowVisibility = (rowId) => {
    setHiddenRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return "bg-red-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="overflow-x-auto">
      {/* Table view for md+ screens */}
      <table className="hidden md:table w-full min-w-150 lg:min-w-200">
        <thead className="border-b dark:border-gray-700">
          <tr className="text-left text-xs md:text-sm lg:text-base text-gray-500 dark:text-gray-400">
            <th className="pb-3 font-medium">Class Name</th>
            <th className="pb-3 font-medium">Level</th>
            <th className="pb-3 font-medium">Shift</th>
            <th className="pb-3 font-medium">Teacher</th>
            <th className="pb-3 font-medium">Students</th>
            <th className="pb-3 font-medium">Capacity</th>
            <th className="pb-3 font-medium">Status</th>
            <th className="pb-3 font-medium"></th>
          </tr>
        </thead>

        <tbody>
          {classes.map((item) => {
            const percentage = (item.capacity / item.total) * 100;
            const uniqueId = item._id;

            return (
              <tr
                key={uniqueId}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-3 text-xs md:text-sm lg:text-base dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.name}
                </td>
                <td className="py-3 text-xs md:text-sm lg:text-base dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.level}
                </td>
                <td className="py-3 text-xs md:text-sm lg:text-base dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.shift}
                </td>
                <td className="py-3 text-xs md:text-sm lg:text-base dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.teacher}
                </td>
                <td className="py-3 text-xs md:text-sm lg:text-base dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.capacity}
                </td>
                <td className="py-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs md:text-sm lg:text-base dark:text-white">
                      {hiddenRows[uniqueId] ? "****" : `${item.capacity}/${item.total}`}
                    </span>
                    <div className="w-20 md:w-24 lg:w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getProgressColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-3 text-xs md:text-sm lg:text-base dark:text-white">
                  {Number(item.capacity) >= Number(item.total) ? (
                    <span className="px-2 py-1 rounded-full text-[10px] md:text-xs bg-red-100 text-red-700">
                      Full
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded-full text-[10px] md:text-xs bg-green-100 text-green-700">
                      Open
                    </span>
                  )}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2 md:gap-3 text-gray-500">
                    <button
                      onClick={() => toggleRowVisibility(uniqueId)}
                      className="hover:text-blue-500 transition"
                    >
                      {hiddenRows[uniqueId] ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                    <button
                      onClick={() => onEdit?.(item)}
                      className="hover:text-yellow-500 transition"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => onDelete?.(item._id)}
                      className="hover:text-red-500 transition"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {classes.map((item) => {
          const percentage = (item.capacity / item.total) * 100;
          const uniqueId = item._id;

          return (
            <div
              key={uniqueId}
              className="p-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.name}
                </h4>
                <div className="flex gap-2 text-gray-500">
                  <button onClick={() => toggleRowVisibility(uniqueId)}>
                    {hiddenRows[uniqueId] ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  <button onClick={() => onEdit?.(item)}>
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => onDelete?.(item._id)}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <p className="text-xs dark:text-gray-300">
                Level: {item.level} | Shift: {item.shift}
              </p>
              <p className="text-xs dark:text-gray-300">Teacher: {item.teacher}</p>
              <p className="text-xs dark:text-gray-300">Students: {item.capacity}</p>
              <div className="mt-2">
                <span className="text-xs dark:text-gray-300">
                  {item.capacity}/{item.total}
                </span>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full ${getProgressColor(percentage)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              <div className="mt-2">
                {Number(item.capacity) >= Number(item.total) ? (
                  <span className="px-2 py-1 rounded-full text-[10px] bg-red-100 text-red-700">
                    Full
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded-full text-[10px] bg-green-100 text-green-700">
                    Open
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassesTable;