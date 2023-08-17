// src/Results.tsx

import React from "react";
import { quizQuestions } from "./quizData";
import ScoreChart from "./ScoreChart";

interface ResultsProps {
    answers: string[];
}

const Results: React.FC<ResultsProps> = ({ answers }) => {
    const totalQuestions = quizQuestions.length;
    const totalScore = answers.filter(
        (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length;

    return (
        <div className="container mt-5">
            <h1>Quiz Results</h1>
            <ScoreChart totalQuestions={totalQuestions} totalScore={totalScore} /> {/* Render the ScoreChart component */}
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Your Answer</th>
                        <th>Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {quizQuestions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.question}</td>
                            <td>
                                {/* Render green badge for correct answer, red badge for incorrect */}
                                <span
                                    className={`badge ${answers[index] === question.correctAnswer
                                        ? "bg-success"
                                        : "bg-danger"
                                        }`}
                                >
                                    {answers[index] || "-"} {/* Show a dash if answer is not available */}
                                </span>
                            </td>
                            <td>{question.correctAnswer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
