import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // DEMO USER
    const demoUser = {
      id: 1,
      name: "Farmer User",
      email: "farmer@agrisync.ai",

      // hashed version of: 123456
      password:
        "$2b$10$Rj6sV6T7xj9f4w1N2Tj4A.8zP8Gx8P4M2K1f9z1hA2mD6P7J5F0m2",
    };

    // CHECK EMAIL
    if (email !== demoUser.email) {
      return res.status(401).json({
        message: "Invalid email",
      });
    }

    // CHECK PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      demoUser.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    // GENERATE TOKEN
    const token = jwt.sign(
      {
        id: demoUser.id,
        email: demoUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      user: {
        id: demoUser.id,
        name: demoUser.name,
        email: demoUser.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};