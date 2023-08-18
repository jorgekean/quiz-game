// src/ScoreChart.tsx

import React from "react";

interface ScoreChartProps {
    totalQuestions: number;
    totalScore: number;
}

const ScoreChart: React.FC<ScoreChartProps> = ({ totalQuestions, totalScore }) => {
    const scorePercentage = (totalScore / totalQuestions) * 100;

    const progressBarColor = scorePercentage >= 50 ? "bg-success" : "bg-danger";

    return (
        <div className="score-container">
            <div className="progress">
                <div
                    className={`progress-bar ${progressBarColor}`}
                    role="progressbar"
                    style={{ width: `${scorePercentage}%` }}
                    aria-valuenow={scorePercentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    {scorePercentage.toFixed(2)}%
                </div>
            </div>
        </div>
    );
};

export default ScoreChart;
