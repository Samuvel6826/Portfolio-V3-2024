import React from 'react';
import './Skills.css'

const Skills = () => {
    const frontendSkills = [
        {
            name: 'HTML',
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
            imageUrl: 'https://img.icons8.com/color/48/html-5--v1.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'HTML 5 logo',
            level: 'Intermediate',
        },
        {
            name: 'CSS',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            imageUrl: 'https://img.icons8.com/color/48/css3.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'CSS 3 logo',
            level: 'Intermediate',
        },
        {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            imageUrl: 'https://img.icons8.com/color/48/javascript--v1.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'JavaScript logo',
            level: 'Intermediate',
        },
        {
            name: 'Bootstrap',
            link: 'https://getbootstrap.com/',
            imageUrl: 'https://img.icons8.com/color-glass/48/bootstrap.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Bootstrap logo',
            level: 'Intermediate',
        },
        {
            name: 'Tailwind CSS',
            link: 'https://tailwindcss.com/',
            imageUrl: 'https://img.icons8.com/fluency/48/tailwind_css.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Tailwind CSS logo',
            level: 'Intermediate',
        },
        {
            name: 'React',
            link: 'https://react.dev/',
            imageUrl: 'https://img.icons8.com/officel/80/000000/react.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'React logo',
            level: 'Intermediate',
        },
    ];

    const backendSkills = [
        {
            name: 'Node.js',
            link: 'https://nodejs.org/docs/latest/api/',
            imageUrl: 'https://img.icons8.com/color/48/nodejs.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Node.js logo',
            level: 'Basic',
        },
        {
            name: 'Express.js',
            link: 'https://expressjs.com/',
            imageUrl: 'https://img.icons8.com/ios/50/express-js.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Express.js logo',
            level: 'Basic',
        },
        {
            name: 'MySQL',
            link: 'https://www.mysql.com/downloads/',
            imageUrl: 'https://img.icons8.com/color/96/000000/mysql-logo.png',
            skillIconHeight: '3rem',
            skillIconWidth: '4rem',
            altText: 'MySQL logo',
            level: 'Basic',
        },
        {
            name: 'MongoDB',
            link: 'https://www.mongodb.com/',
            imageUrl: 'https://img.icons8.com/color/48/mongodb.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'MongoDB logo',
            level: 'Basic',
        },
        {
            name: 'Mongoose',
            link: 'https://mongoosejs.com/',
            imageUrl: 'https://img.icons8.com/color/48/mongoose.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Mongoose logo',
            level: 'Basic',
        },
    ];

    const otherSkills = [
        {
            name: 'GitHub',
            link: 'https://github.com/Samuvel6826',
            imageUrl: 'https://res.cloudinary.com/dgsucveh2/image/upload/v1705581039/github-mark_iq2coy.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'GitHub logo',
            level: 'Basic',
        },
        {
            name: 'Git',
            link: 'https://git-scm.com/',
            imageUrl: 'https://img.icons8.com/color/48/git.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Git logo',
            level: 'Basic',
        },
        {
            name: 'AWS',
            link: 'https://aws.amazon.com/free/webapps/?p=ft&z=subnav&loc=3',
            imageUrl: 'https://img.icons8.com/color/48/amazon-web-services.png',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'AWS logo',
            level: 'Basic',
        },
        {
            name: 'Surge.sh',
            link: 'https://surge.sh',
            imageUrl: 'https://surge.sh/images/logos/svg/surge-logo.svg',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Surge.sh logo',
            level: 'Basic',
        },
        {
            name: 'Render',
            link: 'https://render.com',
            imageUrl: 'https://media.licdn.com/dms/image/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/0/1702595267620/renderco_logo?e=1723075200&v=beta&t=hRST8MwdcWbWhduHqrz7zSOoG4T4wTo5ej7j_E4ipW0',
            skillIconHeight: '2.5rem',
            skillIconWidth: '2.5rem',
            altText: 'Render logo',
            level: 'Basic',
        },
        {
            name: 'Netlify',
            link: 'https://app.netlify.com',
            imageUrl: 'https://res.cloudinary.com/dgsucveh2/image/upload/v1714823239/Screenshot_2024-05-04_at_5.13.00_PM_ouxpj1.png',
            skillIconHeight: '4rem',
            skillIconWidth: '6rem',
            altText: 'Netlify logo',
            level: 'Basic',
        },
    ];



    const renderSkillBox = (skill) => (
        <div key={skill.name} id='skills-box' className="skill-box">
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img style={{ height: skill.skillIconHeight, width: skill.skillIconWidth }} src={skill.imageUrl} alt={skill.name} />
                <h3>{skill.name}</h3>
                <h6 className="skill-level">{skill.level}</h6>
            </a>
        </div>
    );

    return (
        <section id="skills" className="h-[calc(100vh-4rem)] bg-primary mx-auto flex flex-col justify-evenly items-center">
            <header id='skillsHeader' className='text-center text-secondary'>
                <h1 className="skillsPageTitle">Skills</h1>
                <h5 className="skillsPageDesc">My Expertise</h5>
            </header>

            <div className="container h-[85%] flex flex-col justify-evenly items-center p-4 gap-4 bg-white rounded-2xl">
                <h2>Frontend</h2>
                <div className="skill-list w-full flex gap-4">
                    {frontendSkills.map(renderSkillBox)}
                </div>

                <h2>Backend</h2>
                <div className="skill-list w-full flex gap-4">
                    {backendSkills.map(renderSkillBox)}
                </div>

                <h2>Others</h2>
                <div className="skill-list w-full flex gap-4">
                    {otherSkills.map(renderSkillBox)}
                </div>
            </div>
        </section>
    );
};

export default Skills;
