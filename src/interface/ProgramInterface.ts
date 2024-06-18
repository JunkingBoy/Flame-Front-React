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

interface ProgramBugDetail {
    program: string;
    level_1: number;
    level_2: number;
    level_3: number;
    level_4: number;
}

interface ProgramBugDetailResponse {
    id: number;
    user: string;
    status: number;
    data: ProgramBugDetail[];
}

interface BugDetail {
    value: number;
    name: string;
    fill: string;
}

interface AllProBugDet {
    program: string;
    data: BugDetail[];
}

export type { ProgramReponse, ProgramInfo, ProgramBugDetailResponse, ProgramBugDetail, BugDetail, AllProBugDet }