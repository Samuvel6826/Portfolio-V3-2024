// components/pages/authentication/AdminLogin.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthHook } from "../../contexts/providers/hooks/useAuthHook";
import { toast } from 'react-hot-toast';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, loading, user, error } = useAuthHook();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect if user is already logged in
        if (user) {
            navigate("/admin/projects");
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        // Log in and await the result
        const loggedInUser = await logIn(email, password);
        if (loggedInUser) {
            // If login is successful, redirect to admin dashboard
            navigate("/admin/projects");
        }
    };

    return (
        <section id="logIn" className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-4 text-2xl font-semibold text-gray-900">Admin Log In</h1>
                <p className="mb-6 text-gray-600">Enter your credentials to access the admin panel.</p>
                <form onSubmit={handleSubmit} autoComplete="on">
                    <div className="mb-4">
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                            Admin Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                            autoComplete="current-password"
                            required
                            minLength={6}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full rounded-md px-4 py-3 font-semibold text-white transition-colors
                            ${loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Authenticating...
                            </span>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AdminLogin;