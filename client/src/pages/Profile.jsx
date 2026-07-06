import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiShield,
  FiHash,
  FiArrowLeft,
} from "react-icons/fi";

import { getProfile } from "../services/authService";

const Profile = () => {
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

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="h-14 w-14 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-5">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl">

        <div className="flex flex-col items-center">

          <div className="h-28 w-28 rounded-full bg-indigo-600 flex items-center justify-center text-white text-5xl">
            <FiUser />
          </div>

          <h1 className="text-3xl font-bold mt-5">
            User Profile
          </h1>

          <p className="text-gray-500">
            Secure Authentication System
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-4 border rounded-xl p-4">

            <FiHash className="text-indigo-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-500">
                User ID
              </p>

              <p className="font-semibold break-all">
                {user.id}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 border rounded-xl p-4">

            <FiMail className="text-indigo-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-500">
                Email Address
              </p>

              <p className="font-semibold">
                {user.email}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4 border rounded-xl p-4">

            <FiShield className="text-indigo-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-500">
                User Role
              </p>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                {user.role}
              </span>
            </div>

          </div>

        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <FiArrowLeft />
          Back to Dashboard
        </button>

      </div>

    </div>
  );
};

export default Profile;