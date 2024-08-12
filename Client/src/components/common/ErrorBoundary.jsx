import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = (error, errorInfo) => {
            console.error('Error caught by error boundary:', error, errorInfo);
            setHasError(true);
        };

        const errorListener = (event) => {
            handleError(event.error, event.errorInfo);
        };

        window.addEventListener('error', errorListener);
        window.addEventListener('unhandledrejection', errorListener);

        return () => {
            window.removeEventListener('error', errorListener);
            window.removeEventListener('unhandledrejection', errorListener);
        };
    }, []);

    if (hasError) {
        return <h1>Something went wrong in this particular component. Please refresh the page or check the code.</h1>;
    }

    return children;
};

export default ErrorBoundary;