import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuthHook } from "../../../contexts/providers/hooks/useAuthHook";
import CustomMenuList from "./children/CustomMenuList";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./children/MobileMenu";
import './Navbar.css';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const [activeMenu, setActiveMenu] = useState('home');
	const { logOut, user } = useAuthHook();
	const navigate = useNavigate();
	const location = useLocation();

	const isLoginPage = location.pathname === "/admin/login";

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/portfolio");
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	const handleMouseEnter = () => {
		clearTimeout(timeoutId);
		setOpenMenu(true);
	};

	const handleMouseLeave = () => {
		const id = setTimeout(() => setOpenMenu(false), 200);
		setTimeoutId(id);
	};

	return (
		<header className="sticky top-0 z-20 flex h-16 w-full bg-tertiary px-4 text-base text-letter shadow-lg lg:px-10 xl:text-xl 2xl:text-2xl">
			<nav className="flex h-full w-full items-center justify-between">
				<div className="hidden w-full items-center justify-between lg:flex">
					<RouterLink to="/portfolio" className="font-aldrich text-[1.6rem] font-bold transition-transform duration-300 hover:scale-110 xl:text-4xl"
						style={{ background: "linear-gradient(90deg, #00c6ff, #0072ff)", WebkitBackgroundClip: "text", color: "transparent", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
						SAMUVEL A
					</RouterLink>

					{!isLoginPage && (
						<div className="flex gap-3 xl:gap-6">
							{['home', 'about', 'education', 'skills', 'projects', 'contact'].map((section) => (
								<ScrollLink
									key={section}
									to={section}
									spy={true}
									smooth={true}
									offset={-63}
									duration={200}
									className={`desktopMenuListItem ${activeMenu === section ? 'active' : ''}`}
									onSetActive={() => setActiveMenu(section)}
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</ScrollLink>
							))}
						</div>
					)}

					<div className="flex gap-4">
						<div
							className="relative"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<button className="flex items-center justify-center gap-2 rounded-full border border-primary bg-transparent px-4 py-2 font-normal capitalize tracking-normal text-primary transition-all duration-300 hover:bg-primary hover:text-letter focus:outline-none focus:ring-2 focus:ring-primary">
								Resume
								<ChevronDownIcon
									strokeWidth={2.5}
									className={`h-4 w-4 transition-transform ${openMenu ? "rotate-180" : "rotate-0"}`}
								/>
							</button>
							{openMenu && (
								<div className="absolute left-1/2 mt-4 w-80 -translate-x-1/2 transform rounded-xl shadow-lg">
									<CustomMenuList />
								</div>
							)}
						</div>

						{user ? (
							<button
								onClick={handleLogout}
								className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-letter"
							>
								Log Out
								<span className="material-symbols-outlined ml-2">logout</span>
							</button>
						) : (
							<RouterLink
								to="/admin/login"
								className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-letter"
							>
								Admin Panel
								<span className="material-symbols-outlined ml-2">admin_panel_settings</span>
							</RouterLink>
						)}
					</div>
				</div>

				<div className="flex w-full flex-col items-center text-xl lg:hidden">
					<div className="flex w-full items-center justify-between">
						<RouterLink to="/portfolio" className="font-aldrich text-2xl font-bold transition-transform duration-300 hover:scale-110"
							style={{ fontSize: "1.8rem", background: "linear-gradient(90deg, #00c6ff, #0072ff)", WebkitBackgroundClip: "text", color: "transparent", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
							Samtocode24
						</RouterLink>
						<button
							onClick={() => setOpenMobileMenu(prev => !prev)}
							className="flex items-center rounded-lg border-2 border-primary px-2 py-1 transition-colors duration-300 hover:bg-gray-800"
						>
							<i className="uil uil-apps text-2xl"></i>
						</button>
					</div>
					<MobileMenu
						openRight={openMobileMenu}
						setOpenRight={setOpenMobileMenu}
						isLoginPage={isLoginPage}
						handleLogout={handleLogout}
						user={user}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;