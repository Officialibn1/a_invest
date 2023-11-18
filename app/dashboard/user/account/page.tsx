import React from "react";
import { HiOutlineUser } from "react-icons/hi2";

const AccountPage = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<HiOutlineUser />
				<span>Account</span>
			</div>
		</div>
	);
};

export default AccountPage;
