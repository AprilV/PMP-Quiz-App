const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Load questions from JSON file
const questions = JSON.parse(fs.readFileSync("questions_new.json", "utf8"));

// API Route: Get All Questions
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

// Start the server, listen on all interfaces (0.0.0.0) for external access
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
  });
  
