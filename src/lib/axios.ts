import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-gateway-85z7.onrender.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            if (typeof window !== 'undefined') {
                const path = window.location.pathname;
                // Basic locale detection: assuming url starts with /vi/ or /en/
                // If not found, default to 'vi'
                const segments = path.split('/');
                const locale = (segments.length > 1 && (segments[1] === 'vi' || segments[1] === 'en')) ? segments[1] : 'vi';

                // Redirect to login
                window.location.href = `/${locale}/auth/login`;
            }
        }
        return Promise.reject(error);
    }
);

export default api;
