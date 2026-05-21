// import { useState } from "react";
// import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";

// const ClassesTable = ({ classes, onEdit, onDelete }) => {
//   const [hiddenRows, setHiddenRows] = useState({});

//   const toggleRowVisibility = (rowId) => {
//     setHiddenRows((prev) => ({
//       ...prev,
//       [rowId]: !prev[rowId],
//     }));
//   };
  
//   const getProgressColor = (percentage) => {
//     if (percentage >= 80) return "bg-red-500";
//     if (percentage >= 50) return "bg-yellow-500";

//     return "bg-green-500";
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full">
//         <thead className="border-b dark:border-gray-700">
//           <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
//             <th className="pb-3 font-medium">Class Name</th>
//             <th className="pb-3 font-medium">Level</th>
//             <th className="pb-3 font-medium">Shift</th>
//             <th className="pb-3 font-medium">Teacher</th>
//             <th className="pb-3 font-medium">Students</th>
//             <th className="pb-3 font-medium">Capacity</th>
//             <th className="pb-3 font-medium">Status</th>
//             <th className="pb-3 font-medium"></th>
//           </tr>
//         </thead>

//         <tbody>
//           {classes.map((item) => {
//             const percentage = (item.capacity / item.total) * 100;

//             return (
//               <tr
//                 key={item.id}
//                 className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
//               >
//                 <td className="py-4 text-sm dark:text-white">{hiddenRows[item.id] ? "****" : item.name}</td>

//                 <td className="py-4 text-sm dark:text-white">{hiddenRows[item.id] ? "****" : item.level}</td>

//                 <td className="py-4 text-sm dark:text-white">{hiddenRows[item.id] ? "****" : item.shift}</td>

//                 <td className="py-4 text-sm dark:text-white">{hiddenRows[item.id] ? "****" : item.teacher}</td>

//                 <td className="py-4 text-sm dark:text-white">{hiddenRows[item.id] ? "****" : item.capacity}</td>

//                 <td className="py-4">
//                   <div className="flex flex-col gap-1">
//                     <span className="text-sm dark:text-white">{hiddenRows[item.id] ? "****" : `${item.capacity}/${item.total}`}</span>

//                     <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className={`h-full ${getProgressColor(percentage)}`}
//                         style={{ width: `${percentage}%` }}
//                       />
//                     </div>
//                   </div>
//                 </td>

//                 <td className="py-4 text-sm dark:text-white">
//                   {Number(item.capacity) >= Number(item.total) ? (
//                     <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">Full</span>
//                   ) : (
//                     <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">Open</span>
//                   )}
//                 </td>

//                 <td className="py-4">
//                   <div className="flex items-center gap-3 text-gray-500">
//                     <button
//                       onClick={() => toggleRowVisibility(item.id)}
//                       className="hover:text-blue-500 transition"
//                     >
//                       {hiddenRows[item.id] ? (
//                         <EyeOff size={16} />
//                       ) : (
//                         <Eye size={16} />
//                       )}
//                     </button>

//                     <button onClick={() => onEdit?.(item)} className="hover:text-yellow-500">
//                       <Pencil size={16} />
//                     </button>

//                     <button onClick={() => onDelete?.(item.id)} className="hover:text-red-500">
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ClassesTable;





import { useState } from "react";
import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";

const ClassesTable = ({ classes, onEdit, onDelete }) => {
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
      <table className="w-full">
        <thead className="border-b dark:border-gray-700">
          <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
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
            const uniqueId = item._id; // Use MongoDB _id

            return (
              <tr
                key={uniqueId}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-4 text-sm dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.name}
                </td>
                <td className="py-4 text-sm dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.level}
                </td>
                <td className="py-4 text-sm dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.shift}
                </td>
                <td className="py-4 text-sm dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.teacher}
                </td>
                <td className="py-4 text-sm dark:text-white">
                  {hiddenRows[uniqueId] ? "****" : item.capacity}
                </td>
                <td className="py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm dark:text-white">
                      {hiddenRows[uniqueId] ? "****" : `${item.capacity}/${item.total}`}
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
                  {Number(item.capacity) >= Number(item.total) ? (
                    <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">
                      Full
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      Open
                    </span>
                  )}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <button
                      onClick={() => toggleRowVisibility(uniqueId)}
                      className="hover:text-blue-500 transition"
                    >
                      {hiddenRows[uniqueId] ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button onClick={() => onEdit?.(item)} className="hover:text-yellow-500">
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => onDelete?.(item._id)} className="hover:text-red-500">
                      <Trash2 size={16} />
                    </button>
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