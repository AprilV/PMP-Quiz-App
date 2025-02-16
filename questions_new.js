const fs = require("fs");
const { oldQuestions } = require("./questions_old.js");

// Convert old questions to the new format
const newQuestions = oldQuestions.map((q) => {
  // Find the index of the correct answer in q.options (if it exists)
  let correctIndex = [];
  if (Array.isArray(q.options) && q.answer && q.options.includes(q.answer)) {
    correctIndex = [q.options.indexOf(q.answer)];
  }

  // Convert "categories" or "topic" to "topics" array
  // Remove the word "Project " from each topic string if it appears
  const rawTopics = q.categories || [q.topic];
  const finalTopics = rawTopics.map((topic) =>
    topic.replace(/^Project\s+/, "") // remove "Project " at the start of the string
  );

  return {
    topics: finalTopics,
    question: q.question,
    options: q.options || [],
    answers: correctIndex,
    // Keep existing explanation if it exists, otherwise null
    explanation: q.explanation || null,
    // Add source field
    source: "ChatGPT",
  };
});

// Save the new format to questions_new.json
fs.writeFileSync("questions_new.json", JSON.stringify(newQuestions, null, 2));
console.log("✅ New formatted questions saved to questions_new.json!");
