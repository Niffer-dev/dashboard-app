// pages/SignUp.jsx
import { useState } from "react";
import signupBg from "../../assets/signupUI.svg";
import Input from "../../components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const initialFormData = {
  username: "",
  email: "",
  password: "",
  role: "student", // default role
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleRoleSelect(role) {
    setFormData({ ...formData, role });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
        formData
      );

      const storedUser =
        response.data.user ||
        response.data.data ||
        (response.data.user?.data ?? null) || {
          username: formData.username || formData.email,
          email: formData.email,
        };

      localStorage.setItem("user", JSON.stringify(storedUser));
      if (response.data.token) localStorage.setItem("token", response.data.token);

      window.dispatchEvent(new Event("authChange"));
      window.dispatchEvent(new Event("userChange"));

      toast.success("User registered successfully");
      setFormData(initialFormData);

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div
      className="
        w-full mx-auto mt-10 flex flex-col items-center
        md:flex-row md:gap-6
        lg:flex-row lg:gap-10
        h-screen rounded-md overflow-hidden backdrop-blur-md
        bg-gray-100 dark:bg-gray-900 transition-colors duration-300
      "
    >
      {/* Left side image */}
      <div className="bg-white dark:bg-gray-800 transition-colors duration-300 md:w-1/2 lg:w-100 lg:h-100 flex items-center justify-center">
        <img src={signupBg} alt="Signup illustration" className="w-full h-auto object-contain" />
      </div>

      {/* Right side form */}
      <div
        className="
          bg-gray-50 dark:bg-gray-800 h-full w-full
          p-5 md:p-6 lg:p-8
          flex flex-col gap-5 items-start
          md:justify-center lg:justify-center
          transition-colors duration-300
        "
      >
        <div className="mb-5">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            with{" "}
            <span className="text-purple-700 dark:text-purple-300 font-semibold">
              Sasiffer
            </span>
          </p>
        </div>

        {/* Role selection */}
        <div className="flex w-full justify-between">
          <button
            type="button"
            onClick={() => handleRoleSelect("teacher")}
            className={`text-sm md:text-base py-1 px-4 rounded-sm ${
              formData.role === "teacher"
                ? "bg-purple-800 text-white"
                : "border-2 border-purple-700 text-purple-700 dark:text-purple-300"
            }`}
          >
            I'm a teacher
          </button>
          <button
            type="button"
            onClick={() => handleRoleSelect("student")}
            className={`text-sm md:text-base py-1 px-4 rounded-sm ${
              formData.role === "student"
                ? "bg-purple-800 text-white"
                : "border-2 border-purple-700 text-purple-700 dark:text-purple-300"
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
            className="py-2 px-4 rounded-md bg-purple-800 text-white cursor-pointer active:scale-95 transition"
          >
            Sign up
          </button>
        </form>

        <small className="text-gray-600 dark:text-gray-400">
          I have an account?{" "}
          <Link to="/login" className="text-red-500 hover:text-red-600">
            Login
          </Link>
        </small>
      </div>
    </div>
  );
};

export default SignUp;
