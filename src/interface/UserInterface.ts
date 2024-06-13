interface LoginData {
    message: string;
}

interface RegisterData {
    username: string;
    message: string;
}

interface UserProData {
    name: string;
    pv: number;
    uv: number;
}

interface LoginResponse {
    id: number,
    token: string;
    status: number;
    data: LoginData[];
}

interface RegisterResponse {
    status: number;
    data: RegisterData[];
}

interface UserInfoResponse {
    id: number,
    user: string,
    status: number,
    data: UserProData[]
}

export type { LoginResponse, RegisterResponse, UserProData, UserInfoResponse }