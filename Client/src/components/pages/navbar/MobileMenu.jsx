import React from "react";
import PropTypes from "prop-types";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { IoSettings } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import ResumePdf from '../../../assets/Resume/Samuvel-Resume.pdf';
import { Link } from "react-scroll"; // Import Link from react-scroll
import './Navbar.css'

const MobileMenu = ({
    openRight = false,
    setOpenRight = () => { },
    isLoginPage = false,
    handleLogout = () => { },
    user = null
}) => {
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
                <div id="mobileMenu-list" className="flex h-full flex-col">
                    <div className="mobileMenu flex h-full flex-col" id="mob-lists">
                        {!isLoginPage && (
                            <>
                                <Link to="home" spy={true} smooth={true} offset={-68} duration={500} className="mobileMenuListItem">
                                    <i className="uil uil-estate"></i>
                                    <span>Home</span>
                                </Link>
                                <Link to="about" spy={true} smooth={true} offset={-63} duration={500} className="mobileMenuListItem">
                                    <i className="uil uil-user"></i>
                                    <span>About</span>
                                </Link>
                                <Link to="skills" spy={true} smooth={true} offset={-63} duration={500} className="mobileMenuListItem">
                                    <i className="uil uil-file-alt"></i>
                                    <span>Skills</span>
                                </Link>
                                <Link to="projects" spy={true} smooth={true} offset={-63} duration={500} className="mobileMenuListItem">
                                    <i className="uil uil-briefcase-alt"></i>
                                    <span>Projects</span>
                                </Link>
                                <Link to="contact" spy={true} smooth={true} offset={-63} duration={500} className="mobileMenuListItem">
                                    <i className="uil uil-message"></i>
                                    <span>Contact</span>
                                </Link>
                            </>
                        )}

                        <a
                            href={ResumePdf}
                            target="_blank"
                            className="mobileMenuListItem"
                        >
                            <IoMdDownload id="ico" />
                            <span>Resume</span>
                        </a>

                        {user ? (

                            <button
                                onClick={handleLogout}
                                className="mobileMenuListItem"
                                aria-label="Log Out"
                            >
                                <i id="ico" className="uil uil-sign-out-alt"></i>
                                <span>Log Out</span>
                            </button>

                        ) : (

                            <a
                                href="/login"
                                className="mobileMenuListItem"
                            >
                                <IoSettings id="ico" />
                                <span>Admin Panel</span>
                            </a>

                        )}
                    </div>
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