import axios, {AxiosInstance} from "axios";

const BASE_URL = 'http://127.0.0.1:8000';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
    },
});

export {BASE_URL, axiosInstance};