/*
 * @Author: Lucifer
 * @Data: Do not edit
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-09-10 17:46:05
 * @Description: 
 */
import { BASE_URL, axiosInstance } from "../config/HeaderInstance";

import { DataContainer } from "../utils/InterfaceClass";
import { ProjectInfo } from "../interface/ProjectInterface";

async function createPro(projectName: string, projectDesc: string): Promise<DataContainer<any>> {
    let response: any = await axiosInstance.post(`${BASE_URL}/project/create`, {
        project_name: projectName,
        project_desc: projectDesc
    });

    return new DataContainer(response.data.code, response.data.msg, response.data.data);
}

async function getProjectInfo(): Promise<DataContainer<ProjectInfo>> {
    let response: any = await axiosInstance.get(`${BASE_URL}/project/creat/info`);

    return new DataContainer(response.data.code, response.data.msg, response.data.data);
}

async function delPro(projectId: number): Promise<DataContainer<any>> {
    let response: any = await axiosInstance.delete(`${BASE_URL}/project/delete/${projectId}`);

    return new DataContainer(response.data.code, response.data.msg, response.data.data);
}

async function modifyPro(projectId: number, projectName: string, projectDesc?: string): Promise<DataContainer<any>> {
    let response: any = await axiosInstance.put(`${BASE_URL}/project/modify`, {
        project_id: projectId,
        project_name: projectName,
        project_desc: projectDesc
    });

    return new DataContainer(response.data.code, response.data.msg, response.data.data);
}

export {
    createPro,
    delPro,
    modifyPro,
    getProjectInfo
}