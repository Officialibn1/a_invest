import React from "react";
import { RiLoader2Fill } from "react-icons/ri";

const loading = () => {
	return (
		<div className='dashboardLoading'>
			<div className='spinnerContainer'>
				<div className='spinner'>
					<RiLoader2Fill />
				</div>
			</div>
		</div>
	);
};

export default loading;
