import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state to display fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details
        console.error('Error caught by error boundary:', error, errorInfo);
        this.setState({ error, errorInfo });
    }

    handleReload = () => {
        window.location.reload(); // Reload the page
    };

    render() {
        if (this.state.hasError) {
            // Fallback UI with enhanced styles
            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
                    <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-16 w-16 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M12 18.5A1.5 1.5 0 1112 15a1.5 1.5 0 010 3.5z"
                                />
                            </svg>
                        </div>
                        <h1 className="mb-4 text-2xl font-bold">Oops! Something went wrong.</h1>
                        <p className="mb-6 text-gray-600">
                            An unexpected error occurred. We are working to fix it!
                        </p>
                        <details className="mb-6 rounded-md bg-gray-100 p-4 text-left">
                            <summary className="font-semibold">Technical Details</summary>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo ? this.state.errorInfo.componentStack : 'No additional details'}
                        </details>

                        <div className="space-x-4">
                            <button
                                onClick={this.handleReload}
                                className="rounded-md bg-blue-500 px-4 py-2 text-white shadow-md transition hover:bg-blue-600"
                            >
                                Reload Page
                            </button>
                            <a
                                href="/"
                                className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 shadow-md transition hover:bg-gray-300"
                            >
                                Go to Home
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        // When there's no error, render children as usual
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;