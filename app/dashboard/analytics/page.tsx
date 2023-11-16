import React from "react";
import "@/app/components/styles/AnalyticsPage.css";
import { IoBarChartOutline } from "react-icons/io5";
import { IoMdTrendingDown } from "react-icons/io";
import AnalyticsLine from "@/app/components/ui/chartui/AnalyticsLine";
import AnalyticsPie from "@/app/components/ui/chartui/AnalyticsPie";

const AnalyticsPage = async () => {
	// await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<IoBarChartOutline />
				<span>Your Analytics</span>
			</div>

			<div className='analyticsPage'>
				{/* card one */}
				<div className='analyticsPageCard md:col-span-2'>
					<div className='title'>
						<h3>Market Share</h3>
						<div>
							<IoMdTrendingDown className='text-red-400' />
							<span>${"23,421,00"}</span>
						</div>
					</div>

					<div className='analyticsChart'>
						<AnalyticsLine />
					</div>
				</div>
				{/* card two */}
				<div className='analyticsPageCard'>
					<div className='title'>
						<h3>Total Portfolio Value</h3>
						{/* <div>
							<IoMdTrendingDown className='text-red-400' />
							<span>${"23,421,00"}</span>
						</div> */}
					</div>

					<div className='analyticsChart'>
						<AnalyticsPie />
					</div>
				</div>
				{/* card three */}
				<div className='analyticsPageCard'>
					<div className='title'>
						<h3>Total Portfolio Value</h3>
						{/* <div>
							<IoMdTrendingDown className='text-red-400' />
							<span>${"23,421,00"}</span>
						</div> */}
					</div>

					<div className='analyticsChart'>
						<AnalyticsPie />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnalyticsPage;
