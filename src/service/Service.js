/* eslint-disable indent */
import axios from "axios";

export const baseURL = "https://risetechapi.emredag.com.tr/";

export const fetchPriority = () => {
    const data = axios.get(baseURL);
    return data;
};