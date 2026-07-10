import { useEffect, useState } from "react";
import { FaUsers, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import StatsCard from "../components/StatsCard";
import { getEmployees } from "../services/employeeService";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data.employees || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  const totalEmployees = employees.length;

  const departments = new Set(
    employees.map(emp => emp.department)
  ).size;

  const averageSalary =
    totalEmployees > 0
      ? Math.round(
          employees.reduce(
            (sum, emp) => sum + Number(emp.salary),
            0
          ) / totalEmployees
        )
      : 0;

  return (
    <Layout>

      <h2 className="fw-bold mb-4">
        Employee Dashboard
      </h2>

      <div className="row g-4">

        <StatsCard
          title="Employees"
          value={totalEmployees}
          color="primary"
          icon={<FaUsers />}
        />

        <StatsCard
          title="Departments"
          value={departments}
          color="success"
          icon={<FaBuilding />}
        />

        <StatsCard
          title="Average Salary"
          value={`₹${averageSalary}`}
          color="warning"
          icon={<FaMoneyBillWave />}
        />

      </div>

      <div className="card mt-5 shadow">

        <div className="card-header bg-primary text-white">
          Recent Employees
        </div>

        <div className="card-body">

          <table className="table table-hover">

            <thead>

              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Salary</th>
              </tr>

            </thead>

            <tbody>

              {employees.slice(0, 5).map(emp => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.designation}</td>
                  <td>
                    ₹{Number(emp.salary).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>
  );
}