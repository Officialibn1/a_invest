import Link from "next/link";
import React from "react";

const DashboardNotFound = () => {
	return (
		<div className='w-full h-screen flex'>
			<div className='m-auto w-fit text-center'>
				<h1>Oppsss. . . This page is under construction</h1>

				<div className='m-auto w-full flex mt-10'>
					<Link
						className='w-fit py-3 px-4 rounded-xl bg-indigo-400 text-indigo-700 mx-auto md:hover:bg-indigo-300'
						href={"/dashboard"}>
						Back To Dashboard
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DashboardNotFound;
