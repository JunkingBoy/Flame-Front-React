interface Proportion {
    name: string;
    proportion: number | null;
}

interface UserCareerPercent {
    careerBugPush: number;
    isBugPercent: number;
    repairBugPercent: number;
    needCount: number;
    caseBugCover: number;
}

interface ProportionInfo {
    proProgramName: string;
    data: Proportion[];
}

export type { Proportion, ProportionInfo, UserCareerPercent }