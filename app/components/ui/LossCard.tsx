import React from "react";
import { GiPayMoney } from "react-icons/gi";

const LossCard = () => {
	return (
		<div className='dashboardCard'>
			<div className='cardIcon text-red-400'>
				<GiPayMoney />
			</div>

			<div className='cardDetails'>
				<h3>Total Loss</h3>

				<p>${"123,231,423.00"}</p>
			</div>
		</div>
	);
};

export default LossCard;
