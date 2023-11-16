import { latestTransactions } from "@/app/lib/dummyData";
import React from "react";
import "@/app/components/styles/LatestTransactions.css";
import "@/app/components/styles/TransactionsPage.css";

const TransactionsPage = () => {
	return (
		<div className='transactionsPage'>
			<div className='dashboardPageNav py-5'>
				<span>All Transactions</span>
			</div>

			<div className='transactionsPageTable'>
				<div className='transactionsTable'>
					<table>
						{/* Tables Header */}
						<thead>
							<tr>
								<th>Title</th>
								<th className='hidden md:table-cell'>Description</th>
								<th className='hidden md:table-cell'>Date</th>
								<th>Amount</th>
								<th>Status</th>
							</tr>
						</thead>

						<tbody>
							{latestTransactions.map((transaction) => (
								<tr key={transaction._id}>
									<td>{transaction.title}</td>
									<td className='hidden md:table-cell'>
										{transaction.description}
									</td>
									<td className='hidden md:table-cell'>{transaction.date}</td>
									<td>${transaction.amount}</td>
									<td>
										<span
											className={
												transaction.status === "Wallet Credited"
													? "bg-green-300 text-green-700"
													: "bg-red-300 text-red-700"
											}>
											{transaction.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TransactionsPage;
