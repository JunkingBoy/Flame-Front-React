import { BASE_URL, axiosInstance } from "../config/HeaderInstance";

async function getTemplate(type: string) {
    return await axiosInstance.get(`${BASE_URL}/downloadcase_template`, {
        params: {
            type: type
        }
    });
}