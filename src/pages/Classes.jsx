// import React from 'react'

// import TaskTable from "../components/dashboard/TaskTable";

// const Classes = () => {
//   const present = [
//     { id: "CIV-012001",
//       avatar: "https://i.pravatar.cc/40?img=1",
//       name: "Osas",
//       email: "osas@gmail.com",
//       date: "Apr 05 - Apr 10",
//       amount: "$1,000",
//       tax: "$40",
//       tags: ["bugs", "review"] },
//     { id: "CIV-012002",
//       avatar: "https://i.pravatar.cc/40?img=2",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["bugs", "review"] },
//     { id: "CIV-012003",
//       avatar: "https://i.pravatar.cc/40?img=3",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["bugs", "review"] },
//     { id: "CIV-012004",
//       avatar: "https://i.pravatar.cc/40?img=4",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["bugs", "review"] }
//   ];

//   const absent = [
//     { id: "CIV-012005",
//       avatar: "https://i.pravatar.cc/40?img=5",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"] },
//     { id: "CIV-012006",
//       avatar: "https://i.pravatar.cc/40?img=6",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"] },
//     { id: "CIV-012007",
//       avatar: "https://i.pravatar.cc/40?img=7",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"] }

//   ];

//   const partialPaid = [
//     { id: "CIV-012008",
//       avatar: "https://i.pravatar.cc/40?img=8",
//       name: "Mary",
//       email: "mary@gmail.com",
//       date: "Apr 02 - Apr 06",
//       amount: "$1,500",
//       tax: "$50",
//       tags: ["pending", "branding"] },
//     { id: "CIV-012009",
//       avatar: "https://i.pravatar.cc/40?img=9",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["pending", "branding"] },
//     { id: "CIV-0120010",
//       avatar: "https://i.pravatar.cc/40?img=10",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["pending", "branding"] }
//   ];

//   return (
//     <div className="space-y-6">
//       <TaskTable title="Present" tasks={present} />
//       <TaskTable title="Absent" tasks={absent} />
//       <TaskTable title="Partially Paid" tasks={partialPaid} />
//     </div>
//   );
// };

// export default Classes;
// .then((response) => {
//   if (response.data && response.data.data) {
//     const allTasks = response.data.data;
//     setTasks({
//       present: allTasks.filter((t) => t.tags.includes("review")),
//       absent: allTasks.filter((t) => t.tags.includes("done")),
//       partialPaid: allTasks.filter((t) => t.tags.includes("pending")),
//     });
//   }
// })
// .then((response) => {
//   if (response.data) {
//     // Expecting response like { present: [...], absent: [...], partialPaid: [...] }
//     console.log(response.data)
//     setTasks(response.data.data);
//   }
// })

// import React from 'react'

// import TaskTable from "../components/dashboard/TaskTable";
// Dummy data (fallback)
// const dummyData = {
//   present: [
//     {
//       id: "CIV-012001",
//       avatar: "https://i.pravatar.cc/40?img=1",
//       name: "Osas",
//       email: "osas@gmail.com",
//       date: "Apr 05 - Apr 10",
//       amount: "$1,000",
//       tax: "$40",
//       tags: ["bugs", "review"],
//     },
//     {
//       id: "CIV-012002",
//       avatar: "https://i.pravatar.cc/40?img=2",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["bugs", "review"],
//     },
//   ],
//   absent: [
//     {
//       id: "CIV-012005",
//       avatar: "https://i.pravatar.cc/40?img=5",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"],
//     },
//   ],
//   partialPaid: [
//     {
//       id: "CIV-012008",
//       avatar: "https://i.pravatar.cc/40?img=8",
//       name: "Mary",
//       email: "mary@gmail.com",
//       date: "Apr 02 - Apr 06",
//       amount: "$1,500",
//       tax: "$50",
//       tags: ["pending", "branding"],
//     },
//   ],
// };

