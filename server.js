// Load environment variables
require("dotenv").config();

// Import dependencies
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// ✅ Middleware
app.use(express.json());

// ✅ CORS Configuration
const allowedOrigins = [
  "https://aprilv.github.io", // ✅ GitHub Pages frontend
  "http://localhost:5173",    // ✅ Local Development
  "http://localhost:3000"     // ✅ Create React App (if used)
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// ✅ Handle Preflight Requests
app.options("*", cors());

// ✅ MySQL Connection Setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || "3.130.60.8",
  user: process.env.DB_USER || "pmp_user",
  password: process.env.DB_PASSWORD || "Aprilv120!",
  database: process.env.DB_NAME || "pmp_quiz_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: ", err);
    return;
  }
  console.log("✅ Connected to MySQL database!");
});

// ✅ Registration Route
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [existingUser] = await db.promise().query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

// ✅ Login Route
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [user] = await db.promise().query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (user.length === 0) {
      return res.status(400).json({ message: "User not found." });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

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

// ✅ API Route: Get All Questions
const questions = JSON.parse(fs.readFileSync("questions_new.json", "utf8"));
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// ✅ API Route: Get Questions by Category
app.get("/api/questions/:category", (req, res) => {
  const category = req.params.category.toLowerCase().replace(/-/g, " ");
  const filteredQuestions = questions.filter((q) =>
    q.topics.some((topic) => topic.toLowerCase() === category)
  );
  res.json(filteredQuestions);
});

// ✅ Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
