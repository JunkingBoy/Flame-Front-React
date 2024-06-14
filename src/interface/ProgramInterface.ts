interface ProgramInfo {
    name: string;
}

interface ProgramReponse {
    id: number;
    user: string;
    status: number;
    data: ProgramInfo[]
}

export type { ProgramReponse }