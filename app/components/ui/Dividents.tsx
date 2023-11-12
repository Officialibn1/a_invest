import React from "react";
import "@/app/components/styles/Dividents.css";
import LineChart from "@/app/components/ui/chartui/LineChart";

const Dividents = () => {
	return (
		<div className='dividents'>
			<h2>Portfolio Chart</h2>
			<div>
				<div className='dividentsCards'>
					<div className='dividentChart'>
						<h3>Weekly Scale</h3>
						<LineChart />
					</div>
				</div>

				<div className='dividentInfoCards'>
					<div className='dividentInfoCard'>
						<span>New Investments</span>

						<div>
							<h1>5</h1>

							<span>+{14.7}%</span>
						</div>
					</div>
					<div className='dividentInfoCard'>
						<span>Total Investments</span>

						<div>
							<h1>18</h1>

							<span>+{24.5}%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dividents;
