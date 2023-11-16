import React from "react";
import "@/app/components/styles/AnalyticsPage.css";
import { IoBarChartOutline } from "react-icons/io5";

const AnalyticsPage = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<IoBarChartOutline />
				<span>Your Analytics</span>
			</div>
		</div>
	);
};

export default AnalyticsPage;
