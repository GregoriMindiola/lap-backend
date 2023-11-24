import User from "../models/user.js";
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    return res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign({ email }, "SECRET_KEY", { expiresIn: '1h' })
    return res.status(200).json({
      message: "User logged in",
      user,
      token
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
