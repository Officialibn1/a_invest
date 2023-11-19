import React from "react";
import "@/app/components/styles/Auth.css";
import Link from "next/link";

const SignUpPage = () => {
	return (
		<div className='authPage'>
			<div className='authContainer signUpContainer'>
				<h1>Sign Up</h1>

				<form>
					<legend>Enter your credentials</legend>

					<div className='signUpGrid'>
						{/* First name label */}
						<label>
							<span>First Name</span>

							<input type='text' />
						</label>

						{/* Last name label */}
						<label>
							<span>Last Name</span>

							<input type='text' />
						</label>
					</div>

					{/* Email label */}
					<label>
						<span>Email</span>

						<input type='email' />
					</label>

					{/* Password label */}
					<label>
						<span>Password</span>

						<input type='password' />
					</label>

					<div className='forgot'>
						<label>
							<input
								type='checkbox'
								name='forgot'
								id='forgot'
							/>
							<span>
								Agree with{" "}
								<span className='underline underline-offset-2'>
									Terms & Conditions.
								</span>
							</span>
						</label>
					</div>

					<button>Sign Up</button>

					<div className='noOrHaveAccount'>
						<Link href={"/auth/login"}>Already have an account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpPage;
