import prisma from "../config/prisma.js";

// Create Employee
export const createEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      department,
      designation,
      salary,
      joiningDate,
    } = req.body;

    const employee = await prisma.employee.create({
      data: {
        name,
        email,
        phone,
        department,
        designation,
        salary: parseFloat(salary),
        joiningDate: new Date(joiningDate),
      },
    });

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Employee By Id
export const getEmployeeById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const employee = await prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Employee
export const updateEmployee = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const {
      name,
      email,
      phone,
      department,
      designation,
      salary,
      joiningDate,
    } = req.body;

    const employee = await prisma.employee.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        department,
        designation,
        salary: parseFloat(salary),
        joiningDate: new Date(joiningDate),
      },
    });

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.employee.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};