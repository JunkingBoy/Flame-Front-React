interface LoginData {
    message: string;
}

interface RegisterData {
    username: string;
    message: string;
}

interface UserProBugData {
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

interface UserBugInfoResponse {
    id: number,
    user: string,
    status: number,
    data: UserProBugData[]
}

export type { LoginResponse, RegisterResponse, UserProBugData, UserBugInfoResponse }