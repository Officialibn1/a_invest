import React from "react";
import "@/app/components/styles/LatestTransactions.css";
import { latestTransactions } from "@/app/lib/dummyData";

const tableNum = [1, 2, 3, 4, 5, 6, 7];

const LatestTransactions = () => {
	return (
		<div className='latestTransactions'>
			<h2>Latest Transactions</h2>

			<div className='transactionsTableWrapper'>
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
													? "bg-green-400 text-green-800"
													: "bg-red-400 text-red-800"
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

export default LatestTransactions;
