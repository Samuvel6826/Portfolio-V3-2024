import React, { useState } from 'react';
import { IoMdDownload } from "react-icons/io";
import { Drawer } from 'antd';

const Navbar = () => {

	const [open, setOpen] = useState(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	return <header id='topBar' className=' h-16 w-full fixed top-0 left-0 max-md:px-4 bg-tertiary flex justify-center items-center text-xl z-20'>
		<nav id='nav-header' className='container flex justify-between items-center text-letter'>
			<div id='desktopMenu' className='hidden md:flex justify-between items-center h-full w-full'>
				<a className='flex' href="index.html">samtocode24</a>

				<ul className="flex gap-4">
					<li>
						<a href="#hero">Home</a>
					</li>
					<li>
						<a href="#about">About
						</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>

					</li>
					<li>
						<a href="#portfolio">Portfolio</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>

				<button className="flex justify-center items-center border-0">
					<a href="#" className='flex justify-center items-center'>Resume
						<IoMdDownload />
					</a>
				</button>
			</div>

			<div id='mobileMenu' className='md:hidden flex flex-col justify-between items-center h-full w-full text-xl'>
				<div className='flex lex-col justify-between items-center h-full w-full'>
					<a href="index.html">samtocode24</a>
					<button className='focus:border rounded-lg p-1' onClick={showDrawer}>
						<div><i className="uil uil-apps mob-nav-menu ml-0"></i><span>Menu</span></div>
					</button>
				</div>

				<Drawer title="Basic Drawer" onClose={onClose} open={open}>
					<ul id='mobileMenu-list' className="flex flex-col gap-4 mt-5 w-full h-full text-3xl">
						<li>
							<a href="#hero"><i className="uil uil-estate"></i>Home</a>
						</li>
						<li>
							<a href="#about"><i className="uil uil-user"></i>About</a>
						</li>
						<li>
							<a href="#skills"><i className="uil uil-file-alt"></i>Skills</a>
						</li>
						<li>
							<a href="#projects"><i className="uil uil-briefcase-alt"></i>Projects</a>
						</li>
						<li>
							<a href="#portfolio"><i className="uil uil-scenery"></i>Portfolio</a>
						</li>
						<li>
							<a href="#contact"><i className="uil uil-message"></i>Contact</a>
						</li>
					</ul>
				</Drawer>
			</div>
		</nav>
	</header>
};

export default Navbar;
