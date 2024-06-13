import axios, {AxiosInstance} from "axios";

const BASE_URL = 'http://127.0.0.1:8000';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
    },
});

// 设置拦截器
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

export {BASE_URL, axiosInstance};