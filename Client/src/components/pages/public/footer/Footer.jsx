import React from 'react';
import './Footer.css';
import { Popover, Space } from 'antd';
import Cryptos from './Cryptos';
import Razorpay from './Razorpay';

import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaCoffee } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

// Footer component that contains site navigation, social media links, and payment options.
const Footer = () => {

    // Content for the Crypto Currency payment option.
    const content = (
        <div>
            <Cryptos />
        </div>
    );

    return (
        <section id='footer' className='mx-auto flex flex-col bg-tertiary text-letter'>
            <div id="footer-container" className="container mx-auto flex flex-col gap-5 p-4 text-center">

                {/* Footer navigation menu */}
                <div id='foot-text-menu' className='max-md:hidden'>
                    <h3>MENU</h3>
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Footer connection options */}
                <div id='foot-text-connect'>
                    <h3>CONNECT</h3>
                    <div id="connect-container">
                        <a href="https://wa.me/+919043251797?text=Hey%20Samuvel" target='_blank' rel="noopener noreferrer">
                            <button>
                                <ImWhatsapp /> Whatsapp
                            </button>
                        </a>
                        <a href="tel:+919043251797" target='_blank' rel="noopener noreferrer">
                            <button>
                                <BiSolidPhoneCall /> +91 9043251797
                            </button>
                        </a>
                        <a href="mailto:samuvel6826@gmail.com" target='_blank' rel="noopener noreferrer">
                            <button>
                                <SiGmail /> samuvel6826@gmail.com
                            </button>
                        </a>
                    </div>
                </div>

                {/* Footer payment options */}
                <div id="payments-container">
                    <div id="foot-btns">
                        <h3>PAYMENT</h3>
                        <Razorpay />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" /></svg>&nbsp;Pay with Stripe
                        </button>

                        <Space wrap>
                            <Popover content={content} trigger="click">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-120v-80H240v-80h80v-400h-80v-80h120v-80h80v80h80v-80h80v85q52 14 86 56.5t34 98.5q0 29-10 55.5T682-497q35 21 56.5 57t21.5 80q0 66-47 113t-113 47v80h-80v-80h-80v80h-80Zm40-400h160q33 0 56.5-23.5T640-600q0-33-23.5-56.5T560-680H400v160Zm0 240h200q33 0 56.5-23.5T680-360q0-33-23.5-56.5T600-440H400v160Z" /></svg>&nbsp;Crypto Currency
                                </button>
                            </Popover>
                        </Space>
                    </div>
                </div>


                {/* Footer support options */}
                <div id="foot-btns">
                    <h3>SUPPORT MY WORK</h3>
                    <a href="https://ko-fi.com/samtocode24" target='_blank' rel="noopener noreferrer">
                        <button>
                            <FaCoffee /> Buy me a ko-fi
                        </button>
                    </a>
                    <a href="https://github.com/Samuvel6826/MERN-Portfolio-2024" target='_blank' rel="noopener noreferrer">
                        <button>
                            <FaGithub /> View Source code
                        </button>
                    </a>


                    {/* Footer social media links */}
                    <div id='foot-text-socials' className='mt-6 text-center'>
                        <div id='socials-container' className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                            <a href="https://www.instagram.com/mr_fun_factory_24/" target='_blank' rel="noopener noreferrer" className="transform text-2xl transition-transform hover:scale-110 hover:text-primary" title="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/samuvel68" target='_blank' rel="noopener noreferrer" className="transform text-2xl transition-transform hover:scale-110 hover:text-primary" title="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://x.com/samuvel6826" target='_blank' rel="noopener noreferrer" className="transform text-2xl transition-transform hover:scale-110 hover:text-primary" title="X">
                                <FaSquareXTwitter />
                            </a>
                            <a href="https://www.linkedin.com/in/samuvelantony/" target='_blank' rel="noopener noreferrer" className="transform text-2xl transition-transform hover:scale-110 hover:text-primary" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Samuvel6826" target='_blank' rel="noopener noreferrer" className="transform text-2xl transition-transform hover:scale-110 hover:text-primary" title="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://discord.com/invite/your-invite-link" target='_blank' rel="noopener noreferrer" className="transform text-2xl transition-transform hover:scale-110 hover:text-primary" title="Discord">
                                <FaDiscord />
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            {/* Footer bottom section */}
            <footer id='footer-footer' className="flex flex-col items-center justify-center border-t-2 p-2 text-center text-sm">
                <p className='flex items-center gap-2'>
                    Made with <FaReact /> <RiTailwindCssFill /> <FaNodeJs /> <SiExpress /> <SiMongodb />
                </p>
                <p>
                    Made by Samuvel Antony. Copyright &#169; 2024. All rights reserved.
                </p>
            </footer>
        </section>
    );
}

export default Footer;