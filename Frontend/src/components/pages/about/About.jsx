import React from 'react'
import './About.css'
import AboutImg from "../../../assets/about.jpg"
import { FaAward } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";

const About = () => {
    return <section id='about' className=' h-[calc(100vh-4rem)] bg-primary text-white mx-auto flex flex-col items-center justify-evenly'>

        <div id='about-container' className=' container h-[100%] mx-auto flex flex-col justify-between'>

            <header id='aboutHeader' className='text-center text-secondary'>
                <h1 className="aboutPageTitle">About Me</h1>
                <h5 className="aboutPageDesc">My Introduction</h5>
            </header>

            <img id='about-img' className='w-[46%] h-full rounded-2xl' src={AboutImg} alt="" />

            <div id='about-content' className='w-[46%] h-full flex flex-col justify-between'>
                <div className='flex w-full gap-4'>
                    <div id='s-box'>
                        <FaAward />
                        <h4>Experience</h4>
                        <h6>2 years</h6>
                    </div>
                    <div id='s-box'>
                        <FaAward />
                        <h4>Experience</h4>
                        <h6>2 years</h6>
                    </div>
                    <div id='s-box'>
                        <FaAward />
                        <h4>Experience</h4>
                        <h6>2 years</h6>
                    </div>
                </div>
                <p className='text-justify text-xl leading-10'>
                    I Proficient in HTML, CSS, and JavaScript, I specialize in frontend development. Leveraging frameworks like Bootstrap and Tailwind CSS, I streamline the design responsive websites. I'm well-versed in backend technologies, including Node.js, Express.js, and MongoDB, Handling everything from server-side logic to database management. Furthermore, I have extensive experience with version control systems like Git and GitHub, ensuring efficient collaboration and code management. Please find below the list of skills I possess.
                </p>
                <button id='d-resume-link'>
                    <a href="">Download Resume</a>
                    <LiaFileDownloadSolid />
                </button>
            </div>
        </div>
    </section>

}

export default About