import React from "react";
import { GiReceiveMoney } from "react-icons/gi";

const ProfitCard = () => {
	return (
		<div className='dashboardCard'>
			<div className='cardIcon text-green-400'>
				<GiReceiveMoney />
			</div>

			<div className='cardDetails'>
				<h3>Total Profits</h3>

				<p>${"123,231,423.00"}</p>
			</div>
		</div>
	);
};

export default ProfitCard;
