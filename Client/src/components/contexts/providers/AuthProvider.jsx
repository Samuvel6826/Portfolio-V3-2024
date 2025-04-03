// contexts/providers/AuthProvider.jsx

import { useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { AuthContext } from '../AuthContext'

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleError = useCallback((error) => {
        const message = error.message || 'An unexpected error occurred';
        setError(message);
        toast.error(message);  // Ensure the error is shown properly
    }, []);

    const logIn = useCallback(async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Logged in successfully!');
            return userCredential.user;  // Return the user on successful login
        } catch (error) {
            const errorMessage = {
                'auth/invalid-credential': 'Invalid email or password',
                'auth/wrong-password': 'Invalid password',
                'auth/user-not-found': 'No account found with this email',
                'auth/too-many-requests': 'Too many attempts. Try again later'
            }[error.code] || 'Login failed';

            toast.error(errorMessage);  // Show the error toast
            console.error("Auth error:", error.code, errorMessage);
        } finally {
            setLoading(false);  // Ensure loading state is updated
        }
    }, []);

    const logOut = useCallback(async () => {
        setLoading(true);
        try {
            await signOut(auth);
            toast.success('Logged out successfully!');
            setUser(null);
        } catch (error) {
            handleError(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, [handleError]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []);

    // Reset error when user changes
    useEffect(() => {
        setError(null);
    }, [user]);

    const value = useMemo(() => ({
        user,
        loading,
        error,
        logIn,
        logOut,
    }), [
        user,
        loading,
        error,
        logIn,
        logOut,
    ]);

    // Show loading state while initially checking auth state
    if (loading && !user) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}