import { registerUser, loginUser } from "../services/auth.service.js";

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const result = await loginUser(req.body);

    res.cookie("accessToken", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
const logout = (req, res) => {
  res.clearCookie("accessToken");

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

export { register, login , logout };