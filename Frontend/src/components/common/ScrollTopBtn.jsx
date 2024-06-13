import React, { useState, useEffect } from 'react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Event listener for scroll position
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 100); // Adjust threshold as needed (e.g., 200)
    };

    // Event listener for click (optional for accessibility)
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Cleanup effect to prevent memory leaks

    return (

        <FloatButton.Group
            className={`fixed ${isVisible ? 'opacity-100' : 'hidden'
                }`}
            onClick={handleClick}
            aria-label="Scroll to Top"
            shape="circle"
            style={{
                right: 16,
            }}
        >
            <FloatButton.BackTop />
        </FloatButton.Group>

    );
};

export default ScrollToTopButton;
