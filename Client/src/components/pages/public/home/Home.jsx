import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = ({ className = '' }) => {
    return (
        <section id="home" className={`w-full bg-primary p-4 sm:p-10 ${className}`}>
            <div id="home-container" className="container mx-auto flex h-full w-full items-center">
                {/* Social Links (Landscape) */}
                <div id='home-social-links-landscape' className='mr-10 hidden h-96 w-5 flex-col items-center justify-between lg:flex'>
                    <a href="https://www.instagram.com/mr_fun_factory_24/" target='_blank' rel="noopener noreferrer" title='Instagram' className="text-2xl">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/samuvelantony/" target='_blank' rel="noopener noreferrer" title='LinkedIn' className="text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Samuvel6826" target='_blank' rel="noopener noreferrer" title='Github' className="text-2xl">
                        <FaGithub />
                    </a>
                </div>

                <main id='home-wrapper' className='flex w-full flex-col items-center justify-center lg:flex-row-reverse'>
                    {/* Profile Picture and Scroll Button */}
                    <div id='dp-container' className="relative flex w-full items-center justify-center">
                        <div id='home-social-links' className='absolute left-0 top-5 z-10 flex h-44 w-5 flex-col items-start justify-between text-2xl lg:hidden'>
                            <a href="https://www.instagram.com/mr_fun_factory_24/" target='_blank' rel="noopener noreferrer" title='Instagram'>
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/samuvelantony/" target='_blank' rel="noopener noreferrer" title='LinkedIn'>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Samuvel6826" target='_blank' rel="noopener noreferrer" title='Github'>
                                <FaGithub />
                            </a>
                        </div>

                        <img
                            id='dp-pic'
                            className='rounded-full shadow-lg'
                            src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704099547/WhatsApp_Image_2024-01-01_at_06.38.56-modified_bjntky.png"
                            alt="Avatar"
                        />

                        <div id='home-content-scrollBtn' className='absolute right-0 top-3 z-10 h-72 w-5 text-xl lg:hidden'>
                            <a href="#about" className="flex h-full w-full flex-col items-center justify-between">
                                <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "50px", height: "40px" }} loop autoplay></lottie-player>
                                <div className='m-0 flex -rotate-90 flex-row gap-2'>
                                    <p>Scroll&nbsp;Down</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M480-83 240-323l42-42 198 198 198-198 42 42L480-83Zm0-246L240-569l42-42 198 198 198-198 42 42-240 240Z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div id='home-content' className="flex w-full flex-col justify-center gap-4 text-base">
                        <p id='intro-text' className='text-2xl font-medium'>Hello!👋🏻</p>
                        <p id='intro-text' className='text-2xl font-medium'> I'm<span id='intro-name' className='font-["aldrich"] text-4xl font-black'> Samuvel A</span></p>
                        <p id='web-dev' className='text-[1.7rem] font-bold'>MERN Stack Web Developer</p>
                        <p id='intro-para' className='text-justify text-xl leading-relaxed'>
                            I hail from the beautiful coastal town of Kanyakumari, Tamil Nadu, India. I'm a passionate web developer. I am seeking an Assistant Web Developer role or Internship to gain experience in a web development environment and contribute to progressive projects. I'm always eager to connect and discuss. Feel free to contact me at any time.
                        </p>

                        <div id='home-content-btns-container' className="flex items-center justify-between gap-4 text-lg">
                            <button id='home-content-btns' className='flex w-full transform items-center justify-center rounded-2xl border-2 border-secondary p-4 text-center text-lg transition-transform hover:scale-105'>
                                <a href="#projects" className='flex items-center justify-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/suitcase--v3.png" alt="suitcase--v3" />
                                    My Works
                                </a>
                            </button>

                            <button id='home-content-btns' className='flex w-full transform items-center justify-center rounded-2xl border-2 border-secondary p-4 text-center text-lg transition-transform hover:scale-105'>
                                <a href="#contact" className='flex items-center justify-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                                    Hire Me
                                </a>
                            </button>
                        </div>
                    </div>
                </main>

                {/* Scroll Button (Landscape) */}
                <div id='home-content-scrollBtn-landscape' className='ml-4 hidden h-96 w-5 text-xl lg:flex'>
                    <a href="#about" className="flex h-full w-full flex-col items-center justify-between">
                        <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "60px", height: "50px" }} loop autoplay></lottie-player>
                        <div className='m-0 flex -rotate-90 flex-row gap-2'>
                            <p>Scroll&nbsp;Down</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M480-83 240-323l42-42 198 198 198-198 42 42L480-83Zm0-246L240-569l42-42 198 198 198-198 42 42-240 240Z" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

Home.propTypes = {
    className: PropTypes.string
};

export default Home;