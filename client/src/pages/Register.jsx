import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiUserPlus, FiUser } from "react-icons/fi";
import toast from "react-hot-toast";

import Button from "../components/Button";
import Input from "../components/Input";
import { registerUser } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form clicked");

    if (!form.name || !form.email || !form.password) {
      return toast.error("Please fill in all fields.");
    }

    if (form.password.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }

    try {
      setLoading(true);

      const res = await registerUser(form);

      toast.success(res.data.message);

      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex justify-center items-center px-5">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
        <div className="flex justify-center mb-4">
          <div className="bg-indigo-100 p-4 rounded-full">
            <FiUserPlus size={35} className="text-indigo-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-slate-800">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join SecureAuth today
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                autoComplete="new-password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <Button type="submit" loading={loading}>
            Create Account
          </Button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 SecureAuth. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
