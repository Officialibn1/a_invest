import "@/app/components/styles/DashboardCards.css";
import React from "react";
import IncomeCard from "@/app/components/ui/IncomeCard";
import InvestmentCard from "./InvestmentCard";
import ProfitCard from "./ProfitCard";
import LossCard from "./LossCard";

const DashboardCards = () => {
	return (
		<div className='dashboardCards'>
			<IncomeCard />
			<InvestmentCard />
			<ProfitCard />
			<LossCard />
		</div>
	);
};

export default DashboardCards;
