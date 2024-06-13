import React from 'react'
import './Hero.css'
import ScrollToTopButton from '../../common/ScrollTopBtn';
import { GoArrowDown } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Hero = () => {
    return (
        <section id="hero" className='h-[calc(100vh-4rem)] mt-16 bg-secondary max-sm:p-4'>

            <div id="container" className="container h-full mx-auto flex items-center">
                <div id='hero-social-links' className=' text-xl flex flex-col gap-4 max-sm:hidden'>
                    <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/samuvelantony/" target='blank'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Samuvel6826" target='blank'>
                        <FaGithub />
                    </a>
                </div>

                <div className='h-full w-full flex max-sm:flex-col-reverse justify-evenly items-center text-base'>
                    <div className="introContent w-[58%] max-sm:h-[55%] max-sm:w-full text-base">
                        <div className='max-sm:leading-8 leading-[3.5rem]'>
                            <p className="hello max-sm:text-[1.45em] text-[1.6em]">Hello!👋🏻</p>
                            <p className="introText max-sm:text-[1.45em] text-[3.2em]">
                                I'm
                                <span className="introName max-sm:text-[1.5em] text-[1.6em] text-tertiary font-bold"> Samuvel</span>
                            </p>
                            <p className='max-sm:text-[1.45em] text-[2.6em] font-semibold'>MERN Stack Web Developer</p>
                        </div>

                        <p className="introPara text-justify leading-relaxed max-sm:leading-normal my-0 max-sm:text-[1.1em] text-[1.2em]">
                            Hailing from the beautiful coastal town of Kanyakumari, Tamil Nadu, India, I'm a passionate web developer and designer. Seeking an Assistant Web Developer role or internship to gain experience in a web development environment and contribute to progressive projects. I'm always eager to connect and discuss web development!..Feel free to contact me.
                        </p>

                        <hr className='mt-2 mb-4' />

                        <div id='hero-content-btns-container' className=" max-sm:h-[30%] flex text-base items-center justify-between">
                            <button id='hero-content-btns' className="flex justify-center items-center">
                                <a href="#portfolio" className='flex justify-center items-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/suitcase--v3.png" alt="suitcase--v3" />
                                    My Works
                                </a>
                            </button>

                            <button id='hero-content-btns' className="flex justify-center items-center">
                                <a href="#contact" className='flex justify-center items-center'>
                                    <img className='mr-2' width="25" height="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                                    Hire Me
                                </a>
                            </button>

                            <button id='hero-content-scrollBtn' className='flex justify-center items-center max-sm:hidden'>
                                <a href="#about" className='flex justify-center items-center'>
                                    <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "50px", height: "40px" }} loop autoplay direction="1" mode="normal"></lottie-player>

                                    <p>Scroll Down</p>

                                    <GoArrowDown className='mx-2' />
                                </a>
                            </button>
                        </div>
                    </div>

                    <div id='dp-container' className="relative w-[45%] max-sm:h-[40%] max-sm:w-full flex items-center gap-12">

                        <div id='hero-social-links' className='h-full w-10 pt-5 pb-8 text-xl flex flex-col justify-between items-center  md:hidden'>
                            <a href="https://www.instagram.com/mr_fun_factory_24/" target='blank'>
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/samuvelantony/" target='blank'>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Samuvel6826" target='blank'>
                                <FaGithub />
                            </a>
                        </div>

                        <div id='dp-img-container' className='w-full h-full flex justify-center items-center '>
                            <img
                                className='dp-Pic w-full max-sm:w-[68%] '
                                src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704099547/WhatsApp_Image_2024-01-01_at_06.38.56-modified_bjntky.png"
                                alt="Avatar"
                            />

                        </div>

                        <div className='absolute h-52 w-10 z-10 right-0 top-3  md:hidden'>
                            <a href="#about" className='h-full flex flex-col justify-between items-center text-center'>
                                <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "50px", height: "40px" }} loop autoplay direction="1" mode="normal"></lottie-player>

                                <div className='m-0 -rotate-90 flex flex-row gap-2'>
                                    <span className=''>Scroll</span>
                                    <span className=''>Down</span>
                                </div>

                                <GoArrowDown className='mx-2' />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <ScrollToTopButton />

        </section>
    )
}

export default Hero