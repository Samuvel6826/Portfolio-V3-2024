import React from "react";
import PropTypes from "prop-types";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import { IoSettings } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import ResumePdf from '../../assets/Resume/Samuvel-Resume.pdf';

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
                <Typography variant="h5" color="blue" className="font-bold">
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
                    <div className="flex h-full flex-col" id="mob-lists">
                        {!isLoginPage && (
                            <>
                                {["home", "about", "skills", "projects", "contact"].map((section, index) => (
                                    <li key={index} className="group flex h-full items-center">
                                        <a
                                            href={`#${section}`}
                                            className="flex w-full items-center space-x-3 transition-colors duration-300 hover:text-primary"
                                        >
                                            <i
                                                className={`uil uil-${section === "home" ? "estate" : section === "about" ? "user" : section === "skills" ? "file-alt" : section === "projects" ? "briefcase-alt" : "message"} text-primary group-hover:text-primary text-xl`}
                                            ></i>
                                            <span className="group-hover:text-primary">
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </>
                        )}


                        <li className="group flex h-full items-center">
                            <a
                                href={ResumePdf}
                                target="_blank"
                                className="flex w-full items-center space-x-3 transition-colors duration-300 hover:text-primary"
                            >
                                <IoMdDownload className="text-xl text-primary group-hover:text-primary" />
                                <span className="group-hover:text-primary">Resume</span>
                            </a>
                        </li>

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
                                    <IoSettings className="text-xl text-primary group-hover:text-primary" />
                                    <span className="group-hover:text-primary">Admin Panel</span>
                                </a>
                            </li>
                        )}
                    </div>
                </ul>
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