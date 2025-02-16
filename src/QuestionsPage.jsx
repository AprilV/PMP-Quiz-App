import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./QuestionsPage.css";
import Confetti from "./Confetti";
import newQuestions  from "../questions_new.json"; // Import new questions

// Function to remove duplicate questions based on question text and merge topics
const removeDuplicates = (questions) => {
  const uniqueQuestions = [];
  const seenQuestions = new Map();

  for (const question of questions) {
    if (!question.topics) question.topics = []; // Ensure topics exist

    if (!seenQuestions.has(question.question)) {
      seenQuestions.set(question.question, question);
      uniqueQuestions.push(question);
    } else {
      const existingQuestion = seenQuestions.get(question.question);
      existingQuestion.topics = [
        ...new Set([...existingQuestion.topics, ...question.topics]),
      ];
    }
  }
  return uniqueQuestions;
};

// Function to count questions by topic
const countQuestionsByTopic = (questions) => {
  const topicCounts = {};

  questions.forEach((question) => {
    if (!question.topics) return; // Prevent crashing

    question.topics.forEach((topic) => {
      if (!topicCounts[topic]) {
        topicCounts[topic] = 0;
      }
      topicCounts[topic]++;
    });
  });

  return topicCounts;
};

const QuestionsPage = () => {
  const { category } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizOver, setQuizOver] = useState(false); // ✅ Track if quiz is finished

  const uniqueQuestions = removeDuplicates(newQuestions); // Use newQuestions
  const filteredQuestions = (uniqueQuestions || []).filter(
    (q) =>
      Array.isArray(q.topics) &&
      q.topics.some(
        (topic) => topic.toLowerCase() === category.replace(/-/g, " ").toLowerCase()
      )
  );

  useEffect(() => {
    console.log("Category Selected:", category);
    console.log("Filtered Questions:", filteredQuestions);
    console.log("Current Question Index:", currentQuestionIndex);
  }, [filteredQuestions, currentQuestionIndex]);

  if (!filteredQuestions || filteredQuestions.length === 0) {
    return (
      <div className="questions-container">
        <h2>{category.replace(/-/g, " ")} Questions</h2>
        <p>No questions available for this category.</p>
      </div>
    );
  }

  // ✅ Show quiz completion screen
  if (quizOver) {
    return (
      <div className="quiz-over">
        <Confetti />
        <div className="quiz-over-card">
          <h2 className="quiz-over-title">Quiz Over!</h2>
          <p className="quiz-over-score">
            Your Score: <strong>{score} / {filteredQuestions.length}</strong>
          </p>
          <div className="quiz-over-buttons">
            <button
              className="try-again-button"
              onClick={() => {
                setCurrentQuestionIndex(0);
                setScore(0);
                setSelectedOption(null);
                setShowAnswer(false);
                setIsCorrect(null);
                setQuizOver(false);
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  if (!currentQuestion) {
    return (
      <div className="questions-container">
        <h2>{category.replace(/-/g, " ")} Questions</h2>
        <p>No question data available.</p>
      </div>
    );
  }

  const { question, options, answer, explanation, type } = currentQuestion;

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizOver(true);
    }
    setSelectedOption(null);
    setShowAnswer(false);
    setIsCorrect(null);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    setSelectedOption(null);
    setShowAnswer(false);
    setIsCorrect(null);
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setShowAnswer(true);
    setIsCorrect(answer.includes(index));
    if (answer.includes(index)) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleFillInTheBlank = (e) => {
    setSelectedOption(e.target.value);
  };

  const checkFillInTheBlank = () => {
    setShowAnswer(true);
    setIsCorrect(selectedOption.trim().toLowerCase() === answer.toLowerCase());
  };

  const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  return (
    <div className="questions-container">
      <h2>{category.replace(/-/g, " ")} Questions</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="question-text">{question}</p>
      {type === "fill-in-the-blank" ? (
        <div>
          <input
            type="text"
            value={selectedOption || ""}
            onChange={handleFillInTheBlank}
            placeholder="Type your answer..."
          />
          <button onClick={checkFillInTheBlank}>Submit Answer</button>
        </div>
      ) : (
        <ul className="options-list">
          {Array.isArray(options) &&
            options.map((option, index) => (
              <li
                key={index}
                className={`option ${
                  selectedOption === index ? "selected" : ""
                } ${showAnswer && answer.includes(index) ? "correct" : ""} ${
                  showAnswer && selectedOption === index && !answer.includes(index) ? "incorrect" : ""
                }`}
                onClick={() => !showAnswer && handleOptionSelect(index)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
      {showAnswer && (
        <>
          <div className={`answer-feedback ${isCorrect ? "correct" : "incorrect"}`}>
            {isCorrect ? "Correct!" : "Incorrect!"}
          </div>
          <p className="answer-text">
            <strong>Answer:</strong> {options[answer[0]]}
          </p>
          <p className="explanation-text">
            <strong>Explanation:</strong> {explanation}
          </p>
        </>
      )}
      <div className="quiz-buttons">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext}>
          {currentQuestionIndex === filteredQuestions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
      <div className="score-container">
        <p>Score: {score} / {filteredQuestions.length}</p>
      </div>
    </div>
  );
};

export default QuestionsPage;
