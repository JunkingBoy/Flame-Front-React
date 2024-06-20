import { BASE_URL, axiosInstance } from "../config/HeaderInstance";
import { LoginResponse, RegisterResponse, UserBugInfoResponse, UserCarDataResponse } from "../interface/UserInterface";
import { ProgramReponse, ProgramBugDetailResponse } from "../interface/ProgramInterface";

async function login(username: string, password: string): Promise<LoginResponse> {
    // // 密钥初始化
    // await initEncryptionKey();
    // // 加密密码
    // let {ciphertext, iv} = await encryptData(password);

    // // 加密后数据转为base64
    // let encryptedPasswordBase64 = btoa(
    //     Array.from(new Uint8Array(ciphertext))
    //         .map(byte => String.fromCharCode(byte))
    //         .join('')
    // );

    // let ivBase64 = btoa(
    //     Array.from(new Uint8Array(iv))
    //         .map(byte => String.fromCharCode(byte))
    //         .join('')
    // );

    let response: any = await axiosInstance.post(`${BASE_URL}/user`, {
        username: username,
        encryptedPassword: password,
        // iv: ivBase64,
    });
    
    return response.data;
}

async function register(phone: number, password: string, confirmPassword: string): Promise<RegisterResponse> {
    let response: any = await axiosInstance.put(`${BASE_URL}/user`, {
        phoneNumber: phone.toString(),
        firstPassword: password,
        confirmPassword: confirmPassword
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