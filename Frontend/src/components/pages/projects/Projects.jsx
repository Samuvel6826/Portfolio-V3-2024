import React, { useState, useEffect } from 'react';
import './Projects.css'
import { Pagination } from 'antd';
import axios from "axios";
import Spinner from "../../common/Spinner";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(3); // Number of cards to display per page
    const [totalCards, setTotalCards] = useState(0); // Total number of cards

    let getProjects = async () => {
        try {
            let res = await axios.get(
                `${"https://b46wet-capstone-portfolio-backend.onrender.com/projects"}`
            );
            setProjects(res.data.data);
            setTotalCards(res.data.data.length);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    // Calculate the index of the first and last card to display on the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    // Function to handle pagination
    const onChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section id='projects' className='h-[calc(100vh-4rem)] bg-secondary mx-auto flex flex-col justify-evenly items-center'>
            <header id='projectsHeader' className='text-center text-primary'>
                <h1 className="projectsPageTitle">Projects</h1>
                <h5 className="projectsPageDesc">Recent Works</h5>
            </header>

            <div id='card-container' className='container h-[75%] flex justify-around items-center flex-wrap mx-auto bg-primary rounded-2xl'>
                {loading ? (
                    <Spinner />
                ) : (
                    projects.slice(indexOfFirstCard, indexOfLastCard).map((e, i) => (
                        <div key={i} className='h-[95%] max-w-[30%] flex flex-grow flex-col border-2 rounded-2xl p-4 text-white'>
                            <div className='border-b-2 h-[10%]'>
                                {e.name}
                            </div>
                            <div className='h-1/2 flex'>
                                <img className='h-full flex flex-grow' src={e.imgUrl} alt="" />
                            </div>
                            <div className='border-b-2 h-1/2'>
                                <div className='border-b-2 h-5/6'>
                                    {e.description}
                                </div>
                                <div>
                                    {e.id}
                                </div>
                            </div>
                            <div className='h-[10%]'>
                                <a href={e.siteLink}>Demo</a>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {/* Ant Design Pagination Component */}
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
