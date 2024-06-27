import { BASE_URL, axiosInstance } from "../config/HeaderInstance";

import { DataContainer } from "../utils/InterfaceClass";

async function createPro(projectName: string, projectDesc: string): Promise<DataContainer<any>> {
    let response: any = await axiosInstance.post(`${BASE_URL}/project/create`, {
        project_name: projectName,
        project_desc: projectDesc
    });

    return new DataContainer(response.data.code, response.data.msg, response.data.data);
}

export {
    createPro
}