"use client";
import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
);

const profit = [
	{ day: "Mon", profit: 23278, loss: 19827 },
	{ day: "Tue", profit: 19827, loss: 49171 },
	{ day: "Wed", profit: 39278, loss: 23478 },
	{ day: "Thu", profit: 49171, loss: 22781 },
	{ day: "Fri", profit: 22781, loss: 39781 },
	{ day: "Sat", profit: 72781, loss: 39278 },
	{ day: "Sun", profit: 39781, loss: 72781 },
];

export const lineOptions = {
	responsive: true,
	maintainApectRatio: false,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: false,
			text: "Chart.js Line Chart",
		},
	},
};

export const lineData = {
	labels: profit.map((label) => label.day),
	datasets: [
		{
			label: "Profit",
			data: profit.map((data) => data.profit),
			borderColor: "rgb(74, 222, 128)",
			backgroundColor: "rgb(74, 222, 128)",
			tension: 0.4,
			// fill: true,
		},
		// {
		// 	label: "Loss",
		// 	data: profit.map((data) => data.loss),
		// 	borderColor: "rgb(248, 113, 113)",
		// 	backgroundColor: "rgb(248, 113, 113)",
		// 	tension: 0.4,
		// 	// fill: true,
		// },
	],
};

const LineChart = () => {
	return (
		<Line
			options={lineOptions}
			data={lineData}
		/>
	);
};

export default LineChart;
// import { Line } from "react-chartjs-2";

// import { useState, useEffect } from "react";

// const profit = [
// 	{ day: "Mon", profit: 392781 },
// 	{ day: "Tue", profit: 392781 },
// 	{ day: "Wed", profit: 392781 },
// 	{ day: "Thu", profit: 392781 },
// 	{ day: "Fri", profit: 392781 },
// 	{ day: "Sat", profit: 392781 },
// 	{ day: "Sun", profit: 392781 },
// ];

// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	LineElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// 	ChartConfiguration,
// } from "chart.js";

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	LineElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// );

// const LineChart = () => {
// 	const ChartData: ChartConfiguration['data'] = {
// 		labels: profit.map((label) => label.day),
// 		datasets: [
// 			{
// 				label: "Devedents",
// 				data: profit.map((data) => data.profit),
// 				// borderColor: "rgb(79, 70, 229)",
// 				// backgroundColor: "rgba(78, 70, 229, 0.4)",
// 			},
// 		],
// 	};

// 	const lineOptions = {
// 		scales: {
// 			y: {
// 				beginAtZero: true,
// 				grid: {
// 					color: "rgb(79, 70, 229)",
// 				},
// 			},
// 			x: {
// 				grid: {
// 					color: "rgb(79, 70, 229)",
// 				},
// 			},
// 		},
// 	};

// 	return (
// 		<div>
// 			<Line
// 				data={ChartData}
// 				options={lineOptions}
// 			/>
// 		</div>
// 	);
// };

// export default LineChart;
