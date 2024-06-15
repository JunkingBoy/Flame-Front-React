interface LoginData {
    message: string;
}

interface RegisterData {
    username: string;
    message: string;
}

interface UserProBugData {
    name: string;
    finishBug: number;
    allBug: number;
    amt: number;
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