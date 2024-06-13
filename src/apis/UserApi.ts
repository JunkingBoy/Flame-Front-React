import { BASE_URL, axiosInstance } from "../config/HeaderInstance";
import { LoginResponse, RegisterResponse, UserInfoResponse } from "../interface/UserInterface";
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

async function getUserInfo(userId: number): Promise<UserInfoResponse> {
    let response: any = await axiosInstance.get(`${BASE_URL}/user`, {
        params: {
            userId: userId
        }
    });

    return response.data;
}

export { login, register, getUserInfo }