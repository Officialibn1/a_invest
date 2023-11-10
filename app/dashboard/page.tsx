import "@/app/components/styles/ProfileNav.css";
import Image from "next/image";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const user_name = "Ibn";

const page = () => {
	return (
		<div className='dashboardPage'>
			<div className='dashboardPageNav'>
				<span>Welcome back, {user_name}</span>

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
		</div>
	);
};

export default page;
