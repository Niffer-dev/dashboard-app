// pages/Login.jsx
import { useState, useEffect } from "react";
import loginBg from "../../assets/loginUI.svg";
import Input from "../../components/ui/Input";
import DarkModeToggle from "../../components/ui/DarkModeToggle";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useDarkMode } from "../../hooks/useDarkMode";


const Login = () => {
  const navigate = useNavigate();
  const { dark, toggle } = useDarkMode();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard", { replace: true });
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        { email: form.email, password: form.password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        if (response.data.token) localStorage.setItem("token", response.data.token);
        const storedUser =
          response.data.user ||
          response.data.data ||
          (response.data.user?.data ?? null) ||
          { email: form.email };
        localStorage.setItem("user", JSON.stringify(storedUser));

        window.dispatchEvent(new Event("userChange"));
        window.dispatchEvent(new Event("authChange"));
        toast.success("Login successful!");
        navigate("/dashboard", { replace: true });
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        const message = error.response.data?.message || "Invalid email or password";
        toast.error(message);
        setErrors({ general: message });
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="
        relative w-full mx-auto mt-10 flex flex-col items-center
        md:flex-row md:gap-6
        lg:flex-row lg:gap-10
        h-screen rounded-md overflow-hidden
        backdrop-blur-md bg-gray-100 dark:bg-gray-900
        transition-colors duration-300
      "
    >
      {/* Left side image */}
      <div className="absolute top-4 right-4 z-20">
        <DarkModeToggle darkMode={dark} onToggle={toggle} />
      </div>
      <div className="bg-white dark:bg-gray-800 transition-colors duration-300 md:w-1/2 lg:w-100 lg:h-100 flex items-center justify-center">
        <img src={loginBg} alt="Login illustration" className="w-full h-auto object-contain" />
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
            Welcome Back
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Login and gain full access to thousands of exciting tutoring and mentorship opportunities.
          </p>
        </div>

        {/* Role selection buttons */}
        <div className="flex w-full justify-between">
          <button
            type="button"
            className="text-sm md:text-base py-1 px-4 rounded-sm bg-purple-800 text-white"
          >
            I'm a teacher
          </button>
          <button
            className="text-sm md:text-base py-1 px-4 rounded-sm border-2 border-purple-700 text-purple-700 cursor-pointer dark:text-purple-300 active:scale-95 transition"
          >
            I'm a student
          </button>
        </div>

        {/* Login form */}
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

          {errors.general && <p className="text-red-500 text-xs">{errors.general}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className={`py-2 px-4 rounded-md bg-purple-800 text-white ${
              isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <small className="text-gray-600 dark:text-gray-400">
          I don't have an account?{" "}
          <Link to="/sign-up" className="text-red-500 hover:text-red-600">
            Sign up
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
