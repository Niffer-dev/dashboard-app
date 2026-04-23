import React from 'react'

import TaskTable from "../components/dashboard/TaskTable";

const Tasks = () => {
  const present = [
    { id: "CIV-012001",
      avatar: "https://i.pravatar.cc/40?img=1", 
      name: "Osas", 
      email: "osas@gmail.com", 
      date: "Apr 05 - Apr 10", 
      amount: "$1,000", 
      tax: "$40", 
      tags: ["bugs", "review"] },
    { id: "CIV-012002",
      avatar: "https://i.pravatar.cc/40?img=2", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["bugs", "review"] },
    { id: "CIV-012003",
      avatar: "https://i.pravatar.cc/40?img=3", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["bugs", "review"] },
    { id: "CIV-012004",
      avatar: "https://i.pravatar.cc/40?img=4", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["bugs", "review"] }
  ];

  const absent = [
    { id: "CIV-012005",
      avatar: "https://i.pravatar.cc/40?img=5", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["done"] },
    { id: "CIV-012006",
      avatar: "https://i.pravatar.cc/40?img=6", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["done"] },
    { id: "CIV-012007",
      avatar: "https://i.pravatar.cc/40?img=7", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["done"] }
    
  ];

  const partialPaid = [
    { id: "CIV-012008",
      avatar: "https://i.pravatar.cc/40?img=8", 
      name: "Mary", 
      email: "mary@gmail.com", 
      date: "Apr 02 - Apr 06", 
      amount: "$1,500", 
      tax: "$50", 
      tags: ["pending", "branding"] },
    { id: "CIV-012009",
      avatar: "https://i.pravatar.cc/40?img=9", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["pending", "branding"] },
    { id: "CIV-0120010",
      avatar: "https://i.pravatar.cc/40?img=10", 
      name: "John", 
      email: "john@gmail.com", 
      date: "Apr 01 - Apr 03", 
      amount: "$2,000", 
      tax: "$60", 
      tags: ["pending", "branding"] }
  ];

  return (
    <div className="space-y-6">
      <TaskTable title="Present" tasks={present} />
      <TaskTable title="Absent" tasks={absent} />
      <TaskTable title="Partially Paid" tasks={partialPaid} />
    </div>
  );
};

export default Tasks;