// pages/Logout.jsx (or components/LogoutButton.jsx)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Call backend logout endpoint (adjust URL as needed)
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`,
          {},
          {
            withCredentials: true, // important for clearing httpOnly cookie
          }
        );
      } catch (error) {
        console.error("Logout API error:", error);
        // Even if backend fails, clear frontend state
      } finally {
        // Remove token from localStorage
        localStorage.removeItem("token");
        // Dispatch custom event so App.jsx updates auth state
        window.dispatchEvent(new Event("authChange"));
        toast.success("Logged out successfully");
        // Redirect to login page
        navigate("/login", { replace: true });
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800 mx-auto"></div>
        <p className="mt-4 text-gray-600">Logging out...</p>
      </div>
    </div>
  );
};

export default Logout;