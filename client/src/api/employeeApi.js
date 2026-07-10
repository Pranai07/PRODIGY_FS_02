import API from "./axios";

export const getEmployees = () => {
  return API.get("/employees");
};

export const getEmployeeById = (id) => {
  return API.get(`/employees/${id}`);
};

export const createEmployee = (data) => {
  return API.post("/employees", data);
};

export const updateEmployee = (id, data) => {
  return API.put(`/employees/${id}`, data);
};

export const deleteEmployee = (id) => {
  return API.delete(`/employees/${id}`);
};