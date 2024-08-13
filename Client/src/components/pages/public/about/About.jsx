import React from 'react';
import aboutImg from '../../../../assets/about-img.jpeg';
import { FaAward } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";

const About = () => {
    return (
        <section id='about' className='bg-primary text-white py-8 md:py-12 lg:py-16'>
            <div id='about-container' className='container mx-auto flex flex-col lg:flex-row lg:gap-12 items-center'>

                <div id="about-img-wrapper" className='flex-1 flex justify-center mb-8 lg:mb-0'>
                    <img
                        id='about-img'
                        className='w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-lg object-cover'
                        src={aboutImg}
                        alt="About Me"
                    />
                </div>

                <div id='about-content' className='flex-1 flex flex-col gap-6'>
                    <header id='about-header' className='text-center'>
                        <h1 id='about-page-title' className='text-secondary text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>About Me</h1>
                        <p id='about-page-desc' className='text-xl md:text-2xl lg:text-3xl text-gray-300'>My Introduction</p>
                    </header>

                    <div id='about-box-container' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div id='s-box' className='bg-tertiary p-4 rounded-lg shadow-md flex flex-col items-center text-center'>
                            <FaAward className='text-3xl sm:text-4xl mb-2 text-secondary' />
                            <h4 className='text-lg font-semibold mb-1'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                        <div id='s-box' className='bg-tertiary p-4 rounded-lg shadow-md flex flex-col items-center text-center'>
                            <FaAward className='text-3xl sm:text-4xl mb-2 text-secondary' />
                            <h4 className='text-lg font-semibold mb-1'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                        <div id='s-box' className='bg-tertiary p-4 rounded-lg shadow-md flex flex-col items-center text-center'>
                            <FaAward className='text-3xl sm:text-4xl mb-2 text-secondary' />
                            <h4 className='text-lg font-semibold mb-1'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                    </div>

                    <p id='about-para' className='text-justify text-base md:text-lg lg:text-xl leading-7'>
                        I am proficient in HTML, CSS, and JavaScript, specializing in frontend development. Leveraging frameworks like Bootstrap and Tailwind CSS, I streamline the design of responsive websites. I'm well-versed in backend technologies, including Node.js, Express.js, and MongoDB, handling everything from server-side logic to database management. Furthermore, I have experience with version control systems like Git and GitHub, ensuring efficient collaboration and code management. Please find below the list of skills I possess.
                    </p>
                    <button id='about-resume-btn' className='flex items-center bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors'>
                        <a href="" className='flex items-center'>
                            Download Resume
                        </a>
                        <LiaFileDownloadSolid className='ml-2 text-lg' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About;