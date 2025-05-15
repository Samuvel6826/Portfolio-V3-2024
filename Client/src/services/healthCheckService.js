import axios from 'axios';

/**
 * Health Check Service
 * Pings the server's health check endpoint to ensure it's running correctly
 * This is used by Render.com to determine if the application is healthy
 */
const healthCheckService = {
    /**
     * Ping the health check endpoint
     * @returns {Promise} A promise that resolves with the health check response
     */
    pingHealthCheck: async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_HOST_URL}/health-check`);
            console.log('Health check successful:', response.data);
            return response.data;
        } catch (error) {
            console.error('Health check failed:', error.message);
            throw error;
        }
    }
};

export default healthCheckService;