// const Tasks = () => {
//   const present = [
//     { id: "CIV-012001",
//       avatar: "https://i.pravatar.cc/40?img=1",
//       name: "Osas",
//       email: "osas@gmail.com",
//       date: "Apr 05 - Apr 10",
//       amount: "$1,000",
//       tax: "$40",
//       tags: ["bugs", "review"] },
//     { id: "CIV-012002",
//       avatar: "https://i.pravatar.cc/40?img=2",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["bugs", "review"] },
//     { id: "CIV-012003",
//       avatar: "https://i.pravatar.cc/40?img=3",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["bugs", "review"] },
//     { id: "CIV-012004",
//       avatar: "https://i.pravatar.cc/40?img=4",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["bugs", "review"] }
//   ];

//   const absent = [
//     { id: "CIV-012005",
//       avatar: "https://i.pravatar.cc/40?img=5",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"] },
//     { id: "CIV-012006",
//       avatar: "https://i.pravatar.cc/40?img=6",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"] },
//     { id: "CIV-012007",
//       avatar: "https://i.pravatar.cc/40?img=7",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["done"] }

//   ];

//   const partialPaid = [
//     { id: "CIV-012008",
//       avatar: "https://i.pravatar.cc/40?img=8",
//       name: "Mary",
//       email: "mary@gmail.com",
//       date: "Apr 02 - Apr 06",
//       amount: "$1,500",
//       tax: "$50",
//       tags: ["pending", "branding"] },
//     { id: "CIV-012009",
//       avatar: "https://i.pravatar.cc/40?img=9",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["pending", "branding"] },
//     { id: "CIV-0120010",
//       avatar: "https://i.pravatar.cc/40?img=10",
//       name: "John",
//       email: "john@gmail.com",
//       date: "Apr 01 - Apr 03",
//       amount: "$2,000",
//       tax: "$60",
//       tags: ["pending", "branding"] }
//   ];

//   return (
//     <div className="space-y-6">
//       <TaskTable title="Present" tasks={present} />
//       <TaskTable title="Absent" tasks={absent} />
//       <TaskTable title="Partially Paid" tasks={partialPaid} />
//     </div>
//   );
// };

// export default Tasks;

import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskTable from "../components/dashboard/TaskTable";

const Classes = () => {
  const [tasks, setTasks] = useState({
    present: [],
    absent: [],
    partialPaid: [],
  });

  useEffect(() => {
    axios
      .get(
        "https://backend-dashboard-ax8aqfqxe-kingsanbo-9753s-projects.vercel.app/api/classes",
      )
      // .then((response) => {
      //   if (response.data && response.data.data) {
      //     const allTasks = response.data.data;
      //     setTasks({
      //       present: allTasks.filter((t) => t.status === "present"),
      //       absent: allTasks.filter((t) => t.status === "absent"),
      //       partialPaid: allTasks.filter((t) => t.status === "partialPaid"),
      //     });
      //   }
      // })
      // .catch((error) => {
      //   console.error("Error fetching tasks:", error);
      // });
      .then((response) => {
        // 🔍 LOGGING - see what the API actually returns
        console.log("=== API RESPONSE DEBUG ===");
        console.log("Full response object:", response);
        console.log("response.data:", response.data);
        console.log("Type of response.data:", typeof response.data);
        console.log("Is response.data an array?", Array.isArray(response.data));
        if (response.data && typeof response.data === "object") {
          console.log("Keys in response.data:", Object.keys(response.data));
        }
        console.log("response.data.data exists?", response.data?.data);
        if (response.data?.data) {
          console.log(
            "response.data.data is array?",
            Array.isArray(response.data.data),
          );
          console.log("First item (if any):", response.data.data[0]);
        }
        console.log("=========================");

        // Your existing logic unchanged
        if (response.data && response.data.data) {
          const allTasks = response.data.data;
          console.log("First task object keys:", Object.keys(allTasks[0]));
          console.log("Full first task:", allTasks[0]);
          setTasks({
            present: allTasks.filter((t) => t.status === "present"),
            absent: allTasks.filter((t) => t.status === "absent"),
            partialPaid: allTasks.filter((t) => t.status === "partialPaid"),
          });
        }
      });
  }, []);

  return (
    <div className="space-y-6">
      {/* <TaskTable title="All Tasks" tasks={tasks} /> */}

      {/* OR */}

      <TaskTable title="Present" tasks={tasks.present} />
      <TaskTable title="Absent" tasks={tasks.absent} />
      <TaskTable title="Partially Paid" tasks={tasks.partialPaid} />
    </div>
  );
};

export default Classes;
