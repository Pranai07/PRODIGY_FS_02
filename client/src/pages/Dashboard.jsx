import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiShield,
  FiCheckCircle,
  FiLogOut,
} from "react-icons/fi";
import toast from "react-hot-toast";

import { getProfile } from "../services/authService";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      setUser(res.data.user);
    } catch (error) {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="h-14 w-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <div className="bg-indigo-600 text-white px-8 py-5 flex justify-between items-center shadow-lg">

        <h1 className="text-2xl font-bold">
          🔒 SecureAuth
        </h1>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
        >
          <FiLogOut />
          Logout
        </button>

      </div>

      {/* Content */}

      <div className="max-w-5xl mx-auto py-12 px-5">

        <h2 className="text-4xl font-bold text-slate-800">
          Welcome 👋
        </h2>

        <p className="text-gray-500 mt-2 mb-8">
          You have successfully logged into the Secure Authentication System.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="flex items-center gap-3 mb-4">

              <FiUser className="text-indigo-600 text-2xl" />

              <h3 className="font-semibold text-xl">
                User Information
              </h3>

            </div>

            <p className="mb-2">
              <strong>Email:</strong>
            </p>

            <p className="text-gray-600">
              {user.email}
            </p>

            <div className="mt-5">

              <p className="mb-2">
                <strong>Role:</strong>
              </p>

              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                {user.role}
              </span>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="flex items-center gap-3 mb-4">

              <FiCheckCircle className="text-green-600 text-2xl" />

              <h3 className="font-semibold text-xl">
                Authentication Status
              </h3>

            </div>

            <div className="bg-green-100 rounded-xl p-4">

              <p className="text-green-700 font-semibold">
                ✅ Successfully Authenticated
              </p>

              <p className="text-gray-600 mt-2">
                Your session is active and protected using JWT Authentication.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;