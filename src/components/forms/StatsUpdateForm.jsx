// components/forms/StatsUpdateForm.jsx
import React, { useState } from "react";
import axios from "axios";

const StatsUpdateForm = () => {
  const [formData, setFormData] = useState({
    totalEmployees: "",
    jobApplicants: "",
    revenue: "",
    attendance: "",
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

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/stats`,
        {
          totalEmployees: parseInt(formData.totalEmployees, 10) || 0,
          jobApplicants: parseInt(formData.jobApplicants, 10) || 0,
          revenue: parseFloat(formData.revenue) || 0,
          attendance: parseFloat(formData.attendance) || 0,
        },
        { withCredentials: true }
      );

      if (response.status === 200 || response.status === 201) {
        setMessage("Stats updated successfully!");
        setFormData({ totalEmployees: "", jobApplicants: "", revenue: "", attendance: "" });
      } else {
        setMessage("Update failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error: " + (error.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black p-4 rounded-xl shadow-sm mt-5">
      <h3 className="font-semibold text-lg mb-3 text-white">Update Dashboard Stats</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Employees</label>
            <input type="number" name="totalEmployees" value={formData.totalEmployees} onChange={handleChange} className="mt-1 w-full border rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Applicants</label>
            <input type="number" name="jobApplicants" value={formData.jobApplicants} onChange={handleChange} className="mt-1 w-full border rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Revenue ($)</label>
            <input type="number" name="revenue" value={formData.revenue} onChange={handleChange} className="mt-1 w-full border rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Attendance (%)</label>
            <input type="number" name="attendance" value={formData.attendance} onChange={handleChange} step="0.01" className="mt-1 w-full border rounded-md p-2" required />
          </div>
        </div>
        <button
  type="submit"
  disabled={isSubmitting}
  className="w-full mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
>
  {isSubmitting ? "Updating..." : "Update Stats"}
</button>

        {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default StatsUpdateForm;