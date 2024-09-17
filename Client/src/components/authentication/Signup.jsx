import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signUp(email, password);
            navigate("/admin");
        } catch (err) {
            toast.error(err.message); // Show error using React Hot Toast
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="signUp" className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h1 className="mb-4 text-2xl font-semibold text-gray-900">Sign Up</h1>
                <p className="mb-6 text-gray-600">Enter your details to register.</p>

                <form onSubmit={handleSubmit} autoComplete="on">
                    <div className="mb-4">
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                            Your Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                            autoComplete="email"
                            aria-describedby="email-helper"
                        />
                        <p id="email-helper" className="mt-1 text-xs text-gray-500">
                            We'll never share your email with anyone else.
                        </p>
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
                            autoComplete="new-password"
                            aria-describedby="password-helper"
                        />
                        <p id="password-helper" className="mt-1 text-xs text-gray-500">
                            Choose a strong password for better security.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 px-4 rounded-md text-white font-semibold ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500'}`}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        to="/login"
                        className="text-sm font-medium text-blue-600 hover:underline"
                    >
                        Already have an account? Log In
                    </Link>
                </div>
            </div>

            {/* Toaster for displaying toast notifications */}
            <Toaster position="top-right" reverseOrder={false} />
        </section>
    );
};

export default Signup;