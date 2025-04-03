import { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuthHook } from './hooks/useAuthHook';
import { ProjectContext } from '../ProjectsContext'

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { logout } = useAuthHook();

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: import.meta.env.VITE_SERVER_HOST_URL,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        instance.interceptors.request.use((config) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });

        return instance;
    }, []);

    const handleError = useCallback((err) => {
        const message = err.response?.data?.message || 'An unexpected error occurred.';
        setError(message);
        toast.error(message);
        console.error('API Error:', err.response?.data, err.message);
        if (err.response?.status === 401) {
            console.log('Unauthorized access detected. Logging out.');
            logout();
        }
    }, [logout]);

    const createProject = useCallback(async (projectData) => {
        setLoading(true);
        try {
            const res = await axiosInstance.post('/api/project', projectData);
            toast.success('Project created successfully');
            return res.data.newProject;
        } catch (err) {
            handleError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [axiosInstance, handleError]);

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axiosInstance.get('/api/project');
            setProjects(res.data);
        } catch (err) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    }, [axiosInstance, handleError]);

    const getProjectById = useCallback(async (projectID) => {
        setLoading(true);
        try {
            const res = await axiosInstance.get('/api/project/get', {
                params: { projectID }
            });
            return res.data;
        } catch (err) {
            handleError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [axiosInstance, handleError]);

    const updateProject = useCallback(async (projectID, projectData) => {
        setLoading(true);
        try {
            const res = await axiosInstance.put('/api/project', projectData, {
                params: { projectID }
            });
            toast.success('Project updated successfully');
            return res.data;
        } catch (err) {
            handleError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [axiosInstance, handleError]);

    const deleteProject = useCallback(async (projectID) => {
        setLoading(true);
        try {
            await axiosInstance.delete('/api/project', {
                params: { projectID }
            });
            toast.success('Project deleted successfully');
            // Refresh projects list after deletion
            await fetchProjects();
        } catch (err) {
            handleError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [axiosInstance, handleError, fetchProjects]);

    const value = useMemo(() => ({
        projects,
        loading,
        error,
        createProject,
        fetchProjects,
        getProjectById,
        updateProject,
        deleteProject
    }), [
        projects,
        loading,
        error,
        createProject,
        fetchProjects,
        getProjectById,
        updateProject,
        deleteProject
    ]);

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
}