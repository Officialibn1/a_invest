"use client";
import { dummyDounutData } from "@/app/lib/dummyData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dounutData = {
	labels: dummyDounutData.map((data) => data.label),
	datasets: [
		{
			label: "Portfolio",
			data: dummyDounutData.map((data) => data.amount),
			backgroundColor: dummyDounutData.map((data) => data.backgroundColor),
			borderColor: dummyDounutData.map((data) => data.borderColor),
			borderWidth: 1,
		},
	],
};

const AnalyticsDounut = () => {
	return (
		<div>
			<Doughnut data={dounutData} />
		</div>
	);
};

export default AnalyticsDounut;
