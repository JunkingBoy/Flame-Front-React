import { UserProBugData  } from "../interface/UserInterface";
import { ProgramInfo } from "../interface/ProgramInterface";

function extractDateBugInfo(programs: UserProBugData[]): string[] {
    return programs.map(program => program.datetime);
}

function extractProNames(programs: ProgramInfo[]): string[] {
    return programs.map(program => program.programName);
}

export { extractDateBugInfo, extractProNames }