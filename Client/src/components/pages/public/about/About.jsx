import React from 'react';
import aboutImg from '../../../../assets/about-img.jpeg';
import { FaAward } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";

const About = () => {
    return (
        <section id='about' className='px-4 py-8 text-white bg-secondary sm:px-6 lg:px-8'>
            <div id='about-container' className='container flex flex-col items-center mx-auto lg:flex-row lg:gap-12'>

                <div id="about-img-wrapper" className='flex flex-col justify-center flex-1 mb-8 lg:mb-0'>
                    <header id='about-header' className='mb-6 text-center lg:text-left'>
                        <h1 id='about-page-title' className='mb-2 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl'>About Me</h1>
                        <p id='about-page-desc' className='text-xl text-gray-300 sm:text-2xl lg:text-3xl'>My Introduction</p>
                    </header>
                    <img
                        id='about-img'
                        className='object-cover w-full h-auto max-w-xs shadow-lg rounded-2xl sm:max-w-sm lg:max-w-md'
                        src={aboutImg}
                        alt="About Me"
                    />
                </div>

                <div id='about-content' className='flex flex-col flex-1 gap-6'>

                    <div id='about-box-container' className='grid grid-rows gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        <div id='s-box' className='flex flex-col items-center p-4 text-center rounded-lg shadow-md bg-tertiary'>
                            <FaAward className='mb-2 text-3xl text-primary sm:text-4xl' />
                            <h4 className='mb-1 text-lg font-semibold'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                        <div id='s-box' className='flex flex-col items-center p-4 text-center rounded-lg shadow-md bg-tertiary'>
                            <FaAward className='mb-2 text-3xl text-primary sm:text-4xl' />
                            <h4 className='mb-1 text-lg font-semibold'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                        <div id='s-box' className='flex flex-col items-center p-4 text-center rounded-lg shadow-md bg-tertiary'>
                            <FaAward className='mb-2 text-3xl text-primary sm:text-4xl' />
                            <h4 className='mb-1 text-lg font-semibold'>Experience</h4>
                            <p className='text-md'>2 years</p>
                        </div>
                    </div>

                    <p id='about-para' className='text-base leading-7 text-justify sm:text-lg lg:text-xl'>
                        I'm a beginner-level MERN Stack Web Developer with proficiency in both frontend and backend development. I build responsive and interactive user interfaces using React, and I leverage frameworks like Bootstrap and Tailwind CSS for efficient design. On the backend, I work with Node.js, Express.js, and MongoDB to create and manage server-side applications and databases. Furthermore, I have experience with version control systems like Git and GitHub, ensuring efficient collaboration and code management. I'm also leveraging AI tools like ChatGPT, Gemini, and others into my development workflow to optimize processes and enhance outcomes.

Beyond the MERN stack, I am an avid explorer of new technologies. During my academic journey, I developed an IoT project featuring a MERN-based web interface, as well as a machine learning project focused on face recognition, using Flask, a Python framework. I am committed to continuously expanding my knowledge and skill set by engaging in diverse projects and staying updated with the latest technological advancements.

Please find below the list of skills I possess.
                    </p>
                    <button id='about-resume-btn' className='flex items-center px-4 py-2 mt-4 text-white transition-colors rounded-lg hover:bg-secondary-dark bg-tertiary'>
                        <a href="" className='flex items-center justify-center w-full text-center'>
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