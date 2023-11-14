"use client";
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
import { NavMenuLinks } from "@/typings";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navMenuLinks: NavMenuLinks[] = [
	{
		url: "/dashboard",
		icon: <IoHomeOutline />,
		name: "Dashboard",
	},
	{
		url: "/dashboard/analytics",
		icon: <IoBarChartOutline />,
		name: "Analytics",
	},
	{
		url: "/dashboard/withdraw",
		icon: <AiOutlineBank />,
		name: "Investments",
	},
	{
		url: "/dashboard/notifications",
		icon: <TbMessage2Dollar />,
		name: "Notifications",
	},
	{
		url: "/dashboard/transactions",
		icon: <LiaFileInvoiceDollarSolid />,
		name: "Transactions",
	},
	{
		url: "/dashboard/messages",
		icon: <IoNotificationsOutline />,
		name: "Mobile Notifications",
	},
	{
		url: "/dashboard/settings",
		icon: <SlSettings />,
		name: "Settings",
	},
];

const NavMenu = () => {
	const pathName = usePathname();
	return (
		<nav className='navMenu'>
			<Link href={"/dashboard"}>
				<div className='navLogo'>
					<AiOutlineStock />
					<h5>A-Invest</h5>
				</div>
			</Link>

			<ul>
				{navMenuLinks.map((link, i) => (
					<li
						key={i}
						className={clsx({ activeLink: pathName === link.url })}>
						<Link href={link.url}>{link.icon}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavMenu;
