import { BASE_URL, axiosInstance } from "../config/HeaderInstance";
import AESResponse from "../interface/AESInterface";

async function getAES(): Promise<AESResponse> {
    let response: any = await axiosInstance.get<string>(`${BASE_URL}/getAESKey`);
    let aesKey: AESResponse = { AESKey: response }
    return aesKey;
}

export default getAES;