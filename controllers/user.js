import User from "../models/User.js"; // Adjust path as needed
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Secret key for JWT
const JWT_SECRET = "your_jwt_secret_key"; // Replace with an environment variable in production

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { id, fullname, email, password, mobile, resume, lastworkingday } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      id,
      fullname,
      email,
      password: hashedPassword,
      mobile,
      resume,
      lastworkingday,
    });

    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found"});
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({ message: "Login successful", token, data : user });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

export const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied" });
  
    try {
      const verified = jwt.verify(token, JWT_SECRET);
      req.user = verified; // Attach user info to request
      next();
    } catch (error) {
      res.status(403).json({ message: "Invalid token" });
    }
  };

export const getUsers = async (req, res) => {
    try {
       
      const jobs =await  User.find({});
      return res.status(201).json({ message: "user fetched successfully", data: jobs });
    } catch (error) {
      console.error("Error fteching job:", error.message);
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };
export const getLogin = async (req, res) => {
    try {
       
    }
    catch(error) {

    }
      
  };
  
