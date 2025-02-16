const fs = require("fs"); // Use CommonJS for Node.js
const { oldQuestions } = require("./questions_old.js"); // ✅ Corrected path (root folder)

// Convert old format to new format
const standardizeQuestions = (questions) => {
  return questions.map((q) => ({
    topics: q.categories || [q.topic], // Convert "categories" to "topics"
    question: q.question,
    options: q.options || [], // Ensure options array exists
    answers: q.options && q.options.includes(q.answer) ? [q.options.indexOf(q.answer)] : [], // Renamed key from "answer" to "answers"
    explanation: null, // Added new field for explanation
    source: "ChatGPT" // Added new field for source
  }));
};

// Convert questions
const newQuestions = standardizeQuestions(oldQuestions);

// Save to a JSON file
fs.writeFileSync("questions_new.json", JSON.stringify(newQuestions, null, 2));

console.log("✅ New formatted questions saved to questions_new.json!");
