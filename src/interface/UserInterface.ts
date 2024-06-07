interface LoginData {
    message: string;
}

interface RegisterData {
    username: string;
    message: string;
}

interface LoginResponse {
    token: string;
    status: number;
    data: LoginData[];
}

interface RegisterResponse {
    status: number;
    data: RegisterData[];
}

export type { LoginResponse, RegisterResponse }