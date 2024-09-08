import { useEffect, useState } from 'react';
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link, Events, scrollSpy } from "react-scroll";

const ScrollToTopButton = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    // Show/Hide scroll-to-top button based on scroll position
    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
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
            behavior: 'smooth',
        });
    };

    // Handle active menu based on scroll event
    useEffect(() => {
        Events.scrollEvent.register('end', (to) => {
            setActiveMenu(to);
        });
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('end');
        };
    }, []);

    // Define the menu items
    const menuItems = [
        { id: 'home', icon: 'home', label: 'Home', offset: -68 },
        { id: 'about', icon: 'person', label: 'About', offset: -63 },
        { id: 'education', icon: 'school', label: 'Edu', offset: -63 },
        { id: 'skills', icon: 'workspace_premium', label: 'Skills', offset: -63 },
        { id: 'projects', icon: 'business_center', label: 'Works', offset: -63 },
        { id: 'contact', icon: 'phone_in_talk', label: 'Call', offset: -63 },
    ];

    return (
        <>
            <div
                id="scroll-to-top-btn-container"
                style={{ display: isVisible ? 'block' : 'none' }}
            >
                <div className="fixed bottom-12 right-8 z-50">
                    <SpeedDial>
                        <SpeedDialHandler className='cursor-pointer'>
                            <IconButton size="lg" className="rounded-full border-[1px] border-primary bg-tertiary">
                                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                            </IconButton>
                        </SpeedDialHandler>
                        <SpeedDialContent className='flex flex-col items-center justify-center rounded-full border-2 border-primary bg-tertiary p-2 text-primary shadow-md'>

                            {/* Map through the menu items */}
                            {menuItems.map(item => (
                                <SpeedDialAction key={item.id} className="flex h-16 w-16 flex-col items-center justify-center border-2 border-primary bg-tertiary text-center text-primary">
                                    <Link
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        offset={item.offset}
                                        duration={200}
                                        activeClass="active"  // Ensure react-scroll uses the active class
                                        className={` ${activeMenu === item.id ? 'active' : ''}`}
                                        onSetActive={() => setActiveMenu(item.id)} // Set active on scroll
                                    >
                                        <span className="material-symbols-outlined h-5 w-5">
                                            {item.icon}
                                        </span>
                                        <Typography className="text-xs font-normal">
                                            {item.label}
                                        </Typography>
                                    </Link>
                                </SpeedDialAction>
                            ))}

                            {/* Scroll to Top Action */}
                            <SpeedDialAction className="h-16 w-16 border-2 border-primary bg-tertiary p-2 text-center text-primary" onClick={topFunction}>
                                <span className="material-symbols-outlined h-5 w-5">
                                    keyboard_double_arrow_up
                                </span>
                                <Typography className="text-xs font-normal">
                                    Go
                                </Typography>
                            </SpeedDialAction>
                        </SpeedDialContent>
                    </SpeedDial>
                </div>
            </div>
        </>
    );
};

export default ScrollToTopButton;