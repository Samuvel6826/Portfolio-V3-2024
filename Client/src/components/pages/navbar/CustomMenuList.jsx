import React, { useState } from 'react';
import { IoMdDownload, IoMdClose } from "react-icons/io";
import { FaFilePdf, FaFileImage } from "react-icons/fa";
import ResumePdf from '../../../assets/Resume/Samuvel-Resume.pdf';
import ResumePng from '../../../assets/Resume/Samuvel-Resume.png';

const menuItems = [
    { title: "Download as PDF", description: ResumePdf, icon: FaFilePdf },
    { title: "Download as PNG", description: ResumePng, icon: FaFileImage },
];

const CustomMenuList = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [downloadStarted, setDownloadStarted] = useState(false);

    const handleDownload = (file) => {
        setSelectedFile(file);
        setDialogOpen(true);
        setDownloadStarted(false);
    };

    const confirmDownload = () => {
        setDownloadStarted(true);
        setTimeout(() => {
            setDialogOpen(false);
            setDownloadStarted(false);
        }, 2000);
    };

    return (
        <div className="mx-auto flex max-w-md flex-col gap-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6 shadow-lg" data-aos="flip-down">
            <div className="rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-xl">
                <a href={ResumePdf} target="_blank" rel="noopener noreferrer" className="group relative block">
                    <img
                        src={ResumePng}
                        alt="Resume Thumbnail"
                        className="h-auto w-full rounded border-2 border-gray-300 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30">
                        <span className="font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">View Resume</span>
                    </div>
                </a>
            </div>
            <ul className="flex flex-col gap-3">
                {menuItems.map(({ title, description, icon: Icon }) => (
                    <li key={title}>
                        <button
                            onClick={() => handleDownload(description)}
                            className="group flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-blue-600 shadow-md transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                        >
                            <span className="flex items-center gap-3">
                                <Icon className="text-2xl" />
                                <span className="text-xl font-medium">{title}</span>
                            </span>
                            <IoMdDownload className="text-2xl" />
                        </button>
                    </li>
                ))}
            </ul>

            {dialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-lg transition-opacity duration-300">
                    <div className="relative w-full max-w-xs scale-100 transform rounded-xl bg-white p-6 shadow-2xl transition-transform duration-300 hover:scale-105 sm:max-w-sm md:max-w-md md:p-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setDialogOpen(false)}
                            className="absolute right-3 top-3 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            aria-label="Close modal"
                        >
                            <IoMdClose size={20} className="sm:h-6 sm:w-6" />
                        </button>

                        {/* Header */}
                        <h3 className="mb-4 text-center text-xl font-bold text-gray-900 md:text-2xl">
                            Confirm Download
                        </h3>

                        {/* Description */}
                        <p className="mb-6 text-center text-sm text-gray-600 md:text-base">
                            Are you sure you want to download this file?
                        </p>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-2 sm:gap-4">
                            <button
                                onClick={() => setDialogOpen(false)}
                                className="rounded-lg bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 md:text-base"
                            >
                                Cancel
                            </button>
                            <a
                                href={selectedFile}
                                download
                                onClick={confirmDownload}
                                className={`px-3 py-2 rounded-lg no-underline text-inherit text-white visited:text-white hover:no-underline hover:text-white text-center text-sm md:text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${downloadStarted ? 'bg-blue-400 cursor-not-allowed opacity-60' : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                                    }`}
                                disabled={downloadStarted}
                            >
                                <span className="whitespace-nowrap">
                                    {downloadStarted ? 'Downloading...' : 'Confirm'}
                                </span>
                            </a>
                        </div>

                        {/* Feedback Message */}
                        {downloadStarted && (
                            <div className="mt-4 animate-pulse text-center text-sm text-green-600 md:text-base">
                                Download started! This window will close shortly.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomMenuList;