import { UserProBugData  } from "../interface/UserInterface";
import { ProgramInfo } from "../interface/ProgramInterface";
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

export { extractDateBugInfo, extractProNames, extractProToPie, extractPieData }