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
import { BiDollar } from "react-icons/bi";
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
        <section id='footer' className='bg-tertiary mx-auto flex flex-col text-letter'>
            <div id="footer-container" className="container text-center mx-auto flex flex-col gap-5 p-4">

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
                        <a href="https://your-foreign-currency-payment-link" target='_blank' rel="noopener noreferrer">
                            <button>
                                <BiDollar /> Foreign Currency
                            </button>
                        </a>
                        <Space wrap>
                            <Popover content={content} trigger="click">
                                <button className='flex items-center justify-center text-center'>
                                    <BiDollar /> Crypto Currency
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
                    <div id='foot-text-socials' className='text-center mt-4'>
                        <div id='socials-container' className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                            <a href="https://www.instagram.com/mr_fun_factory_24/" target='_blank' rel="noopener noreferrer" className="text-2xl">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/samuvel68" target='_blank' rel="noopener noreferrer" className="text-2xl">
                                <FaFacebook />
                            </a>
                            <a href="https://x.com/samuvel6826" target='_blank' rel="noopener noreferrer" className="text-2xl">
                                <FaSquareXTwitter />
                            </a>
                            <a href="https://www.linkedin.com/in/samuvelantony/" target='_blank' rel="noopener noreferrer" className="text-2xl">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Samuvel6826" target='_blank' rel="noopener noreferrer" className="text-2xl">
                                <FaGithub />
                            </a>
                            <a href="https://discord.com/invite/your-invite-link" target='_blank' rel="noopener noreferrer" className="text-2xl">
                                <FaDiscord />
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            {/* Footer bottom section */}
            <footer id='footer-footer' className="flex border-t-2 flex-col items-center justify-center text-center p-2 text-sm">
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