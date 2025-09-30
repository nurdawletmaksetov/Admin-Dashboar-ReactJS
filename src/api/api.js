import axios from "axios";

export const api = axios.create({
    baseURL: "https://premium-counties-moment-poet.trycloudflare.com/api/v1",
    headers: {
        Accept: "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
});
