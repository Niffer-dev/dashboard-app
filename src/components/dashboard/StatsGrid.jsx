// import React from "react";
// import { useState } from 'react'
// import axios from 'axios'
// import StatCard from "../ui/StatCard";

// const initialStatData = {
//     totalEmployees: 0,
//     jobApplicants: 0,
//     revenue: 0,
//     attendance: 0
// }

// const StatsGrid = () => {
//   return (
//     <div className="grid grid-cols-2 gap-5 w-1/2">
//       <form action="">
//         <input>
//           <StatCard title="Total Employees" value="173" />
//         </input>
//         <input>
//           <StatCard title="Job Applicants" value="983" />
//         </input>
//         <input>
//           <StatCard title="Revenue" value="$4,842" />
//         </input>
//         <input>
//           <StatCard title="Attendance" value="95%" />
//         </input>
//       </form>

//       {/* <StatCard title="Total Employees" value="173" />
//       <StatCard title="Job Applicants" value="983" />
//       <StatCard title="Revenue" value="$4,842" />
//       <StatCard title="Attendance" value="100%" /> */}
//     </div>
//   );
// };

// export default StatsGrid;

import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
import axios from "axios";
import StatCard from "../ui/StatCard";

const initialStatData = {
  totalEmployees: 0,
  jobApplicants: 0,
  revenue: 0,
  attendance: 0,
};

const StatsGrid = () => {
  const [stats, setStats] = useState(initialStatData);

  //option1
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stats")
      .then((response) => {
        if (response.data.length > 0) {
          setStats(response.data[0]); // take the first stats document
        }
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });
  }, []);

  //option2
  // useEffect(() => {
  //   // Example: adjust URL to your backend endpoint
  //   axios
  //     .get("http://localhost:4200/api/stats")
  //     .then((response) => {
  //       setStats(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching stats:", error);
  //     });
  // }, []);

  return (
    <div className="grid grid-cols-2 gap-5 w-1/2">
      <StatCard title="Total Employees" value={stats.totalEmployees} />
      <StatCard title="Job Applicants" value={stats.jobApplicants} />
      <StatCard title="Revenue" value={`$${stats.revenue}`} />
      <StatCard title="Attendance" value={`${stats.attendance}%`} />
    </div>
  );
};

export default StatsGrid;
