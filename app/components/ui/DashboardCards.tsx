import React from "react";
import IncomeCard from "@/app/components/ui/DashboardCard";
import "@/app/components/styles/DashboardCards.css";

const DashboardCards = () => {
	return (
		<div className='dashboardCards'>
			<IncomeCard />
			<IncomeCard />
			<IncomeCard />
			<IncomeCard />
		</div>
	);
};

export default DashboardCards;
