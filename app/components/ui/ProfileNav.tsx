import React from "react";
import "@/app/components/styles/ProfileNav.css";
import Image from "next/image";
import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";

const ProfileNav = () => {
	return (
		<nav className='profileNav'>
			<div className='profileNavHeader'>
				{/* largescreen Notifications icon */}
				<Link href={"/"}>
					<RiMessage3Line />
				</Link>

				<Link href={"/"}>
					<IoNotificationsOutline />
				</Link>

				<Link href={"/dashboard/account"}>
					<div className='profilePic shadow-xl'>
						<Image
							src={"/ibn_profile.png"}
							width={200}
							height={200}
							quality={90}
							alt='achme investment user profile'
						/>
					</div>
				</Link>
			</div>
			<div className='profileNavContent'>
				<div className='notificationsDiv'>
					<h2>Notifications</h2>

					<div className='notificationsContainer'>
						{[1, 2, 3, 4, 5, 6, 7].map((m) => (
							<Link
								key={m}
								href={"/"}
								className='notificationContainer'>
								<div className='imgCon'>
									<Image
										src={"/ibn_profile.png"}
										width={100}
										height={100}
										quality={90}
										alt='achme investment user profile'
									/>
								</div>

								<div className='textCon'>
									<p>Lorem ipsum dolor sit adipisicing elit.. .. .</p>

									<span>7:30PM</span>
								</div>
							</Link>
						))}
					</div>

					{/* Latest News */}
					<h2>Latest News</h2>

					<div className='notificationsContainer'>
						{[1, 2, 3, 4, 5, 6, 7].map((m) => (
							<Link
								key={m}
								href={"/"}
								className='notificationContainer'>
								<div className='imgCon'>
									<Image
										src={"/ibn_profile.png"}
										width={100}
										height={100}
										quality={90}
										alt='achme investment user profile'
									/>
								</div>

								<div className='textCon'>
									<p>Lorem ipsum dolor sit adipisicing elit.. .. .</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default ProfileNav;
