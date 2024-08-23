import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useUserAuth } from "../authentication/UserAuthContext";
import { IoSettings } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import MenuList from "./ MenuList";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
	const [openRight, setOpenRight] = useState(false);
	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => setOpenMenu((prev) => !prev);

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/login");
		} catch (error) {
			console.error(error.message);
		}
	};

	const isLoginPage = location.pathname === "/login";

	return (
		<header id="topBar" className="sticky left-0 top-0 z-[20] flex h-16 w-full items-center justify-center bg-tertiary px-4 text-xl shadow-lg">
			<nav id="nav-header" className="container flex items-center justify-between text-letter">
				<div id="desktopMenu" className="hidden w-full items-center justify-between lg:flex">
					<a href="#" id="logo" className="font-aldrich text-2xl font-bold transition-transform duration-300 hover:scale-110"
						style={{ fontSize: "1.8rem", background: "linear-gradient(90deg, #00c6ff, #0072ff)", WebkitBackgroundClip: "text", color: "transparent", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
						Samtocode24
					</a>

					{!isLoginPage && (
						<ul className="flex gap-8">
							{["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
								<li key={index}>
									<a href={`#${item.toLowerCase()}`} className="transition-colors duration-300 hover:text-primary">{item}</a>
								</li>
							))}
						</ul>
					)}

					<div className="flex gap-6">
						<MenuList openMenu={openMenu} toggleMenu={toggleMenu} />

						<button className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
							<a href="https://drive.google.com/file/d/1goVab10JqRzmFbJUuUZM6TtUVkCoEoD6/view?usp=sharing" target="_blank" className="flex items-center">
								Resume&nbsp;<IoMdDownload className="text-lg" />
							</a>
						</button>

						{user ? (
							<button className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white" onClick={handleLogout} aria-label="Log Out">
								Log Out
							</button>
						) : (
							<button className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
								<a href="/login" className="flex items-center">
									Admin Panel <IoSettings className="ml-2 text-lg" />
								</a>
							</button>
						)}
					</div>
				</div>
				<div
					id="mobileMenu"
					className="flex w-full flex-col items-center text-xl lg:hidden"
				>
					<div className="flex w-full items-center justify-between">
						<a href="#" id="logo" className="font-aldrich text-2xl font-bold transition-transform duration-300 hover:scale-110"
							style={{ fontSize: "1.8rem", background: "linear-gradient(90deg, #00c6ff, #0072ff)", WebkitBackgroundClip: "text", color: "transparent", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
							Samtocode24
						</a>
						<button
							className="flex items-center rounded-lg border-2 border-primary p-2 transition-colors duration-300 hover:bg-gray-800"
							onClick={() => setOpenRight(true)}
							aria-label="Open menu"
						>
							<i className="uil uil-apps text-xl"></i>
						</button>
						<MobileMenu openRight={openRight} setOpenRight={setOpenRight} isLoginPage={isLoginPage} handleLogout={handleLogout} user={user} />
					</div></div>
			</nav>
		</header>
	);
};

export default Navbar;