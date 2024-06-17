import React, { useState, useEffect } from 'react';
import './Projects.css';
import { Pagination } from 'antd';
import axios from "axios";
import Spinner from "../../common/Spinner";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [totalCards, setTotalCards] = useState(0);

    const getProjects = async () => {
        try {
            let res = await axios.get(
                "https://b46wet-capstone-portfolio-backend.onrender.com/projects"
            );
            setProjects(res.data.data);
            setTotalCards(res.data.data.length);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch projects. Please try again later.');
            setLoading(false);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1537) {
                setCardsPerPage(4);
            } else if (width >= 1280 && width < 1536) {
                setCardsPerPage(3);
            } else if (width >= 1024 && width < 1280) {
                setCardsPerPage(3);
            } else if (width >= 768 && width < 1024) {
                setCardsPerPage(2);
            } else if (width >= 640 && width < 768) {
                setCardsPerPage(2);
            } else {
                setCardsPerPage(2);
            }
        };

        // Set the initial value based on the current window size
        handleResize();

        // Add the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const onChange = (pageNumber) => setCurrentPage(pageNumber);

    return <section id='projects' className=' bg-secondary mx-auto flex p-4'>
        <div id='projects-container' className='container mx-auto flex flex-col items-center gap-3'>
            <header id='projects-header' className='text-center text-tertiary'>
                <h1 id="projects-page-title">Projects</h1>
                <h5 id="projects-page-desc">Recent Works</h5>
            </header>
            {/* <Segmented className='w-1/2' options={[123, 456, 'longtext-longtext-longtext-longtext']} block /> */}
            <div id='cards-container' className='w-full h-full flex flex-col justify-between gap-3'>
                {loading ? (
                    <Spinner />
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : (
                    projects.slice(indexOfFirstCard, indexOfLastCard).map((project, index) => (
                        <div key={index} id='card' className='h-full w-full flex flex-grow flex-col rounded-2xl p-4 text-white bg-primary gap-3'>
                            <div className='border-b-2'>
                                {project.name}
                            </div>
                            <div className='flex'>
                                <img className='h-full flex flex-grow' src={project.imgUrl} alt={`${project.name} project`} />
                            </div>
                            <div className='border-b-2'>
                                <div className='border-b-2'>
                                    {project.description}
                                </div>
                                <div>
                                    {project.id}
                                </div>
                            </div>
                            <div>
                                <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Demo</a>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <Pagination
                current={currentPage}
                onChange={onChange}
                pageSize={cardsPerPage}
                total={totalCards}
            />

        </div>

    </section>
}

export default Projects;
