"use client";
import { dummyPieData } from "@/app/lib/dummyData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const pieData = {
	labels: dummyPieData.map((data) => data.label),
	datasets: [
		{
			label: "Portfolio",
			data: dummyPieData.map((data) => data.amount),
			backgroundColor: dummyPieData.map((data) => data.backgroundColor),
			borderColor: dummyPieData.map((data) => data.borderColor),
			borderWidth: 1,
		},
	],
};

const AnalyticsPie = () => {
	return (
		<div>
			<Pie data={pieData} />
		</div>
	);
};

export default AnalyticsPie;
