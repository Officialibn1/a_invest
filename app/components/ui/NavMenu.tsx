import React from "react";
import "@/app/components/styles/NavMenu.css";
import Link from "next/link";
import { AiOutlineBank, AiOutlineStock } from "react-icons/ai";
import {
	IoBarChartOutline,
	IoHomeOutline,
	IoNotificationsOutline,
} from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbMessage2Dollar } from "react-icons/tb";
import { SlSettings } from "react-icons/sl";

const NavMenu = () => {
	return (
		<nav className='navMenu'>
			<Link href={"/dashboard"}>
				<div className='navLogo'>
					<AiOutlineStock />
					<h5>A-Invest</h5>
				</div>
			</Link>

			<ul>
				{/* Home Link */}
				<li>
					<Link href={`/dashboard`}>
						<IoHomeOutline />
					</Link>
				</li>

				{/* Account Analytics */}
				<li>
					<Link href={`/dashboard`}>
						<IoBarChartOutline />
					</Link>
				</li>

				{/* Investments */}
				<li>
					<Link href={`/dashboard`}>
						<AiOutlineBank />
					</Link>
				</li>

				{/* Notifications */}
				<li>
					<Link href={`/dashboard`}>
						<TbMessage2Dollar />
					</Link>
				</li>

				{/* Withdrawal */}
				<li>
					<Link href={`/dashboard/transactions`}>
						<LiaFileInvoiceDollarSolid />
					</Link>
				</li>

				{/* mobile view notifications */}
				<li className='lg:hidden'>
					<Link href={`/dashboard`}>
						<IoNotificationsOutline />
					</Link>
				</li>

				{/* Account Settings */}
				<li>
					<Link href={`/dashboard`}>
						<SlSettings />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavMenu;
