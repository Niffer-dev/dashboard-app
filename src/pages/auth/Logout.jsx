// pages/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`,
          {},
          { withCredentials: true }
        );
      } catch (error) {
        console.error("Logout API error:", error);
      } finally {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("userChange"));
        window.dispatchEvent(new Event("authChange"));
        toast.success("Logged out successfully");
        navigate("/login", { replace: true });
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div
      className="
        flex items-center justify-center h-screen
        px-4 md:px-8 lg:px-16
        bg-gray-100 dark:bg-gray-900
        transition-colors duration-300
      "
    >
      <div className="text-center">
        {/* Spinner scales with breakpoints */}
        <div
          className="
            animate-spin rounded-full 
            h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 
            border-t-2 border-b-2 border-purple-800 mx-auto
          "
        ></div>
        {/* Text scales with breakpoints */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
          Logging out...
        </p>
      </div>
    </div>
  );
};

export default Logout;
