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
import Cryptos from '../../common/Cryptos';
import { Button, Popover, Space } from 'antd';

const Footer = () => {

    const content = (
        <div>
            <Cryptos />
        </div>
    );

    return <section id='footer' className='bg-tertiary mx-auto text-letter'>
        <div id="container" className="container mx-auto py-10 flex justify-evenly">
            <ul id='foot-text'>
                <h3>MENU</h3>
                <li>
                    <a href="#hero"><i className="uil uil-estate"></i>Home</a>
                </li>
                <li>
                    <a href="#about"><i className="uil uil-user"></i>About
                    </a>
                </li>
                <li>
                    <a href="#skills"><i className="uil uil-file-alt"></i>Skills</a>
                </li>
                <li>
                    <a href="#projects"><i className="uil uil-briefcase-alt"></i>Projects</a>

                </li>
                <li>
                    <a href="#portfolio"><i className="uil uil-scenery"></i>Portfolio</a>
                </li>
                <li>
                    <a href="#contact"><i className="uil uil-message"></i>Contact</a>
                </li>
            </ul>


            <div id='foot-text'>

                <h3>SOCIALS</h3>

                <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank'>
                    <FaInstagram /> Instagram
                </a>

                <a href="https://www.facebook.com/samuvel68" target='blank'>
                    <FaFacebook /> Facebook
                </a>

                <a href="https://x.com/samuvel6826" target='blank'>
                    <FaSquareXTwitter /> X (Twitter)
                </a>

                <a href="https://www.linkedin.com/in/samuvelantony/" target='blank'>
                    <FaLinkedin /> Linkedin
                </a>

                <a href="https://github.com/Samuvel6826" target='blank'>
                    <FaGithub /> Github
                </a>

                <a href="https://github.com/Samuvel6826" target='blank'>
                    <FaDiscord /> Discord
                </a>

            </div>

            <div id='foot-text'>

                <h3>CONNECT</h3>

                <a href="https://wa.me/+919043251797?text=Hey%20Samuvel" target='blank'>
                    <ImWhatsapp /> Whatsapp
                </a>

                <a href="tel:+919043251797" target='blank'>
                    <BiSolidPhoneCall /> +91 9043251797
                </a>

                <a href="mailto:samuvel6826@gmail.com" target='blank'>
                    <SiGmail /> samuvel6826@gmail.com
                </a>

            </div>

            <div id="foot-btns">

                <h3>PAYMENT</h3>

                <button>
                    <a href=""><LuIndianRupee />  Indian Currency</a>
                </button>

                <button>
                    <a href=""><BiDollar />  Foreign Currency</a>
                </button>

                <Space wrap>
                    <Popover content={content} trigger="click">
                        <button className='flex items-center justify-center text-center'><BiDollar />  Crypto Currency</button>
                    </Popover>
                </Space>

            </div>

            <div id="foot-btns">

                <h3>SUPPORT MY WORK</h3>

                <button>
                    <a href="https://ko-fi.com/samtocode24"><FaCoffee />  Buy me a ko-fi</a>
                </button>
                <button>
                    <a href=""><FaGithub />  View Source code</a>
                </button>
            </div>

        </div>

        <footer className="flex border-t-2 flex-col items-center justify-center">
            <p className='flex items-center gap-2'>Made with <FaReact /> <RiTailwindCssFill /> <FaNodeJs /> <SiExpress /> <SiMongodb /></p>
            <p>
                Made by Samuvel Antony. Copyrights &#169; 2024. All rights reserved.
            </p>
        </footer>

    </section>
}

export default Footer