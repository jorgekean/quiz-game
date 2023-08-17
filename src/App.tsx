// src/App.tsx

import { useState } from "react";
import { quizQuestions } from "./quizData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer: string) => {
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz is over
      alert(`Quiz Over! Your score: ${score}/${quizQuestions.length}`);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Historical Events Quiz</h1>
      {currentQuestion < quizQuestions.length ? (
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
      ) : (
        <p>Quiz Over! Your score: {score}/{quizQuestions.length}</p>
      )}
    </div>
  );
}

export default App;
