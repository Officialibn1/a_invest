"use client";
import React from "react";
import { HiOutlineUser } from "react-icons/hi2";
import "@/app/components/styles/AccountPage.css";
import Image from "next/image";

const AccountPage = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<HiOutlineUser />
				<span>Account</span>
			</div>

			<div className='accountPage'>
				<div className='accountProfile'>
					<header>
						<h3>My Profile</h3>
					</header>

					<div>
						<Image
							src={"/ibn_profile.png"}
							width={200}
							height={200}
							alt='user profile image'
						/>
					</div>

					<span>Upload/Change Your Profile Image</span>

					<button>Upload Avatar</button>
				</div>
				<div className='personalInformation'>
					<header>
						<h3>Personal Information</h3>
					</header>

					<form onSubmit={(e) => console.log("Hello")}>
						<label className='md:col-span-2'>
							<span>Name</span>

							<input
								type='text'
								id='name'
							/>
						</label>

						<label className='md:col-span-2'>
							<span>Email Address</span>

							<input
								type='email'
								id='email'
							/>
						</label>

						<label>
							<span>Country</span>

							<input
								type='text'
								id='country'
							/>
						</label>

						<label>
							<span>State</span>

							<input
								type='text'
								id='state'
							/>
						</label>

						<label>
							<span>Phone</span>

							<input
								type='tel'
								id='phone'
								name='phone'
								pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
								placeholder='123-456-7890'
							/>
						</label>

						<label>
							<span>Birthday</span>

							<input
								type='date'
								id='birthday'
								name='birthday'
							/>
						</label>

						<button>Update Details</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AccountPage;
