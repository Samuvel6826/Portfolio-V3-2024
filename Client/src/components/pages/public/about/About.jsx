import React from 'react';
import aboutImg from '../../../../assets/about-img.jpeg';
import { FaAward } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";

const About = () => {
    return (
        <section id='about' className='bg-secondary px-4 py-8 text-white sm:px-6 lg:px-8'>
            <div id='about-container' className='container mx-auto flex flex-col items-center lg:flex-row lg:gap-12'>

                <div id="about-img-wrapper" className='mb-8 flex flex-1 flex-col justify-center lg:mb-0'>
                    <header id='about-header' className='mb-6 text-center lg:text-left'>
                        <h1 id='about-page-title' className='mb-2 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl'>About Me</h1>
                        <p id='about-page-desc' className='text-xl text-gray-300 sm:text-2xl lg:text-3xl'>My Introduction</p>
                    </header>
                    <img
                        id='about-img'
                        className='h-auto w-full max-w-xs rounded-2xl object-cover shadow-lg sm:max-w-sm lg:max-w-md'
                        src={aboutImg}
                        alt="About Me"
                    />
                </div>

                <div id='about-content' className='flex flex-1 flex-col gap-6'>

                    <div id='about-box-container' className='grid grid-rows-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        <div id='s-box' className='flex flex-col items-center rounded-lg bg-tertiary p-4 text-center shadow-md'>
                            <FaAward className='mb-2 text-3xl text-primary sm:text-4xl' />
                            <h4 className='mb-1 text-lg font-semibold'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                        <div id='s-box' className='flex flex-col items-center rounded-lg bg-tertiary p-4 text-center shadow-md'>
                            <FaAward className='mb-2 text-3xl text-primary sm:text-4xl' />
                            <h4 className='mb-1 text-lg font-semibold'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                        <div id='s-box' className='flex flex-col items-center rounded-lg bg-tertiary p-4 text-center shadow-md'>
                            <FaAward className='mb-2 text-3xl text-primary sm:text-4xl' />
                            <h4 className='mb-1 text-lg font-semibold'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                    </div>

                    <p id='about-para' className='text-justify text-base leading-7 sm:text-lg lg:text-xl'>
                        I am proficient in HTML, CSS, and JavaScript, specializing in frontend development. Leveraging frameworks like Bootstrap and Tailwind CSS, I streamline the design of responsive websites. I'm well-versed in backend technologies, including Node.js, Express.js, and MongoDB, handling everything from server-side logic to database management. Furthermore, I have experience with version control systems like Git and GitHub, ensuring efficient collaboration and code management. Please find below the list of skills I possess.
                    </p>
                    <button id='about-resume-btn' className='hover:bg-secondary-dark mt-4 flex items-center rounded-lg bg-tertiary px-4 py-2 text-white transition-colors'>
                        <a href="" className='flex w-full items-center justify-center text-center'>
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