import { useState, useEffect } from "react";
import loginBg from "../../assets/loginUI.svg";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // If already logged in, redirect to dashboard
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear frontend error for that field when user starts typing
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

    if (Object.keys(validationErrors).length === 0) {

      toast.success("Login successful!");

      setTimeout(()=>{
        navigate("/", { replace: true });
      }, 1500);
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        {
          email: form.email,
          password: form.password,
        },
        {
          withCredentials: true, // ✅ important: allows the httpOnly cookie to be set
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.data.success) {
        // Store token in localStorage (key must be "token" to match ProtectedRoute)
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        // Dispatch custom event so App.jsx updates authentication state
        window.dispatchEvent(new Event("authChange"));
        toast.success("Login successful!");
        // Navigate to the dashboard (protected route)
        navigate("/dashboard", { replace: true });
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle different error scenarios
      if (error.response) {
        // Server responded with a status other than 2xx
        const message =
          error.response.data?.message || "Invalid email or password";
        toast.error(message);
        // Optionally set a general error message
        setErrors({ general: message });
      } else if (error.request) {
        // Request was made but no response
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-200 mx-auto mt-10 flex lg:flex-row flex-col  items-center lg:gap-10 h-screen lg:h-130 rounded-md overflow-hidden backdrop-blur-md bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="w-full h-fit lg:w-100 lg:h-100 flex items-center justify-center"> 
          <img src={loginBg} alt="image" />
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 h-full w-full p-5 lg:p-8 flex flex-col gap-5 items-start lg:justify-center transition-colors duration-300">
        <div className="mb-5">
          <h1 className="lg:text-3xl md:text-2xl text-lg font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Login and gain full access to thousands of eciting tutoring and
            mentorship opportunities.
          </p>
        </div>

        {/* Role selection buttons (just UI for now, role is determined by backend from stored user data) */}
        <div className="flex w-full justify-between">
          <button
            type="button"
            className="text-sm py-1 px-4 rounded-sm bg-purple-800 text-white"
          >
            I'm a teacher
          </button>
          <button className="text-sm py-1 px-4 rounded-sm border-2 border-purple-700 text-purple-700 cursor-pointer dark:text-purple-300 active:scale-95 transition">
            I'm a student
          </button>
        </div>

        <form
          className="w-full lg:w-full flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}

          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}

          {errors.general && (
            <p className="text-red-500 text-xs">{errors.general}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`py-2 px-4 rounded-md bg-purple-800 text-white cursor-pointer ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <small className="text-gray-600 dark:text-gray-400">
          I don't have an account? <Link to={"/sign-up"} className="text-red-500 hover:text-red-600">Sign up</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
