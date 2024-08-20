import React, { useState } from 'react';
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
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
				<div id='desktopMenu' className='hidden w-full items-center justify-between md:flex'>
					<a href="#" className='text-2xl font-bold transition-colors duration-300 hover:text-primary'>samtocode24</a>

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
						<button className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
							<a href="https://drive.google.com/file/d/1goVab10JqRzmFbJUuUZM6TtUVkCoEoD6/view?usp=sharing" target="blank" className='flex items-center'>
								Resume&nbsp;<IoMdDownload className="text-lg" />
							</a>
						</button>
						{user ? (
							<button
								className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
								onClick={handleLogout}
								aria-label="Log Out"
							>
								Log Out
							</button>
						) : (
							<button className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
								<a href="/login" className='flex items-center'>
									Admin Panel <IoSettings className="ml-2 text-lg" />
								</a>
							</button>
						)}
					</div>
				</div>

				<div id='mobileMenu' className='flex w-full flex-col items-center text-xl md:hidden'>
					<div className='flex w-full items-center justify-between'>
						<a href="#" className='text-2xl font-bold transition-colors duration-300 hover:text-primary'>samtocode24</a>
						<button
							className='flex items-center rounded-lg border-2 border-primary p-2 transition-colors duration-300 hover:bg-gray-800'
							onClick={openDrawerRight}
							aria-label="Open menu"
						>
							<i className="uil uil-apps text-xl"></i>
							{/* <span className="ml-2">Menu</span> */}
						</button>
					</div>

					<Drawer
						placement="right"
						open={openRight}
						onClose={closeDrawerRight}
						className="bg-tertiary p-6 text-letter shadow-lg"
					>
						<div className="mb-6 flex items-center justify-between pl-6 pr-4">
							<Typography variant="h5" color="blue" className="font-bold">
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
									className="h-6 w-6 text-primary"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</IconButton>
						</div>

						<div className="mb-8 h-full pr-4 font-normal text-gray-600">
							<ul id="mobileMenu-list" className="flex h-full flex-col text-xl">
								<div className="flex h-full flex-col" id='mob-lists'>
									{/* Conditionally render the ul element */}
									{!isLoginPage && (
										<>
											{['home', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
												<li key={index} className="group flex h-full items-center">
													<a
														href={`#${section}`}
														className="flex w-full items-center space-x-3 transition-colors duration-300 hover:text-primary"
													>
														<i className={`uil uil-${section === 'home' ? 'estate' : section === 'about' ? 'user' : section === 'skills' ? 'file-alt' : section === 'projects' ? 'briefcase-alt' : 'message'} text-primary group-hover:text-primary text-xl`}></i>
														<span className="group-hover:text-primary">
															{section.charAt(0).toUpperCase() + section.slice(1)}
														</span>
													</a>
												</li>
											))}
										</>
									)}
									{user ? (
										<li className="group flex h-full items-center">
											<button
												onClick={handleLogout}
												className="flex w-full items-center space-x-3 transition-colors duration-300 hover:text-primary"
												aria-label="Log Out"
											>
												<i className="uil uil-sign-out-alt text-xl text-primary group-hover:text-primary"></i>
												<span className="group-hover:text-primary">Log Out</span>
											</button>
										</li>
									) : (
										<li className="group flex h-full items-center">
											<a
												href="/login"
												className="flex w-full items-center space-x-3 transition-colors duration-300 hover:text-primary"
											>
												<i className="uil uil-sign-in-alt text-xl text-primary group-hover:text-primary"></i>
												<span className="group-hover:text-primary">Admin Panel</span>
											</a>
										</li>
									)}
								</div>
							</ul>
						</div>
					</Drawer>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;