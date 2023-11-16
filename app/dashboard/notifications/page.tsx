import React from "react";
import "@/app/components/styles/NotificationsPage.css";
import { notifications } from "@/app/lib/dummyData";
import { HiOutlineBellAlert } from "react-icons/hi2";

const NotificationsPage = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav py-5'>
				<HiOutlineBellAlert />

				<span>Notifications</span>
			</div>

			<div className='notificationsPageContainer'>
				{notifications.map((notification) => (
					<div
						key={notification._id}
						className='notificationPageCard'>
						<div className='icon'>
							<HiOutlineBellAlert />
						</div>

						<div className='text'>
							<p>{notification.desc}</p>
							<span>{notification.date}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default NotificationsPage;
