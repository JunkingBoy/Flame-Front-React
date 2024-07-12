/*
 * @Author: Lucifer
 * @Data: Do not edit
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-07-12 13:44:15
 * @Description: 
 */
import { BASE_URL, axiosInstance, axiosUpData } from "../config/HeaderInstance";
import { DataContainer } from "../utils/InterfaceClass";

interface CaseResponseType {
    code: number;
    message: string;
    data?: any;
}

async function getTemplate(type: string): Promise<void> {
    try {
        let response = await axiosInstance.get(`${BASE_URL}/case/parse/download/case_template/${type}`, {
            responseType: 'blob', // 直接在config中明确指定responseType
        });

        if (response.status === 200) {
            // 获取到Blob对象后直接使用，不额外包装在数组中
            let url = window.URL.createObjectURL(response.data);
            let link = document.createElement('a');
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } else {
            console.error(`Download failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during file download:', error);
        if ((error as any).response && (error as any).response.data) {
            const errorData = (error as any).response.data as CaseResponseType;
            console.error('Server responded with:', errorData.message);
        }
    }
}

async function pushFile(file: File, type: string, projectId: string, errOrAll?: string): Promise<DataContainer<any>> {
    let formData = new FormData();
    formData.append('file', file);

    let headers = {
        'Content-Type': 'multipart/form-data',
        'type': type,
        'projectId': projectId,
        'errOrAll': '0'
    }

    let response: any = await axiosUpData.post(`${BASE_URL}/case/parse/upload`, formData, {headers});

    let retData: DataContainer<any> = new DataContainer(response.data.code, response.data.msg, response.data.data);

    return retData;
}

export {
    getTemplate,
    pushFile
}