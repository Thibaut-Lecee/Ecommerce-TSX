import axios from "axios";
import {API_URL} from "../Constants/constants";

export const instanceAxios = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    }
});

instanceAxios.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem("user");
        if (user) {
            config.headers.Authorization = `Bearer ${user}`;
        }
        return config;
    },
    (error) => {
        console.error(error, "error", error.response);
        return Promise.reject(error);
    }
);

instanceAxios.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        console.error(error, "error", error.response);
        return Promise.reject(error);
    }
);

export default instanceAxios;