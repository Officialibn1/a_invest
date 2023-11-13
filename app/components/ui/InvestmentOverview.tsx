import React from "react";
import "@/app/components/styles/InvestmentOverview.css";
import { FaWallet } from "react-icons/fa6";
import Link from "next/link";

const InvestmentOverview = () => {
	return (
		<div className='investmentOverview'>
			<h2>Investment Overview</h2>

			<div className='InvestmentOverviewContainer'>
				<div className='investmentText'>
					{/* Invested detai;s */}
					<div className='invested'>
						<h4>Invested</h4>

						<p>${"24,500"}</p>
					</div>

					{/* Earnings detai;s */}
					<div className='earnings'>
						<h4>Earnings</h4>

						<p>+${"164,490"}</p>
					</div>

					{/* Withdrawals details */}
					<div className='withdrawals'>
						<h4>Withdrawals</h4>

						<p>-${"94,530"}</p>
					</div>
				</div>

				<div className='viewAllIvestment'>
					<Link href={"/dashboard"}>View All Details</Link>
				</div>

				<div className='investmentWallet'>
					<h4>{"Ibn"}&apos;s Wallet</h4>

					<div>
						<FaWallet />
						<h3>${"123,433,121.02"}</h3>
						<span>Earned</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestmentOverview;
