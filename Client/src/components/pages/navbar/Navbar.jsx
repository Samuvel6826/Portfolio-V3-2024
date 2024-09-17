import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useUserAuth } from "../../authentication/UserAuthContext";
import CustomMenuList from "./CustomMenuList";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null); // For managing timeout
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const [activeMenu, setActiveMenu] = useState('home');
	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const isLoginPage = location.pathname === "/login";

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/login");
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

	const toggleMobileMenu = () => setOpenMobileMenu(prev => !prev);

	return (
		<header id="topBar" className="sticky top-0 z-20 flex h-16 w-full bg-tertiary px-4 text-base text-letter shadow-lg lg:px-10 xl:text-xl 2xl:text-2xl">
			<nav id="nav-header" className="flex h-full w-full items-center justify-between">
				<div id="desktopMenu" className="hidden w-full items-center justify-between lg:flex">
					<a href="home" id="logo" className="font-aldrich text-[1.6rem] font-bold transition-transform duration-300 hover:scale-110 xl:text-4xl"
						style={{ background: "linear-gradient(90deg, #00c6ff, #0072ff)", WebkitBackgroundClip: "text", color: "transparent", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
						SamToCode24
					</a>

					{!isLoginPage && (
						<div className="flex gap-3 xl:gap-6">
							{['home', 'about', 'education', 'skills', 'projects', 'contact'].map((section) => (
								<Link
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
								</Link>
							))}
						</div>
					)}

					<div className="flex gap-4">
						<div
							id="resumeContainer"
							className="relative"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<button
								id="resumeBtn"
								className="flex items-center justify-center gap-2 rounded-full border border-primary bg-transparent px-4 py-2 font-normal capitalize tracking-normal text-primary transition-all duration-300 hover:bg-primary hover:text-letter focus:outline-none focus:ring-2 focus:ring-primary"
							>
								Resume
								<ChevronDownIcon
									aria-label="Toggle dropdown"
									strokeWidth={2.5}
									className={`h-4 w-4 transition-transform ${openMenu ? "rotate-180" : "rotate-0"}`}
								/>
							</button>
							{openMenu && (
								<div className="absolute left-1/2 mt-4 w-80 -translate-x-1/2 transform text-2xl shadow-lg">
									<CustomMenuList />
								</div>
							)}
						</div>

						{user ? (
							<button
								className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-letter"
								onClick={handleLogout}
								aria-label="Log Out"
							>
								Log Out
								<span className="material-symbols-outlined ml-2">
									logout
								</span>
							</button>
						) : (
							<a href="/login" className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-letter">
								Admin Panel
								<span className="material-symbols-outlined ml-2">
									admin_panel_settings
								</span>
							</a>
						)}
					</div>
				</div>

				<div id="mobileMenu" className="flex w-full flex-col items-center text-xl lg:hidden">
					<div className="flex w-full items-center justify-between">
						<a href="#" id="logo" className="font-aldrich text-2xl font-bold transition-transform duration-300 hover:scale-110"
							style={{ fontSize: "1.8rem", background: "linear-gradient(90deg, #00c6ff, #0072ff)", WebkitBackgroundClip: "text", color: "transparent", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
							Samtocode24
						</a>
						<button
							className="flex items-center rounded-lg border-2 border-primary px-2 py-1 transition-colors duration-300 hover:bg-gray-800"
							onClick={toggleMobileMenu}
							aria-label="Open menu"
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