import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Layout from "../components/Layout";
import Loader from "../components/Loader";
import DeleteModal from "../components/DeleteModal";

import {
  getEmployees,
  deleteEmployee,
} from "../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const res = await getEmployees();

      setEmployees(res.data.employees || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedEmployee(null);
    setShowModal(false);
  };

  const handleDelete = async () => {
    try {
      await deleteEmployee(selectedEmployee.id);

      toast.success("Employee deleted successfully");

      closeDeleteModal();

      fetchEmployees();
    } catch (error) {
      console.error(error);
      toast.error("Unable to delete employee");
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    const keyword = search.toLowerCase();

    return (
      emp.name.toLowerCase().includes(keyword) ||
      emp.email.toLowerCase().includes(keyword) ||
      emp.department.toLowerCase().includes(keyword)
    );
  });

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
    return (
    <Layout>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Employee Management
          </h2>

          <p className="text-muted mb-0">
            Total Employees :
            <span className="fw-bold text-primary">
              {" "}
              {filteredEmployees.length}
            </span>
          </p>
        </div>

        <div>

          <button
            className="btn btn-outline-secondary me-2"
            onClick={fetchEmployees}
          >
            🔄 Refresh
          </button>

          <Link
            to="/employees/add"
            className="btn btn-primary"
          >
            ➕ Add Employee
          </Link>

        </div>

      </div>

      {/* Search Card */}
      <div className="card shadow-sm mb-4">

        <div className="card-body">

          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search by Name, Email or Department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* Employee Table */}
      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          Employee List
        </div>

        <div className="table-responsive">

          <table className="table table-hover table-striped mb-0">

            <thead className="table-dark">

              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Joining Date</th>
                <th className="text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredEmployees.length > 0 ? (

                filteredEmployees.map((emp, index) => (

                  <tr key={emp.id}>

                    <td>{index + 1}</td>

                    <td>
                      <strong>{emp.name}</strong>
                    </td>

                    <td>{emp.email}</td>

                    <td>{emp.phone}</td>

                    <td>

                      <span className="badge bg-info text-dark">
                        {emp.department}
                      </span>

                    </td>

                    <td>{emp.designation}</td>

                    <td>
                      ₹{Number(emp.salary).toLocaleString("en-IN")}
                    </td>

                    <td>
                      {new Date(emp.joiningDate).toLocaleDateString()}
                    </td>

                    <td className="text-center">

                      <Link
                        to={`/employees/edit/${emp.id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        ✏️
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => openDeleteModal(emp)}
                      >
                        🗑️
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="9"
                    className="text-center py-5"
                  >

                    <h4 className="text-muted">
                      No Employees Found
                    </h4>

                    <p>
                      Click the <strong>Add Employee</strong> button to create your first employee.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
            {/* Delete Confirmation Modal */}
      <DeleteModal
        show={showModal}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />

    </Layout>
  );
}