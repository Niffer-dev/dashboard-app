// // import React from 'react'

// // import TaskTable from "../components/dashboard/TaskTable";

// // const Classes = () => {
// //   const present = [
// //     { id: "CIV-012001",
// //       avatar: "https://i.pravatar.cc/40?img=1", 
// //       name: "Osas", 
// //       email: "osas@gmail.com", 
// //       date: "Apr 05 - Apr 10", 
// //       amount: "$1,000", 
// //       tax: "$40", 
// //       tags: ["bugs", "review"] },
// //     { id: "CIV-012002",
// //       avatar: "https://i.pravatar.cc/40?img=2", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["bugs", "review"] },
// //     { id: "CIV-012003",
// //       avatar: "https://i.pravatar.cc/40?img=3", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["bugs", "review"] },
// //     { id: "CIV-012004",
// //       avatar: "https://i.pravatar.cc/40?img=4", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["bugs", "review"] }
// //   ];

// //   const absent = [
// //     { id: "CIV-012005",
// //       avatar: "https://i.pravatar.cc/40?img=5", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["done"] },
// //     { id: "CIV-012006",
// //       avatar: "https://i.pravatar.cc/40?img=6", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["done"] },
// //     { id: "CIV-012007",
// //       avatar: "https://i.pravatar.cc/40?img=7", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["done"] }
    
// //   ];

// //   const partialPaid = [
// //     { id: "CIV-012008",
// //       avatar: "https://i.pravatar.cc/40?img=8", 
// //       name: "Mary", 
// //       email: "mary@gmail.com", 
// //       date: "Apr 02 - Apr 06", 
// //       amount: "$1,500", 
// //       tax: "$50", 
// //       tags: ["pending", "branding"] },
// //     { id: "CIV-012009",
// //       avatar: "https://i.pravatar.cc/40?img=9", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["pending", "branding"] },
// //     { id: "CIV-0120010",
// //       avatar: "https://i.pravatar.cc/40?img=10", 
// //       name: "John", 
// //       email: "john@gmail.com", 
// //       date: "Apr 01 - Apr 03", 
// //       amount: "$2,000", 
// //       tax: "$60", 
// //       tags: ["pending", "branding"] }
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       <TaskTable title="Present" tasks={present} />
// //       <TaskTable title="Absent" tasks={absent} />
// //       <TaskTable title="Partially Paid" tasks={partialPaid} />
// //     </div>
// //   );
// // };

// // export default Classes;


// // import React from 'react'

// // import TaskTable from "../components/dashboard/TaskTable";

// // const Tasks = () => {
// //   const present = [
// //     { id: "CIV-012001",
// //       avatar: "https://i.pravatar.cc/40?img=1",
// //       name: "Osas",
// //       email: "osas@gmail.com",
// //       date: "Apr 05 - Apr 10",
// //       amount: "$1,000",
// //       tax: "$40",
// //       tags: ["bugs", "review"] },
// //     { id: "CIV-012002",
// //       avatar: "https://i.pravatar.cc/40?img=2",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["bugs", "review"] },
// //     { id: "CIV-012003",
// //       avatar: "https://i.pravatar.cc/40?img=3",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["bugs", "review"] },
// //     { id: "CIV-012004",
// //       avatar: "https://i.pravatar.cc/40?img=4",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["bugs", "review"] }
// //   ];

// //   const absent = [
// //     { id: "CIV-012005",
// //       avatar: "https://i.pravatar.cc/40?img=5",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["done"] },
// //     { id: "CIV-012006",
// //       avatar: "https://i.pravatar.cc/40?img=6",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["done"] },
// //     { id: "CIV-012007",
// //       avatar: "https://i.pravatar.cc/40?img=7",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["done"] }

// //   ];

// //   const partialPaid = [
// //     { id: "CIV-012008",
// //       avatar: "https://i.pravatar.cc/40?img=8",
// //       name: "Mary",
// //       email: "mary@gmail.com",
// //       date: "Apr 02 - Apr 06",
// //       amount: "$1,500",
// //       tax: "$50",
// //       tags: ["pending", "branding"] },
// //     { id: "CIV-012009",
// //       avatar: "https://i.pravatar.cc/40?img=9",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["pending", "branding"] },
// //     { id: "CIV-0120010",
// //       avatar: "https://i.pravatar.cc/40?img=10",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["pending", "branding"] }
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       <TaskTable title="Present" tasks={present} />
// //       <TaskTable title="Absent" tasks={absent} />
// //       <TaskTable title="Partially Paid" tasks={partialPaid} />
// //     </div>
// //   );
// // };

// // export default Tasks;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import TaskTable from "../components/dashboard/TaskTable";

