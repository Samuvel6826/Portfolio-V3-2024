import './Home.css';
import PropTypes from 'prop-types';
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import homeImg from '../../../../assets/home-img.jpeg';

// SocialLink component to render social media links
const SocialLink = ({ href, label, icon }) => (
    <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        className="text-2xl"
    >
        {icon}
    </a>
);

// Home component to render the home section of the webpage
const Home = () => {
    return (
        <section id="home" className="h-full w-full">
            <div id="home-container" className="flex h-full w-full items-center justify-between bg-primary p-4 text-tertiary lg:p-10">

                {/* Social Links (Landscape) */}
                <div id='home-social-links-landscape' className='hidden h-96 w-5 flex-col items-center justify-between lg:flex'>
                    <SocialLink href="https://www.instagram.com/mr_fun_factory_24/" label="Instagram Profile" icon={<FaInstagram />} />
                    <SocialLink href="https://www.linkedin.com/in/samuvelantony/" label="LinkedIn Profile" icon={<FaLinkedin />} />
                    <SocialLink href="https://github.com/Samuvel6826" label="Github Profile" icon={<FaGithub />} />
                </div>

                <main id='home-wrapper' className='flex flex-col items-center justify-center lg:flex-row-reverse'>
                    {/* Profile Picture and Scroll Button */}
                    <figure id='dp-container' className="relative flex w-full items-center justify-center">
                        <div id='home-social-links' className='absolute left-0 top-5 z-10 flex h-36 w-5 flex-col items-start justify-between text-2xl lg:hidden'>
                            <SocialLink href="https://www.instagram.com/mr_fun_factory_24/" label="Instagram Profile" icon={<FaInstagram />} />
                            <SocialLink href="https://www.linkedin.com/in/samuvelantony/" label="LinkedIn Profile" icon={<FaLinkedin />} />
                            <SocialLink href="https://github.com/Samuvel6826" label="Github Profile" icon={<FaGithub />} />
                        </div>

                        {/* Profile Picture */}
                        <img
                            id='dp-pic'
                            className='right-15 top-0 w-[57%] rounded-full object-cover shadow-lg max-lg:absolute'
                            src={homeImg}
                            alt="Samuvel A, a MERN stack web developer"
                            loading="lazy"
                        />

                        {/* MERN Stack Icons */}
                        <figcaption className="hidden text-xl lg:block">
                            <div id='mern-icons-container' className="flex gap-2 text-lg font-medium text-letter">
                                <span>M</span><div id='mern-icons'><SiMongodb /></div>
                                <span>E</span><div id='mern-icons'><SiExpress /></div>
                                <span>R</span><div id='mern-icons'><FaReact /></div>
                                <span>N</span><div id='mern-icons'><FaNodeJs /></div>
                            </div>
                        </figcaption>

                        {/* Scroll Button for Mobile */}
                        <div id='home-content-scrollBtn' className='absolute right-0 top-3 z-10 h-64 w-5 cursor-pointer text-xl lg:hidden'>
                            <Link to="about" spy={true} smooth={true} offset={-63} duration={200} className="flex h-full w-full flex-col items-center justify-between">
                                <lottie-player src="https://lottie.host/17ea85ea-f50f-46e7-9cdf-fa48642adf34/eRQlAqMDbf.json" background="transparent" speed="1" style={{ width: "50px", height: "40px" }} loop autoplay></lottie-player>
                                <div className='m-0 flex -rotate-90 flex-row gap-2'>
                                    <p>Scroll&nbsp;Down</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M480-83 240-323l46.67-46.67 193.33 193 193.33-193L720-323 480-83Zm0-243.33-240-240L286.67-613 480-420l193.33-193L720-566.33l-240 240Zm0-243.34-240-240 46.67-46.66 193.33 193 193.33-193L720-809.67l-240 240Z" /></svg>
                            </Link>
                        </div>
                    </figure>

                    {/* Content Section */}
                    <div id='home-content' className="flex w-full flex-col justify-center gap-3 pt-48 text-base">
                        <p id='intro-text' className='text-2xl font-medium'>Hello!👋🏻</p>
                        <p id='intro-text' className='text-2xl font-medium'> I&apos;m<span id='intro-name' className='font-["aldrich"] text-4xl font-black'> Samuvel A</span></p>
                        <p id='web-dev' className='text-[1.7rem] font-bold'>
                            <TypeAnimation
                                sequence={[
                                    'MERN Stack Web Developer',
                                    3000,
                                    'B.Sc.Comp Sci Student',
                                    2000,
                                    "I'm a Tech Enthusiast",
                                    2000,
                                    "I'm a Freelancer",
                                    2000,
                                ]}
                                className="type"
                                wrapper="span"
                                speed={50}
                                cursor={false}
                                repeat={Infinity}
                            />
                        </p>
                        <p id='intro-para' className='text-justify text-xl leading-relaxed'>
                            I come from the picturesque coastal town of Kanyakumari, Tamil Nadu. With a deep passion for Web Development, I am actively seeking a Web Developer role or Internship to gain hands-on experience. As a fast learner and a team player, I am confident in my ability to contribute effectively to any Web Development Team. I am eager to discuss potential opportunities. Please feel free to reach out to me anytime.
                        </p>

                        {/* Buttons for Projects and Hire Me */}
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

                            <Link to="contact" id="home-content-btns" spy={true} smooth={true} offset={-63} duration={300}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/xfzuyvam.json"
                                    trigger="morph"
                                    stroke="bold"
                                    state="hover"
                                    colors="primary:#1b1091,secondary:#cb5eee"
                                    style={{ width: '35px', height: '35px' }}
                                />
                                <span>&nbsp;Hire Me</span>
                            </Link>
                        </div>
                    </div>
                </main>

                {/* Scroll Button (Landscape) */}
                <div id='home-content-scrollBtn-landscape' className='hidden h-96 w-5 cursor-pointer text-xl lg:flex'>
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
};

// PropTypes validation for SocialLink component
SocialLink.propTypes = {
    href: PropTypes.string.isRequired,   // href should be a string and is required
    label: PropTypes.string.isRequired,  // label should be a string and is required
    icon: PropTypes.element.isRequired,  // icon should be a React element and is required
};

export default Home;
