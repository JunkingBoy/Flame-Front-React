import { BASE_URL, axiosInstance } from "../config/HeaderInstance";
import { LoginData, RegisterData, UserProBugData, UserCarDataResponse } from "../interface/UserInterface";
import { ProgramBugDetailResponse, ProgramInfo } from "../interface/ProgramInterface";
import { DataContainer } from "../utils/InterfaceClass";

async function login(username: string, password: string): Promise<DataContainer<LoginData>> {
    let response: any = await axiosInstance.post(`${BASE_URL}/user/login`, {
        phone: username,
        password: password,
    });

    let retData: DataContainer<LoginData> = new DataContainer(response.data.code, response.data.msg, response.data.data);
    
    return retData;
}

async function register(phone: number, password: string, confirmPassword: string): Promise<DataContainer<RegisterData>> {
    let response: any = await axiosInstance.post(`${BASE_URL}/user/register`, {
        phone: phone,
        password: password,
        password_confirm: confirmPassword
    });

    let retData: DataContainer<RegisterData> = new DataContainer(response.data.code, response.data.msg, response.data.data);

    return retData;
}

async function getUserBugInfo(userId: number): Promise<DataContainer<UserProBugData>> {
    let response: any = await axiosInstance.get(`${BASE_URL}/user`, {
        params: {
            userId: userId
        }
    });

    return response.data;
}

async function getUserProBugInfo(userId: number, programName?: string): Promise<DataContainer<ProgramInfo>> {
    let params: any = {
        userId: userId,
        status: 1
    };

    if (programName !== undefined) {
        params.program = programName
    }

    let response: any = await axiosInstance.get(`${BASE_URL}/program/status`, {
        params
    });

    return response.data;
}

async function getUserCareerInfo(userId: number): Promise<UserCarDataResponse> {
    let response: any = await axiosInstance.get(`${BASE_URL}/userCareer`, {
        params: {
            userId: userId
        }
    });

    return response.data;
}

async function getUserProBugDetail(userId: number): Promise<ProgramBugDetailResponse> {
    let response: any = await axiosInstance.get(`${BASE_URL}/program/bug`, {
        params: {
            userId: userId
        }
    });

    return response.data;
}

export { login, register, getUserBugInfo, getUserProBugInfo, getUserCareerInfo, getUserProBugDetail }