import React from 'react'
import './Footer.css'
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";
import { LuIndianRupee } from "react-icons/lu";
import { BiDollar } from "react-icons/bi";
import { FaCoffee } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Cryptos from './Cryptos';
import { Popover, Space } from 'antd';

const Footer = () => {

    const content = (
        <div>
            <Cryptos />
        </div>
    );

    return <section id='footer' className='bg-tertiary mx-auto flex flex-col text-letter px-4'>
        <div id="footer-container" className="container text-center mx-auto flex flex-col gap-5 py-4">

            <div id='foot-text-menu' className='max-md:hidden'>
                <h3>MENU</h3>

                <a href="#hero"><i className="uil uil-estate"></i>Home</a>

                <a href="#about"><i className="uil uil-user"></i>About</a>

                <a href="#skills"><i className="uil uil-file-alt"></i>Skills</a>

                <a href="#projects"><i className="uil uil-briefcase-alt"></i>Projects</a>

                <a href="#portfolio"><i className="uil uil-scenery"></i>Portfolio</a>

                <a href="#contact"><i className="uil uil-message"></i>Contact</a>

            </div>

            <div id="media-container">
                <div id='foot-text-connect'>

                    <h3>CONNECT</h3>

                    <div id="connect-container">
                        <a href="https://wa.me/+919043251797?text=Hey%20Samuvel" target='blank'>
                            <button>
                                <ImWhatsapp /> Whatsapp
                            </button>
                        </a>

                        <a href="tel:+919043251797" target='blank'>
                            <button>
                                <BiSolidPhoneCall /> +91 9043251797

                            </button>
                        </a>

                        <a href="mailto:samuvel6826@gmail.com" target='blank'>
                            <button>
                                <SiGmail /> samuvel6826@gmail.com

                            </button>
                        </a>
                    </div>
                </div>

                <div id='foot-text-socials'>

                    <h3>SOCIALS</h3>

                    <button id='socials-container'>
                        <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank'>
                            <FaInstagram />
                        </a>

                        <a href="https://www.facebook.com/samuvel68" target='blank'>
                            <FaFacebook />
                        </a>

                        <a href="https://x.com/samuvel6826" target='blank'>
                            <FaSquareXTwitter />
                        </a>

                        <a href="https://www.linkedin.com/in/samuvelantony/" target='blank'>
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/Samuvel6826" target='blank'>
                            <FaGithub />
                        </a>

                        <a href="https://github.com/Samuvel6826" target='blank'>
                            <FaDiscord />
                        </a>
                    </button>

                </div>
            </div>

            <div id="payments-container">
                <div id="foot-btns">

                    <h3>PAYMENT</h3>

                    <a href="">
                        <button>
                            <LuIndianRupee />Indian Currency
                        </button>
                    </a>

                    <a href="">
                        <button>
                            <BiDollar />Foreign Currency
                        </button>
                    </a>

                    <Space wrap>
                        <Popover content={content} trigger="click">
                            <button className='flex items-center justify-center text-center'><BiDollar />Crypto Currency</button>
                        </Popover>
                    </Space>

                </div>

                <div id="foot-btns">

                    <h3>SUPPORT MY WORK</h3>

                    <a href="https://ko-fi.com/samtocode24" target='_blank'>
                        <button>
                            <FaCoffee />  Buy me a ko-fi
                        </button>
                    </a>

                    <a href="">
                        <button>
                            <FaGithub />  View Source code
                        </button>
                    </a>

                </div>
            </div>

        </div>

        <footer id='footer-footer' className="flex border-t-2 flex-col items-center justify-center text-center p-2">
            <p className='flex items-center gap-2'>Made with <FaReact /> <RiTailwindCssFill /> <FaNodeJs /> <SiExpress /> <SiMongodb /></p>
            <p>
                Made by Samuvel Antony. Copyrights &#169; 2024. All rights reserved.
            </p>
        </footer>

    </section>
}

export default Footer