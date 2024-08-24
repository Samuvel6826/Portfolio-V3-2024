import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdDownload } from "react-icons/io";
import ResumePdf from '../../../assets/Resume/Samuvel-Resume.pdf';
import ResumePng from '../../../assets/Resume/Samuvel-Resume.png';
import Loader from '../../common/Loader'; // Import the Loader component

const menuItems = [
    { title: "Download as PDF", description: ResumePdf },
    { title: "Download as PNG", description: ResumePng },
];

const CustomMenuList = ({ handleDownloadClick }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleConfirmDownload = () => {
        if (selectedFile && typeof handleDownloadClick === 'function') {
            handleDownloadClick(selectedFile);
        }
        setDialogOpen(false);
    };

    const handleCancelDownload = () => setDialogOpen(false);

    const handleImageLoad = () => {
        setLoading(false); // Set loading to false when image is loaded
    };

    return (
        <div className="relative flex h-full w-full flex-col gap-4 p-4">
            <div className="relative flex items-center justify-center bg-white p-4">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                        <Loader /> {/* Use the imported Loader component */}
                    </div>
                )}
                <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
                    <img
                        src={ResumePng}
                        alt="Resume Thumbnail"
                        className={`h-full w-full object-cover ${loading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={handleImageLoad}
                        onError={() => setLoading(false)} // Hide loader if image fails to load
                    />
                </a>
            </div>
            <ul className="m-0 flex w-full flex-col gap-2 bg-white p-4 text-xl">
                {menuItems.map(({ title, description }) => (
                    <li key={title}>
                        <button
                            onClick={() => {
                                setSelectedFile(description);
                                setDialogOpen(true);
                            }}
                            className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-left text-black transition-colors duration-200 hover:bg-gray-400"
                        >
                            <IoMdDownload className="text-xl" />
                            {title}
                        </button>
                    </li>
                ))}
            </ul>

            {dialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center text-black">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6">
                        <h3 className="text-lg font-semibold">Confirm Download</h3>
                        <p className="my-4">Are you sure you want to download this file?</p>
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={handleConfirmDownload}
                                className="rounded bg-green-500 px-4 py-2 text-white"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={handleCancelDownload}
                                className="rounded bg-red-500 px-4 py-2 text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

CustomMenuList.propTypes = {
    handleDownloadClick: PropTypes.func.isRequired,
};

export default CustomMenuList;