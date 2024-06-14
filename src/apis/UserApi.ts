import { BASE_URL, axiosInstance } from "../config/HeaderInstance";
import { LoginResponse, RegisterResponse, UserBugInfoResponse } from "../interface/UserInterface";
import { ProgramReponse } from "../interface/ProgramInterface";
// import { initEncryptionKey, encryptData } from "../utils/Crypt";

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

async function register(email: string, phone: number, password: string, confirmPassword: string): Promise<RegisterResponse> {
    let response: any = await axiosInstance.put(`${BASE_URL}/user`, {
        email: email,
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

async function getUserProBugInfo(userId: number): Promise<ProgramReponse> {
    let response: any = await axiosInstance.get(`${BASE_URL}/program/status`, {
        params: {
            userId: userId,
            status: 1
        }
    });

    return response.data;
}

export { login, register, getUserBugInfo, getUserProBugInfo }