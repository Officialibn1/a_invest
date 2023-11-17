"use client";
import React from "react";

const WithdrawalForm = () => {
	return (
		<form>
			{/* Destination Wallet */}
			<div>
				<label htmlFor='destinationWallet'>Destination Wallet</label>

				<select id='destinationWallet'>
					<option disabled>Select Wallet</option>

					<option value='Bitcoin'>Bitcoin</option>

					<option value='Ethereum'>Ethereum</option>

					<option value='BNB Smartchain'>BNB Smartchain</option>

					<option value='BNB Beacon'>BNB Beacon</option>

					<option value='Tron'>Tron</option>
				</select>
			</div>
			{/* Withdrawal Wallet */}
			<div>
				<label htmlFor='withdrawalWallet'>Withdrawal Wallet</label>

				<select id='withdrawalWallet'>
					<option disabled>Select Account</option>

					<option value='Main Account'>Main Account</option>

					<option value='Deposit Account'>Deposit Account</option>

					<option value='Bonus Account'>Bonus Account</option>
				</select>
			</div>

			{/* Amount to Withdraw */}
			<div>
				<label htmlFor='withdrawalAmount'>Amount</label>

				<input
					type='number'
					name='withdrawalAmount'
					id='withdrawalAmount'
					min={3000}
				/>
			</div>

			{/* Withdrawal Password */}
			<div>
				<label htmlFor='withdrawalPassword'>Password</label>

				<input
					type='password'
					name='withdrawalPassword'
					id='withdrawalPassword'
				/>
			</div>

			<div>
				<input
					type='button'
					value='Submit'
				/>
			</div>
		</form>
	);
};

export default WithdrawalForm;
