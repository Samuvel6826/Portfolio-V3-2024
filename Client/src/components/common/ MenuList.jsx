import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Menu, MenuHandler, MenuList as MaterialMenuList, MenuItem,
    Card, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { IoMdDownload } from "react-icons/io";
import ResumePdf from '../../assets/Resume/Samuvel-Resume.pdf';
import ResumePng from '../../assets/Resume/Samuvel-Resume.png';

const menuItems = [
    { title: "Download as PDF", description: ResumePdf },
    { title: "Download as PNG", description: ResumePng },
];

const CustomMenuList = ({ openMenu, toggleMenu }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleDownloadClick = (file) => {
        setSelectedFile(file);
        setDialogOpen(true);
    };

    const handleConfirmDownload = () => {
        if (selectedFile) {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = selectedFile;
            link.download = selectedFile.split('/').pop(); // Extract file name from URL
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        setDialogOpen(false);
    };

    const handleCancelDownload = () => setDialogOpen(false);

    return (
        <>
            <Menu open={openMenu || isHovered} handler={toggleMenu} allowHover>
                <MenuHandler>
                    <button
                        onClick={toggleMenu}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        aria-expanded={openMenu || isHovered}
                        aria-label="Toggle Menu"
                        className="flex items-center gap-3 rounded-full border border-primary bg-transparent px-4 py-2 text-base font-normal capitalize tracking-normal text-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        Resume
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-4 w-4 transition-transform ${openMenu || isHovered ? "rotate-180" : "rotate-0"}`}
                        />
                    </button>
                </MenuHandler>
                <MaterialMenuList
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="hidden w-80 grid-cols-1 gap-1 lg:grid"
                >
                    <Card
                        color="gray"
                        shadow={false}
                        className="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 p-2"
                    >
                        <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
                            <img src={ResumePng} alt="Resume Thumbnail" className="h-full w-full rounded-lg" />
                        </a>
                    </Card>
                    <ul className="flex w-full flex-col gap-2 rounded-xl p-4 shadow-lg">
                        {menuItems.map(({ title, description }) => (
                            <li key={title}>
                                <a href={description} onClick={(e) => {
                                    e.preventDefault();
                                    handleDownloadClick(description);
                                }} download>
                                    <MenuItem className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-gray-100">
                                        <Typography variant="h6" color="blue-gray" className="flex-1">
                                            {title}
                                        </Typography>
                                        <IoMdDownload className="text-lg" />
                                    </MenuItem>
                                </a>
                            </li>
                        ))}
                    </ul>
                </MaterialMenuList>
            </Menu>

            <Dialog open={dialogOpen} handler={() => setDialogOpen(false)} size="sm">
                <DialogHeader>Confirm Download</DialogHeader>
                <DialogBody>
                    <Typography className="text-lg text-tertiary">Are you sure you want to download this file?</Typography>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={handleCancelDownload} className="mr-1">
                        Cancel
                    </Button>
                    <Button variant="gradient" color="blue" onClick={handleConfirmDownload}>
                        Confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

CustomMenuList.propTypes = {
    openMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default CustomMenuList;