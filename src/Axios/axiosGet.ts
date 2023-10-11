import {AxiosError} from 'axios';
import axios from "./AxiosConfig";
import toast from 'react-hot-toast';
import cardComponent from "../Components/Card/CardComponent";

export const getClothes = async () => {
    try {
        const responseMenPromise = axios.get("/products/category/men's clothing");
        const responseWomenPromise = axios.get("/products/category/women's clothing");
        const [responseMenData, responseWomenData] = await toast.promise(
            Promise.all([responseMenPromise, responseWomenPromise]),
            {
                loading: 'Loading',
                success: 'Got the data',
                error: 'Error when fetching',
            }, {
                id: 'PRODUCTS_LOADING'
            }
        );
        return [...responseMenData.data, ...responseWomenData.data];
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error(axiosError, "error");
        const defaultMessage = axiosError.message;
        const {status, statusText} = axiosError.response ? axiosError.response : {
            status: 500,
            statusText: 'Internal Server Error'
        };
        toast.error(`${status} ${statusText} ${defaultMessage}`, {
            id: 'PRODUCTS_ERROR'
        });
    }
    return [];
}

export const getClothesById = async (id: number) => {
    try {
        const response = await axios.get(`/clothes/${id}`);
        return response.data
    } catch (error) {
        console.error(error, "error")
    }
}