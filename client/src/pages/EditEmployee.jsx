import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Layout from "../components/Layout";
import Loader from "../components/Loader";
import EmployeeForm from "../components/EmployeeForm";

import {
  getEmployeeById,
  updateEmployee,
} from "../services/employeeService";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const res = await getEmployeeById(id);

      const emp = res.data.employee;

      setForm({
        name: emp.name,
        email: emp.email,
        phone: emp.phone,
        department: emp.department,
        designation: emp.designation,
        salary: emp.salary,
        joiningDate: emp.joiningDate.split("T")[0],
      });
    } catch (error) {
      toast.error("Unable to load employee");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateEmployee(id, form);

      toast.success("Employee updated successfully");

      navigate("/employees");
    } catch (error) {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <Layout>

      <div className="card shadow">

        <div className="card-header bg-warning">
          <h4 className="mb-0">
            Edit Employee
          </h4>
        </div>

        <div className="card-body">

          <EmployeeForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={saving}
            buttonText="Update Employee"
          />

        </div>

      </div>

    </Layout>
  );
}