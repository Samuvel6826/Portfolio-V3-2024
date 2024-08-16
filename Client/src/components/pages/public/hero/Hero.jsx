import React from 'react';
import './Hero.css';
import { GoArrowDown } from "react-icons/go";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className='w-full p-4 sm:p-10 bg-primary'>
            <div id="hero-container" className="container h-full mx-auto flex items-center">

                <section id='hero-social-links' className='hidden md:flex h-60 w-5 flex-col justify-between items-center'>
                    <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank' title='Instagram' className="hover:text-tertiary transition-colors">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/samuvelantony/" target='blank' title='LinkedIn' className="hover:text-tertiary transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Samuvel6826" target='blank' title='Github' className="hover:text-tertiary transition-colors">
                        <FaGithub />
                    </a>
                </section>

                <section id='hero-wrapper' className='flex flex-col items-center'>
                    <div id='dp-container' className="relative w-full flex items-center justify-center">

                        <div id='hero-social-links' className='absolute h-32 w-5 z-10 left-0 top-5 text-xl flex flex-col justify-between items-start md:hidden'>
                            <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank' title='Instagram' className="hover:text-tertiary transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/samuvelantony/" target='blank' title='LinkedIn' className="hover:text-tertiary transition-colors">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Samuvel6826" target='blank' title='Github' className="hover:text-tertiary transition-colors">
                                <FaGithub />
                            </a>
                        </div>

                        <img
                            id='dp-pic'
                            className='w-[60%] rounded-full shadow-lg'
                            src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704099547/WhatsApp_Image_2024-01-01_at_06.38.56-modified_bjntky.png"
                            alt="Avatar"
                        />

                        <div id='hero-content-scrollBtn' className='absolute h-52 w-5 z-10 right-0 top-3 md:hidden'>
                            <a href="#about" className="hover:text-tertiary transition-colors">
                                <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "35px", height: "40px" }} loop autoplay></lottie-player>
                                <div className='m-0 -rotate-90 flex flex-row gap-2'>
                                    <span className='tracking-widest'>Scroll</span>
                                    <span className='tracking-widest'>Down</span>
                                </div>
                                <GoArrowDown className='mx-2' />
                            </a>
                        </div>
                    </div>

                    <div id='hero-content' className="w-full text-base flex flex-col">
                        <div id='hero-text-container' className='leading-8 text-base font-semibold'>
                            <p id='intro-text' className="text-xl">
                                Hello!👋🏻
                                <br />
                                I'm
                                <span id='intro-name' className="text-4xl text-tertiary font-bold"> Samuvel</span>
                            </p>
                            <p id='web-dev' className='text-[1.28rem] font-bold'>MERN Stack Web Developer</p>
                        </div>

                        <p id='intro-para' className="text-justify text-[0.95rem] leading-[1.8] mb-2 text-lg">
                            Hailing from the beautiful coastal town of Kanyakumari, Tamil Nadu, India, I'm a passionate web developer and designer. Seeking an Assistant Web Developer role or internship to gain experience in a web development environment and contribute to progressive projects. I'm always eager to connect and discuss web development!..Feel free to contact me.
                        </p>

                        <div id='hero-content-btns-container' className="flex text-base items-center justify-between">
                            <button id='hero-content-btns'>
                                <a href="#projects" className='flex justify-center items-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/suitcase--v3.png" alt="suitcase--v3" />
                                    My Works
                                </a>
                            </button>

                            <button id='hero-content-btns'>
                                <a href="#contact" className='flex justify-center items-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                                    Hire Me
                                </a>
                            </button>
                        </div>
                    </div>
                </section>

                <div id='hero-content-scrollBtn' className='h-60 w-5 hidden md:flex'>
                    <a href="#about" className="hover:text-tertiary transition-colors">
                        <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "50px", height: "40px" }} loop autoplay></lottie-player>
                        <div className='m-0 -rotate-90 flex flex-row gap-2'>
                            <span className='tracking-widest'>Scroll</span>
                            <span className='tracking-widest'>Down</span>
                        </div>
                        <GoArrowDown className='mx-2' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;