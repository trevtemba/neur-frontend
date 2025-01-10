import axios from "axios";

const prodURL="https://neur-backend-production.up.railway.app"
const localURL="http://localhost:8080"

const api = axios.create({
    baseURL: prodURL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

export default api;