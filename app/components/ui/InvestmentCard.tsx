import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const InvestmentCard = () => {
	return (
		<div className='dashboardCard'>
			<div className='cardIcon text-blue-400'>
				<FaMoneyBillTrendUp />
			</div>

			<div className='cardDetails'>
				<h3>Investments</h3>

				<p>${"123,231,423.00"}</p>
			</div>
		</div>
	);
};

export default InvestmentCard;
