const fs = require("fs");
const { oldQuestions } = require("./questions_old.js");

// Standardized category mapping
const categoryMap = {
  "Project Scope Management": "Project Scope Management",
  "Cost Management": "Cost Management",
  "Time Management": "Time Management",
  "Quality Management": "Quality Management",
  "Risk Management": "Risk Management",
  "Procurement Management": "Procurement Management",
  "Communication Management": "Communication Management",
  "Stakeholder Management": "Stakeholder Management",
};

// Convert old questions to new format
const newQuestions = oldQuestions.map((q) => {
  // Ensure options exist and find correct index of the answer
  let correctIndex = [];
  if (Array.isArray(q.options) && q.answer && q.options.includes(q.answer)) {
    correctIndex = [q.options.indexOf(q.answer)];
  }

  // Normalize categories into "topics"
  let rawTopics = q.categories || [];
  
  // Ensure topics match the exact category list
  const finalTopics = rawTopics
    .map((topic) => categoryMap[topic] || topic) // Standardize category names
    .filter((topic) => Object.values(categoryMap).includes(topic)); // Ensure only valid topics remain

  return {
    topics: finalTopics,
    question: q.question.trim(),
    options: q.options ? q.options.map((opt) => opt.trim()) : [],
    answers: correctIndex,
    explanation: q.explanation?.trim() || null,
    source: "ChatGPT",
  };
});

// Save the new format to questions_new.json
fs.writeFileSync("questions_new.json", JSON.stringify(newQuestions, null, 2));
console.log("✅ New formatted questions saved to questions_new.json!");
