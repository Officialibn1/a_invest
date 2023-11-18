"use client";
import React from "react";
import { SlSettings } from "react-icons/sl";
import "@/app/components/styles/SettingsPage.css";
import { africanCountries } from "@/app/lib/dummyData";

const editProfile = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const SettingsPage = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<SlSettings />
				<span>Settings</span>
			</div>

			<div className='settingsPage'>
				<h3>Account Settings</h3>

				<div className='settingsPageContent'>
					<form onSubmit={(e) => editProfile(e)}>
						<h3 className='mb-2'>Profile Settings</h3>

						<p>You can only adjust your profile settings every 30 days</p>
						<fieldset>
							<div className='profileInputGrid'>
								<label className='profileLabel md:col-span-2'>
									<span>First Name</span>
									<input
										type='text'
										id='firstName'
									/>
								</label>

								<label className='profileLabel md:col-span-2'>
									<span>Last Name</span>
									<input
										type='text'
										id='lastName'
									/>
								</label>

								<label className='profileLabel md:col-span-3'>
									<span>Email Address</span>
									<input
										type='email'
										id='emailAddress'
									/>
								</label>

								<label className='profileLabel'>
									<span>Country</span>
									<select id='country'>
										<option
											disabled
											selected>
											Select
										</option>
										{africanCountries.map((con, i) => (
											<option
												value={con}
												key={i}>
												{con}
											</option>
										))}
									</select>
								</label>
							</div>
						</fieldset>

						<h3 className='mb-2 mt-5'>Notifications Settings</h3>
						<p>
							We&apos;ll always let you know about important changes, but you
							pick what else you want to hear about.
						</p>

						<fieldset>
							<legend>By Email</legend>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Dialy Bonus'
									id='Dialy Bonus'
								/>
								<span>Daily Bonus</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Withdrawal'
									id='Withdrawal'
								/>
								<span>Withdrawal</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Deposit'
									id='Deposit'
								/>
								<span>Deposit</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Task Completion'
									id='Task Completion'
								/>
								<span>Task Completion</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='New Investment'
									id='New Investment'
								/>
								<span>New Investment</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Updates'
									id='Updates'
								/>
								<span>Updates</span>
							</label>
						</fieldset>

						{/* Notifications fiesld set */}
						<fieldset>
							<legend className='notificationLabel'>
								By SMS
								<span>
									(You&apos;ll get an immidiate notification even when offline)
								</span>
							</legend>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Dialy Bonus'
									id='Dialy Bonus'
								/>
								<span>Daily Bonus</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Withdrawal'
									id='Withdrawal'
								/>
								<span>Withdrawal</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Deposit'
									id='Deposit'
								/>
								<span>Deposit</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Task Completion'
									id='Task Completion'
								/>
								<span>Task Completion</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='New Investment'
									id='New Investment'
								/>
								<span>New Investment</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='checkbox'
									name='Updates'
									id='Updates'
								/>
								<span>Updates</span>
							</label>
						</fieldset>

						{/* Push Notifications */}
						<fieldset>
							<legend>Push Notifications</legend>

							<label className='notificationLabel'>
								<input
									type='radio'
									name='push-notifications'
									id='allNotifications'
								/>
								<span>All Notifications</span>
							</label>

							<label className='notificationLabel'>
								<input
									type='radio'
									name='push-notifications'
									id='noNotifications'
								/>
								<span>No Push Notifications</span>
							</label>
						</fieldset>

						<div className='formButtons'>
							<button>Cancel</button>
							<button>Save</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
