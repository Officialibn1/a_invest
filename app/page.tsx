import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className='py-10 flex flex-col items-center gap-12'>
			<h1>Home Page</h1>

			<Link
				className='bg-indigo-600 text-xl px-3 py-2 rounded-xl hover:bg-indigo-500 duration-200 ease-in-out text-slate-200'
				href={"/dashboard"}>
				Dashboard
			</Link>
		</div>
	);
};

export default page;