// // Dummy data (fallback)
// // const dummyData = {
// //   present: [
// //     {
// //       id: "CIV-012001",
// //       avatar: "https://i.pravatar.cc/40?img=1",
// //       name: "Osas",
// //       email: "osas@gmail.com",
// //       date: "Apr 05 - Apr 10",
// //       amount: "$1,000",
// //       tax: "$40",
// //       tags: ["bugs", "review"],
// //     },
// //     {
// //       id: "CIV-012002",
// //       avatar: "https://i.pravatar.cc/40?img=2",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["bugs", "review"],
// //     },
// //   ],
// //   absent: [
// //     {
// //       id: "CIV-012005",
// //       avatar: "https://i.pravatar.cc/40?img=5",
// //       name: "John",
// //       email: "john@gmail.com",
// //       date: "Apr 01 - Apr 03",
// //       amount: "$2,000",
// //       tax: "$60",
// //       tags: ["done"],
// //     },
// //   ],
// //   partialPaid: [
// //     {
// //       id: "CIV-012008",
// //       avatar: "https://i.pravatar.cc/40?img=8",
// //       name: "Mary",
// //       email: "mary@gmail.com",
// //       date: "Apr 02 - Apr 06",
// //       amount: "$1,500",
// //       tax: "$50",
// //       tags: ["pending", "branding"],
// //     },
// //   ],
// // };

// const Classes = () => {
//   const [tasks, setTasks] = useState({
//   present: [{
//       id: "CIV-012001",
//       avatar: "https://i.pravatar.cc/40?img=1",
//       name: "Osas",
//       email: "osas@gmail.com",
//       date: "Apr 05 - Apr 10",
//       amount: "$1,000",
//       tax: "$40",
//       tags: ["bugs", "review"],
//     },],
//   absent: [{
//       id: "CIV-012005",
//       avatar: "https://i.pravatar.cc/40?img=5",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"],
//     },],
//   partialPaid: [{
//       id: "CIV-012008",
//       avatar: "https://i.pravatar.cc/40?img=8",
//       name: "Mary",
//       email: "mary@gmail.com",
//       date: "Apr 02 - Apr 06",
//       amount: "$1,500",
//       tax: "$50",
//       tags: ["pending", "branding"],
//     },]
// });


//   useEffect(() => {
//     axios
//       .get("http://localhost:4200/api/classes")
//       .then((response) => {
//         if (response.data && response.data.data) {
//           const allTasks = response.data.data;
//           setTasks({
//             present: allTasks.filter((t) => t.tags.includes("review")),
//             absent: allTasks.filter((t) => t.tags.includes("done")),
//             partialPaid: allTasks.filter((t) => t.tags.includes("pending")),
//           });
//         }
//       })
//       // .then((response) => {
//       //   if (response.data) {
//       //     // Expecting response like { present: [...], absent: [...], partialPaid: [...] }
//       //     console.log(response.data)
//       //     setTasks(response.data.data);
//       //   }
//       // })
//       .catch((error) => {
//         console.error("Error fetching tasks:", error);
//       });
//   }, []);

//   return (
//     <div className="space-y-6">
//       {/* <TaskTable title="All Tasks" tasks={tasks} /> */}

//       {/* OR */}

//       <TaskTable title="Present" tasks={tasks.present} />
//       <TaskTable title="Absent" tasks={tasks.absent} />
//       <TaskTable title="Partially Paid" tasks={tasks.partialPaid} />
//     </div>
//   );
// };

// export default Classes;


import ClassesTable from "../components/dashboard/ClassesTable";

const Classes = () => {

  const classes = [
    {
      id: 1,
      name: "Class 1",
      capacity: 28,
      total: 30,
      level: 4,
      shift: "MWF",
      teacher: "Ahmad Sheriff",
    },
    {
      id: 2,
      name: "Class 2",
      capacity: 10,
      total: 30,
      level: 3,
      shift: "MWF",
      teacher: "Ali Alfiyu",
    },
    {
      id: 3,
      name: "Class 3",
      capacity: 30,
      total: 50,
      level: 2,
      shift: "MWF",
      teacher: "Ali Alfiyu",
    },
    {
      id: 4,
      name: "Class 4",
      capacity: 20,
      total: 50,
      level: 3,
      shift: "MWF",
      teacher: "Ali Alfiyu",
    },
    {
      id: 5,
      name: "Class 5",
      capacity: 20,
      total: 40,
      level: 4,
      shift: "MWF",
      teacher: "Ali Alfiyu",
    },
  ];

  return (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-5">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold dark:text-white">
            Classes
          </h2>

          <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg">
            + Create Class
          </button>
        </div>

        {/* Table Component */}
        <ClassesTable classes={classes} />
      </div>
    </div>
  );
};

export default Classes;
