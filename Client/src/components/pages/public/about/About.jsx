import { useState } from "react";
import aboutImg from '../../../../assets/about-img.jpeg';
import { FaAward } from "react-icons/fa";
import CustomMenuList from "../../navbar/CustomMenuList";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import './About.css';

const About = () => {
    const [openMenu, setOpenMenu] = useState(false);
    let timeoutId = null;

    // Handler for mouse enter event
    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setOpenMenu(true);
    };

    // Handler for mouse leave event
    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setOpenMenu(false);
        }, 200);
    };

    // Handler for downloading a file
    const handleDownloadClick = async (fileUrl) => {
        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileUrl.split('/').pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download error:', error);
        }
    };

    return (
        <section id='about' className='h-full w-full bg-secondary p-4 text-white lg:p-8'>
            <div id='about-container' className='container mx-auto flex h-full w-full flex-col gap-4 lg:flex-row'>

                {/* About Section Header and Image */}
                <div id="section-1" className="flex flex-col items-center justify-between gap-4">
                    <header id='about-header' className='text-center'>
                        <h1 id='about-page-title' className='text-3xl font-bold text-primary'>About Me</h1>
                        <p id='about-page-desc' className='text-xl text-gray-300'>My Introduction</p>
                    </header>

                    <img
                        id='about-img'
                        className='h-auto w-[75%] rounded-2xl object-cover shadow-lg'
                        src={aboutImg}
                        alt="About Me"
                    />

                    {/* Experience Boxes */}
                    <div id='about-box-container' className='grid w-full grid-cols-3 gap-4'>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} id="s-box" className='flex flex-col items-center rounded-lg bg-tertiary p-4 text-center shadow-md'>
                                <FaAward className='mb-2 text-3xl text-primary' />
                                <h4 className='mb-1 text-lg font-semibold'>Experience</h4>
                                <p className='text-md'>2 years</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Section Content */}
                <div id="section-2" className="flex flex-col items-center justify-between gap-4">
                    <p id='about-para' className='text-justify text-xl leading-relaxed'>
                        I'm a beginner MERN Stack Web Developer skilled in both frontend and backend. I create responsive user interfaces with React and use frameworks like Bootstrap and Tailwind CSS for design. On the backend, I work with Node.js, Express.js, and MongoDB to manage server-side applications. I also have experience with Git and GitHub for version control and collaboration. Additionally, I use AI tools like ChatGPT and Gemini to improve my development workflow.
                        <br /><br />
                        Beyond the MERN stack, I'm passionate about exploring new technologies. During my College studies, I built an IoT project with a MERN-based interface and a ML project for face recognition using Flask. I'm dedicated to expanding my skills through diverse projects and staying current with the latest tech trends.
                        <br /><br />
                        Please find below the list of skills I possess.
                    </p>

                    {/* Download Resume Button with Dropdown Menu */}
                    <div id="about-resume-container"
                        className="relative flex w-full items-center justify-center"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            id="about-resume-btn"
                            className="flex w-full items-center justify-center gap-3 rounded-full bg-tertiary px-4 py-2 text-xl font-normal capitalize tracking-normal text-primary transition-all duration-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            Download Resume
                            <ChevronDownIcon
                                aria-label="Toggle dropdown"
                                strokeWidth={2.5}
                                className={`h-4 w-4 transition-transform ${openMenu ? "rotate-0" : "rotate-180"}`}
                            />
                        </button>
                        {openMenu && (
                            <div id="about-resume-menu" className="absolute bottom-full left-1/2 mb-2 w-80 translate-x-[-50%] transform flex-col gap-2 bg-tertiary shadow-lg">
                                <CustomMenuList
                                    handleDownloadClick={handleDownloadClick}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;