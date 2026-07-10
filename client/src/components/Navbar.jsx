import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaHome, FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { logoutUser } from "../services/authService";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();

      localStorage.removeItem("token");

      toast.success("Logged out successfully");

      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/dashboard">
          <FaUsers className="me-2" />
          EMS
        </Link>

        <div className="ms-auto d-flex">

          <Link
            className="btn btn-light me-2"
            to="/dashboard"
          >
            <FaHome className="me-2" />
            Dashboard
          </Link>

          <Link
            className="btn btn-warning me-2"
            to="/employees"
          >
            Employees
          </Link>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}