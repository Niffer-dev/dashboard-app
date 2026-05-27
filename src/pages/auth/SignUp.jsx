// pages/SignUp.jsx
import { useState } from "react";
import signupBg from "../../assets/signupUI.svg";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const initialFormData = {
  username: "",
  email: "",
  password: "",
  role: "student", // default role
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handle role selection
  function handleRoleSelect(role) {
    setFormData({ ...formData, role });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,

        formData,
        // { withCredentials: true },
      );

      if (response.status !== 201) {
        alert("Something went wrong!");
      } else {
        toast.success("User registered successfully");
        setFormData(initialFormData); // reset form after success
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="w-full lg:w-200 mx-auto mt-10 flex lg:flex-row flex-col items-center lg:gap-10 h-screen lg:h-130 rounded-md overflow-hidden backdrop-blur-md">
      {/* Left side image */}
      <div className="bg-white">
        <div className="w-full h-fit lg:w-100 lg:h-100 flex items-center justify-center">
          <img src={signupBg} alt="Signup illustration" />
        </div>
      </div>

      {/* Right side form */}
      <div className="bg-gray-50 h-full w-full p-5 lg:p-5 flex flex-col gap-5 items-start lg:justify-center">
        <div className="mb-5">
          <h1 className="lg:text-3xl text-2xl font-bold">Create an Account</h1>
          <p className="text-sm text-gray-500">
            with{" "}
            <span className="text-purple-700 font-semibold">
              Backend Project
            </span>
          </p>
        </div>

        {/* Role selection */}
        <div className="flex w-full justify-between">
          <button
            type="button"
            onClick={() => handleRoleSelect("teacher")}
            className={`text-sm py-1 px-4 rounded-sm ${
              formData.role === "teacher"
                ? "bg-purple-800 text-white"
                : "border-2 border-purple-700 text-purple-700"
            }`}
          >
            I'm a teacher
          </button>
          <button
            type="button"
            onClick={() => handleRoleSelect("student")}
            className={`text-sm py-1 px-4 rounded-sm ${
              formData.role === "student"
                ? "bg-purple-800 text-white"
                : "border-2 border-purple-700 text-purple-700"
            }`}
          >
            I'm a student
          </button>
        </div>

        {/* Signup form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <Input
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="py-2 px-4 rounded-md bg-purple-800 text-white cursor-pointer"
          >
            Sign up
          </button>
        </form>

        <small>
          I have an account?{" "}
          <Link to={"/login"} className="text-red-500 hover:text-red-600">
            Login
          </Link>
        </small>
      </div>
    </div>
  );
};

export default SignUp;
