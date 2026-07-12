import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();

// Security headers
app.use(helmet());

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Allow frontend requests
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://employeemanagementsystem-pg7z0au82-pranai07s-projects.vercel.app",
      "https://employeemanagementsystem-haf5u5n52-pranai07s-projects.vercel.app",
      "https://employeemanagementsystem-weld.vercel.app",
    ],
    credentials: true,
  })
);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Your Backend is running 🚀",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);
export default app;