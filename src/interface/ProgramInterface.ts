interface ProgramInfo {
    programName: string;
    allBug: number;
    finishBug: number;
    unWorkBug: number;
    isNotBug: number;
}

interface ProgramReponse {
    id: number;
    user: string;
    status: number;
    data: ProgramInfo[]
}

export type { ProgramReponse, ProgramInfo }