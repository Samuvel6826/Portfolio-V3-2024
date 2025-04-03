// components/routes/ProtectedRoute.jsx
import { useAuthHook } from '../contexts/providers/hooks/useAuthHook';
import PreLoader from '../pages/shared/preLoader/PreLoader';
import NotAuthorized from '../errorHandlers/NotAuthorized'; // Import NotAuthorized

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuthHook();

    if (loading) {
        return <PreLoader />;
    }

    // If no user or if the user lacks the required role
    if (!user) {
        return <NotAuthorized />;
    }

    return children;
};