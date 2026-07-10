import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

import { loginUser } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
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

    if (!form.email || !form.password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await loginUser(form);

      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right,#4f46e5,#7c3aed)"
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "430px", borderRadius: "15px" }}
      >
        <div className="text-center mb-4">
          <FaLock
            size={45}
            className="text-primary"
          />

          <h2 className="mt-3 fw-bold">
            Employee Management
          </h2>

          <p className="text-muted">
            Login to continue
          </p>
        </div>

        <form onSubmit={handleSubmit}>

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

          <div className="mb-4">

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

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}