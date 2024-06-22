interface LoginData {
    token?: string;
    token_type?: string;
    error?: string;
}

interface RegisterData {
    error?: string;
}

interface UserProBugData {
    datetime: string;
    finishBug: number;
    allBug: number;
    amt: number;
}

interface UserCareerData {
    subject: string;
    A: number;
    fullMark: number;
}

interface LoginResponse {
    code: number;
    data: LoginData;
    msg: string;
}

interface RegisterResponse {
    code: number;
    data: RegisterData[];
    msg: string;
}

interface UserBugInfoResponse {
    id: number,
    user: string,
    status: number,
    data: UserProBugData[]
}

interface UserCarDataResponse {
    id: number,
    user: string,
    status: number,
    data: UserCareerData[]
}

export type { LoginResponse, RegisterResponse, UserProBugData, UserBugInfoResponse, UserCarDataResponse, UserCareerData }