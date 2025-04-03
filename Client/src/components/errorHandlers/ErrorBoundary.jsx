import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null,
        errorDetails: null,
        copied: false,
        timestamp: null,
    };

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            timestamp: dayjs().format('DD/MM/YYYY, hh:mm:ss A'),
        };
    }

    componentDidCatch(error, errorInfo) {
        // Extract detailed error information
        const errorDetails = this.parseErrorDetails(error, errorInfo);
        this.setState({ error, errorInfo, errorDetails });

        // Optional: Send to error tracking service
        this.logErrorToService(error, errorInfo, errorDetails);
    }

    logErrorToService(error, errorInfo, errorDetails) {
        // Implement your error logging logic here
        console.error('Error logged:', {
            error: error?.toString(),
            componentStack: errorInfo?.componentStack,
            details: errorDetails,
            timestamp: this.state.timestamp
        });
    }

    // Error Boundary Component...

    parseErrorDetails(error, errorInfo) {
        try {
            const errorMessage = error.toString();
            let details = {
                type: null,
                fileName: null,
                filePath: null,
                line: null,
                column: null,
                importedModule: null,
                missingExport: null,
                additionalInfo: null
            };

            // Determine error type and parse accordingly
            if (errorMessage.includes('does not provide an export')) {
                details = this.parseModuleExportError(errorMessage, errorInfo);
            } else if (errorMessage.includes('Cannot find module')) {
                details = this.parseModuleNotFoundError(errorMessage, errorInfo);
            } else if (errorMessage.includes('is not defined')) {
                details = this.parseReferenceError(errorMessage, errorInfo);
            } else {
                details = this.parseGenericError(error, errorInfo);
            }

            // Enhanced stack trace parsing for user-defined code
            if (errorInfo?.componentStack) {
                const userCodeFrame = errorInfo.componentStack
                    .split('\n')
                    .find(frame => frame.includes('/src/') && !frame.includes('node_modules'));

                if (userCodeFrame) {
                    const match = userCodeFrame.match(/\((.*?):(\d+):(\d+)\)|at\s(.*?):(\d+):(\d+)/);
                    if (match) {
                        details.filePath = match[1] || match[4];
                        details.fileName = details.filePath?.split('/').pop();
                        details.line = match[2] || match[5];
                        details.column = match[3] || match[6];
                    }
                }
            }

            return details;
        } catch (parseError) {
            console.error('Error parsing stack trace:', parseError);
            return {
                type: 'ParseError',
                additionalInfo: 'Failed to parse error details'
            };
        }
    }

    parseModuleExportError(errorMessage, errorInfo) {
        const details = {
            type: 'ModuleExportError',
            fileName: null,
            filePath: null,
            line: null,
            column: null,
            importedModule: null,
            missingExport: null
        };

        // Extract module path and missing export
        const moduleMatch = errorMessage.match(/'([^']+)'/g);
        if (moduleMatch && moduleMatch.length >= 1) {
            details.importedModule = moduleMatch[0].replace(/'/g, '');
            if (moduleMatch.length >= 2) {
                details.missingExport = moduleMatch[1].replace(/'/g, '');
            }
        }

        // Extract location information (e.g., "at Navbar.jsx:3:10")
        const locationMatch = errorMessage.match(/(?:at\s)?([^:]+):(\d+):(\d+)/);
        if (locationMatch) {
            details.filePath = locationMatch[1];
            details.fileName = details.filePath.split('/').pop();
            details.line = locationMatch[2];
            details.column = locationMatch[3];
        }

        return details;
    }

    parseModuleNotFoundError(errorMessage, errorInfo) {
        return {
            type: 'ModuleNotFoundError',
            fileName: errorMessage.match(/Cannot find module '([^']+)'/)?.[1],
            additionalInfo: 'Module not found in project dependencies'
        };
    }

    parseReferenceError(errorMessage, errorInfo) {
        return {
            type: 'ReferenceError',
            additionalInfo: errorMessage,
            fileName: this.extractFileNameFromStack(errorInfo?.componentStack)
        };
    }

    parseGenericError(error, errorInfo) {
        return {
            type: 'RuntimeError',
            additionalInfo: error?.toString(),
            fileName: this.extractFileNameFromStack(errorInfo?.componentStack)
        };
    }

    extractFileNameFromStack(stack) {
        if (!stack) return null;
        const userCodeFrame = stack.split('\n').find(frame =>
            frame.includes('/src/') && !frame.includes('node_modules')
        );
        return userCodeFrame?.match(/\(([^)]+)\)/)?.[1]?.split('/').pop() || null;
    }

    copyErrorDetails = async () => {
        try {
            const { error, errorInfo, errorDetails, timestamp } = this.state;
            const errorText = `
Application Error Report
-----------------------
Timestamp: ${timestamp}
Error Type: ${errorDetails?.type || 'Unknown'}
Error: ${error?.toString()}

${errorDetails?.type === 'ModuleExportError' ? `
Module: ${errorDetails.importedModule}
Missing Export: ${errorDetails.missingExport}
File: ${errorDetails.fileName}
Location: Line ${errorDetails.line}, Column ${errorDetails.column}
` : ''}

${errorDetails?.additionalInfo ? `Additional Info: ${errorDetails.additionalInfo}` : ''}

Component Stack:
${errorInfo?.componentStack || 'No stack trace available'}

Please include this information when reporting the issue.
            `.trim();

            await navigator.clipboard.writeText(errorText);
            this.setState({ copied: true });
            setTimeout(() => this.setState({ copied: false }), 2000);
        } catch (err) {
            console.error('Failed to copy error details:', err);
        }
    };

    renderErrorDetails() {
        const { errorDetails } = this.state;
        if (!errorDetails) return null;

        return (
            <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                    <h3 className="mb-1 text-sm font-medium text-gray-500">Error Message</h3>
                    <div className="font-mono rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm text-red-800">
                        {this.state.error?.toString() || 'Unknown Error'}
                    </div>
                </div>

                {errorDetails?.type === 'ModuleExportError' && (
                    <div className="px-6 py-4">
                        <h3 className="mb-1 text-sm font-medium text-gray-500">Import Error Details</h3>
                        <div className="font-mono rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm text-red-800">
                            <div>Module: {errorDetails.importedModule}</div>
                            <div>Missing Export: {errorDetails.missingExport}</div>
                            <div>File: {errorDetails.fileName}</div>
                            {errorDetails.line && (
                                <div>Location: Line {errorDetails.line}, Column {errorDetails.column}</div>
                            )}
                        </div>
                    </div>
                )}

                {errorDetails?.additionalInfo && (
                    <div className="px-6 py-4">
                        <h3 className="mb-1 text-sm font-medium text-gray-500">Additional Information</h3>
                        <div className="font-mono rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm text-red-800">
                            {errorDetails.additionalInfo}
                        </div>
                    </div>
                )}

                <div className="px-6 py-4">
                    <h3 className="mb-1 text-sm font-medium text-gray-500">Component Stack</h3>
                    <pre className="font-mono max-h-96 overflow-auto whitespace-pre-wrap rounded-lg border border-gray-100 bg-gray-50 p-3 text-sm text-red-800">
                        {this.state.errorInfo?.componentStack || 'No stack trace available'}
                    </pre>
                </div>
            </div>
        );
    }

    render() {
        if (!this.state.hasError) return this.props.children;

        return (
            <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
                <header className="border-b border-red-100 bg-red-50 px-4 py-3">
                    <div className="mx-auto flex max-w-6xl items-center justify-between">
                        <div className="flex items-center gap-2 text-red-700">
                            <span className="sr-only">Error Indicator</span>
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span className="font-medium">Error Status</span>
                        </div>
                        <div className="text-sm text-red-600">{this.state.timestamp}</div>
                    </div>
                </header>

                <main className="mx-auto max-w-6xl px-4 py-6">
                    <div className="text-center">
                        <h1 className="mb-4 text-3xl font-bold text-gray-900">An Unexpected Error Occurred</h1>
                        <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-600">
                            You can try refreshing the page or returning to the dashboard. The issue has been logged for review.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white shadow-sm hover:bg-blue-700 focus:outline-none"
                                aria-label="Refresh the page"
                            >
                                <span className="mr-2 rotate-90">↻</span> Refresh Page
                            </button>
                            <button
                                onClick={() => (window.location.href = '/dashboard')}
                                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
                                aria-label="Return to the dashboard"
                            >
                                <span className="mr-2">←</span> Return to Dashboard
                            </button>
                        </div>
                    </div>

                    <section className="mt-6 rounded-lg border border-gray-200 bg-white shadow-sm">
                        <header className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">Technical Details</h2>
                            <button
                                onClick={this.copyErrorDetails}
                                className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 focus:outline-none"
                                aria-label="Copy error details to clipboard"
                            >
                                {this.state.copied ? (
                                    <span className="flex items-center gap-2 text-green-600">
                                        ✓ Copied to Clipboard
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        📋 Copy Error Details
                                    </span>
                                )}
                            </button>
                        </header>

                        {this.renderErrorDetails()}
                    </section>

                    <footer className="mt-8 text-center text-gray-600">
                        <p>Need assistance? Contact us at <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a></p>
                    </footer>
                </main>
            </div>
        );
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;