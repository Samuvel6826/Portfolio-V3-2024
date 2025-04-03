import './Skills.css';
import imageUrls from './imageUrls';

const Skills = () => {
    const skills = {
        frontend: [
            { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', imageUrl: imageUrls.frontend.html, level: 'Intermediate' },
            { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', imageUrl: imageUrls.frontend.css, level: 'Intermediate' },
            { name: 'Tailwind CSS', link: 'https://tailwindcss.com/', imageUrl: imageUrls.frontend.tailwind, level: 'Intermediate' },
            { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', imageUrl: imageUrls.frontend.javascript, level: 'Intermediate' },
            // { name: 'Bootstrap', link: 'https://getbootstrap.com/', imageUrl: imageUrls.frontend.bootstrap, level: 'Intermediate' },
            { name: 'React', link: 'https://react.dev/', imageUrl: imageUrls.frontend.react, level: 'Intermediate' },
            { name: 'Next.js', link: 'https://nextjs.org/', imageUrl: imageUrls.frontend.nextjs, level: 'Intermediate' },
        ],
        backend: [
            { name: 'Node.js', link: 'https://nodejs.org/docs/latest/api/', imageUrl: imageUrls.backend.nodejs, level: 'Intermediate' },
            { name: 'Express.js', link: 'https://expressjs.com/', imageUrl: imageUrls.backend.expressjs, level: 'Intermediate' },
            { name: 'MongoDB', link: 'https://www.mongodb.com/', imageUrl: imageUrls.backend.mongodb, level: 'Intermediate' },
            { name: 'Mongoose', link: 'https://mongoosejs.com/', imageUrl: imageUrls.backend.mongoose, level: 'Intermediate' },
            { name: 'MySQL', link: 'https://www.mysql.com/downloads/', imageUrl: imageUrls.backend.mysql, level: 'Basic' },
            { name: 'JWT Token', link: 'https://jwt.io/', imageUrl: imageUrls.backend.jwt, level: 'Basic' },
        ],
        cloudDeployment: [
            { name: 'Netlify', link: 'https://app.netlify.com', imageUrl: imageUrls.cloudDeployment.netlify, level: 'Intermediate' },
            { name: 'Firebase', link: 'https://firebase.google.com/', imageUrl: imageUrls.cloudDeployment.firebase, level: 'Intermediate' },
            { name: 'Surge.sh', link: 'https://surge.sh', imageUrl: imageUrls.cloudDeployment.surge, level: 'Intermediate' },
            { name: 'Render', link: 'https://render.com', imageUrl: imageUrls.cloudDeployment.render, level: 'Intermediate' },
            { name: 'AWS', link: 'https://aws.amazon.com/free/webapps/?p=ft&z=subnav&loc=3', imageUrl: imageUrls.cloudDeployment.aws, level: 'Basic' },
        ],
        other: [
            { name: 'Git', link: 'https://git-scm.com/', imageUrl: imageUrls.other.git, level: 'Intermediate' },
            { name: 'GitHub', link: 'https://github.com/Samuvel6826', imageUrl: imageUrls.other.github, level: 'Intermediate' },
            { name: 'Postman', link: 'https://postman.com/', imageUrl: imageUrls.other.postman, level: 'Intermediate' },
            { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/', imageUrl: imageUrls.other.vsCode, level: 'Intermediate' },
            { name: 'Google Analytics', link: 'https://analytics.google.com/', imageUrl: imageUrls.other.googleAnalytics, level: 'Basic' },
        ],
    };

    const renderSkillBox = (skill) => (
        <div key={skill.name} className="skills-box text-lg font-semibold">
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
        <section id="skills" className="h-full w-full bg-primary p-4 lg:p-10">
            <div className="flex h-full w-full flex-col justify-between gap-4">

                <header id='skills-header' className="text-center text-secondary">
                    <h1 id="skills-page-title" className="text-3xl font-bold">Skills</h1>
                    <p id="skills-page-desc" className="text-xl">My Expertise</p>
                </header>

                <div id="skills-wrapper" className="overflow-hidden rounded-2xl bg-background-light p-4 text-center shadow-md">
                    <div className="mb-8" id='frontendContainer' data-aos="fade-right">
                        <h4 className="mb-4 text-2xl font-semibold capitalize text-secondary">Frontend Skills</h4>
                        <div id="skills-list" className="flex flex-wrap justify-center gap-2">
                            {skills.frontend.map(renderSkillBox)}
                        </div>
                    </div>
                    <div className="mb-8" id='backendContainer' data-aos="fade-left">
                        <h4 className="mb-4 text-2xl font-semibold capitalize text-secondary">Backend Skills</h4>
                        <div id="skills-list" className="flex flex-wrap justify-center gap-2">
                            {skills.backend.map(renderSkillBox)}
                        </div>
                    </div>
                    <div className="mb-8" id='cloudDeploymentContainer' data-aos="fade-right">
                        <h4 className="mb-4 text-2xl font-semibold capitalize text-secondary">Cloud Services & Deployment Tools</h4>
                        <div id="skills-list" className="flex flex-wrap justify-center gap-2">
                            {skills.cloudDeployment.map(renderSkillBox)}
                        </div>
                    </div>
                    <div className="mb-8" id='otherToolsContainer' data-aos="fade-left">
                        <h4 className="mb-4 text-2xl font-semibold capitalize text-secondary">Other Tools</h4>
                        <div id="skills-list" className="flex flex-wrap justify-center gap-2">
                            {skills.other.map(renderSkillBox)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;