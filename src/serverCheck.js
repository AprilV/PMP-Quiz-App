require("dotenv").config();

// Import dependencies
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Define Express
const app = express();
const PORT = process.env.PORT || 3001;
const SECRET_KEY = process.env.JWT_SECRET || "your_jwt_secret_key";

// ✅ CORS CONFIGURATION (Fixing Preflight Issues)
const allowedOrigins = [
  "https://aprilv.github.io",
  "http://localhost:5173",
  "http://localhost:3000",
]; // ✅ Correct syntax

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded form data

// ✅ Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "quiz_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// ✅ User Registration
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email, and password are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("❌ Database error:", err);
          return res.status(500).json({ message: "Error registering user" });
        }
        res.status(201).json({ message: "User registered successfully" });
      }
    );
  } catch (err) {
    console.error("❌ Server error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ✅ User Login
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      async (err, results) => {
        if (err) {
          console.error("❌ Database error:", err);
          return res.status(500).json({ message: "Server error" });
        }

        if (results.length === 0) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
          { id: user.id, username: user.username },
          SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("❌ Server error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("PMP Quiz API is running...");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
