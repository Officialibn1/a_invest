import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className='py-10 flex flex-col items-center gap-12'>
			<h1>Home Page</h1>

			<Link
				className='bg-indigo-500 text-xl px-3 py-2 rounded-xl hover:bg-indigo-400 duration-200 ease-in-out text-indigo-800'
				href={"/dashboard"}>
				Dashboard
			</Link>
			<div className='flex gap-5 mt-10'>
				<Link
					className='bg-indigo-500 text-xl px-3 py-2 rounded-xl hover:bg-indigo-400 duration-200 ease-in-out text-indigo-800'
					href={"/auth/login"}>
					Login
				</Link>

				<Link
					className='bg-indigo-500 text-xl px-3 py-2 rounded-xl hover:bg-indigo-400 duration-200 ease-in-out text-indigo-800'
					href={"/auth/signup"}>
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default page;
