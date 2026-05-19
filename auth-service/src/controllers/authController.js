import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import prisma from "../config/prisma.js";

export const register = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    // CHECK EXISTING USER
    const existingUser =
      await prisma.user.findUnique({
        where: { email },
      });

    if (existingUser) {
      return res.status(400).json({
        message:
          "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // CREATE USER
    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password:
            hashedPassword,
        },
      });

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
      token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Registration failed",
    });
  }
};

export const login = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    // FIND USER
    const user =
      await prisma.user.findUnique({
        where: { email },
      });

    if (!user) {
      return res.status(401).json({
        message:
          "Invalid email",
      });
    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(401).json({
        message:
          "Invalid password",
      });
    }

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Login failed",
      error:
        error.message,
    });
  }
};