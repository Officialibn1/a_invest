import React from "react";
import { SlSettings } from "react-icons/sl";
import "@/app/components/styles/SettingsPage.css";

const SettingsPage = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<SlSettings />
				<span>Settings</span>
			</div>

			<div className='settingsPage'>
				<h2>Notification Settings</h2>

				<div className='settingsPageContent'>
					<p>
						We&apos;ll always let you know about important changes, but you pick
						what else you want to hear about.
					</p>
					<form>
						<div>
							<h3>By Email</h3>

							<label>
								<input
									type='checkbox'
									name='Dialy Bonus'
									id='Dialy Bonus'
								/>{" "}
								Daily Bonus
							</label>

							<label>
								<input
									type='checkbox'
									name='Withdrawal'
									id='Withdrawal'
								/>{" "}
								Withdrawal
							</label>

							<label>
								<input
									type='checkbox'
									name='Deposit'
									id='Deposit'
								/>{" "}
								Deposit
							</label>

							<label>
								<input
									type='checkbox'
									name='Task Completion'
									id='Task Completion'
								/>{" "}
								Task Completion
							</label>

							<label>
								<input
									type='checkbox'
									name='New Investment'
									id='New Investment'
								/>{" "}
								New Investment
							</label>

							<label>
								<input
									type='checkbox'
									name='Updates'
									id='Updates'
								/>{" "}
								Updates
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
