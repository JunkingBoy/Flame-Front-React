import { BASE_URL, axiosInstance, axiosUpData } from "../config/HeaderInstance";
import { DataContainer } from "../utils/InterfaceClass";

async function getTemplate(type: string) {
    return await axiosInstance.get(`${BASE_URL}/downloadcase_template`, {
        params: {
            type: type
        }
    });
}

async function pushFile(file: File): Promise<DataContainer<any>> {
    let formData = new FormData();
    formData.append('excelFile', file);

    let response: any = await axiosUpData.post(`${BASE_URL}/uploadcase_excel`, formData);

    let retData: DataContainer<any> = new DataContainer(response.data.code, response.data.msg, response.data.data);

    return retData;
}

export {
    getTemplate,
    pushFile
}