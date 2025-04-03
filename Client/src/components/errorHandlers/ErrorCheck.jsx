import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary
import NotFoundPageError from './NotFoundPageError'; // Import ErrorFallback
import NotAuthorized from './NotAuthorized'; // Import NotAuthorized

const ErrorCheck = () => {
    const [error, setError] = useState(null);
    const [showError, setShowError] = useState(false);
    const [showNotAuthorized, setShowNotAuthorized] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

    // Handle button to trigger error
    const handleError = () => {
        setShowError(true); // Show error state
        setShowNotAuthorized(false); // Hide NotAuthorized screen
        setShowFallback(false); // Hide ErrorFallback screen
    };

    // Handle button to trigger Not Authorized screen
    const handleNotAuthorized = () => {
        setShowNotAuthorized(true);
        setShowError(false);
        setShowFallback(false);
    };

    // Handle button to trigger ErrorFallback (simulate an error)
    const handleFallback = () => {
        setShowFallback(true);
        setShowError(false);
        setShowNotAuthorized(false);
    };

    // Simulate a component that throws an error
    const ErrorProneComponent = () => {
        if (showError) {
            throw new Error("This is a test error triggered by Error Boundary"); // Manually throw error
        }
        return null; // Nothing rendered if no error
    };

    return (
        <div className="p-6">
            <div className="mx-auto flex w-full flex-col items-center justify-center rounded-lg bg-blue-gray-300 p-6 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold">Error Handlers</h2>

                <div>
                    {/* Buttons to trigger different screens */}
                    <button
                        className="mb-4 mr-4 rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
                        onClick={handleError}
                    >
                        Trigger Error (Error Boundary)
                    </button>

                    <button
                        className="mb-4 mr-4 rounded-md bg-yellow-500 px-6 py-3 text-white hover:bg-yellow-600"
                        onClick={handleNotAuthorized}
                    >
                        Trigger Not Authorized
                    </button>

                    <button
                        className="mb-4 rounded-md bg-green-500 px-6 py-3 text-white hover:bg-green-600"
                        onClick={handleFallback}
                    >
                        Trigger Error Fallback
                    </button>
                </div>

                {/* ErrorBoundary wraps ErrorProneComponent to handle errors */}
                <ErrorBoundary FallbackComponent={NotFoundPageError}>
                    {showError && <ErrorProneComponent />}
                    {showNotAuthorized && <NotAuthorized />}
                    {showFallback && (
                        <NotFoundPageError />
                    )}
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default ErrorCheck;