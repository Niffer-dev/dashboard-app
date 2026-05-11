// import React from 'react'

// const TaskTable = ({ title, tasks}) => {
//   const tagStyles = {
//     bugs: "bg-red-100 text-red-600",
//     review: "bg-blue-100 text-blue-600",
//     pending: "bg-yellow-100 text-yellow-600",
//     done: "bg-green-100 text-green-600",
//     branding: "bg-purple-100 text-purple-600",
//     todo: "bg-gray-200 text-gray-700",
//   }
//   return (
//     <div className="bg-white rounded-xl shadow overflow-hidden">
//       <div className="p-4 flex justify-between">
//         <h3 className="font-semibold">{title} ({tasks.length})</h3>
//       </div>

//       <table className="w-full text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
//         <thead className="text-gray-500 border-t">
//           <tr>
//             <th className="px-4 py-2 text-left">
//               <input type="checkbox" />
//             </th>
//             <th className="px-4 py-2 text-left">Invoice</th>
//             <th className="px-4 py-2 text-left">Customer</th>
//             <th className="px-4 py-2 text-left">Email</th>
//             <th className="px-4 py-2 text-left">Date</th>
//             <th className="px-4 py-2 text-left">Amount</th>
//             <th className="px-4 py-2 text-left">Tax</th>
//             <th className="px-4 py-2 text-left">Tags</th>
//           </tr>
//         </thead>

//         <tbody>
//           {tasks.map((task, index) => (
//             <tr key={index} className="border-t">
//               <td className="px-4 py-3">
//                 <input type="checkbox" />
//               </td>
//               <td className="px-4 py-3">{task.id}</td>
//               <td className="px-4 py-3">
//                 <div className="flex items-center gap-2">
//                   <img src={task.avatar} alt={task.name} className="w-4 h-4 rounded-full object-cover"/><span>{task.name}</span>
//                 </div>
//               </td>
//               <td className="px-4 py-3">{task.email}</td>
//               <td className="px-4 py-3">{task.date}</td>
//               <td className="px-4 py-3 text-green-600 font-medium">
//                 {task.amount}
//               </td>
//               <td className="px-4 py-3">{task.tax}</td>
//               <td className="px-4 py-3">
//                 <div className="flex gap-2">
//                   {task.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className={`px-2 py-1 rounded-md text-xs ${tagStyles[tag] || "bg-gray-100 text-gray-600"}`}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TaskTable


import { Eye, Pencil, Trash2 } from "lucide-react";

const ClassesTable = ({ classes }) => {

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return "bg-red-500";
    if (percentage >= 50) return "bg-yellow-500";

    return "bg-green-500";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b dark:border-gray-700">
          <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
            <th className="pb-3 font-medium">Class Name</th>
            <th className="pb-3 font-medium">Class Capacity</th>
            <th className="pb-3 font-medium">Grade Levels</th>
            <th className="pb-3 font-medium">Shift</th>
            <th className="pb-3 font-medium">Teacher</th>
            <th className="pb-3 font-medium"></th>
          </tr>
        </thead>

        <tbody>
          {classes.map((item) => {
            const percentage = (item.capacity / item.total) * 100;

            return (
              <tr
                key={item.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-4 text-sm dark:text-white">
                  {item.name}
                </td>

                <td className="py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm dark:text-white">
                      {item.capacity}/{item.total}
                    </span>

                    <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getProgressColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </td>

                <td className="py-4 text-sm dark:text-white">
                  {item.level}
                </td>

                <td className="py-4 text-sm dark:text-white">
                  {item.shift}
                </td>

                <td className="py-4 text-sm dark:text-white">
                  {item.teacher}
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <Eye
                      size={16}
                      className="cursor-pointer hover:text-blue-500"
                    />

                    <Pencil
                      size={16}
                      className="cursor-pointer hover:text-yellow-500"
                    />

                    <Trash2
                      size={16}
                      className="cursor-pointer hover:text-red-500"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesTable;