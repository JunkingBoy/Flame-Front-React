interface ProjectInfo { 
    project_name: string;
    project_desc: string;
    case: ProjectCaseData;
}

interface ProjectCaseData {
    all_case: number;
    pass_case: number;
}

export type {
    ProjectInfo,
    ProjectCaseData
}