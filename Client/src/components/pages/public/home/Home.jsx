import React from 'react';
import './Home.css';
import { GoArrowDown } from "react-icons/go";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <section id="home" className='w-full bg-primary p-4 sm:p-10'>
            <div id="home-container" className="container mx-auto flex h-full items-center">

                <section id='home-social-links' className='hidden h-60 w-5 flex-col items-center justify-between md:flex'>
                    <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank' title='Instagram' className="text-xl">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/samuvelantony/" target='blank' title='LinkedIn' className="text-xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Samuvel6826" target='blank' title='Github' className="text-xl">
                        <FaGithub />
                    </a>
                </section>

                <section id='home-wrapper' className='flex w-full flex-col items-center justify-center md:flex-row-reverse'>
                    <div id='dp-container' className="relative flex w-full items-center justify-center">
                        <div id='home-social-links' className='absolute left-0 top-5 z-10 flex h-32 w-5 flex-col items-start justify-between text-xl md:hidden'>
                            <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank' title='Instagram'>
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/samuvelantony/" target='blank' title='LinkedIn'>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Samuvel6826" target='blank' title='Github'>
                                <FaGithub />
                            </a>
                        </div>

                        <img
                            id='dp-pic'
                            className='rounded-full shadow-lg'
                            src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704099547/WhatsApp_Image_2024-01-01_at_06.38.56-modified_bjntky.png"
                            alt="Avatar"
                        />

                        <div id='home-content-scrollBtn' className='absolute right-0 top-3 z-10 h-52 w-5 md:hidden'>
                            <a href="#about" className="flex h-full w-full flex-col items-center justify-between">
                                <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "35px", height: "40px" }} loop autoplay></lottie-player>
                                <div className='m-0 flex -rotate-90 flex-row gap-2'>
                                    <span>Scroll</span>
                                    <span>Down</span>
                                </div>
                                <GoArrowDown className='mx-2' />
                            </a>
                        </div>
                    </div>

                    <div id='home-content' className="flex w-full flex-col justify-center gap-4 text-base">
                        <div id='home-text-container' className='text-base font-semibold leading-8'>
                            <p id='intro-text' className='text-3xl'>
                                Hello!👋🏻
                                <br />
                                I'm
                                <span id='intro-name' className='font-["aldrich"] text-4xl'> Samuvel</span>
                            </p>
                            <p id='web-dev' className='text-[1.5rem]'>MERN Stack Web Developer</p>
                        </div>

                        <p id='intro-para' className='text-justify text-lg leading-relaxed'>
                            Hailing from the beautiful coastal town of Kanyakumari, Tamil Nadu, India, I'm a passionate web developer and designer. Seeking an Assistant Web Developer role or internship to gain experience in a web development environment and contribute to progressive projects. I'm always eager to connect and discuss web development!..Feel free to contact me.
                        </p>

                        <div id='home-content-btns-container' className="flex items-center justify-between gap-4 text-base">
                            <button id='home-content-btns' className='flex w-full transform items-center justify-center rounded-2xl border-2 border-secondary p-4 text-center transition-transform hover:scale-105'>
                                <a href="#projects" className='flex items-center justify-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/suitcase--v3.png" alt="suitcase--v3" />
                                    My Works
                                </a>
                            </button>

                            <button id='home-content-btns' className='flex w-full transform items-center justify-center rounded-2xl border-2 border-secondary p-4 text-center transition-transform hover:scale-105'>
                                <a href="#contact" className='flex items-center justify-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                                    Hire Me
                                </a>
                            </button>
                        </div>
                    </div>
                </section>

                <div id='home-content-scrollBtn' className='hidden h-60 w-5 md:flex'>
                    <a href="#about" className="flex h-full w-full flex-col items-center justify-between">
                        <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "50px", height: "40px" }} loop autoplay></lottie-player>
                        <div className='m-0 flex -rotate-90 flex-row gap-2'>
                            <span>Scroll</span>
                            <span>Down</span>
                        </div>
                        <GoArrowDown className='mx-2' />
                    </a>
                </div>
            </div >
        </section >
    );
}

export default Home;