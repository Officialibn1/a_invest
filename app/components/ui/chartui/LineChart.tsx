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
			borderWidth: 1.5,
			pointBorderWidth: 5,
			backgroundColor: (context: any) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 300);
				gradient.addColorStop(0, "rgba(74, 222, 128, .6)");
				gradient.addColorStop(1, "rgba(74, 222, 128, .1)");
				return gradient;
			},
			// backgroundColor: "rgb(74, 222, 128)",
			tension: 0.4,
			fill: true,
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
