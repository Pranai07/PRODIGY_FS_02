import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";
import { generateAccessToken } from "../utils/jwt.js";

const registerUser = async (userData) => {
  const { fullName, email, password } = userData;

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const SALT_ROUNDS = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      fullName,
      email: email.toLowerCase(),
      password: hashedPassword,
    },
  });

  const { password: _, ...safeUser } = user;

  return safeUser;
};

const loginUser = async (userData) => {
  const { email, password } = userData;

  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateAccessToken(user);

  const { password: _, ...safeUser } = user;

  return {
    token,
    user: safeUser,
  };
};

export { registerUser, loginUser };