import React, { useState } from 'react';
import {
	Drawer,
	Button,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { IoMdDownload } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {

	const [openRight, setOpenRight] = React.useState(false);

	const openDrawerRight = () => setOpenRight(true);
	const closeDrawerRight = () => setOpenRight(false);

	return (
		<header id='topBar' className='h-16 w-full sticky top-0 left-0 max-md:px-4 bg-tertiary flex justify-center items-center text-xl z-[20!important]'>
			<nav id='nav-header' className='container flex justify-between items-center text-letter'>
				<div id='desktopMenu' className='hidden md:flex justify-between items-center h-full w-full'>
					<a className='flex' href="index.html">samtocode24</a>
					<ul className="flex gap-4">
						<li><a href="#hero">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#portfolio">Portfolio</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
					<button className="flex justify-center items-center border-0">
						<a href="#" className='flex justify-center items-center'>Resume <IoMdDownload /></a>
					</button>
					<button className="flex justify-center items-center border-0">
						<a href="/login" className='flex justify-center items-center' target="_blank">Admin Panel <IoSettings /></a>
					</button>
				</div>

				<div id='mobileMenu' className='md:hidden flex flex-col justify-between items-center h-full w-full text-xl'>
					<div className='flex justify-between items-center h-full w-full'>
						<a href="index.html">samtocode24</a>
						<button className='focus:border rounded-lg p-1' onClick={openDrawerRight}>
							<div><i className="uil uil-apps mob-nav-menu ml-0"></i><span>Menu</span></div>
						</button>
					</div>

					<React.Fragment>

						<Drawer
							placement="right"
							open={openRight}
							onClose={closeDrawerRight}
							className="p-4"
						>
							<div className="mb-6 flex items-center justify-between">
								<Typography variant="h5" color="blue-gray">
									Material Tailwind
								</Typography>
								<IconButton
									variant="text"
									color="blue-gray"
									onClick={closeDrawerRight}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="h-5 w-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</IconButton>
							</div>
							<div color="gray" className="mb-8 pr-4 font-normal">
								<ul id='mobileMenu-list' className="flex flex-col gap-4 mt-5 w-full h-full text-3xl">
									<li><a href="#hero"><i className="uil uil-estate"></i>Home</a></li>
									<li><a href="#about"><i className="uil uil-user"></i>About</a></li>
									<li><a href="#skills"><i className="uil uil-file-alt"></i>Skills</a></li>
									<li><a href="#projects"><i className="uil uil-briefcase-alt"></i>Projects</a></li>
									<li><a href="#portfolio"><i className="uil uil-scenery"></i>Portfolio</a></li>
									<li><a href="#contact"><i className="uil uil-message"></i>Contact</a></li>
								</ul>
							</div>
							{/* <div className="flex gap-2">
								<Button size="sm" variant="outlined">
									Documentation
								</Button>
								<Button size="sm">Get Started</Button>
							</div> */}
						</Drawer>

					</React.Fragment>

				</div>
			</nav>
		</header>
	);
};

export default Navbar;
