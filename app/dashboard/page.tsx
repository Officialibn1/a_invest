import "@/app/components/styles/ProfileNav.css";
import Image from "next/image";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import DashboardCards from "@/app/components/ui/DashboardCards";
import Dividents from "../components/ui/Dividents";
import InvestmentOverview from "../components/ui/InvestmentOverview";
import LatestTransactions from "../components/ui/LatestTransactions";
import Link from "next/link";

const user_name = "Ibn";

const currentHour = new Date().getHours();

const page = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav'>
				<p>
					{(currentHour >= 5 && currentHour < 12 && "Good Morning") ||
					(currentHour >= 12 && currentHour < 17)
						? "Good Afternoon"
						: "Good Evening"}
					, {user_name}
				</p>

				{/* Mobile view profile */}
				<div>
					<div className='profilePic'>
						<Link href={"/dashboard/user/account"}>
							<Image
								src={"/ibn_profile.png"}
								width={200}
								height={200}
								quality={90}
								alt='achme investment user profile'
							/>
						</Link>
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

				{/* InvestmentOverview section */}
				<InvestmentOverview />

				{/* Latest Transactions table */}
				<LatestTransactions />
			</div>
		</div>
	);
};

export default page;
