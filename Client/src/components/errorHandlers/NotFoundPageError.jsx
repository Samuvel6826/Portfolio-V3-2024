import { useNavigate } from 'react-router-dom';

const NotFoundPageError = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
            <div className="w-full max-w-lg text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <h2 className="mt-8 text-2xl font-semibold text-gray-600">Page Not Found</h2>
                <p className="mt-4 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
                <div className="mt-8 space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="rounded-lg bg-gray-800 px-6 py-2 text-white transition-colors hover:bg-gray-700"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-500"
                    >
                        Home Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPageError;