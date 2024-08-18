import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("sam@gmail.com");
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/admin");
        } catch (err) {
            setError(err.message);
        }
    };

    return <section id="logIn" className="mx-auto flex h-[92.3vh] items-center justify-center">
        <div id="logIn-container" className="container flex items-center justify-center w-full h-full mx-auto">
            {error && <div className="alert alert-error">{error}</div>}

            <div className="relative flex flex-col items-center justify-center w-1/2 h-full gap-3 text-gray-700 shadow-none rounded-xl bg-clip-border">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Log In
                </h4>
                <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Nice to meet you! Enter your details to sign In.
                </p>
                <form className="w-full mt-5" onSubmit={handleSubmit} autoComplete="on">
                    <div className="flex flex-col gap-6 mb-1">
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Your Email
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="peer h-full w-full rounded-md border border-blue-gray-200 !border-t-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:!border-t-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                autoComplete="email"
                            />
                        </div>
                        <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Password
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                type="password"
                                placeholder="********"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="peer h-full w-full rounded-md border border-blue-gray-200 !border-t-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:!border-t-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="inline-block w-full select-none rounded-lg bg-gray-900 px-7 py-3.5 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md transition-all hover:bg-gray-800 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Log In
                    </button>
                </form>
                <div className="flex justify-center w-full mt-5">
                    <Link
                        to="/signUp"
                        className="hidden font-sans text-sm font-semibold text-blue-gray-900 hover:text-blue-gray-700">
                        Don't have an account? Sign Up
                    </Link>
                </div>
            </div>
        </div>
    </section>
};

export default Login;