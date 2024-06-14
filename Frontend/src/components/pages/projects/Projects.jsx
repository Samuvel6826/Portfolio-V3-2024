import React, { useState, useEffect } from 'react';
import './Projects.css';
import { Segmented, Pagination } from 'antd';
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

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const onChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section id='projects' className='h-[calc(100vh-4rem)] bg-secondary mx-auto flex flex-col justify-evenly items-center'>
            <header id='projectsHeader' className='text-center text-primary'>
                <h1 className="projectsPageTitle">Projects</h1>
                <h5 className="projectsPageDesc">Recent Works</h5>
            </header>

            <div id='card-container' className='container h-[75%] flex flex-col justify-around items-center flex-wrap mx-auto bg-primary rounded-2xl'>
                {/* <Segmented className='w-1/2' options={[123, 456, 'longtext-longtext-longtext-longtext']} block /> */}
                <div className='h-[95%] w-full flex justify-around'>
                    {loading ? (
                        <Spinner />
                    ) : error ? (
                        <div className="error-message">{error}</div>
                    ) : (
                        projects.slice(indexOfFirstCard, indexOfLastCard).map((project, index) => (
                            <div key={index} className='h-full max-w-[30%] flex flex-grow flex-col border-2 rounded-2xl p-4 text-white'>
                                <div className='border-b-2 h-[10%]'>
                                    {project.name}
                                </div>
                                <div className='h-1/2 flex'>
                                    <img className='h-full flex flex-grow' src={project.imgUrl} alt={`${project.name} project`} />
                                </div>
                                <div className='border-b-2 h-1/2'>
                                    <div className='border-b-2 h-5/6'>
                                        {project.description}
                                    </div>
                                    <div>
                                        {project.id}
                                    </div>
                                </div>
                                <div className='h-[10%]'>
                                    <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Demo</a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Pagination
                current={currentPage}
                onChange={onChange}
                pageSize={cardsPerPage}
                total={totalCards}
            />
        </section>
    );
}

export default Projects;
