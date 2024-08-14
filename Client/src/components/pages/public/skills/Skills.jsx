import React from 'react';
import './Skills.css';
import imageUrls from './imageUrls';

const Skills = () => {
    const skills = {
        frontend: [
            { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', imageUrl: imageUrls.frontend.html, level: 'Intermediate' },
            { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', imageUrl: imageUrls.frontend.css, level: 'Intermediate' },
            { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', imageUrl: imageUrls.frontend.javascript, level: 'Intermediate' },
            { name: 'Bootstrap', link: 'https://getbootstrap.com/', imageUrl: imageUrls.frontend.bootstrap, level: 'Intermediate' },
            { name: 'Tailwind CSS', link: 'https://tailwindcss.com/', imageUrl: imageUrls.frontend.tailwind, level: 'Intermediate' },
            { name: 'React', link: 'https://react.dev/', imageUrl: imageUrls.frontend.react, level: 'Intermediate' },
        ],
        backend: [
            { name: 'Node.js', link: 'https://nodejs.org/docs/latest/api/', imageUrl: imageUrls.backend.nodejs, level: 'Basic' },
            { name: 'Express.js', link: 'https://expressjs.com/', imageUrl: imageUrls.backend.expressjs, level: 'Basic' },
            { name: 'MySQL', link: 'https://www.mysql.com/downloads/', imageUrl: imageUrls.backend.mysql, level: 'Basic' },
            { name: 'MongoDB', link: 'https://www.mongodb.com/', imageUrl: imageUrls.backend.mongodb, level: 'Basic' },
            { name: 'Mongoose', link: 'https://mongoosejs.com/', imageUrl: imageUrls.backend.mongoose, level: 'Basic' },
            { name: 'JWT Token', link: 'https://jwt.io/', imageUrl: imageUrls.backend.jwt, level: 'Basic' },
        ],
        cloudDeployment: [
            { name: 'AWS', link: 'https://aws.amazon.com/free/webapps/?p=ft&z=subnav&loc=3', imageUrl: imageUrls.cloudDeployment.aws, level: 'Basic' },
            { name: 'Surge.sh', link: 'https://surge.sh', imageUrl: imageUrls.cloudDeployment.surge, level: 'Basic' },
            { name: 'Render', link: 'https://render.com', imageUrl: imageUrls.cloudDeployment.render, level: 'Basic' },
            { name: 'Firebase', link: 'https://firebase.google.com/', imageUrl: imageUrls.cloudDeployment.firebase, level: 'Basic' },
            { name: 'Netlify', link: 'https://app.netlify.com', imageUrl: imageUrls.cloudDeployment.netlify, level: 'Basic' },
        ],
        other: [
            { name: 'GitHub', link: 'https://github.com/Samuvel6826', imageUrl: imageUrls.other.github, level: 'Basic' },
            { name: 'Git', link: 'https://git-scm.com/', imageUrl: imageUrls.other.git, level: 'Basic' },
            { name: 'Postman', link: 'https://postman.com/', imageUrl: imageUrls.other.postman, level: 'Basic' },
            { name: 'Google Analytics', link: 'https://analytics.google.com/', imageUrl: imageUrls.other.googleAnalytics, level: 'Basic' },
            { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/', imageUrl: imageUrls.other.vsCode, level: 'Basic' },
        ],
    };

    const renderSkillBox = (skill) => (
        <div key={skill.name} className="skills-box">
            <a href={skill.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center">
                <div className="skill-image-wrapper">
                    <img
                        className="skill-image"
                        src={skill.imageUrl}
                        alt={skill.name}
                    />
                </div>
                <p className="skill-level">{skill.level}</p>
            </a>
        </div>
    );

    return (
        <section id="skills" className="bg-secondary p-6 md:p-8 lg:p-12">
            <div className="container mx-auto flex flex-col gap-6">
                <header className="text-center">
                    <h1 id="skills-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills</h1>
                    <p id="skills-page-desc" className="text-md md:text-lg lg:text-xl">My Expertise</p>
                </header>
                <div id="skills-wrapper" className="bg-background-light rounded-2xl p-6 shadow-md text-center">
                    <div className="mb-8">
                        <h4 className="text-2xl md:text-3xl font-semibold capitalize text-primary mb-4">Frontend Skills</h4>
                        <div id="skills-list" className="flex flex-wrap gap-6 justify-center">
                            {skills.frontend.map(renderSkillBox)}
                        </div>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-2xl md:text-3xl font-semibold capitalize text-primary mb-4">Backend Skills</h4>
                        <div id="skills-list" className="flex flex-wrap gap-6 justify-center">
                            {skills.backend.map(renderSkillBox)}
                        </div>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-2xl md:text-3xl font-semibold capitalize text-primary mb-4">Cloud Services & Deployment Tool</h4>
                        <div id="skills-list" className="flex flex-wrap gap-6 justify-center">
                            {skills.cloudDeployment.map(renderSkillBox)}
                        </div>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-2xl md:text-3xl font-semibold capitalize text-primary mb-4">Other Tools</h4>
                        <div id="skills-list" className="flex flex-wrap gap-6 justify-center">
                            {skills.other.map(renderSkillBox)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;