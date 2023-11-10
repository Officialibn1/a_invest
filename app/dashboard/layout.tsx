import React, { ReactNode } from "react";
import NavMenu from "../components/ui/NavMenu";
import ProfileNav from "../components/ui/ProfileNav";
import "@/app/components/styles/Dashboard.css";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='dashboardLayout'>
			<NavMenu />
			{children}
			<ProfileNav />
		</main>
	);
};

export default DashboardLayout;
