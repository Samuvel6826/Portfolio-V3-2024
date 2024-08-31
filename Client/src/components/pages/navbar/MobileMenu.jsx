import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { IoSettings } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import ResumePdf from '../../../assets/Resume/Samuvel-Resume.pdf';
import { Link, Events, scrollSpy } from "react-scroll";
import './Navbar.css';

const MobileMenu = ({
    openRight = false,
    setOpenRight = () => { },
    isLoginPage = false,
    handleLogout = () => { },
    user = null
}) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setOpenRight(false); // Close the drawer after clicking
    };

    useEffect(() => {
        Events.scrollEvent.register('end', (to) => setActiveMenu(to));
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('end');
        };
    }, []);

    const menuItems = [
        { id: 'home', icon: 'uil uil-estate', label: 'Home', offset: -68 },
        { id: 'about', icon: 'uil uil-user', label: 'About', offset: -63 },
        { id: 'skills', icon: 'uil uil-file-alt', label: 'Skills', offset: -63 },
        { id: 'projects', icon: 'uil uil-briefcase-alt', label: 'Projects', offset: -63 },
        { id: 'contact', icon: 'uil uil-message', label: 'Contact', offset: -63 },
    ];

    return (
        <Drawer
            placement="right"
            open={openRight}
            onClose={() => setOpenRight(false)}
            className="bg-tertiary p-6 text-letter shadow-lg"
        >
            <div className="mb-6 flex items-center justify-between pl-6 pr-4">
                <Typography color="blue" className="text-3xl font-bold">
                    Menu
                </Typography>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={() => setOpenRight(false)}
                    aria-label="Close menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-9 w-9 text-primary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </div>

            <div className="mb-8 h-full pr-4">
                <div className="mobileMenu flex h-full flex-col">
                    {!isLoginPage && (
                        menuItems.map(({ id, icon, label, offset }) => (
                            <Link
                                key={id}
                                to={id}
                                spy={true}
                                smooth={true}
                                offset={offset}
                                duration={200}
                                className={`mobileMenuListItem ${activeMenu === id ? 'active' : ''}`}
                                onClick={() => handleMenuClick(id)}
                            >
                                <i className={icon}></i>
                                <span>{label}</span>
                            </Link>
                        ))
                    )}

                    <a
                        href={ResumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobileMenuListItem"
                    >
                        <IoMdDownload className="ico" />
                        <span>Resume</span>
                    </a>

                    {user ? (
                        <button
                            onClick={() => {
                                handleLogout();
                                setOpenRight(false);
                            }}
                            className="mobileMenuListItem"
                            aria-label="Log Out"
                        >
                            <i className="uil uil-sign-out-alt ico"></i>
                            <span>Log Out</span>
                        </button>
                    ) : (
                        <a
                            href="/login"
                            className="mobileMenuListItem"
                        >
                            <IoSettings className="ico" />
                            <span>Admin Panel</span>
                        </a>
                    )}
                </div>
            </div>
        </Drawer>
    );
};

MobileMenu.propTypes = {
    openRight: PropTypes.bool,
    setOpenRight: PropTypes.func,
    isLoginPage: PropTypes.bool,
    handleLogout: PropTypes.func,
    user: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.oneOf([null])
    ]),
};

export default MobileMenu;