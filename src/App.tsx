// src/App.tsx

import { useState } from "react";
import { quizQuestions } from "./quizData";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./Results"; // Import the Results component

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]); // Track user's answers
  const [quizComplete, setQuizComplete] = useState(false); // Track quiz completion

  const handleAnswerClick = (selectedAnswer: string) => {
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswers([...answers, selectedAnswer]); // Store user's answer
    } else {
      setAnswers([...answers, selectedAnswer]); // Store user's answer for the last question
      setQuizComplete(true); // Set quiz completion state
    }
  };

  return (
    <div className="container mt-5">
      <h1>Historical Events Quiz</h1>
      {quizComplete ? (
        <Results answers={answers} /> // Render the Results component here
      ) : (
        <div>
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <div className="btn-group-vertical">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="btn btn-primary mt-2"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
