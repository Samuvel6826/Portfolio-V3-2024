import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Loader from '../../../common/Loader'; // Ensure this path is correct

const Home = ({ className = '' }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <section id="home" className={`w-full h-full bg-primary p-4 lg:py-8 ${className}`}>
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
                        {loading && (
                            <Loader />
                        )}

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
                            className={`rounded-full shadow-lg transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                            src="https://res.cloudinary.com/dgsucveh2/image/upload/v1704099547/WhatsApp_Image_2024-01-01_at_06.38.56-modified_bjntky.png"
                            alt="Avatar"
                            onLoad={handleImageLoad}
                            onError={() => setLoading(false)} // Hide loader if image fails to load
                        />

                        <div id='home-content-scrollBtn' className='absolute right-0 top-3 z-10 h-72 w-5 cursor-pointer text-xl lg:hidden'>
                            <Link to="about" spy={true} smooth={true} offset={-63} duration={200} className="flex h-full w-full flex-col items-center justify-between">
                                <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "50px", height: "40px" }} loop autoplay></lottie-player>
                                <div className='m-0 flex -rotate-90 flex-row gap-2'>
                                    <p>Scroll&nbsp;Down</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-83 240-323l46.67-46.67 193.33 193 193.33-193L720-323 480-83Zm0-243.33-240-240L286.67-613 480-420l193.33-193L720-566.33l-240 240Zm0-243.34-240-240 46.67-46.66 193.33 193 193.33-193L720-809.67l-240 240Z" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div id='home-content' className="flex w-full flex-col justify-center gap-3 text-base">
                        <p id='intro-text' className='text-2xl font-medium'>Hello!👋🏻</p>
                        <p id='intro-text' className='text-2xl font-medium'> I'm<span id='intro-name' className='font-["aldrich"] text-4xl font-black'> Samuvel A</span></p>
                        <p id='web-dev' className='text-[1.7rem] font-bold'>
                            <TypeAnimation
                                sequence={[
                                    'MERN Stack Web Developer',
                                    3000,
                                    'B.Sc.CS Student',
                                    3000,
                                    'Tech Enthusiast',
                                    3000,
                                ]}
                                className="type"
                                wrapper="span"
                                speed={50} // Typing speed
                                cursor={false} // Disable the default cursor
                                repeat={Infinity} // Infinite loop
                            />
                        </p>
                        <p id='intro-para' className='text-justify text-xl leading-relaxed'>
                            I hail from the beautiful coastal town of Kanyakumari, Tamil Nadu, India. I'm a passionate web developer. I am seeking an Assistant Web Developer role or Internship to gain experience in a web development environment and contribute to progressive projects. I'm always eager to connect and discuss. Feel free to contact me at any time.
                        </p>

                        <div id='home-content-btns-container' className="flex items-center justify-between gap-4 text-lg">
                            <Link to="projects" id='home-content-btns' spy={true} smooth={true} offset={-63} duration={300}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/qmsejndz.json"
                                    trigger="hover"
                                    stroke="bold"
                                    colors="primary:#1b1091,secondary:#cb5eee"
                                    style={{ width: '35px', height: '35px' }}
                                />
                                <span>&nbsp;Projects</span>
                            </Link>

                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-63}
                                duration={300}
                                id="home-content-btns"
                            >
                                <lord-icon
                                    src="https://cdn.lordicon.com/xfzuyvam.json"
                                    trigger="morph"
                                    stroke="bold"
                                    state="hover"
                                    colors="primary:#1b1091,secondary:#cb5eee"
                                    style={{ width: '35px', height: '35px' }}
                                />
                                <span>&nbsp;Hire Me</span> {/* Add text as a span element */}
                            </Link>
                        </div>
                    </div>
                </main>

                {/* Scroll Button (Landscape) */}
                <div id='home-content-scrollBtn-landscape' className='ml-4 hidden h-96 w-5 cursor-pointer text-xl lg:flex'>
                    <Link to="about" spy={true} smooth={true} offset={-63} duration={200} className="flex h-full w-full flex-col items-center justify-between">
                        <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "60px", height: "50px" }} loop autoplay></lottie-player>
                        <div className='m-0 flex -rotate-90 flex-row gap-2'>
                            <p>Scroll&nbsp;Down</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-83 240-323l46.67-46.67 193.33 193 193.33-193L720-323 480-83Zm0-243.33-240-240L286.67-613 480-420l193.33-193L720-566.33l-240 240Zm0-243.34-240-240 46.67-46.66 193.33 193 193.33-193L720-809.67l-240 240Z" /></svg>

                    </Link>
                </div>
            </div>
        </section>
    );
}

Home.propTypes = {
    className: PropTypes.string
};

export default Home;