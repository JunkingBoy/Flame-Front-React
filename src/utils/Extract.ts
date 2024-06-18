import { UserProBugData  } from "../interface/UserInterface";
import { ProgramInfo, ProgramBugDetail, BugDetail } from "../interface/ProgramInterface";
import { ExtractProToPie, ExtractProToPieData } from "../interface/ExtractInterface";

function extractDateBugInfo(programs: UserProBugData[]): string[] {
    return programs.map(program => program.datetime);
}

function extractProNames(programs: ProgramInfo[]): string[] {
    return programs.map(program => program.programName);
}

function extractProToPie(proData: ProgramInfo[]): ExtractProToPieData[] {
    let pieData: ExtractProToPieData[] = [];

    if (proData !== null) {
        proData.map(program => {
            pieData.push({ proName: program.programName, data: [
                { name: 'finishBug', value: program.finishBug },
                { name: 'unWorkBug', value: program.unWorkBug },
                { name: 'isNotBug', value: program.isNotBug }
            ]});
        });
    }

    return pieData;
}

function extractPieData(proName: string, pagePieDataObj: ExtractProToPieData[]): ExtractProToPie[] {
    for (let index = 0; index < pagePieDataObj.length; index++) {
        if (proName === pagePieDataObj[index].proName) {
            return pagePieDataObj[index].data;
        }
    }

    return [{name: '', value: 0}];
}

function extractPieDataToProData(proName: string, programData: ExtractProToPieData[]): ProgramInfo {
    let resProInfo: ProgramInfo = {programName: '', allBug: 0, finishBug: 0, unWorkBug: 0, isNotBug: 0};
    for (let index = 0; index < programData.length; index++) {
        if (proName === programData[index].proName) {
            resProInfo = {
                programName: proName,
                allBug: programData[index].data[0].value + programData[index].data[1].value + programData[index].data[2].value,
                finishBug: programData[index].data[0].value,
                unWorkBug: programData[index].data[1].value,
                isNotBug: programData[index].data[2].value
            }
            return resProInfo;
        }
    }

    return resProInfo;
}

function extractAllProName(data: ProgramBugDetail[]): string[] {
    return data.map(data => data.program);
}

function extractFunnelData(proName: string, allBugData: ProgramBugDetail[]): BugDetail[]{
    console.log(proName);
    let resAllProBugInfo: BugDetail[] = [];
    for (let index = 0; index < allBugData.length; index++) {
        if (proName === allBugData[index].program) {
            resAllProBugInfo = [
                {
                    value: allBugData[index].level_1 + allBugData[index].level_2 + allBugData[index].level_3 + allBugData[index].level_4,
                    name: "Bug数",
                    fill: "#8884d8"
                },
                {
                    value: allBugData[index].level_4,
                    name: "四级Bug数",
                    fill: "#52c41a"
                },
                {
                    value: allBugData[index].level_3,
                    name: "三级Bug数",
                    fill: "#389e0d"
                },
                {
                    value: allBugData[index].level_2,
                    name: "二级Bug数",
                    fill: "#ff4d4f"
                },
                {
                    value: allBugData[index].level_1,
                    name: "一级Bug数",
                    fill: "#a8071a"
                }
            ]

            return resAllProBugInfo;
        }
    }

    return resAllProBugInfo;
}

export { extractDateBugInfo, extractProNames, extractProToPie, extractPieData, extractPieDataToProData, extractAllProName, extractFunnelData }
