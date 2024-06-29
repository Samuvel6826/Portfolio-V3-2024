import React, { useEffect } from 'react';

const ScrollToTopButton = () => {
    useEffect(() => {
        const scrollToTopButton = document.getElementById('scroll-to-top-btn-container');

        const scrollFunction = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return <>
        <div id="scroll-to-top-btn-container" className='hidden'>
            <button
                id="scroll-to-top-btn"
                onClick={topFunction}
                title="Go to top"
                className='fixed bottom-8 right-8 z-50 w-10 h-10 flex justify-center items-center bg-tertiary text-white text-xl leading-none rounded'
            >
                ^
            </button>
        </div>
    </>
};

export default ScrollToTopButton;


