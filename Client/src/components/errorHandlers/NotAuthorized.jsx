import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import specific components from @material-tailwind/react
import {
    Button,
    Card,
    Typography,
    Input,
    Alert
} from "@material-tailwind/react";

import { FaUserLock } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";

const NotAuthorized = () => {
    const [expanded, setExpanded] = useState(false);
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Support request sent for:', email);
        setShowAlert(true);
        setEmail('');
        setExpanded(false);
        setTimeout(() => setShowAlert(false), 6000);
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
            <Card className="w-full max-w-md p-8 text-center shadow-lg">
                <FaUserLock className="mx-auto h-16 w-16 text-red-500" />
                <Typography variant="h4" className="mt-4 font-bold">
                    Access Denied
                </Typography>
                <FaExclamationTriangle className="mx-auto my-2 h-6 w-6 text-yellow-500" />
                <Typography className="mb-6 mt-4 text-gray-600">
                    You do not have permission to view this page. If you believe this is an error, please contact the administrator.
                </Typography>
                <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
                    <Button
                        className="flex items-center justify-center gap-2"
                        color="blue"
                        onClick={() => navigate('/login')}
                    >
                        <IoMdHome className="h-5 w-5" />
                        Go to Home
                    </Button>
                    <Button
                        className="flex items-center justify-center gap-2"
                        color="gray"
                        variant="outlined"
                        onClick={handleExpand}
                    >
                        <FaInfoCircle className="h-5 w-5" />
                        Request Access
                        <IoIosArrowDown
                            className={`h-5 w-5 transition-transform ${expanded ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </Button>
                </div>
                {expanded && (
                    <div className="mt-4 rounded-md bg-gray-100 p-4 text-left">
                        <Typography variant="h6" className="font-semibold">
                            Request Access
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Input
                                label="Your Email"
                                type="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                color="blue"
                                className="mb-4"
                            />
                            <Button type="submit" color="blue" className="w-full">
                                Submit Request
                            </Button>
                        </form>
                    </div>
                )}
            </Card>
            {showAlert && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 transform">
                    <Alert
                        color="green"
                        onClose={() => setShowAlert(false)}
                        className="w-full text-center"
                    >
                        Access request submitted successfully!
                    </Alert>
                </div>
            )}
        </div>
    );
}

export default NotAuthorized;