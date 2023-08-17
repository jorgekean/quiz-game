// src/ScoreChart.tsx

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface ScoreChartProps {
    totalQuestions: number;
    totalScore: number;
}

const ScoreChart: React.FC<ScoreChartProps> = ({ totalQuestions, totalScore }) => {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        const data = {
            labels: ["Total Score", "Total Questions"],
            datasets: [
                {
                    label: "Quiz Stats",
                    data: [totalScore, totalQuestions],
                    backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
                },
            ],
        };

        setChartData(data);
    }, [totalQuestions, totalScore]);

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="chart-container">
            {chartData && <Bar data={chartData} options={chartOptions} />}
        </div>
    );
};

export default ScoreChart;
