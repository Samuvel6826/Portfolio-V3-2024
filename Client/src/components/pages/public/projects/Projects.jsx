import React, { useState, useEffect, useCallback } from 'react';
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
        if (active < totalPages) setActive(active + 1);
    };

    const prev = () => {
        if (active > 1) setActive(active - 1);
    };

    const getProjects = useCallback(async (retryCount = 0) => {
        try {
            const res = await axios.get(
                'https://b46wet-capstone-portfolio-backend.onrender.com/projects'
            );
            setProjects(res.data.data);
            setTotalCards(res.data.data.length);
            setLoading(false);
        } catch (err) {
            if (retryCount < 2) {
                console.log(`Retrying... (${retryCount + 1})`);
                getProjects(retryCount + 1);
            } else {
                setError('Failed to fetch projects. Please try again later.');
                setLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1536) setCardsPerPage(4);
            else if (width >= 1280) setCardsPerPage(3);
            else if (width >= 1024) setCardsPerPage(3);
            else if (width >= 768) setCardsPerPage(2);
            else setCardsPerPage(1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const indexOfLastCard = active * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const renderPageNumbers = () => {
        const pages = [];

        // Function to determine if a page is active
        const isActivePage = (page) => page === active;

        // First Page Button with conditional styling
        pages.push(
            <IconButton
                key={1}
                className={`gap-2 rounded-full ${isActivePage(1) ? 'bg-black text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`} // Active vs. inactive
                {...getItemProps(1)}
            >
                1
            </IconButton>
        );

        // Add left ellipsis if the active page is more than 2
        if (active > 2) {
            pages.push(
                <span
                    key='left-dots'
                    className='mx-2 text-gray-400' // Color for ellipsis
                >
                    ...
                </span>
            );
        }

        // Add active page button if it's not the first or last page
        if (active > 1 && active < totalPages) {
            pages.push(
                <IconButton
                    key={active}
                    className='rounded-full bg-black text-white hover:bg-green-600' // Active page styling
                    {...getItemProps(active)}
                >
                    {active}
                </IconButton>
            );
        }

        // Add right ellipsis if the active page is less than totalPages - 1
        if (active < totalPages - 1) {
            pages.push(
                <span
                    key='right-dots'
                    className='mx-2 text-gray-400' // Color for ellipsis
                >
                    ...
                </span>
            );
        }

        // Last Page Button with conditional styling
        pages.push(
            <IconButton
                key={totalPages}
                className={`rounded-full ${isActivePage(totalPages) ? 'bg-black text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`} // Active vs. inactive
                {...getItemProps(totalPages)}
            >
                {totalPages}
            </IconButton>
        );

        return pages;
    };

    return (
        <section id='projects' className='h-full w-full bg-secondary p-4 lg:p-10'>
            <div id='projects-container' className='flex h-full w-full flex-col justify-between gap-4'>
                <header id='projects-header' className='text-center text-primary'>
                    <h1 id='projects-page-title' className='text-3xl font-bold'>Projects</h1>
                    <p id='projects-page-desc' className='text-xl'>Recent Works</p>
                </header>

                {loading ? (
                    <Loader className='mx-auto' />
                ) : error ? (
                    <div className='error-message mx-auto rounded-full bg-red-800 p-5 text-2xl text-white'>{error}</div>
                ) : (
                    <div id='cards-container' className='flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row'>
                        {projects.slice(indexOfFirstCard, indexOfLastCard).map((project, index) => (
                            <article key={index} id='card'>
                                <img src={project.imgUrl} alt={`${project.name} project`} className='h-[50%] w-full transform object-fill transition-transform duration-300 group-hover:scale-105' />
                                <div className='h-[50%] w-full p-6 text-white'>
                                    <h2 className='mb-2 text-2xl font-semibold'>{project.name}</h2>
                                    <p className='mb-4 text-sm'>{project.description}</p>
                                    <a href={project.siteLink} target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>View Demo</a>
                                </div>
                                <div id='absolute' className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    <h3 className='mb-2 text-xl font-bold'>{project.name}</h3>
                                    <p className='text-sm'>{project.description}</p>
                                    <a href={project.siteLink} target='_blank' rel='noopener noreferrer' className='mt-4 rounded-full bg-primary px-4 py-2 transition-all duration-300 hover:bg-blue-800'>Visit</a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {!loading && !error && (
                    <div id='pagination' className='mt-8 flex items-center justify-center gap-4'>
                        <Button
                            id='pagination-btns'
                            variant='text'
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Prev
                        </Button>

                        <div id='pagination-pages-btns' className='flex items-center gap-2 text-white'>
                            {renderPageNumbers()}
                        </div>

                        <Button
                            id='pagination-btns'
                            variant='text'
                            onClick={next}
                            disabled={active === totalPages}
                        >
                            Next <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;