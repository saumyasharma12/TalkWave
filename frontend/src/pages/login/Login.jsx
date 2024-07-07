import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
 
	return (
		<div className="flex ">

        <div className="left m-8">
			<h1 className="text-9xl font-semibold text-center text-blue-800">TalkWave</h1>
			<p className="text-3xl text-white">TalkWave helps you connect and share<br></br> with the people in your life.</p>
		</div>

		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full  p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> TalkWave</span>
				</h1>

				<form  onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text  text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup'  className='text-sm  text-white hover:underline hover:text-blue-900 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div> 
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>

		
		</div>
	);
};
export default Login;

