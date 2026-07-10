import express from "express";

import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

import authenticate from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createEmployee);

router.get("/", authenticate, getEmployees);

router.get("/:id", authenticate, getEmployeeById);

router.put("/:id", authenticate, updateEmployee);

router.delete("/:id", authenticate, deleteEmployee);

export default router;