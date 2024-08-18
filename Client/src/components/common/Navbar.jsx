import React, { useState } from 'react';
import {
	Drawer,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { IoMdDownload } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router";
import { useUserAuth } from "../authentication/UserAuthContext";

const Navbar = () => {
	const [openRight, setOpenRight] = useState(false);
	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const openDrawerRight = () => setOpenRight(true);
	const closeDrawerRight = () => setOpenRight(false);

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/login");
		} catch (error) {
			console.error(error.message);
		}
	};

	// Check if the current page is the login page
	const isLoginPage = location.pathname === "/login";

	return (
		<header id='topBar' className='sticky left-0 top-0 z-[20] flex h-16 w-full items-center justify-center bg-tertiary px-4 text-xl shadow-lg'>
			<nav id='nav-header' className='container flex items-center justify-between text-letter'>
				<div id='desktopMenu' className='items-center justify-between hidden w-full md:flex'>
					<a href="" className='text-2xl font-bold transition-colors duration-300 hover:text-primary'>samtocode24</a>

					{/* Conditionally render the ul element */}
					{!isLoginPage && (
						<ul className="flex gap-8">
							{['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
								<li key={index}>
									<a href={`#${item.toLowerCase()}`} className="transition-colors duration-300 hover:text-primary">{item}</a>
								</li>
							))}
						</ul>
					)}

					<div className="flex gap-6">
						<button className="flex items-center px-4 py-2 transition-all duration-300 bg-transparent border rounded-full border-primary text-primary hover:bg-primary hover:text-white">
							<a href="https://drive.google.com/file/d/1RaVJu04Z-fqG1k0h5sXJ_gWzUNBZnyH6/view?usp=sharing" target="blank" className='flex items-center'>
								Resume&nbsp;<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
								</svg>

							</a>
						</button>
						{user ? (
							<>
								<button
									className="flex items-center px-4 py-2 transition-all duration-300 bg-transparent border rounded-full border-primary text-primary hover:bg-primary hover:text-white"
									onClick={handleLogout}
								>
									Log Out
								</button>
							</>
						) : (
							<button className="flex items-center px-4 py-2 transition-all duration-300 bg-transparent border rounded-full border-primary text-primary hover:bg-primary hover:text-white">
								<a href="/login" className='flex items-center'>
									Admin Panel <IoSettings className="ml-2 text-lg" />
								</a>
							</button>
						)}
					</div>
				</div>

				<div id='mobileMenu' className='flex flex-col items-center w-full text-xl md:hidden'>
					<div className='flex items-center justify-between w-full'>
						<a href="index.html" className='text-2xl font-bold transition-colors duration-300 hover:text-primary'>samtocode24</a>
						<button
							className='flex items-center p-2 transition-colors duration-300 rounded-lg hover:bg-gray-800'
							onClick={openDrawerRight}
							aria-label="Open menu"
						>
							<i className="text-xl uil uil-apps"></i>
							<span className="ml-2">Menu</span>
						</button>
					</div>

					<Drawer
						placement="right"
						open={openRight}
						onClose={closeDrawerRight}
						className="p-6 rounded-lg shadow-lg bg-tertiary text-letter"
					>
						<div className="flex items-center justify-between mb-6">
							<Typography variant="h5" color="blue-gray" className="font-bold">
								Menu
							</Typography>
							<IconButton
								variant="text"
								color="blue-gray"
								onClick={closeDrawerRight}
								aria-label="Close menu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-6 h-6 text-primary"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</IconButton>
						</div>

						<div className="pr-4 mb-8 font-normal text-gray-600">
							<ul id="mobileMenu-list" className="flex flex-col gap-6 mt-5 text-xl">
								{['home', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
									<li key={index} className="group">
										<a
											href={`#${section}`}
											className="flex items-center space-x-3 transition-colors duration-300 hover:text-primary"
										>
											<i className={`uil uil-${section === 'home' ? 'estate' : section === 'about' ? 'user' : section === 'skills' ? 'file-alt' : section === 'projects' ? 'briefcase-alt' : 'message'} text-primary group-hover:text-secondary text-xl`}></i>
											<span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
										</a>
									</li>
								))}
								{user && (
									<li className="group">
										<a
											href="/login"
											className="flex items-center space-x-3 transition-colors duration-300 hover:text-primary"
										>
											<i className="text-xl uil uil-settings text-primary group-hover:text-secondary"></i>
											<span>Admin Panel</span>
										</a>
									</li>
								)}
								{user ? (
									<li className="group">
										<button
											onClick={handleLogout}
											className="flex items-center space-x-3 transition-colors duration-300 hover:text-primary"
										>
											<i className="text-xl uil uil-sign-out-alt text-primary group-hover:text-secondary"></i>
											<span>Log Out</span>
										</button>
									</li>
								) : (
									<li className="group">
										<a
											href="/login"
											className="flex items-center space-x-3 transition-colors duration-300 hover:text-primary"
										>
											<i className="text-xl uil uil-sign-in-alt text-primary group-hover:text-secondary"></i>
											<span>Log In</span>
										</a>
									</li>
								)}
							</ul>
						</div>
					</Drawer>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;