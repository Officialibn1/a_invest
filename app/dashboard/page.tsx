import "@/app/components/styles/ProfileNav.css";
import Image from "next/image";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import DashboardCards from "@/app/components/ui/DashboardCards";
import Dividents from "../components/ui/Dividents";

const user_name = "Ibn";

const page = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav'>
				<span>Good Evening, {user_name}</span>

				{/* Mobile view profile */}
				<div>
					<div className='profilePic'>
						<Image
							src={"/ibn_profile.png"}
							width={200}
							height={200}
							quality={90}
							alt='achme investment user profile'
						/>
					</div>

					<div className='downBtn'>
						<BiChevronDown />
					</div>
				</div>
			</div>

			<div className='dashboardPageMain'>
				{/* Dashboard, profits, loss. . . cards */}
				<DashboardCards />

				{/* Dividents section */}
				<Dividents />
			</div>
		</div>
	);
};

export default page;
