import React from 'react';
import './Skills.css'

const Skills = () => {
    const frontendSkills = [
        {
            name: 'HTML',
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
            imageUrl: 'https://img.icons8.com/color/48/html-5--v1.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'HTML 5 logo',
            level: 'Intermediate',
        },
        {
            name: 'CSS',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            imageUrl: 'https://img.icons8.com/color/48/css3.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'CSS 3 logo',
            level: 'Intermediate',
        },
        {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            imageUrl: 'https://img.icons8.com/color/48/javascript--v1.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'JavaScript logo',
            level: 'Intermediate',
        },
        {
            name: 'Bootstrap',
            link: 'https://getbootstrap.com/',
            imageUrl: 'https://img.icons8.com/color-glass/48/bootstrap.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Bootstrap logo',
            level: 'Intermediate',
        },
        {
            name: 'Tailwind CSS',
            link: 'https://tailwindcss.com/',
            imageUrl: 'https://img.icons8.com/fluency/48/tailwind_css.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Tailwind CSS logo',
            level: 'Intermediate',
        },
        {
            name: 'React',
            link: 'https://react.dev/',
            imageUrl: 'https://img.icons8.com/officel/80/000000/react.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'React logo',
            level: 'Intermediate',
        },
    ];

    const backendSkills = [
        {
            name: 'Node.js',
            link: 'https://nodejs.org/docs/latest/api/',
            imageUrl: 'https://img.icons8.com/color/48/nodejs.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Node.js logo',
            level: 'Basic',
        },
        {
            name: 'Express.js',
            link: 'https://expressjs.com/',
            imageUrl: 'https://img.icons8.com/ios/50/express-js.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Express.js logo',
            level: 'Basic',
        },
        {
            name: 'MySQL',
            link: 'https://www.mysql.com/downloads/',
            imageUrl: 'https://img.icons8.com/color/96/000000/mysql-logo.png',
            desktopSkillIconHeight: '3rem',
            desktopSkillIconWidth: '4rem',
            mobileSkillIconHeight: '2.5rem',
            mobileSkillIconWidth: '3.5rem',
            altText: 'MySQL logo',
            level: 'Basic',
        },
        {
            name: 'MongoDB',
            link: 'https://www.mongodb.com/',
            imageUrl: 'https://img.icons8.com/color/48/mongodb.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'MongoDB logo',
            level: 'Basic',
        },
        {
            name: 'Mongoose',
            link: 'https://mongoosejs.com/',
            imageUrl: 'https://img.icons8.com/color/48/mongoose.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Mongoose logo',
            level: 'Basic',
        },
        {
            name: 'JWT Token',
            link: 'https://mongoosejs.com/',
            imageUrl: 'https://img.icons8.com/color/48/mongoose.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Mongoose logo',
            level: 'Basic',
        }
    ];

    const otherSkills = [
        {
            name: 'GitHub',
            link: 'https://github.com/Samuvel6826',
            imageUrl: 'https://res.cloudinary.com/dgsucveh2/image/upload/v1705581039/github-mark_iq2coy.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'GitHub logo',
            level: 'Basic',
        },
        {
            name: 'Git',
            link: 'https://git-scm.com/',
            imageUrl: 'https://img.icons8.com/color/48/git.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Git logo',
            level: 'Basic',
        },
        {
            name: 'AWS',
            link: 'https://aws.amazon.com/free/webapps/?p=ft&z=subnav&loc=3',
            imageUrl: 'https://img.icons8.com/color/48/amazon-web-services.png',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'AWS logo',
            level: 'Basic',
        },
        {
            name: 'Surge.sh',
            link: 'https://surge.sh',
            imageUrl: 'https://surge.sh/images/logos/svg/surge-logo.svg',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Surge.sh logo',
            level: 'Basic',
        },
        {
            name: 'Render',
            link: 'https://render.com',
            imageUrl: 'https://media.licdn.com/dms/image/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/0/1702595267620/renderco_logo?e=1723075200&v=beta&t=hRST8MwdcWbWhduHqrz7zSOoG4T4wTo5ej7j_E4ipW0',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Render logo',
            level: 'Basic',
        },
        {
            name: 'Firebase',
            link: 'https://render.com',
            imageUrl: 'https://media.licdn.com/dms/image/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/0/1702595267620/renderco_logo?e=1723075200&v=beta&t=hRST8MwdcWbWhduHqrz7zSOoG4T4wTo5ej7j_E4ipW0',
            desktopSkillIconHeight: '2.5rem',
            desktopSkillIconWidth: '2.5rem',
            mobileSkillIconHeight: '2rem',
            mobileSkillIconWidth: '2rem',
            altText: 'Render logo',
            level: 'Basic',
        },
        {
            name: 'Netlify',
            link: 'https://app.netlify.com',
            imageUrl: 'https://res.cloudinary.com/dgsucveh2/image/upload/v1714823239/Screenshot_2024-05-04_at_5.13.00_PM_ouxpj1.png',
            desktopSkillIconHeight: '4rem',
            desktopSkillIconWidth: '6rem',
            mobileSkillIconHeight: '3rem',
            mobileSkillIconWidth: '5rem',
            altText: 'Netlify logo',
            level: 'Basic',
        },
    ];



    const renderSkillBox = (skill) => (
        <div key={skill.name} id='skills-box'>
            <a href={skill.link} target="_blank">
                <img id='desktop-skill-image' className='max-md:hidden' style={{ height: skill.desktopSkillIconHeight, width: skill.desktopSkillIconWidth }} src={skill.imageUrl} alt={skill.name} />

                <img id='mobile-skill-image' className='md:hidden' style={{ height: skill.mobileSkillIconHeight, width: skill.mobileSkillIconWidth }} src={skill.imageUrl} alt={skill.name} />
                <p id='skill-name'>{skill.name}</p>
                <p id='skill-level' className="skill-level">{skill.level}</p>
            </a>
        </div>
    );

    return <section id="skills" className=" bg-primary mx-auto flex p-4">

        <div id="skills-container" className="container h-full mx-auto">
            <header id='skills-header' className=' w-full text-center text-secondary'>
                <h1 id="skills-page-title">Skills</h1>
                <p id="skills-page-desc">My Expertise</p>
            </header>

            <div id='skills-wrapper' className=" w-full flex flex-col p-2 bg-white rounded-2xl text-center gap-2">
                <h4>Frontend</h4>
                <div id='skills-list'>
                    {frontendSkills.map(renderSkillBox)}
                </div>

                <h4>Backend</h4>
                <div id='skills-list'>
                    {backendSkills.map(renderSkillBox)}
                </div>

                <h4>Others</h4>
                <div id='skills-list'>
                    {otherSkills.map(renderSkillBox)}
                </div>
            </div>
        </div>


    </section>
};

export default Skills;
