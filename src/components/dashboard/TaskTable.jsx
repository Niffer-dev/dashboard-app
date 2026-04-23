import React from 'react'

const TaskTable = ({ title, tasks}) => {
  const tagStyles = {
    bugs: "bg-red-100 text-red-600",
    review: "bg-blue-100 text-blue-600",
    pending: "bg-yellow-100 text-yellow-600",
    done: "bg-green-100 text-green-600",
    branding: "bg-purple-100 text-purple-600",
    todo: "bg-gray-200 text-gray-700",
  }
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="p-4 flex justify-between">
        <h3 className="font-semibold">{title} ({tasks.length})</h3>
      </div>

      <table className="w-full text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <thead className="text-gray-500 border-t">
          <tr>
            <th className="px-4 py-2 text-left">
              <input type="checkbox" />
            </th>
            <th className="px-4 py-2 text-left">Invoice</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Tax</th>
            <th className="px-4 py-2 text-left">Tags</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-3">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-3">{task.id}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <img src={task.avatar} alt={task.name} className="w-4 h-4 rounded-full object-cover"/><span>{task.name}</span>
                </div>
              </td>
              <td className="px-4 py-3">{task.email}</td>
              <td className="px-4 py-3">{task.date}</td>
              <td className="px-4 py-3 text-green-600 font-medium">
                {task.amount}
              </td>
              <td className="px-4 py-3">{task.tax}</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  {task.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded-md text-xs ${tagStyles[tag] || "bg-gray-100 text-gray-600"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable