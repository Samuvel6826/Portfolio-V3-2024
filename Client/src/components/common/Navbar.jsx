import React, { useState } from 'react';
import {
	Drawer,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { IoMdDownload } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useUserAuth } from "../authentication/UserAuthContext";

const Navbar = () => {
	const [openRight, setOpenRight] = useState(false);

	const openDrawerRight = () => setOpenRight(true);
	const closeDrawerRight = () => setOpenRight(false);

	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/login");
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<header id='topBar' className='h-16 w-full sticky top-0 left-0 px-4 bg-tertiary flex justify-center items-center text-xl z-[20] shadow-lg'>
			<nav id='nav-header' className='container flex justify-between items-center text-letter'>
				<div id='desktopMenu' className='hidden md:flex justify-between items-center w-full'>
					<a href="index.html" className='text-2xl font-bold hover:text-primary transition-colors duration-300'>samtocode24</a>
					<ul className="flex gap-8">
						{['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
							<li key={index}>
								<a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors duration-300">{item}</a>
							</li>
						))}
					</ul>
					<div className="flex gap-6">
						<button className="flex items-center border border-primary text-primary rounded-full px-4 py-2 bg-transparent hover:bg-primary hover:text-white transition-all duration-300">
							<a href="#" className='flex items-center'>
								Resume <IoMdDownload className="ml-2 text-lg" />
							</a>
						</button>
						<button className="flex items-center border border-primary text-primary rounded-full px-4 py-2 bg-transparent hover:bg-primary hover:text-white transition-all duration-300">
							<a href="/login" className='flex items-center'>
								Admin Panel <IoSettings className="ml-2 text-lg" />
							</a>
						</button>
						<button
							className="flex items-center border border-primary text-primary rounded-full px-4 py-2 bg-transparent hover:bg-primary hover:text-white transition-all duration-300"
							onClick={handleLogout}
						>
							Log Out
						</button>
					</div>
				</div>

				<div id='mobileMenu' className='md:hidden flex flex-col items-center w-full text-xl'>
					<div className='flex justify-between items-center w-full'>
						<a href="index.html" className='text-2xl font-bold hover:text-primary transition-colors duration-300'>samtocode24</a>
						<button
							className='flex items-center p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300'
							onClick={openDrawerRight}
							aria-label="Open menu"
						>
							<i className="uil uil-apps text-xl"></i>
							<span className="ml-2">Menu</span>
						</button>
					</div>

					<Drawer
						placement="right"
						open={openRight}
						onClose={closeDrawerRight}
						className="p-6 bg-tertiary text-letter rounded-lg shadow-lg"
					>
						<div className="mb-6 flex items-center justify-between">
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

						<div className="mb-8 pr-4 font-normal text-gray-600">
							<ul id="mobileMenu-list" className="flex flex-col gap-6 mt-5 text-xl">
								{['hero', 'about', 'skills', 'projects', 'footer'].map((section, index) => (
									<li key={index} className="group">
										<a
											href={`#${section}`}
											className="flex items-center space-x-3 hover:text-primary transition-colors duration-300"
										>
											<i className={`uil uil-${section === 'hero' ? 'estate' : section === 'about' ? 'user' : section === 'skills' ? 'file-alt' : section === 'projects' ? 'briefcase-alt' : 'message'} text-primary group-hover:text-secondary text-xl`}></i>
											<span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</Drawer>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;