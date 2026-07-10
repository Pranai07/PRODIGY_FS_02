import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import toast from "react-hot-toast";

import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await registerUser({
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      });

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background:
          "linear-gradient(to right,#4f46e5,#7c3aed)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "450px",
          borderRadius: "15px",
        }}
      >
        <div className="text-center mb-4">

          <FaUser
            size={45}
            className="text-success"
          />

          <h2 className="mt-3 fw-bold">
            Create Account
          </h2>

          <p className="text-muted">
            Register to continue
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>Full Name</label>

            <div className="input-group">

              <span className="input-group-text">
                <FaUser />
              </span>

              <input
                type="text"
                className="form-control"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="mb-3">

            <label>Email</label>

            <div className="input-group">

              <span className="input-group-text">
                <FaEnvelope />
              </span>

              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="mb-3">

            <label>Password</label>

            <div className="input-group">

              <span className="input-group-text">
                <FaLock />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

          </div>

          <div className="mb-4">

            <label>Confirm Password</label>

            <div className="input-group">

              <span className="input-group-text">
                <FaLock />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <button
            className="btn btn-success w-100"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}