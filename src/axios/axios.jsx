import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:7051/api",
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.log('ERROR SETTING HEADER');
        }
        return config;
    },
    error => Promise.reject(error)
);

export default instance;
