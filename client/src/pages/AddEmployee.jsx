import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Layout from "../components/Layout";
import EmployeeForm from "../components/EmployeeForm";
import { createEmployee } from "../services/employeeService";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createEmployee(form);

      toast.success("Employee added successfully");

      navigate("/employees");
    } catch (error) {
      toast.error("Failed to add employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          Add Employee
        </div>

        <div className="card-body">

          <EmployeeForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
            buttonText="Add Employee"
          />

        </div>

      </div>

    </Layout>
  );
}