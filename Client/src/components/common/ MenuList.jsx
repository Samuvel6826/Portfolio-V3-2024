import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Menu, MenuHandler, MenuList as MaterialMenuList, MenuItem,
    Card, Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

const menuItems = [
    {
        title: "@material-tailwind/html",
        description: "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "@material-tailwind/react",
        description: "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Material Tailwind PRO",
        description: "A complete set of UI Elements for building faster websites in less time.",
    },
];

const CustomMenuList = ({ openMenu, toggleMenu }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Menu open={openMenu || isHovered} handler={toggleMenu} allowHover>
            {/* <MenuHandler>
                <button
                    onClick={toggleMenu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="flex items-center gap-3 rounded-full border border-primary bg-transparent px-4 py-2 text-base font-normal capitalize tracking-normal text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                    Technology
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu || isHovered ? "rotate-180" : "rotate-0"}`}
                    />
                </button>
            </MenuHandler> */}
            <MaterialMenuList
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
            >
                <Card
                    color="gray"
                    shadow={false}
                    className="col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4"
                >
                    <CursorArrowRaysIcon strokeWidth={1} className="h-10 w-10" />
                    <Typography className="mt-5 text-center" variant="h5">
                        Material Tailwind PRO
                    </Typography>
                </Card>
                <ul className="col-span-4 flex w-full flex-col gap-1">
                    {menuItems.map(({ title, description }) => (
                        <a href="#" key={title}>
                            <MenuItem>
                                <Typography variant="h6" color="blue-gray" className="mb-1">
                                    {title}
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    {description}
                                </Typography>
                            </MenuItem>
                        </a>
                    ))}
                </ul>
            </MaterialMenuList>
        </Menu>
    );
};

CustomMenuList.propTypes = {
    openMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default CustomMenuList;