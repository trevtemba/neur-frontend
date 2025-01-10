import axios from "axios";

const prodURL="https://neur-rest-api-production.up.railway.app/"
const localURL="http://localhost:8080"

const api = axios.create({
    baseURL: localURL,
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