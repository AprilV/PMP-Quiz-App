import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Confetti from "./Confetti";
import "./PracticeExam.css";

const API_URL = "https://3.137.111.153/api/questions";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PracticeExam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizOver, setQuizOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [testStarted, setTestStarted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch questions");
        const data = await response.json();
        setQuestions(shuffleArray(data).slice(0, 180));
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleOptionSelect = (option) => {
    const currentType = questions[currentQuestionIndex].type;
    if (currentType === "multi-answer") {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      );
    } else {
      setSelectedOption(option);
    }
  };

  const handleSubmitAnswer = () => {
    const { answers, type } = questions[currentQuestionIndex];
    let correct = false;

    if (type === "multi-answer") {
      correct = selectedOptions.sort().toString() === answers.sort().toString();
    } else if (type === "fill-in-the-blank") {
      correct = answers
        .map((ans) => ans.toLowerCase().trim())
        .includes(selectedOption?.toLowerCase().trim());
    } else {
      correct = answers.includes(selectedOption);
    }

    if (correct) setScore(score + 1);

    setSelectedOption(null);
    setSelectedOptions([]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizOver(true);
    }
  };

  if (loading)
    return <div className="practice-exam-container">Loading questions...</div>;

  if (!testStarted) {
    return (
      <div className="practice-exam-background">
        <div className="practice-exam-container">
          <h2>Welcome to the PMP Practice Exam</h2>
          <p>
            This exam consists of 180 questions and will last for 3 hours and 50
            minutes. The test will automatically submit when time runs out or
            you can end it manually.
          </p>
          <button
            className="start-test-button"
            onClick={() => setTestStarted(true)}
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  if (quizOver) {
    const percentageScore = ((score / 180) * 100).toFixed(2);
    return (
      <div className="quiz-over">
        <Confetti />
        <div className="quiz-over-card fancy-score-display">
          <h2 className="quiz-over-title">🎉 Exam Completed! 🎉</h2>
          <p className="quiz-over-score">
            Your Score: <strong>{score} / 180</strong>
          </p>
          <p className="quiz-over-percentage">
            Percentage: <strong>{percentageScore}%</strong>
          </p>

          {/* Restart Test Button */}
          <button
            className="restart-test-button"
            onClick={() => window.location.reload()}
          >
            Restart Test
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="questions-container">
      <h2>Practice Exam</h2>

      {/* Timer Adjusted for Better Placement */}
      <div className="timer-container">
        <p className="timer-label">Time Remaining:</p>
        <span className="timer-value">
          <Timer initialTime={13800} onTimeUp={() => setQuizOver(true)} />
        </span>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="question-text">{currentQuestion.question}</p>

      {currentQuestion.type === "fill-in-the-blank" ? (
        <div className="fill-in-the-blank-container">
          <input
            type="text"
            value={selectedOption || ""}
            onChange={(e) => setSelectedOption(e.target.value)}
            placeholder="Type your answer..."
          />
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </div>
      ) : currentQuestion.type === "multi-answer" ? (
        <ul className="options-list">
          {currentQuestion.options.map((option) => (
            <li key={option} className="option">
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="options-list">
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      <div className="quiz-buttons">
        <button
          onClick={handleSubmitAnswer}
          disabled={selectedOption === null && selectedOptions.length === 0}
        >
          Submit Answer
        </button>
        <button onClick={() => setQuizOver(true)} className="end-test-button">
          End Test
        </button>
      </div>
    </div>
  );
};

export default PracticeExam;
