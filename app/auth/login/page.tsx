import React from "react";
import "@/app/components/styles/Auth.css";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className='authPage'>
			<div className='authContainer'>
				<h1>Welcome back. .</h1>

				<form>
					<legend>Login to your account</legend>

					{/* Email or Username label */}
					<label>
						<span>Email / Username</span>

						<input type='text' />
					</label>

					{/* Password Label */}
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
							<span>Keep me logged in</span>
						</label>

						<p>Forgot Password?</p>
					</div>

					<button>Sign In</button>

					<div className='noOrHaveAccount'>
						<Link href={"/auth/signup"}>Don&apos;t have an account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
