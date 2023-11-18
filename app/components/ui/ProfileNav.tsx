import React from "react";
import "@/app/components/styles/ProfileNav.css";
import Image from "next/image";
import Link from "next/link";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { notifications } from "@/app/lib/dummyData";

const ProfileNav = () => {
	return (
		<nav className='profileNav'>
			<div className='profileNavHeader'>
				{/* largescreen Notifications icon */}
				<Link href={"/dashboard/transactions"}>
					<RiMessage3Line />
				</Link>

				<Link href={"/dashboard/notifications"}>
					<IoNotificationsOutline />
				</Link>

				<Link href={"/dashboard/user/account"}>
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
						{notifications.map((n) => (
							<div
								key={n._id}
								className='notificationContainer'>
								<div className='textCon'>
									<p>{n.desc.slice(0, 45)}. . .</p>

									<span>{n.date}</span>
								</div>
							</div>
						))}
					</div>

					<div className='viewAll'>
						<Link href={"/dashboard/notifications"}>View All</Link>
					</div>

					{/* Latest News */}
					{/* <h2>Latest News</h2>

					<div className='notificationsContainer'>
						{notifications.map((n) => (
							<div
								key={n._id}
								className='notificationContainer'>
								<div className='textCon'>
									<p>{n.desc.slice(0, 45)}. . .</p>
								</div>
							</div>
						))}
					</div> */}
				</div>
			</div>
		</nav>
	);
};

export default ProfileNav;
