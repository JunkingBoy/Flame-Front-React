import { UserProBugData } from "../interface/UserInterface";

function extractProNames(programs: UserProBugData[]): string[] {
    return programs.map(program => program.name);
}

export { extractProNames }