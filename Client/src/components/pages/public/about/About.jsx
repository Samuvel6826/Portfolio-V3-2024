import { useState } from "react";
import aboutImg from '../../../../assets/about-img.jpeg';
import { FaAward } from "react-icons/fa";
import CustomMenuList from "../../navbar/CustomMenuList";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import './About.css';

const About = () => {
    const [openMenu, setOpenMenu] = useState(false);
    let timeoutId = null;

    // Handler for mouse enter event: Shows the dropdown menu
    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setOpenMenu(true);
    };

    // Handler for mouse leave event: Hides the dropdown menu after a delay
    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setOpenMenu(false);
        }, 200);
    };

    // Handler for downloading a file
    const handleDownloadClick = async (fileUrl) => {
        try {
            // Fetch the file from the URL
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileUrl.split('/').pop(); // Extract file name
            document.body.appendChild(link);
            link.click(); // Trigger the download
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download error:', error); // Log any errors
        }
    };

    return (
        <section id='about' className='h-full w-full'>
            <div id='about-container' className='flex h-full w-full flex-col justify-between gap-4 bg-secondary p-4 text-letter lg:flex-row lg:p-10'>
                {/* About Section Header and Image */}
                <div id="section-1" className="flex flex-col items-center justify-between gap-4">
                    <header id='about-header' className='text-center text-primary'>
                        <h1 id='about-page-title' className='text-3xl font-bold'>About Me</h1>
                        <p id='about-page-desc' className='text-xl'>My Introduction</p>
                    </header>

                    <div id="about-img-container" className="flex flex-col gap-4">
                        <img
                            id='about-img'
                            className='h-auto w-full rounded-2xl object-cover shadow-lg'
                            src={aboutImg}
                            alt="About Me"
                        />

                        {/* Experience Boxes */}
                        <div id='about-profile-box-container' className='hidden w-full grid-cols-3 gap-4 sm:grid xl:hidden'>
                            {[...Array(3)].map((_, index) => (
                                <div key={index} id="about-profile-box" className='flex flex-col items-center justify-center gap-2 rounded-2xl bg-tertiary p-4 text-center text-lg shadow-md'>
                                    <FaAward className='text-3xl text-primary' />
                                    <h4 className='font-semibold'>Experience</h4>
                                    <p>2 years</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* About Section Content */}
                <div id="section-2" className="flex flex-col items-center justify-between gap-4">
                    {/* Experience Boxes */}
                    <div id='about-profile-box-container' className='grid w-full grid-cols-3 gap-4 sm:hidden xl:grid'>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} id="about-profile-box" className='flex flex-col items-center justify-center gap-2 rounded-2xl bg-tertiary p-4 text-center text-lg shadow-md'>
                                <FaAward className='text-3xl text-primary' />
                                <h4 className='font-semibold'>Experience</h4>
                                <p>2 years</p>
                            </div>
                        ))}
                    </div>
                    <p id='about-para' className='flex flex-col gap-4 text-justify text-xl leading-[2.15rem]'>
                        <span>
                            I&apos;m a beginner-level MERN Stack Web Developer with skills in both frontend and backend development. I create responsive user interfaces and have experience with Git and GitHub for version control and collaboration. Additionally, I use AI tools like ChatGPT and others to enhance my development workflow.
                        </span>
                        <span>
                            Beyond the MERN stack, I am passionate about exploring new technologies. During my college studies, I built an IoT project with a MERN-based user interface and a machine learning project for face recognition using Python-Flask. I am dedicated to expanding my skills through diverse projects and staying current with the latest tech trends.
                        </span>
                        <span>
                            Below is a list of the skills I possess.
                        </span>
                    </p>

                    {/* Download Resume Button with Dropdown Menu */}
                    <div id="about-resume-container"
                        className="relative flex w-full items-center justify-center text-xl"
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