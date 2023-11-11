import React from "react";
import { FaCreditCard } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

const IncomeCard = () => {
	return (
		<div className='dashboardCard'>
			<div className='cardIcon'>
				<GrMoney />
			</div>

			<div className='cardDetails'>
				<h3>Income</h3>

				<p>${"123,231,423.00"}</p>
			</div>
		</div>
	);
};

export default IncomeCard;
