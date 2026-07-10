export default function EmployeeForm({
  form,
  handleChange,
  handleSubmit,
  loading,
  buttonText,
}) {
  return (
    <form onSubmit={handleSubmit}>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label>Name</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Phone</label>
          <input
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Department</label>
          <input
            className="form-control"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Designation</label>
          <input
            className="form-control"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Salary</label>
          <input
            type="number"
            className="form-control"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6 mb-4">
          <label>Joining Date</label>
          <input
            type="date"
            className="form-control"
            name="joiningDate"
            value={form.joiningDate}
            onChange={handleChange}
            required
          />
        </div>

      </div>

      <button
        className="btn btn-success"
        disabled={loading}
      >
        {loading ? "Saving..." : buttonText}
      </button>

    </form>
  );
}