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

    const socialLinks = [
        { icon: <FaInstagram />, url: "https://www.instagram.com/mr_fun_factory_24/", name: "Instagram" },
        { icon: <FaFacebook />, url: "https://www.facebook.com/samuvel68", name: "Facebook" },
        { icon: <FaSquareXTwitter />, url: "https://x.com/samuvel6826", name: "X" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/samuvelantony/", name: "LinkedIn" },
        { icon: <FaGithub />, url: "https://github.com/Samuvel6826", name: "GitHub" },
        { icon: <FaDiscord />, url: "https://discord.com/invite/your-invite-link", name: "Discord" }
    ];


    return (
        <section id='footer' className='h-full w-full bg-tertiary p-4 text-letter lg:px-10 lg:pt-10'>
            <div id="footer-container" className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
                <div id="footer-top" className='flex h-full w-full flex-col gap-4'>
                    {/* Footer navigation menu */}
                    <div id='foot-menu-container' className='max-lg:hidden'>
                        <h3 id='headings'>MENU</h3>
                        <div className="btns-container-menu">
                            <a href="#hero">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>

                    {/* Footer connection options */}
                    <div id='foot-containers'>
                        <h3 id='headings'>CONNECT</h3>
                        <div className="btns-container">
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
                    <div id="foot-containers">
                        <h3 id='headings'>PAYMENT</h3>
                        <div className='btns-container'>
                            <Razorpay />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" /></svg>Pay with Stripe
                            </button>

                            <Space wrap>
                                <Popover content={content} trigger="click">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-120v-80H240v-80h80v-400h-80v-80h120v-80h80v80h80v-80h80v85q52 14 86 56.5t34 98.5q0 29-10 55.5T682-497q35 21 56.5 57t21.5 80q0 66-47 113t-113 47v80h-80v-80h-80v80h-80Zm40-400h160q33 0 56.5-23.5T640-600q0-33-23.5-56.5T560-680H400v160Zm0 240h200q33 0 56.5-23.5T680-360q0-33-23.5-56.5T600-440H400v160Z" /></svg>Crypto Currency
                                    </button>
                                </Popover>
                            </Space>
                        </div>
                    </div>

                    {/* Footer support options */}
                    <div id="foot-containers">
                        <h3 id='headings'>SUPPORT MY WORK</h3>
                        <div className="btns-container" id='support-btns'>
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
                        </div>

                        {/* Footer social media links */}
                        <div id='foot-socials-container' className='my-2 flex flex-wrap items-center justify-center gap-6 text-center'>
                            {socialLinks.map(({ icon, url, name }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='transform text-2xl transition-transform hover:scale-110 hover:text-primary'
                                    title={name}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className='h-[2px] w-full bg-secondary' />

                <div id="footer-bottom" className='flex h-full w-full flex-col flex-wrap items-center justify-center gap-4 text-center text-sm'>
                    {/* Footer bottom section */}
                    <div className='flex flex-row gap-6'>
                        <p>
                            India/English
                        </p>
                        <span className='hidden lg:flex'>&#8195;|&#8195;</span>
                        <p>
                            Made by Samuvel A
                        </p>
                        <span className='hidden lg:flex'>&#8195;|&#8195;</span>

                    </div>
                    <p className='flex items-center gap-3'>
                        Made with <span className='flex items-center gap-2 text-xl'><FaReact /> <RiTailwindCssFill /> <FaNodeJs /> <SiExpress /> <SiMongodb />& 💙</span>
                    </p>
                    <span className='hidden lg:flex'>&#8195;|&#8195;</span>
                    <p>
                        &#169;&nbsp;2024 samtocode24 All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;