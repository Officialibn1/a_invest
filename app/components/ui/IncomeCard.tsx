import React from "react";
import { GiMoneyStack } from "react-icons/gi";

const IncomeCard = () => {
	return (
		<div className='dashboardCard '>
			<div className='cardIcon text-yellow-500 text-5xl'>
				<GiMoneyStack />
			</div>

			<div className='cardDetails'>
				<h3>Income</h3>

				<p>${"123,231,423.00"}</p>
			</div>
		</div>
	);
};

export default IncomeCard;
