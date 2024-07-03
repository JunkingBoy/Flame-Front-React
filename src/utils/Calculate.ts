import { ProportionInfo, UserCareerPercent } from "../interface/ProportionInterface";
import { ExtractProToPieData } from "../interface/ExtractInterface";
import { UserCareerData } from "../interface/UserInterface";
import { ProjectCaseData } from "../interface/ProjectInterface";

function calProportion(proName: string, programData: ExtractProToPieData[] ): ProportionInfo {
    let proportion: ProportionInfo = {proProgramName: '', data: []};
    for (let index = 0; index < programData.length; index++) {
        if (proName === programData[index].proName) {
            // 计算Bug修复率
            let rawResult: number = programData[index].data[0].value
            / (programData[index].data[0].value + programData[index].data[1].value);
            let resStr: string = rawResult.toFixed(2);
            let successBugPro: number = Number.parseFloat(resStr) * 100;

            // 计算Bug命中率
            let isBugResult: number = (programData[index].data[0].value + programData[index].data[1].value)
            / (programData[index].data[0].value + programData[index].data[1].value + programData[index].data[2].value);
            let isBugResStr: string = isBugResult.toFixed(2);
            let isBugPro: number = Number.parseFloat(isBugResStr) * 100;

            proportion = {
                proProgramName: proName,
                data: [
                    { name: "Bug修复率", proportion: successBugPro },
                    { name: "Bug命中率", proportion: isBugPro }
                ]
            }

            return proportion;
        }
    }

    return proportion;
}

function calPercent(data: UserCareerData[]): UserCareerPercent {
    let response: UserCareerPercent = {careerBugPush: 0, isBugPercent: 0, repairBugPercent: 0, needCount: 0, caseBugCover: 0};

    if (data !== undefined && data.length > 0) {
        let calIsBug: number = data[1].A / data[0].A;
        let isBugStr: string = calIsBug.toFixed(2);
        let resIsBug: number = Number.parseFloat(isBugStr) * 100;

        let calFinishBug: number = data[2].A / data[1].A;
        let finishBugStr: string = calFinishBug.toFixed(2);
        let resFinishBug: number = Number.parseFloat(finishBugStr) * 100;

        let caseBugCov: number = data[4].A / data[1].A;
        let covStr: string = caseBugCov.toFixed(2);
        let resCaseBugCov: number = Number.parseFloat(covStr);
        
        response = {
            careerBugPush: data[0].A,
            isBugPercent: resIsBug,
            repairBugPercent: resFinishBug,
            needCount: data[3].A,
            caseBugCover: resCaseBugCov
        }

        return response;
    }

    return response;
}

function calCompletionRate(data: ProjectCaseData): number {
    let dataAll: number = data.all_case;
    let dataPass: number = data.pass_case;

    if (dataAll !== undefined && dataAll !== 0) {
        let calCompletionRate: number = dataPass / dataAll;
        let completionRateStr: string = calCompletionRate.toFixed(2);
        let resCompletionRate: number = Number.parseFloat(completionRateStr) * 100;

        return resCompletionRate;
    } else {
        return 0;
    }
}

export {
    calProportion,
    calPercent,
    calCompletionRate
}