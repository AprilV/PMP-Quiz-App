const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: "https://aprilv.github.io", // Allow requests from your frontend
    methods: ["GET", "POST", "OPTIONS"], // Allow only necessary HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow only necessary headers
    credentials: true, // Allow cookies and credentials (if needed)
  })
);
app.use(express.json());

// Handle preflight requests
app.options("*", cors()); // Allow preflight requests for all routes

// MySQL connection setup
const db = mysql.createConnection({
  host: "3.130.60.8", // EC2 MySQL Public IP
  user: "pmp_user",
  password: "Aprilv120!",
  database: "pmp_quiz_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: ", err);
    return;
  }
  console.log("✅ Connected to MySQL database!");
});

// JWT Secret key (use a more secure one in production)
const JWT_SECRET = "your-secret-key";

// Registration Route (Updated to /register)
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const [existingUser] = await db.promise().query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    await db.promise().query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Fetch user from the database
    const [user] = await db.promise().query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (user.length === 0) {
      return res.status(400).json({ message: "User not found." });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Create a JWT token
    const token = jwt.sign(
      { id: user[0].id, username: user[0].username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// API Route: Get All Questions
const questions = JSON.parse(fs.readFileSync("questions_new.json", "utf8"));
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// API Route: Get Questions by Category
app.get("/api/questions/:category", (req, res) => {
  const category = req.params.category.toLowerCase().replace(/-/g, " ");
  const filteredQuestions = questions.filter((q) =>
    q.topics.some((topic) => topic.toLowerCase() === category)
  );
  res.json(filteredQuestions);
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});