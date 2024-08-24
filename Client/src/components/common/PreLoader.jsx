// PreLoader.jsx
import React from 'react';
import './PreLoader.css';

const PreLoader = () => {
    return (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-primary">
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="animate-speeder absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-4 w-14">
                        <div className="animate-fazer1 absolute left-16 top-[-19px] h-1 w-7 rounded-[2px_10px_1px_0] bg-black"></div>
                        <div className="animate-fazer2 absolute left-16 top-1.5 h-1 w-7 rounded-[2px_10px_1px_0] bg-black"></div>
                        <div className="animate-fazer3 absolute left-16 top-2.5 h-1 w-7 rounded-[2px_10px_1px_0] bg-black"></div>
                        <div className="animate-fazer4 absolute left-16 top-3.5 h-1 w-7 rounded-[2px_10px_1px_0] bg-black"></div>
                    </div>
                    <div className="border-t-6 border-b-6 relative h-0 w-0 border-r-[100px] border-solid border-black">
                        <div className="absolute right-[-110px] top-[-16px] h-5 w-5 rounded-full bg-black"></div>
                        <div className="absolute right-[-98px] top-[-16px] h-0 w-0 border-b-[16px] border-r-[55px] border-solid border-black"></div>
                    </div>
                    <div className="absolute right-[-125px] top-[-15px] h-3 w-5 rotate-[-40deg] transform rounded-t-full bg-black">
                        <div className="absolute right-4 top-7 h-3 w-3 rotate-[40deg] transform rounded-tl-sm bg-black"></div>
                    </div>
                    <div className="absolute h-full w-full">
                        <div className="animate-lf absolute left-[200%] top-[20%] h-0.5 w-1/5 bg-black"></div>
                        <div className="animate-lf2 absolute left-[200%] top-[40%] h-0.5 w-1/5 bg-black"></div>
                        <div className="animate-lf3 absolute left-[200%] top-[60%] h-0.5 w-1/5 bg-black"></div>
                        <div className="animate-lf4 absolute left-[200%] top-[80%] h-0.5 w-1/5 bg-black"></div>
                    </div>
                </div>
                <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase text-white">
                    Redirecting
                </h1>
            </div>
        </div>
    );
};

export default PreLoader;