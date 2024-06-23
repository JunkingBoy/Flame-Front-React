import { BASE_URL, axiosInstance } from "../config/HeaderInstance";
import { LoginResponse, RegisterResponse, UserBugInfoResponse, UserCarDataResponse } from "../interface/UserInterface";
import { ProgramReponse, ProgramBugDetailResponse } from "../interface/ProgramInterface";

async function login(username: string, password: string): Promise<LoginResponse> {
    let response: any = await axiosInstance.post(`${BASE_URL}/user/login`, {
        phone: username,
        password: password,
    });
    
    return response.data;
}

async function register(phone: number, password: string, confirmPassword: string): Promise<RegisterResponse> {
    let response: any = await axiosInstance.put(`${BASE_URL}/user/register`, {
        phone: phone,
        password: password,
        password_confirm: confirmPassword
    });

    return response.data;
}

async function getUserBugInfo(userId: number): Promise<UserBugInfoResponse> {
    let response: any = await axiosInstance.get(`${BASE_URL}/user`, {
        params: {
            userId: userId
        }
    });

    return response.data;
}

async function getUserProBugInfo(userId: number, programName?: string): Promise<ProgramReponse> {
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