import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./QuestionsPage.css";
import Confetti from "./Confetti";

const API_URL = "https://18.189.253.207/api/questions";

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

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
  const [selectedOptions, setSelectedOptions] = useState([]); // For multi-answer questions
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
        const uniqueQuestions = removeDuplicates(data);
        const shuffledQuestions = shuffleArray(uniqueQuestions); // Shuffle the questions
        setQuestions(shuffledQuestions);
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
                setSelectedOptions([]);
                setShowAnswer(false);
                setIsCorrect(null);
                setQuizOver(false);
              }}
            >
              Try Again
            </button>
            <button
              className="exit-quiz-button"
              onClick={() => navigate("/categories")}
            >
              Back to Categories
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
    setSelectedOptions([]);
    setShowAnswer(false);
    setIsCorrect(null);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    setSelectedOption(null);
    setSelectedOptions([]);
    setShowAnswer(false);
    setIsCorrect(null);
  };

  const handleOptionSelect = (index) => {
    if (type === "multi-answer") {
      const updatedOptions = selectedOptions.includes(index)
        ? selectedOptions.filter((i) => i !== index)
        : [...selectedOptions, index];
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOption(index);
    }
  };

  const handleSubmitAnswer = () => {
    let correct = false;
    if (type === "multi-answer") {
      correct = selectedOptions.sort().toString() === answers.sort().toString();
    } else if (type === "fill-in-the-blank") {
      correct = answers
        .map((answer) => answer.toLowerCase().trim())
        .includes(selectedOption.toLowerCase().trim());
    } else {
      correct = answers.includes(selectedOption);
    }
    setIsCorrect(correct);
    if (correct) setScore((prevScore) => prevScore + 1);
    setShowAnswer(true);
  };

  const handleExitQuiz = () => {
    if (window.confirm("Are you sure you want to exit the quiz?")) {
      navigate("/categories"); // Redirect to the categories page
    }
  };

  const progress =
    ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  return (
    <div className="questions-container">
      {/* Exit Quiz Button (X) in the upper-right corner */}
      <button className="exit-quiz-button" onClick={handleExitQuiz}>
        X
      </button>

      <h2>
        {category
          .replace(/-/g, " ")
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
        Questions
      </h2>

      <p className="question-counter">
        Question {currentQuestionIndex + 1} of {filteredQuestions.length}
      </p>

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
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </div>
      ) : type === "multi-answer" ? (
        <ul className="options-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`option ${
                selectedOptions.includes(index) ? "selected" : ""
              } ${showAnswer && answers.includes(index) ? "correct" : ""}`}
              onClick={() => handleOptionSelect(index)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(index)}
                onChange={() => handleOptionSelect(index)}
              />
              {option}
            </li>
          ))}
        </ul>
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

      {showAnswer && (
        <div className="feedback">
          <p
            className={`answer-feedback ${isCorrect ? "correct" : "incorrect"}`}
          >
            {isCorrect ? "Correct!" : "Incorrect!"}
          </p>
          <p className="correct-answer">
            Correct Answer:{" "}
            {type === "multi-answer"
              ? answers.map((index) => options[index]).join(", ")
              : options[answers[0]] || answers[0]}
          </p>
          <p className="explanation-text">
            <strong>Explanation:</strong> {explanation}
          </p>
        </div>
      )}

      {/* Score Display at the Bottom */}
      <div className="score-container">
        <p>
          Score:{" "}
          <strong>
            {score} / {filteredQuestions.length}
          </strong>
        </p>
      </div>

      <div className="quiz-buttons">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        {!showAnswer ? (
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        ) : currentQuestionIndex === filteredQuestions.length - 1 ? (
          <button onClick={() => setQuizOver(true)} className="end-test-button">
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