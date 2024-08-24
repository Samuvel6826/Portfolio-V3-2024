import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useUserAuth } from "../../authentication/UserAuthContext";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { IoSettings } from "react-icons/io5";
import CustomMenuList from "./CustomMenuList";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null); // For storing the timeout ID
	const [openMobileMenu, setOpenMobileMenu] = useState(false); // State for mobile menu
	const { logOut, user } = useUserAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [activeMenu, setActiveMenu] = useState(null);

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/login");
		} catch (error) {
			console.error(error.message);
		}
	};

	const isLoginPage = location.pathname === "/login";

	const handleMenuClick = (menu) => {
		setActiveMenu(menu);
	};

	const handleDownloadClick = (fileUrl) => {
		fetch(fileUrl)
			.then(response => response.blob())
			.then(blob => {
				const link = document.createElement('a');
				link.href = window.URL.createObjectURL(blob);
				link.download = fileUrl.split('/').pop();
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			})
			.catch(error => console.error('Download error:', error));
	};

	// Handler for mouse enter event
	const handleMouseEnter = () => {
		if (timeoutId) {
			clearTimeout(timeoutId); // Clear any existing timeout
		}
		setOpenMenu(true);
	};

	// Handler for mouse leave event
	const handleMouseLeave = () => {
		const id = setTimeout(() => {
			setOpenMenu(false);
		}, 200); // Adjust delay as needed (200ms here)
		setTimeoutId(id);
	};

	const toggleMobileMenu = () => {
		setOpenMobileMenu(!openMobileMenu);
	};

	return (
		<header id="topBar" className="sticky left-0 top-0 z-[20] flex h-16 w-full items-center justify-center bg-tertiary px-4 text-lg shadow-lg xl:text-2xl">
			<nav id="nav-header" className="container flex items-center justify-between text-letter">
				<div id="desktopMenu" className="hidden w-full items-center justify-between lg:flex">
					<a href="#" id="logo" className="font-aldrich text-2xl font-bold transition-transform duration-300 hover:scale-110"
						style={{ fontSize: "1.8rem", background: "linear-gradient(90deg, #00c6ff, #0072ff)", WebkitBackgroundClip: "text", color: "transparent", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}>
						Samtocode24
					</a>

					{!isLoginPage && (
						<div className="desktopMenu flex gap-6">
							<Link to="home" spy={true} smooth={true} offset={-68} duration={200} className={`desktopMenuListItem ${activeMenu === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')}>
								Home
							</Link>
							<Link to="about" spy={true} smooth={true} offset={-63} duration={200} className={`desktopMenuListItem ${activeMenu === 'about' ? 'active' : ''}`} onClick={() => handleMenuClick('about')}>
								About
							</Link>
							<Link to="skills" spy={true} smooth={true} offset={-63} duration={200} className={`desktopMenuListItem ${activeMenu === 'skills' ? 'active' : ''}`} onClick={() => handleMenuClick('skills')}>
								Skills
							</Link>
							<Link to="projects" spy={true} smooth={true} offset={-63} duration={200} className={`desktopMenuListItem ${activeMenu === 'projects' ? 'active' : ''}`} onClick={() => handleMenuClick('projects')}>
								Projects
							</Link>
							<Link to="contact" spy={true} smooth={true} offset={-63} duration={200} className={`desktopMenuListItem ${activeMenu === 'contact' ? 'active' : ''}`} onClick={() => handleMenuClick('contact')}>
								Contact
							</Link>
						</div>
					)}
					<div className="flex gap-6">
						<div
							id="resumeContainer"
							className="relative"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<button
								id="resumeBtn"
								className="flex items-center gap-3 rounded-full border border-primary bg-transparent px-4 py-2 text-xl font-normal capitalize tracking-normal text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
							>
								Resume
								<ChevronDownIcon
									strokeWidth={2.5}
									className={`h-4 w-4 transition-transform ${openMenu ? "rotate-180" : "rotate-0"}`}
								/>
							</button>
							{openMenu && (
								<div className="absolute right-0 mt-2 w-96 flex-col gap-2 bg-tertiary text-2xl shadow-lg">
									<CustomMenuList
										handleDownloadClick={handleDownloadClick}
									/>
								</div>
							)}
						</div>

						{user ? (
							<button className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white" onClick={handleLogout} aria-label="Log Out">
								Log Out
							</button>
						) : (
							<button className="flex items-center rounded-full border border-primary bg-transparent px-4 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
								<a href="/login" className="flex items-center">
									Admin Panel <IoSettings className="ml-2" />
								</a>
							</button>
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
							className="flex items-center rounded-lg border-2 border-primary p-2 transition-colors duration-300 hover:bg-gray-800"
							onClick={toggleMobileMenu}
							aria-label="Open menu"
						>
							<i className="uil uil-apps text-xl"></i>
						</button>
						<MobileMenu
							openRight={openMobileMenu}
							setOpenRight={setOpenMobileMenu}
							isLoginPage={isLoginPage}
							handleLogout={handleLogout}
							user={user}
						/>
					</div>
				</div>

			</nav>
		</header>
	);
};

export default Navbar;