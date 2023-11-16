"use client";

import { dummyStockData } from "@/app/lib/dummyData";
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

export const options = {
	responsive: true,
	maintainApectRatio: false,
	plugins: {
		legend: {
			position: "top" as const,
		},
		// title: {
		// 	display: true,
		// 	text: "Chart.js Line Chart",
		// },
	},
};

export const data = {
	labels: dummyStockData.map((data) => data.date),
	datasets: [
		{
			label: "Reddit",
			data: dummyStockData.map((data) => data.stock1),
			borderColor: "rgb(255, 99, 132)",
			borderWidth: 1.5,
			// backgroundColor: "rgba(255, 99, 132, 0.5)",
			backgroundColor: (context: any) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 300);
				gradient.addColorStop(0, "rgba(255, 99, 132, .7)");
				gradient.addColorStop(1, "rgba(255, 99, 132, .2)");
				return gradient;
			},
			pointBorderWidth: 4,
			tension: 0.3,
			// 	// fill: true,
		},
		{
			label: "WhatsApp",
			data: dummyStockData.map((data) => data.stock2),
			borderColor: "rgba(74, 222, 128, .6)",
			borderWidth: 1.5,
			// backgroundColor: "rgba(255, 99, 132, 0.5)",
			backgroundColor: (context: any) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 300);
				gradient.addColorStop(0, "rgba(74, 222, 128, .6)");
				gradient.addColorStop(0.9, "rgba(74, 222, 128, .1)");
				return gradient;
			},
			pointBorderWidth: 4,
			tension: 0.3,
			// fill: true,
		},
		{
			label: "FaceBook",
			data: dummyStockData.map((data) => data.stock3),
			borderColor: "rgba(53, 162, 235, 1)",
			borderWidth: 1.5,
			backgroundColor: (context: any) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 300);
				gradient.addColorStop(0.2, "rgba(53, 162, 235, 0.7)");
				gradient.addColorStop(1, "rgba(53, 162, 235, 0.1)");
				return gradient;
			},
			pointBorderWidth: 4,
			tension: 0.3,
			// fill: true,
		},
	],
};

const AnalyticsLine = () => {
	return (
		<div className=' min-w-[596px]'>
			<Line
				options={options}
				data={data}
			/>
		</div>
	);
};

export default AnalyticsLine;
