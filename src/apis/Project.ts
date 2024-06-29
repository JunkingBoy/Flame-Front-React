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
    let response: any = await axiosInstance.get(`${BASE_URL}/project/user/case/all`);

    return new DataContainer(response.data.code, response.data.msg, response.data.data);
}

export {
    createPro,
    getProjectInfo
}