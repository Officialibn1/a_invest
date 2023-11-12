import React from "react";
import "@/app/components/styles/Dividents.css";
import LineChart from "@/app/components/ui/chartui/LineChart";

const Dividents = () => {
	return (
		<div className='dividents'>
			<h2>Dividents</h2>

			<div className='acumulatedDividents dividentsCards'>
				<h3>Acumulated Dividents</h3>

				<div className='dividentChart'>
					<LineChart />
				</div>
			</div>
		</div>
	);
};

export default Dividents;
