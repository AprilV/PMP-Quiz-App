import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./QuestionsPage.css";
import Confetti from "./Confetti";

const API_URL = "https://18.189.253.207/api/questions";

const removeDuplicates = (questions) => {
  const uniqueQuestions = [];
  const seenQuestions = new Map();

  for (const question of questions) {
    if (!question.topics) question.topics = [];

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

const QuestionsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizOver, setQuizOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(removeDuplicates(data));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const filteredQuestions = questions.filter(
    (q) =>
      Array.isArray(q.topics) &&
      q.topics.some(
        (topic) =>
          topic.toLowerCase() === category.replace(/-/g, " ").toLowerCase()
      )
  );

  useEffect(() => {
    console.log("Category Selected:", category);
    console.log("Filtered Questions:", filteredQuestions);
    console.log("Current Question Index:", currentQuestionIndex);
  }, [filteredQuestions, currentQuestionIndex]);

  if (loading) {
    return (
      <div className="questions-container">
        <p>Loading questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="questions-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!filteredQuestions || filteredQuestions.length === 0) {
    return (
      <div className="questions-container">
        <h2>{category.replace(/-/g, " ")} Questions</h2>
        <p>No questions available for this category.</p>
      </div>
    );
  }

  if (quizOver) {
    return (
      <div className="quiz-over">
        <Confetti />
        <div className="quiz-over-card">
          <h2 className="quiz-over-title">Quiz Over!</h2>
          <p className="quiz-over-score">
            Your Score:{" "}
            <strong>
              {score} / {filteredQuestions.length}
            </strong>
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

  const currentQuestion =
    filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  if (!currentQuestion) {
    return (
      <div className="questions-container">
        <h2>{category.replace(/-/g, " ")} Questions</h2>
        <p>No question data available.</p>
      </div>
    );
  }

  const {
    question,
    options = [],
    answers = [],
    explanation,
    type,
  } = currentQuestion;

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
    if (!Array.isArray(answers)) {
      console.error("Answers array is missing or invalid", currentQuestion);
      return;
    }

    setSelectedOption(index);
    setShowAnswer(true);
    setIsCorrect(answers.includes(index));

    if (answers.includes(index)) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleEndTest = () => {
    setQuizOver(true);
  };

  const progress =
    ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  return (
    <div className="questions-container">
      <h2>
        {category
          .replace(/-/g, " ") // Replace hyphens with spaces
          .toLowerCase() // Ensure all lowercase first
          .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
        Questions
      </h2>

      {/* ✅ Show Question Count */}
      <p className="question-counter">
        Question {currentQuestionIndex + 1} of {filteredQuestions.length}
      </p>

      {/* ✅ Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="question-text">{question}</p>

      {type === "fill-in-the-blank" ? (
        <div className="fill-in-the-blank-container">
          <input
            type="text"
            value={selectedOption || ""}
            onChange={(e) => setSelectedOption(e.target.value)}
            placeholder="Type your answer..."
          />
          <button onClick={() => setShowAnswer(true)}>Submit Answer</button>
        </div>
      ) : options.length > 0 ? (
        <ul className="options-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`option ${selectedOption === index ? "selected" : ""} 
              ${showAnswer && answers.includes(index) ? "correct" : ""} 
              ${
                showAnswer &&
                selectedOption === index &&
                !answers.includes(index)
                  ? "incorrect"
                  : ""
              }`}
              onClick={() => !showAnswer && handleOptionSelect(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-options">
          This question does not have selectable options.
        </p>
      )}

      <div className="quiz-buttons">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        {currentQuestionIndex === filteredQuestions.length - 1 ? (
          <button onClick={handleEndTest} className="end-test-button">
            End Test
          </button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
