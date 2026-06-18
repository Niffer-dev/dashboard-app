import React, { useState } from "react";
import axios from "axios";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const ranges = ["daily", "weekly", "monthly"];

const AttendanceEntryForm = () => {
  const [formData, setFormData] = useState({
    day: "Mon",
    present: "",
    absent: "",
    range: "daily",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const presentNum = parseInt(formData.present, 10);
    const absentNum = parseInt(formData.absent, 10);

    if (isNaN(presentNum) || isNaN(absentNum)) {
      setMessage("Please enter valid numbers for Present and Absent.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/attendance`,
        {
          day: formData.day,
          present: presentNum,
          absent: absentNum,
          range: formData.range,
        },
        { withCredentials: true }
      );

      if (response.status === 200 || response.status === 201) {
        setMessage(`Attendance for ${formData.day} (${formData.range}) saved!`);
        setFormData({ ...formData, present: "", absent: "" });
      } else {
        setMessage("Failed to save attendance.");
      }
    } catch (error) {
      console.error("Error saving attendance:", error);
      setMessage("Error: " + (error.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="bg-black p-4 sm:p-6 rounded-xl shadow-sm mt-5 h-full flex flex-col">
    <h3 className="font-semibold text-lg mb-3 text-white">
      Add / Update Attendance Report
    </h3>

    {/* Form fills the card vertically */}
    <form onSubmit={handleSubmit} className="flex flex-col grow">
      {/* Inputs grid expands */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 grow">
        {/* Day */}
        <div>
          <label className="block text-sm font-medium text-white">Day</label>
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md p-2 bg-black text-white"
          >
            {daysOfWeek.map((day) => (
              <option key={day} value={day} className="bg-black text-white">
                {day}
              </option>
            ))}
          </select>
        </div>

        {/* Present */}
        <div>
          <label className="block text-sm font-medium text-white">Present</label>
          <input
            type="number"
            name="present"
            value={formData.present}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md p-2 bg-black text-white"
            required
          />
        </div>

        {/* Absent */}
        <div>
          <label className="block text-sm font-medium text-white">Absent</label>
          <input
            type="number"
            name="absent"
            value={formData.absent}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md p-2 bg-black text-white"
            required
          />
        </div>

        {/* Range */}
        <div>
          <label className="block text-sm font-medium text-white">Range</label>
          <select
            name="range"
            value={formData.range}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md p-2 bg-black text-white"
          >
            {ranges.map((r) => (
              <option key={r} value={r} className="bg-black text-white">
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Button anchored at bottom */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-300"
      >
        {isSubmitting ? "Saving..." : "Save Attendance"}
      </button>

      {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
    </form>
  </div>
);

};

export default AttendanceEntryForm;



// // components/forms/AttendanceEntryForm.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const ranges = ["daily", "weekly", "monthly"];

// const AttendanceEntryForm = () => {
//   const [formData, setFormData] = useState({
//     day: "Mon",
//     present: "",
//     absent: "",
//     range: "daily",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setMessage("");

//     const presentNum = parseInt(formData.present, 10);
//     const absentNum = parseInt(formData.absent, 10);

//     if (isNaN(presentNum) || isNaN(absentNum)) {
//       setMessage("Please enter valid numbers for Present and Absent.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/attendance`,
//         {
//           day: formData.day,
//           present: presentNum,
//           absent: absentNum,
//           range: formData.range,
//         },
//         { withCredentials: true }
//       );

//       if (response.status === 200 || response.status === 201) {
//         setMessage(`Attendance for ${formData.day} (${formData.range}) saved!`);
//         setFormData({ ...formData, present: "", absent: "" });
//       } else {
//         setMessage("Failed to save attendance.");
//       }
//     } catch (error) {
//       console.error("Error saving attendance:", error);
//       setMessage("Error: " + (error.response?.data?.message || error.message));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-black p-4 rounded-xl shadow-sm mt-5 flex flex-col h-full">
//       <h3 className="font-semibold text-lg mb-3 text-white">
//         Add / Update Attendance Report
//       </h3>

//       <form onSubmit={handleSubmit} className="flex flex-col grow">
//         <div className="grid grid-cols-4 gap-4 grow">
//           {/* Day */}
//           <div>
//             <label className="block text-sm font-medium text-white">Day</label>
//             <select
//               name="day"
//               value={formData.day}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//             >
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day} className="bg-black text-white">
//                   {day}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Present */}
//           <div>
//             <label className="block text-sm font-medium text-white">Present</label>
//             <input
//               type="number"
//               name="present"
//               value={formData.present}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//               required
//             />
//           </div>

//           {/* Absent */}
//           <div>
//             <label className="block text-sm font-medium text-white">Absent</label>
//             <input
//               type="number"
//               name="absent"
//               value={formData.absent}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//               required
//             />
//           </div>

//           {/* Range */}
//           <div>
//             <label className="block text-sm font-medium text-white">Range</label>
//             <select
//               name="range"
//               value={formData.range}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//             >
//               {ranges.map((r) => (
//                 <option key={r} value={r} className="bg-black text-white">
//                   {r.charAt(0).toUpperCase() + r.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Button anchored at bottom */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-300"
//         >
//           {isSubmitting ? "Saving..." : "Save Attendance"}
//         </button>

//         {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default AttendanceEntryForm;




// // components/forms/AttendanceEntryForm.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const ranges = ["daily", "weekly", "monthly"];

// const AttendanceEntryForm = () => {
//   const [formData, setFormData] = useState({
//     day: "Mon",
//     present: "",
//     absent: "",
//     range: "daily",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setMessage("");

//     const presentNum = parseInt(formData.present, 10);
//     const absentNum = parseInt(formData.absent, 10);

//     if (isNaN(presentNum) || isNaN(absentNum)) {
//       setMessage("Please enter valid numbers for Present and Absent.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // POST to your attendance endpoint – expects { day, present, absent, range }
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_BASE_URL}/api/attendance`,
//         {
//           day: formData.day,
//           present: presentNum,
//           absent: absentNum,
//           range: formData.range,
//         },
//         { withCredentials: true },
//       );

//       if (response.status === 200 || response.status === 201) {
//         setMessage(`Attendance for ${formData.day} (${formData.range}) saved!`);
//         setFormData({ ...formData, present: "", absent: "" });
//       } else {
//         setMessage("Failed to save attendance.");
//       }
//     } catch (error) {
//       console.error("Error saving attendance:", error);
//       setMessage("Error: " + (error.response?.data?.message || error.message));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-black p-4 rounded-xl shadow-sm mt-5">
//       <h3 className="font-semibold text-lg mb-3">
//         Add / Update Attendance Report
//       </h3>
//       <form onSubmit={handleSubmit} className="flex flex-col h-full">
//         <div className="grid grid-cols-4 gap-4 grow">
//           {/* Day */}
//           <div>
//             <label className="block text-sm font-medium text-white">Day</label>
//             <select
//               name="day"
//               value={formData.day}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//             >
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day} className="bg-black text-white">
//                   {day}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Present */}
//           <div>
//             <label className="block text-sm font-medium text-white">
//               Present
//             </label>
//             <input
//               type="number"
//               name="present"
//               value={formData.present}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//               required
//             />
//           </div>

//           {/* Absent */}
//           <div>
//             <label className="block text-sm font-medium text-white">
//               Absent
//             </label>
//             <input
//               type="number"
//               name="absent"
//               value={formData.absent}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//               required
//             />
//           </div>

//           {/* Range */}
//           <div>
//             <label className="block text-sm font-medium text-white">
//               Range
//             </label>
//             <select
//               name="range"
//               value={formData.range}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2 bg-black text-white"
//             >
//               {ranges.map((r) => (
//                 <option key={r} value={r} className="bg-black text-white">
//                   {r.charAt(0).toUpperCase() + r.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Button anchored at bottom */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-300"
//         >
//           {isSubmitting ? "Saving..." : "Save Attendance"}
//         </button>

//         {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
//       </form>

//       {/* <form onSubmit={handleSubmit} className="space-y-3">
//         <div className="grid grid-cols-4 gap-4 items-end">
//           <div className="bg-black text-white">
//             <label className="block text-sm font-medium text-gray-700">
//               Day
//             </label>
//             <select
//               name="day"
//               value={formData.day}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2"
//             >
//               {daysOfWeek.map((day) => (
//                 <option key={day} value={day} className="bg-black text-white">
//                   {day}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Present
//             </label>
//             <input
//               type="number"
//               name="present"
//               value={formData.present}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Absent
//             </label>
//             <input
//               type="number"
//               name="absent"
//               value={formData.absent}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Range
//             </label>
//             <select
//               name="range"
//               value={formData.range}
//               onChange={handleChange}
//               className="mt-1 w-full border rounded-md p-2"
//             >
//               {ranges.map((r) => (
//                 <option key={r} value={r} className="bg-black text-white">
//                   {r.charAt(0).toUpperCase() + r.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-300"
//         >
//           {isSubmitting ? "Saving..." : "Save Attendance"}
//         </button>
//         {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
//       </form> */}
//     </div>
//   );
// };

// export default AttendanceEntryForm;



