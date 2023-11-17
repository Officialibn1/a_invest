import WithdrawalForm from "@/app/components/ui/WithdrawalForm";
import React from "react";
import { AiOutlineBank } from "react-icons/ai";
import "@/app/components/styles/WithdrawalPage.css";

const WithdrawalPage = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<AiOutlineBank />
				<span>Withdrawal</span>
			</div>

			<div className='withdrawalPage'>
				<h2>Withdraw Funds</h2>

				<div className='withdrawContainer'>
					<div className='fundsAvailable'>
						<div>
							<h3>Available Funds</h3>

							<p>${"23,424.32"}</p>
						</div>

						{/* Withdrawable Funds */}
						<div>
							<h3>Withdrawable Funds</h3>

							<p>${"13,424.32"}</p>
						</div>
					</div>

					{/* Withdrawal Form */}
					<WithdrawalForm />
				</div>
			</div>
		</div>
	);
};

export default WithdrawalPage;
