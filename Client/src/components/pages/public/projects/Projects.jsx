import React, { useState, useEffect } from 'react';
import './Projects.css';
import axios from 'axios';
import Loader from '../../../common/Loader';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [active, setActive] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(2);
    const [totalCards, setTotalCards] = useState(0);

    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const getItemProps = (index) => ({
        variant: active === index ? 'filled' : 'text',
        color: 'gray',
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === totalPages) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    const getProjects = async () => {
        try {
            const res = await axios.get(
                'https://b46wet-capstone-portfolio-backend.onrender.com/projects'
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
                setCardsPerPage(5);
            } else if (width >= 1280) {
                setCardsPerPage(4);
            } else if (width >= 1024) {
                setCardsPerPage(3);
            } else if (width >= 768) {
                setCardsPerPage(2);
            } else {
                setCardsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const indexOfLastCard = active * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const renderPageNumbers = () => {
        const pages = [];

        pages.push(
            <IconButton key={1} className='rounded-full' {...getItemProps(1)}>
                1
            </IconButton>
        );

        if (active > 2) {
            pages.push(<span key='left-dots' className='mx-2'>...</span>);
        }

        if (active > 1 && active < totalPages) {
            pages.push(
                <IconButton key={active} className='rounded-full' {...getItemProps(active)}>
                    {active}
                </IconButton>
            );
        }

        if (active < totalPages - 1) {
            pages.push(<span key='right-dots' className='mx-2'>...</span>);
        }

        pages.push(
            <IconButton key={totalPages} className='rounded-full' {...getItemProps(totalPages)}>
                {totalPages}
            </IconButton>
        );

        return pages;
    };

    return (
        <section id='projects' className='bg-primary mx-auto flex p-4'>
            <div id='projects-container' className='container mx-auto flex flex-col items-center gap-3'>
                <header id='projects-header' className='text-center text-tertiary'>
                    <h1 id='projects-page-title'>Projects</h1>
                    <p id='projects-page-desc'>Recent Works</p>
                </header>
                <div id='cards-container' className='w-full h-full flex flex-col justify-between gap-3'>
                    {loading ? (
                        <div className='mx-auto'><Loader /></div>
                    ) : error ? (
                        <div className='error-message mx-auto text-2xl text-white bg-red-800 rounded-full p-5'>{error}</div>
                    ) : (
                        projects.slice(indexOfFirstCard, indexOfLastCard).map((project, index) => (
                            <div key={index} id='card' className='h-full w-full flex flex-grow flex-col rounded-2xl p-4 text-white bg-secondary gap-3'>
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
                                        Project ID: {project.id}
                                    </div>
                                </div>
                                <div>
                                    <a href={project.siteLink} target='_blank' rel='noopener noreferrer'>Demo</a>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {!loading && !error && (
                    <div id='pagination' className='flex items-center gap-2'>
                        <Button
                            id='pagination-btns'
                            variant='text'
                            className='w-[4.5rem] bg-secondary text-white'
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Prev
                        </Button>

                        <div id='pagination-pages-btns' className='flex items-center rounded-full'>
                            {renderPageNumbers()}
                        </div>

                        <Button
                            id='pagination-btns'
                            variant='text'
                            className='w-[4.5rem] bg-secondary text-white'
                            onClick={next}
                            disabled={active === totalPages}
                        >
                            Next
                            <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;